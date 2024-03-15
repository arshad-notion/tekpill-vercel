import { Upload } from "@aws-sdk/lib-storage";
import {
  S3Client,
  CompleteMultipartUploadCommandOutput,
  PutObjectCommand,
} from "@aws-sdk/client-s3";
import { getURLFriendlyName } from "@/utils/fileHelper";

export const uploadFile = async (
  name: string,
  fileBuffer: Buffer
): Promise<CompleteMultipartUploadCommandOutput> => {
  return new Promise(async (resolve, reject) => {
    const accessKeyId = process.env.AWS_ACCESS_KEY_ID || "";
    const secretAccessKey = process.env.AWS_SECRET_ACCESS_KEY || "";
    const region = process.env.S3_REGION || "";

    new Upload({
      client: new S3Client({
        credentials: {
          accessKeyId,
          secretAccessKey,
        },
        region,
      }),
      params: {
        ACL: "public-read",
        Bucket: process.env.S3_BUCKET,
        Key: getURLFriendlyName(name),
        Body: fileBuffer,
      },
      tags: [],
      queueSize: 4,
      leavePartsOnError: false,
    })
      .done()
      .then((data) => {
        if (data) resolve(data);
        else {
          reject("Failed to upload the files");
        }
      })
      .catch((err) => {
        console.log(err);
        reject(err);
      });
  });
};
