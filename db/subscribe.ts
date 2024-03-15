import dbConnect from "@/lib/mongodb";
import { Subscriber } from "../mongoModels/subscribe";

export const createSubscriber = (email: string) => {
  return new Promise(async (resolve) => {
    try {
      await dbConnect();
      const existingSubscriber = await Subscriber.findOne({ email: email });
      if (existingSubscriber) {
        resolve(false);
      } else {
        const subscriber = new Subscriber({ email: email });
        await subscriber.save();

        resolve(true);
      }
    } catch (err) {
      resolve(false);
    }
  });
};
