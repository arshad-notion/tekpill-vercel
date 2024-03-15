import { FunctionComponent } from "react";
import { IArticleListProps } from "./PopularArticle";
import Article from "../Article";

const HighlightedArticle: FunctionComponent<IArticleListProps> = (props) => {
  return (
    <div className=" grid md:grid-cols-2 sm:grid-cols-1 gap-12 mt-12 ">
      {props.articleList.map((article) => (
        <Article
          key={article._id}
          imgSrc={article.img}
          title={article.title}


          parentRoute="/news"
          id={article.customId}

        />
      ))}
    </div>
  );
};

export default HighlightedArticle;
