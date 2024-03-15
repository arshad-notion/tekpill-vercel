import React, { Fragment, FunctionComponent } from "react";
import { IArticleListProps } from "./PopularArticle";
import Article from "../Article";

const MoreArticles: FunctionComponent<IArticleListProps> = (props) => {
  const articleArray = [];
  let index = 0;
  while (index + 6 <= props.articleList.length) {
    articleArray.push(props.articleList.slice(index, index + 6));
    index = index + 6;
  }
  if (index < props.articleList.length)
    articleArray.push(props.articleList.slice(index));

  return (
    <div>
      <div className=" grid grid-cols-2 gap-2  mt-12">
        <div className=" text-xl font-semibold">More Articles</div>
        <div className="  text-sm text-right"> </div>
      </div>
      {articleArray.map((a, i) => (
        <Fragment key={i}>
          <div className=" grid md:grid-cols-3 sm:grid-cols-1 gap-12 mt-6">
            {a.map((article) => (
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
          <div className="bg-gray-100 my-12 w-full h-28 text-center flex items-center justify-center ">
            Google add space
          </div>
        </Fragment>
      ))}
    </div>
  );
};

export default MoreArticles;
