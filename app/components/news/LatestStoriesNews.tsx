import React, { FunctionComponent } from "react";
import Article from "../Article";
import { IArticle } from "@/types/IArticle";

export interface IArticleListProps {
  articleList: IArticle[];
}

const LatestStories: FunctionComponent<IArticleListProps> = (props) => {
  const top = props.articleList.slice(0, 2);
  const rest = props.articleList.slice(2);

  return (
    <div className="pb-6 ">
      <div className="grid md:grid-cols-2 sm:grid-cols-1 gap-12 mt-6 ">
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
      <div className="clear"></div>
      <div className=" grid md:grid-cols-4 sm:grid-cols-1 gap-4 mt-10 ">
        {props.articleList.slice(2).map((article) => (
          <Article
            key={article._id}
            imgSrc={article.img}
            title={article.title}
            parentRoute="/news"
            id={article.customId}
          />
        ))}
      </div>
    </div>
  );
};

export default LatestStories;
