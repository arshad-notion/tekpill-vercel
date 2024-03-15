import dbConnect from "@/lib/mongodb";
import { Brand } from "@/mongoModels/brands";

export type BrandType = {
  name: string;
  imgUrl: string;
  hits: number;
};

export const getBrandList = (page = 0, limit = 15): Promise<BrandType[]> => {
  return new Promise(async (resolve) => {
    await dbConnect();
    const brandList = await Brand.find({})
      .sort("-hits")
      .skip(page * limit)
      .limit(limit)
      .catch((err) => resolve([]));
    resolve(JSON.parse(JSON.stringify(brandList)) || []);
  });
};

export const createBrand = (createdBrand: BrandType) => {
  return new Promise(async (resolve) => {
    try {
      await dbConnect();
      const brand = new Brand(createdBrand);
      brand.save();
      resolve(true);
    } catch (err) {
      resolve(false);
    }
  });
};
