import { unstable_noStore as noStore } from "next/cache";

import Image from "next/image";
import Subscribe from "../components/Subscribe";
import LatestStoriesNews from "../components/news/LatestStoriesNews";
import { getLatestArticle } from "@/db/articles";

const newsPage = async () => {
  noStore();
  const articleList = await getLatestArticle();
  return (
    <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-10 bg-white shadow-md">
      <LatestStoriesNews articleList={articleList}></LatestStoriesNews>

      <div className="bg-gray-100 w-full h-60 text-center  flex items-center justify-center mt-8 ">
        Google add space
      </div>

      {/* <div className=" w-full mt-12 text-xl font-bold">
        Latest AR/VR Stories
      </div> */}

      <div className="grid md:grid-cols-1 sm:grid-cols-1 gap-4 ">
        <div className=" md:col-span-1 sm:col-span-1">
          {/* <Image
            src="/ai.jpg"
            alt="Banner"
            width={200}
            height={100}
            className=" h-96 w-full"
          /> */}

          <div className="mt-12">
            <LatestStoriesNews articleList={articleList}></LatestStoriesNews>
          </div>

          <div className="bg-gray-100 w-full mt-12 h-36 text-center flex items-center justify-center ">
            Google add space
          </div>

          {/* =================== video start ================================= */}

          {/* ======== Video end ================ */}

          {/* ==================== add here ================= */}

          {/* =============== add ================= */}

          {/* ================ Subscribe =================== */}
          <div className="">
            <Subscribe />
          </div>
        </div>
      </div>
    </div>
  );
};

export default newsPage;
