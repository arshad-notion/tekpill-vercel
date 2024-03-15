import { IArticle } from "@/types/IArticle";
import dbConnect from "../lib/mongodb";
import { getTextFromMarkDown } from "@/utils/articleHelper";
import { Articles } from "../mongoModels/articles";
import dayjs from "dayjs";
import { getURLFriendlyName } from "@/utils/fileHelper";

type ArticleDetailData = {
  articleText?: string;
  tags?: string;
  relatedArticles?: IArticle[];
  redirectUrl?: string;
};

export const getArticleDetails = async (
  newsId: string
): Promise<ArticleDetailData> => {
  return new Promise(async (resolve, reject) => {
    await dbConnect();

    const getParams = () => {
      return newsId.substring(newsId.lastIndexOf("-") + 1);
    };

    const article = await Articles.findOne({
      customId: getParams(),
    });

    const currentUrl = getURLFriendlyName(
      `${article.title} ${article.customId}`
    );
    if (newsId !== currentUrl) {
      return resolve({ redirectUrl: currentUrl });
    }

    if (!article) return resolve({} as ArticleDetailData);
    const articleText = await getTextFromMarkDown(
      JSON.parse(JSON.stringify(article))
    );

    article.hits = article.hits + 1;
    article.save();

    const relatedArticles = await getPopularArticles();

    return resolve({
      articleText,
      tags: article.tags,
      relatedArticles: relatedArticles,
    });
  });
};

export const getPopularArticles = async (
  page = 0,
  limit = 10
): Promise<IArticle[]> => {
  return new Promise(async (resolve, reject) => {
    await dbConnect();
    try {
      const monthPrevious = dayjs(Date.now()).subtract(1, "month").toDate();
      const popularArticle = await Articles.find({
        postTime: { $gte: monthPrevious },
      })
        .sort("-hits")
        .skip(Number(page) * Number(limit))
        .limit(Number(limit));
      resolve(JSON.parse(JSON.stringify(popularArticle)));
    } catch (err) {
      return resolve([]);
    }
  });
};

export const getLatestArticle = async (
  page = 0,
  limit = 10
): Promise<IArticle[]> => {
  return new Promise(async (resolve, reject) => {
    try {
      await dbConnect();
      const monthPrevious = dayjs(Date.now()).subtract(1, "month").toDate();
      const latestArticle = await Articles.find({
        postTime: { $gte: monthPrevious },
      })
        .sort("-postTime")
        .skip(Number(page) * Number(limit))
        .limit(Number(limit));
      resolve(JSON.parse(JSON.stringify(latestArticle)));
    } catch (err) {
      return resolve([]);
    }
  });
};

export const createArticle = (article: IArticle) => {
  return new Promise(async (resolve) => {
    await dbConnect();
    const createdArticle = new Articles(article);
    if (createdArticle) {
      const lastArticle = await Articles.findOne({}, {}, { sort: { _id: -1 } });

      const lastId = lastArticle.customId.substring(
        lastArticle.customId.lastIndexOf("d") + 1
      );

      createdArticle.customId = `id${+(lastId ?? 0) + 1}`;

      createdArticle.save();
      return resolve(true);
    }
    return resolve(false);
  });
};
