"use server";

import { createEnquiry } from "@/db/enquiry";
import { createSubscriber } from "@/db/subscribe";
import { Enquiry } from "@/types/IEnquiry";

export async function handleEnquirySubmit(enquiry: Enquiry) {
  createEnquiry(enquiry);
}
export async function handleSubscribe(email: string) {
  if (email) {
    createSubscriber(email);
  }
}
