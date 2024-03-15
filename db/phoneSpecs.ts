import dbConnect from "@/lib/mongodb";
import { IPhoneSpecs, Misc } from "@/types/phoneSpecs";
import { Specs } from "@/mongoModels/phoneSpecs";
import dayjs from "dayjs";

export const createPhoneSpecs = async (
  deviceSpecs: IPhoneSpecs,
  imageUrl: string[]
) => {
  await dbConnect();
  const device = new Specs(deviceSpecs);
  device.hits = 0;
  device.postTime = new Date();
  const lastSpec = await Specs.findOne({}, {}, { sort: { _id: -1 } });
  const lastId = lastSpec.customId.substring(
    lastSpec.customId.lastIndexOf("d") + 1
  );
  device.customId = `id${+(lastId ?? 0) + 1}`;
  device.images = imageUrl;
  device.save();
};

export const getPhoneSpecByBrand = (
  brandName: string
): Promise<IPhoneSpecs[]> => {
  return new Promise(async (resolve, reject) => {
    await dbConnect();
    const foundPhones = await Specs.find({
      brand: { $regex: new RegExp(brandName, "i") },
    });
    if (!foundPhones) return resolve([]);
    resolve(JSON.parse(JSON.stringify(foundPhones)));
  });
};

export const getPhoneSpecByModel = async (
  customId: string
): Promise<IPhoneSpecs | null> => {
  await dbConnect();
  const foundPhone = await Specs.findOne({
    customId: customId,
  });
  return foundPhone ? JSON.parse(JSON.stringify(foundPhone)) : null;
};

export const getPopularDevices = async (
  page = 0,
  limit = 10
): Promise<IPhoneSpecs[]> => {
  return new Promise(async (resolve, reject) => {
    const db = await dbConnect();
    try {
      const monthPrevious = dayjs(Date.now()).subtract(3, "month").toDate();
      const popularDevices = await Specs.find({
        postTime: { $gte: monthPrevious },
      })
        .sort("-hits")
        .skip(page * limit)
        .limit(limit);

      resolve(JSON.parse(JSON.stringify(popularDevices)));
    } catch (err) {
      return resolve([]);
    }
  });
};

export const getLatestDevices = async (
  page = 0,
  limit = 10
): Promise<IPhoneSpecs[]> => {
  return new Promise(async (resolve, reject) => {
    const db = await dbConnect();
    try {
      const monthPrevious = dayjs(Date.now()).subtract(3, "month").toDate();
      const popularDevices = await Specs.find({
        postTime: { $gte: monthPrevious },
      })
        .skip(page * limit)
        .limit(limit);

      resolve(JSON.parse(JSON.stringify(popularDevices)));
    } catch (err) {
      return resolve([]);
    }
  });
};

export const getPriceByMisc = async (
  customId: string
): Promise<number | null> => {
  await dbConnect();
  try {
    const foundMobile = await Specs.findOne({
      customId: customId,
    });
    if (foundMobile && foundMobile.Misc && foundMobile.Misc.Price) {
      const priceInfo = foundMobile.Misc.Price.split(" / ");
      const indianRupees = parseInt(
        priceInfo[0].replace("₹", "").replace(",", "").trim(),
        10
      );
      return indianRupees;
    }
    return null;
  } catch (error) {
    console.error("Error fetching price:", error);
    return null;
  }
};

export const findNearestMobiles = async (
  targetPrice: number
): Promise<IPhoneSpecs[] | null> => {
  await dbConnect();

  try {
    const allMobiles = await Specs.find({});
    const mobilesBelow: IPhoneSpecs[] = [];
    const mobilesAbove: IPhoneSpecs[] = [];

    for (const mobile of allMobiles) {
      if (mobile.Misc && mobile.Misc.Price) {
        const priceInfo = mobile.Misc.Price.split(" / ");
        const mobilePrice = parseInt(
          priceInfo[0].replace("₹", "").replace(",", "").trim(),
          10
        );

        if (mobilePrice < targetPrice) {
          mobilesBelow.push(mobile);
        } else if (mobilePrice > targetPrice) {
          mobilesAbove.push(mobile);
        }
      }
    }
    mobilesBelow.sort(
      (a, b) =>
        Math.abs(targetPrice - getPrice(a)) -
        Math.abs(targetPrice - getPrice(b))
    );
    mobilesAbove.sort(
      (a, b) =>
        Math.abs(targetPrice - getPrice(a)) -
        Math.abs(targetPrice - getPrice(b))
    );
    const nearestMobiles = [];

    if (mobilesBelow.length > 0) {
      nearestMobiles.push(...mobilesBelow.slice(0, 2));
    } else {
      nearestMobiles.push(...mobilesAbove.slice(0, 2));
    }

    if (mobilesAbove.length > 0) {
      nearestMobiles.push(...mobilesAbove.slice(0, 2));
    } else {
      nearestMobiles.push(...mobilesBelow.slice(0, 2));
    }

    return nearestMobiles.slice(0, 4);
  } catch (error) {
    console.error("Error finding nearest mobiles:", error);
    return null;
  }
};
const getPrice = (mobile: IPhoneSpecs): number => {
  return mobile.Misc
    ? parseInt(
        mobile.Misc.Price.split(" / ")[0]
          .replace("₹", "")
          .replace(",", "")
          .trim(),
        10
      )
    : 0;
};
