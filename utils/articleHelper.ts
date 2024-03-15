import { createArticle } from "@/db/articles";
import { uploadFile } from "@/lib/cloud";
import { IArticle } from "@/types/IArticle";
import { CompleteMultipartUploadCommandOutput } from "@aws-sdk/client-s3";
import path from "path";
// import sharp from "sharp";
import { getURLFriendlyName } from "./fileHelper";

export const getTextFromMarkDown = async (article: IArticle) => {
  if (article.url) {
    const res = await fetch(article.url);
    let articleText = await (await res.blob()).text();
    return articleText;
  }
  return "";
};

export const uploadArticle = async (
  files: FormDataEntryValue[],
  tags: string
) => {
  return new Promise(async (resolve, reject) => {
    const deviceImageArray: { [id: string]: Buffer } = {};
    let article:
      | {
          name: string;
          buffer: Buffer;
        }
      | undefined;
    for (let x of files)
      if (x) {
        const file = x as unknown as File;
        const bytes = await file.arrayBuffer();
        const buffer = Buffer.from(bytes);
        if (file.type.includes("application")) {
          article = {
            name: file.name,
            buffer: buffer,
          };
        } else if (file.type.includes("image")) {
          deviceImageArray[file.name.replaceAll(" ", "-")] = buffer;
        }
      }
    if (!article) return resolve(false);

    const imageData: CompleteMultipartUploadCommandOutput[] = [];

    const folder = article?.name
      ?.slice(0, article?.name.lastIndexOf("."))
      .replaceAll(" ", "-");

    for (let key in deviceImageArray) {
      const file = deviceImageArray[key];

      // const fileBuffer = await compressImage(file);

      const fileData: CompleteMultipartUploadCommandOutput = await uploadFile(
        `articles/${folder}/${key}`,
        file
      );

      imageData.push(fileData);
    }
    const updatedArticle = processArticle(article.buffer, imageData);

    const articleData = await uploadFile(
      `articles/${folder}/${article.name}`,
      Buffer.from(updatedArticle, "utf-8")
    );
    if (articleData) {
      const articleHead: IArticle = {
        author: "",
        hits: 0,
        img: imageData[0].Location as string,
        postTime: new Date().toISOString(),
        title: path.basename(article.name, path.extname(article.name)),
        url: articleData.Location,
        tags,
        webURL: getURLFriendlyName(article.name),
        customId: "",
      };

      await createArticle(articleHead);
      return resolve(true);
    }
  });
};

export const compressImage = async (file: Buffer, quality: number = 50) => {
  // return sharp(file).webp({ quality }).toBuffer();
};

export const processArticle = (
  articleBuffer: Buffer,
  imageArray: CompleteMultipartUploadCommandOutput[]
) => {
  let index = 0;
  let article = articleBuffer.toString("utf-8");
  while (article.includes("--image")) {
    if (!imageArray?.[index]) {
      article = article.replace(new RegExp("--image", "g"), "");
      break;
    }

    article = article.replace(
      "--image",
      imageArray[index]
        ? `\n![${imageArray[index].Key}](${
            imageArray[index].Location as string
          })`
        : ""
    );
    index++;
  }
  return article;
};

export async function upload(data: FormData) {
  "use server";

  const files = data.getAll("file");
  const tags = data.get("tags") as string;

  await uploadArticle(files, tags);
  return { success: true };
}
