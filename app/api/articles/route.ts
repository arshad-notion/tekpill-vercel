import { uploadArticle } from "@/utils/articleHelper";

export async function POST(request: Request): Promise<Response> {
  const data = await request.formData();
  const files = data.getAll("files");
  const tags = data.get("tags") as string;

  await uploadArticle(files, tags);
  return new Response();
}
