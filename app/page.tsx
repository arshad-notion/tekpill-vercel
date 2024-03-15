import Image from "next/image";
import { unstable_noStore as noStore } from "next/cache";
import Subscribe from "./components/Subscribe";
import PopularArticle from "./components/home/PopularArticle";
import LatestStories from "./components/home/LatestStories";
import Reviews from "./components/home/Reviews";
import PopularMobile from "./components/home/PopularMobile";
import MoreArticles from "./components/home/MoreArticles";
import HighlightedArticle from "./components/home/HighlightedStories";
import { IArticle } from "@/types/IArticle";
import { getLatestArticle, getPopularArticles } from "@/db/articles";

export default async function Home() {
  noStore();
  const popularArticles = await getPopularArticles(0, 5);
  const latestArticles = await getLatestArticle(0, 11);
  const moreArticles = await getPopularArticles(1, 12);
  const highlightedArticle: IArticle[] = [];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between ">
      <div className="">
        <PopularArticle articleList={popularArticles} />

        <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-10 bg-white shadow-md">
          <div className="bg-gray-100 w-full h-44 text-center  flex items-center justify-center ">
            Google add space
          </div>

          {/* ================ LatestStories start =================== */}

          <LatestStories articleList={latestArticles} />
          <HighlightedArticle articleList={highlightedArticle} />

          {/* <div className="bg-gray-100 my-10 w-full h-44 text-center  flex items-center justify-center ">
            Google add space
          </div> */}

          {/* ================ Banner AR/VR =================== */}
          {/* <div className=" grid grid-cols-1 my-12   ">
            <div className="text-xl font-bold mb-4">Latest AR/VR Stories</div>
            <div className="text-sm text-right">
              <Image
                src="/ai.jpg"
                alt="Banner"
                width={200}
                height={100}
                className=" h-96 w-full"
              />
            </div>
          </div> */}

          {/* ================ ad =================== */}

          <div className="bg-gray-100 my-10 w-full h-28 text-center flex items-center justify-center ">
            Google add space
          </div>

          <PopularMobile />
          {/* <Reviews /> */}

          <div className="bg-gray-100 my-12 w-full h-44 text-center flex items-center justify-center ">
            Google add space
          </div>

          <MoreArticles articleList={moreArticles} />

          {/* ================ Subscribe =================== */}

          <Subscribe />
        </div>
      </div>
    </main>
  );
}
