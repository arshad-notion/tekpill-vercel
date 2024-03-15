export interface IArticle {
  _id?: string;
  title: string;
  postTime: string;
  author: string;
  img: string;
  hits: number;
  __v?: number;
  url?: string;
  tags?: string;
  webURL: string;
  customId: string;
}
