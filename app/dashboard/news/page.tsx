"use client";
import { ChangeEvent, MouseEventHandler, useRef, useState } from "react";

export default function ArticleUploader() {
  const [tags, setTags] = useState("");
  const [files, setFiles] = useState<FileList>();
  const [errorMessage, setErrorMessage] = useState("");
  const [isLoading, setIsLoading] = useState<boolean>(false);
  const fileInput = useRef<HTMLInputElement>(null);

  const tagsChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTags(event.target.value);
  };
  const onFilesChange = (e: ChangeEvent<HTMLInputElement>) => {
    const uploadedFiles = e.target.files;
    if (uploadedFiles) {
      setFiles(uploadedFiles);
      setErrorMessage("");
    } else if (files && !uploadedFiles) {
      setFiles(new FileList());
    }
  };

  const upload: MouseEventHandler<HTMLButtonElement> = async (event) => {
    event.preventDefault();
    if (!files?.length) {
      setErrorMessage("No files selected");
      return;
    }
    const fileArray = Array.from(files);

    const formData = new FormData();
    for (const file of fileArray) {
      formData.append("files", file);
    }
    formData.append("tags", tags);
    setIsLoading(true);
    fetch("/api/articles", {
      method: "POST",
      body: formData,
    }).then((x) => {
      setIsLoading(false);
      setTags("");
      setFiles(undefined);
      if (fileInput.current) {
        fileInput.current.value = "";
      }
    });
  };

  return (
    <main>
      <div className="flex-wrap bg-gray-700 items-center">
        <div className="flex items-center justify-center pt-12 pb-10">
          <div>
            <p className="pr-4">File:</p>
          </div>
          <input
            ref={fileInput}
            name="file"
            type="file"
            multiple
            onChange={onFilesChange}
            className=" text-black text-sm bg-gray-100 file:cursor-pointer cursor-pointer file:border-0 file:py-2 file:px-4 file:mr-4 file:bg-gray-800 file:hover:bg-gray-700 file:text-white rounded"
          />
        </div>
        <div className="flex items-center justify-center pb-10">
          <p className=" box-border pr-4 ">Tag:</p>
          <input name="tags" type="text" value={tags} onChange={tagsChange} />
        </div>
        <div className="pl-6 items-center justify-center flex pb-12">
          <button
            onClick={upload}
            className=" bg-white hover:bg-green-400 text-blue-500 font-bold py-2 px-4 rounded-full"
          >
            Upload
          </button>
        </div>
        {isLoading && <div className="loader"></div>}
        <label className="text-rose-600">{errorMessage}</label>
      </div>
    </main>
  );
}
