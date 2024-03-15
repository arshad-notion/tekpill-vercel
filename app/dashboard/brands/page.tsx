import { createBrand } from "@/db/brands";
import { uploadFile } from "@/lib/cloud";
import { getURLFriendlyName } from "@/utils/fileHelper";

export default function ServerUploadPage() {
  async function upload(data: FormData) {
    "use server";

    const file: File | null = data.get("file") as unknown as File;
    const brandName = data.get("brand-name") as string;
    if (!file) {
      throw new Error("No file uploaded");
    }

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const uploadedFile = await uploadFile(
      `tekpill-brands/${getURLFriendlyName(file.name)}`,
      buffer
    );

    await createBrand({
      name: brandName,
      hits: 0,
      imgUrl: uploadedFile.Location as string,
    });

    return { success: true };
  }

  return (
    <main>
      <div className="flex-wrap bg-gray-700 items-center">
        <h1 className="flex pt-8 items-center justify-center text-white">
          React Server Component: Upload
        </h1>
        <form action={upload}>
          <div className="flex items-center justify-center pt-12 pb-10">
            <div>
              <p className="pr-4">File:</p>
            </div>
            <input
              name="file"
              type="file"
              multiple
              className=" text-black text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded"
            />
          </div>
          <div className="flex items-center justify-center pt-12 pb-10">
            <div>
              <p className="pr-4">Brand Name:</p>
            </div>
            <input
              name="brand-name"
              type="text"
              multiple
              className=" text-black text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded"
            />
          </div>

          <div className="pl-6 items-center justify-center flex pb-12">
            <button className=" bg-white hover:bg-green-400 text-blue-500 font-bold py-2 px-4 rounded-full">
              Upload
            </button>
          </div>
        </form>
      </div>
    </main>
  );
}
