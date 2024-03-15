"use client";
import React, { FormEvent } from "react";
import Link from "next/link";

import Image from "next/image";
import { handleSubscribe } from "@/utils/serverAction";
import { createSubscriber } from "@/db/subscribe";

const Subscribe = () => {
  function upload(event: FormEvent) {
    event.preventDefault();
    const email = (event.target as any).email.value;

    handleSubscribe(email);
  }
  return (
    <div className=" grid grid-cols-1 my-6  mb-24   ">
      <div className="relative w-full">
        <Image
          src="/subscribe.jpg"
          alt="subscribe"
          width={200}
          height={100}
          className="h-80 w-full"
        />

        <div className="absolute md:top-10 md:left-40 md:right-40  md:w-auto  sm:top-40 sm:left-10 sm:right-10 sm:w-auto  px-4 h-48 py-2 drop-shadow-md  ">
          <div className=" text-center text-white">
            <div className="text-2xl font-bold  mb-6">Designtocode Weekly</div>
            <div>
              Enjoy the hottest mobile tech storylines, delivered straight to
              your inbox.
            </div>
          </div>
        </div>
        <div className="absolute md:top-40 md:left-40 md:right-40  md:w-auto rounded-sm sm:top-40 sm:left-10 sm:right-10 sm:w-auto  px-4 h-48 py-2 drop-shadow-md  bg-white">
          <div className="flex items-center justify-center">
            <form className="w-9/12" onSubmit={upload}>
              <div className="w-full my-5">
                <input
                  className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-sm outline-tpblue  block w-full p-2.5 "
                  type="email"
                  name="email"
                  required
                  pattern="[a-z0-9._%+\-]+@[a-z0-9.\-]+\.[a-z]{2,}$"
                  maxLength={64}
                />
              </div>

              <div className="flex items-start mb-6">
                <div className="flex items-center h-5">
                  <input
                    id="remember"
                    type="checkbox"
                    className="w-4 h-4  border border-gray-100 rounded-sm bg-gray-50 focus:ring-3 focus:ring-blue-300 "
                    // required
                  />
                </div>
                <label className="ms-2 text-sm font-medium text-gray-900 ">
                  I agree with the
                  <Link
                    href="/terms"
                    target="_blank"
                    className="text-blue-600 hover:underline "
                  >
                    &nbsp;terms and conditions
                  </Link>
                  .
                </label>
              </div>
              <button className="text-white bg-tpblue hover:bg-[#0647A9]  focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-sm text-sm px-5 py-2.5 me-2 mb-2 ">
                Subscribe
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Subscribe;
