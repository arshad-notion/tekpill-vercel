import dbConnect from "@/lib/mongodb";
import { Enquiries } from "../mongoModels/enquiry";
import { Enquiry } from "@/types/IEnquiry";

export const createEnquiry = (enquiry: Enquiry) => {
  return new Promise(async (resolve) => {
    try {
      await dbConnect();
      const createdEnquiry = new Enquiries(enquiry);
      await createdEnquiry.save();

      resolve(true);
    } catch (err) {
      resolve(false);
    }
  });
};
