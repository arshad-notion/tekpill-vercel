import Article from "@/app/components/Article";
import Subscribe from "@/app/components/Subscribe";
import { getArticleDetails } from "@/db/articles";
import React from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { RedirectType, redirect } from "next/navigation";

const page = async ({ params }: { params: { newsid: string } }) => {
  const { articleText, relatedArticles, tags, redirectUrl } =
    await getArticleDetails(params.newsid);

  if (redirectUrl) {
    redirect(redirectUrl, RedirectType.replace);
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-10 bg-white shadow-md">
      <div className="bg-gray-100 w-full h-60 text-center  flex items-center justify-center ">
        Google add space
      </div>


      <div className=" grid gap-6 grid-cols-12  mb-5 mt-12 border-b border-gray-200 pb-4">

        {/* <div className="md:col-span-2 sm:col-span-1"><div className="bg-gray-100 w-full h-96 text-center  flex items-center justify-center ">Google add space</div></div> */}
        <div className="md:col-span-8 sm:col-span-1 news">
      <Markdown skipHtml={false} rehypePlugins={[rehypeRaw]}>
        {articleText}
      </Markdown>
      </div>

      <div className="md:col-span-4 sm:col-span-1">
        <div className="bg-gray-100 w-full h-96 text-center flex items-center justify-center ">Google add space</div>
        </div>
      </div>

      {/* ================ Related stories grid =================== */}

      <div className=" grid grid-cols-2 gap-2 mb-5 border-b  border-gray-200 pb-4">
        <div className=" text-2xl font-bold">Related</div>
        <div className="  text-sm text-right"> </div>
      </div>

      <div className=" grid md:grid-cols-2 sm:grid-cols-1 gap-6 mt-6">
        {relatedArticles?.map((article) => (
          <Article
            imgSrc={article.img}
            title={article.title}
            parentRoute="/news"
            key={article._id}
            id={article.customId}
            size="medium"
          />
        ))}
      </div>

      {/* =============== add ================= */}

      <div className="bg-gray-100 w-full mt-12 h-36 text-center  flex items-center justify-center ">
        Google add space
      </div>

      {/* ================ Subscribe =================== */}

      <Subscribe />
    </div>
  );
};

export default page;
