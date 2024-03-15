import React, { FunctionComponent } from "react";
import Article from "../Article";
import { IArticleListProps } from "./PopularArticle";

const LatestStories: FunctionComponent<IArticleListProps> = (props) => {
  const top = props.articleList.slice(0, 2);
  const rest = props.articleList.slice(2);
  return (
    <>
      <div className=" grid grid-cols-2 gap-2 mt-10 pb-2 border-b-2 border-gray-100">
        <div className="text-xl  font-semibold">Latest Stories</div>
        <div className="text-sm text-right"></div>
      </div>

      <div className=" grid md:grid-cols-2 sm:grid-cols-1 gap-12 mt-4 ">
        {top.map((article) => (
          <Article
            imgSrc={article.img}
            title={article.title}
            key={article._id}
            parentRoute="/news"
            id={article.customId}
            size="medium"
          />
        ))}
      </div>

      {/* ================ add =================== */}

      <div className="bg-gray-100 my-10 w-full h-44 text-center flex items-center justify-center  ">
        Google add space
      </div>

      {/* ================ 3 grid =================== */}

      <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-12 mt-6 ">
        {rest.map((article) => (
          <Article
            imgSrc={article.img}
            title={article.title}
            key={article._id}
            parentRoute="/news"
            id={article.customId}
            size="small"
          />
        ))}
      </div>
    </>
  );
};

export default LatestStories;
