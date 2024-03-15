// "use client";
import React, { FunctionComponent } from "react";
import Article from "../Article";

import { IArticle } from "@/types/IArticle";

export interface IArticleListProps {
  articleList: IArticle[];
}

const PopularArticle: FunctionComponent<IArticleListProps> = async (props) => {
  const firstArticle = props.articleList?.[0];
  if (!firstArticle) return <>No articles Found</>;
  return (
    <div className="max-w-7xl mx-auto px-4 pb-14 md:px-6 lg:px-8 xl:px-10 bg-[#221F28]">
      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-6  ">
        <div className=" md:col-span-2 sm:col-span-1 bg-slate-200   ">
          {/* ========================= */}
          <div className="">
            <Article
              imgSrc={firstArticle.img}
              title={firstArticle.title}
              size="large"
              parentRoute="/news"
              id={firstArticle.customId}
            />
          </div>

          {/* ======================== */}
        </div>
        <div className=" bg-gray-50  text-center flex items-center justify-center w-full   md:h-full sm:h-88  ">
          Google add space 121212
        </div>
      </div>
      <div className="relative  grid md:grid-cols-4 sm:grid-cols-1 gap-4 mt-6  ">
        {props.articleList.slice(1).map((article) => (
          <Article
            key={article._id}
            imgSrc={article.img}
            title={article.title}
            size="small"
            parentRoute="/news"
            id={article.customId}
          />
        ))}
      </div>
    </div>
  );
};

export default PopularArticle;
