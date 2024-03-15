
import dbConnect from "@/lib/mongodb";
import { IPhoneSpecs } from "@/types/phoneSpecs";
import { Specs } from "@/mongoModels/phoneSpecs";
import dayjs from "dayjs";

export type SpecsType = {
  
 
  images: ["string"],
  key: string;
  Main: any;
  brand: "String" | string;
  model: string;
 
  customId: string;
 
};

export const getLatestDevices = async (
  page = 0,
  limit = 10
): Promise<SpecsType[]> => {
  return new Promise(async (resolve, reject) => {
    const db = await dbConnect();
    try {
      const monthPrevious = dayjs(Date.now()).subtract(1, "month").toDate();
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


export const getDevicesByPriceRange = async (
  minPrice: number,
  maxPrice: number
): Promise<IPhoneSpecs[]> => {
  try {
    await dbConnect();

    console.log('Received minPrice and maxPrice:', minPrice, maxPrice);

    const allDevices = await Specs.find({});
    const devicesInRange = allDevices.filter((device) => {
      const price = parseFloat(device.Misc?.Price.replace('₹', '').replace(/,/g, '')) || 0;
      return price >= minPrice && price <= maxPrice;
    });

    console.log('Devices in range:', devicesInRange);

    return devicesInRange;
  } catch (error) {
    console.error('Error fetching devices by price range:', error);
    throw new Error('Failed to fetch devices by price range');
  }
};

