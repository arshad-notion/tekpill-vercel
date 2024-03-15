import { createPhoneSpecs } from "@/db/phoneSpecs";
import { uploadFile } from "@/lib/cloud";
import { IPhoneSpecs } from "@/types/phoneSpecs";
import { uploadArticle } from "@/utils/articleHelper";
import { getURLFriendlyName } from "@/utils/fileHelper";
import { CompleteMultipartUploadCommandOutput } from "@aws-sdk/client-s3";

export async function POST(request: Request): Promise<Response> {
  const deviceImageArray: { [id: string]: Buffer } = {};
  let deviceSpecs: IPhoneSpecs | undefined;
  const data = await request.formData();
  const files = data.getAll("files");

  for (let x of files)
    if (x) {
      const file = x as unknown as File;
      const bytes = await file.arrayBuffer();
      const buffer = Buffer.from(bytes);
      if (file.type.includes("json")) {
        deviceSpecs = JSON.parse(buffer.toString());
      } else if (file.type.includes("image")) {
        deviceImageArray[file.name] = buffer;
      }
    }

  const imageUrl: CompleteMultipartUploadCommandOutput[] = [];

  if (!deviceSpecs) return new Response();

  for (let key in deviceImageArray) {
    const fullName = getURLFriendlyName(
      `device-image/${deviceSpecs.brand}-${deviceSpecs.model}/${key}`
    );
    const uploadedFile = await uploadFile(fullName, deviceImageArray[key]);
    imageUrl.push(uploadedFile);
  }

  await createPhoneSpecs(
    deviceSpecs,
    imageUrl.map((x) => x?.Location ?? "").filter((x) => x)
  );

  return new Response();
}
