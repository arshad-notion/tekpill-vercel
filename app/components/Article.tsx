   import React, { FunctionComponent } from "react";
import Image from "next/image";
import Link from "next/link";
import { getURLFriendlyName } from "../../utils/fileHelper";

export interface IArticleProps {
  imgSrc: string;
  size?: "large"| "medium" | "small"
  title: string;
  parentRoute: string;
  id: string;
}

const Article: FunctionComponent<IArticleProps> = (props) => {
  return (
    <Link
      href={getURLFriendlyName(
        `${props.parentRoute}/${props.title} ${props.id}`
      )}
    >
      <div className="bg-slate-200 ">
        <div className="relative w-full hover:ease-in-out duration-300 hover:opacity-85 ">
          <div className={`bg-no-repeat bg-center  ${props.size=="large"? "h-96": props.size== "medium"? "h-72": 'h-44'} bg-gray-100`}
            style={{  backgroundImage: `url(${props.imgSrc})`,
              backgroundSize: "cover",  }} >
          </div>          
          <div className="absolute bottom-0 left-0 right-0 px-4 py-2 h-14  bg-black/85 ">
            <span className=" text-sm text-gray-100 line-clamp-2 ">
              {props.title}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Article;
