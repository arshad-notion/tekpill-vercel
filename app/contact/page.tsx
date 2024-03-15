"use client";
import React, { FormEvent, useState } from "react";
import Image from "next/image";
import Subscribe from "../components/Subscribe";
import ReCAPTCHA from "react-google-recaptcha";
import { handleEnquirySubmit } from "@/utils/serverAction";
import { Enquiry } from "@/types/IEnquiry";

const ContactPage = () => {
  const [captcha, setCaptcha] = useState<string | null>();
  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    const enquiry: Enquiry = {
      message: (event.target as any).message.value,
      email: (event.target as any).email.value,
      name: (event.target as any).name.value,
      subject: (event.target as any).subject.value,
    };
    handleEnquirySubmit(enquiry);
  };
  return (
    <div>
      <div className="max-w-7xl mx-auto  bg-white shadow-md">
        <div className="bg-gray-100 w-full text-center  flex items-center justify-center ">
          <Image
            src="/contact-img/contact_us_img.png"
            alt="Banner"
            width={1280}
            height={380}
            className="h-96 w-full"
          />
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-10 bg-white  text-black shadow-md">
        <div className="grid md:grid-cols-3 sm:grid-cols-1 mt-8 gap-10 ">
          <div className=" md:col-span-2 sm:col-span-1">
            <h3 className="text-3xl font-semibold ">Registered Office</h3>

            <div className="md:flex md:justify-between mt-5">
              <div>
                <h3 className="text-xl font-semibold pt-5">
                  Notion Business Solutions
                </h3>
                <ul
                  role="list"
                  className="marker:text-sky-400 list-square pl-5 space-y-3 mt-6 w-96  leading-loose font-normal "
                >
                  <li className="">
                    759, 3rd floor, 8th Main Road, KSRTC Layout, 3rd Phase , JP
                    Nagar, Bengaluru , Karnataka, INDIA Pin - 560098{" "}
                  </li>
                </ul>
              </div>
              <div>
                <h3 className="text-xl font-semibold pt-5">For Advertising</h3>
                <a
                  href="mailto:advertise@notion.business"
                  className="inline-flex text-tpblue"
                >
                  <span className="pt-3 pr-2">
                    <img src="./contact-img/Mail.svg" alt="" />
                  </span>
                  <div className="pt-2">advertise@notion.business</div>{" "}
                </a>
                <div className="md:w-72 w-96 h-[0px] opacity-50 mt-2 bg-[#929497] border border-neutral-400"></div>

                <h3 className="text-xl font-semibold pt-5">
                  Tip us form for any new story
                </h3>
                <a
                  href="mailto:people@notion.business"
                  className="inline-flex text-tpblue"
                >
                  <span className="pt-3 pr-2">
                    <img src="./contact-img/Mail.svg" alt="" />
                  </span>
                  <div className="pt-2">people@notion.business</div>{" "}
                </a>
                <div className="md:w-72 w-96 h-[0px] opacity-50 mt-2 bg-[#929497] border border-neutral-400"></div>
                <h3 className="text-xl font-semibold pt-5">
                  For Affiliate marketing{" "}
                </h3>
                <a
                  href="mailto:affiliate@notion.business"
                  className="inline-flex text-tpblue"
                >
                  <span className="pt-3 pr-2">
                    <img src="./contact-img/Mail.svg" alt="" />
                  </span>
                  <div className="pt-2">affiliate@notion.business</div>{" "}
                </a>
              </div>
            </div>
            <div className="bg-gray-100 w-full h-28 text-center flex items-center justify-center my-8 ">
              {" "}
              Google add space
            </div>

            <h3 className="text-xl font-semibold mt-8 ">
              Prior to emailing us, kindly consider the following:{" "}
            </h3>

            <ul
              role="list"
              className="list-square marker:text-sky-400 pl-5 space-y-3 mt-6  leading-loose"
            >
              <li className="square">We do not sell mobile phones.</li>
              <li>
                We are not aware of the mobile phone prices in your country.The
                displayed prices represent the expected current market prices,
                which may vary between countries.{" "}
              </li>
              <li>
                {" "}
                We do not respond to any inquiries related to unlocking.{" "}
              </li>
              <li>
                {" "}
                We do not respond to questions such as Which mobile should I
                buy?{" "}
              </li>
            </ul>
            <div className="bg-gray-100 w-full h-28 text-center flex items-center justify-center my-8 ">
              {" "}
              Google add space
            </div>

            <h3 className="text-xl mt-8 font-semibold ">
              Advertising on Tekpill
            </h3>
            <p className="mt-6 md:w-full w-96 leading-loose">
              Do you run a mobile or internet store? Would you like to place an
              advertisement on our website? Millions of unique users visit
              Tekpill every day, and using it is guaranteed to increase sales.{" "}
            </p>
            <a href="mailto:affiliate@notion.business" className=" text-tpblue">
              <h1 className="inline-flex text-[#066EE8] hover:text-[#0647A9] pt-4  text-base font-semibold  ">
                Click Here{" "}
                <span>
                  <img
                    className="pt-2 pl-2"
                    src="/specs-img/Polygon_3.svg"
                    alt=""
                  />
                </span>
              </h1>
            </a>

            <div className="bg-gray-100 w-full h-28 text-center flex items-center justify-center my-8 ">
              {" "}
              Google add space
            </div>
            <p className="mt-6 md:w-full w-96 leading-loose">
              Do you need assistance contacting us? Not an issue. Simply
              complete the form below, and we ll make sure your message reaches
              the appropriate person.{" "}
            </p>
            <div className="md:w-full w-96 border mt-6 border-dashed opacity-70 bg-[#F3F5F6]  border-neutral-400">
              <form
                action="grid md:grid-cols-2 sm:grid-cols-1   gap-10  "
                onSubmit={onSubmit}
              >
                <div className="md:inline-flex mx-6 mt-6 ">
                  <label
                    htmlFor="first-name"
                    className=" text-sm font-medium leading-6 text-gray-900 "
                  >
                    Purpose/Subject :{" "}
                  </label>
                  <input
                    type="text"
                    name="subject"
                    required
                    className=" md:w-96 w-64 md:ml-24 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <div className="md:inline-flex  mx-6 mt-6">
                  <label
                    htmlFor="first-name"
                    className=" text-sm font-medium leading-6 text-gray-900 "
                  >
                    First name:{" "}
                  </label>
                  <input
                    type="text"
                    name="name"
                    id="first-name"
                    required
                    autoComplete="given-name"
                    className=" md:w-96 w-64 md:ml-36 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>

                <div className="md:inline-flex  mx-6 mt-6">
                  <label
                    htmlFor="email"
                    className="mr-10 md:mr-0 text-sm font-medium leading-6 text-gray-900"
                  >
                    Email :{" "}
                  </label>
                  <input
                    id="email"
                    name="email"
                    type="email"
                    autoComplete="email"
                    required
                    className="md:w-96 w-64 md:ml-44 rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>

                <div className="md:inline-flex  mx-6 mt-6">
                  <label
                    htmlFor="about"
                    className=" text-sm font-medium leading-6 text-gray-900 pr-2"
                  >
                    Message :{" "}
                  </label>
                  <input
                    type="text"
                    name="message"
                    id="text"
                    className=" md:w-96 w-64 md:ml-36  rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                  />
                </div>
                <ReCAPTCHA
                  sitekey={process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY!}
                  className="md:ml-60 mt-6 pl-2 mx-6"
                  onChange={setCaptcha}
                />
                <input
                  type="submit"
                  disabled={!captcha}
                  className="mx-6 md:ml-96 mt-6 mb-6 border rounded-sm h-10 w-24  text-white text-base font-semibold  bg-[#066EE8] hover:bg-[#0647A9] "
                />
              </form>
            </div>

            <Subscribe />
          </div>

          <div className=" md:col-span-1 sm:col-span-1">
            <div className="bg-gray-100 w-full h-60 text-center flex items-center justify-center ">
              {" "}
              Google add space
            </div>

            <div className="bg-gray-100 w-full h-96 text-center mt-12 flex items-center justify-center ">
              {" "}
              Google add space
            </div>

            <div className="bg-gray-100 w-full h-60 text-center mt-12 flex items-center justify-center ">
              {" "}
              Google add space
            </div>

            <div className="bg-gray-100 w-full h-96 text-center mt-12 flex items-center justify-center ">
              {" "}
              Google add space
            </div>

            <div className="bg-gray-100 w-full h-96 text-center mt-12 flex items-center justify-center ">
              {" "}
              Google add space
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
