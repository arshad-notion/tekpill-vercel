"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";

const Reviews = () => {
  return (
    <div>
      <div className=" grid grid-cols-2 gap-2 mb-5 mt-12">
        <div className=" text-2xl font-bold">Review </div>
        <div className="  text-sm text-right"> </div>
      </div>

      <div className=" grid md:grid-cols-2 sm:grid-cols-1 gap-12 mt-6">
        <div className="bg-slate-200">
          <div className="relative w-full">
            <Image
              src="/ai.jpg"
              alt="Banner"
              width={200}
              height={100}
              className=" h-96 w-full"
            />

            <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
              <h3 className="text-xl text-white font-bold">
                Some description text. Some dummy text here. Welcome to xyz
                Academy.
              </h3>
            </div>
          </div>
        </div>
        <div className="bg-slate-200">
          <div className="relative w-full">
            <Image
              src="/ai.jpg"
              alt="Banner"
              width={200}
              height={100}
              className=" h-96 w-full"
            />

            <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
              <h3 className="text-xl text-white font-bold">
                Some description text. Some dummy text here. Welcome to xyz
                Academy.
              </h3>
              <p className="mt-2 text-sm text-gray-300"></p>
            </div>
          </div>
        </div>
      </div>

      {/* ================ Review3 grid =================== */}

      <div className=" grid md:grid-cols-3 sm:grid-cols-1 gap-12 mt-12">
        <div className="bg-slate-200">
          <div className="w-full">
            <Image
              src="/ai.jpg"
              alt="Banner"
              width={200}
              height={100}
              className=" h-96 w-full"
            />

            <div className="bottom-0 left-0 right-0 px-4 py-2 bg-gray-100 opacity-70">
              <h3 className="text-xl  font-bold">
                Some description text. Some dummy text here.
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                Lorem ipsum dolor sit amet,
              </p>
            </div>
          </div>
        </div>
        <div className="bg-slate-200">
          <div className="w-full">
            <Image
              src="/ai.jpg"
              alt="Banner"
              width={200}
              height={100}
              className=" h-96 w-full"
            />

            <div className="bottom-0 left-0 right-0 px-4 py-2 bg-gray-100 opacity-70">
              <h3 className="text-xl  font-bold">
                Some description text. Some dummy text here.
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                Lorem ipsum dolor sit amet,
              </p>
            </div>
          </div>
        </div>

        <div className="bg-slate-200">
          <div className="w-full">
            <Image
              src="/ai.jpg"
              alt="Banner"
              width={200}
              height={100}
              className=" h-96 w-full"
            />

            <div className="bottom-0 left-0 right-0 px-4 py-2 bg-gray-100 opacity-70">
              <h3 className="text-xl  font-bold">
                Some description text. Some dummy text here.
              </h3>
              <p className="mt-2 text-sm text-gray-400">
                Lorem ipsum dolor sit amet,
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ================ Review 2 grid =================== */}
      <div className=" grid md:grid-cols-2 sm:grid-cols-1 gap-12 mt-12">
        <div className="bg-slate-200">
          <div className="relative w-full">
            <Image
              src="/ai.jpg"
              alt="Banner"
              width={200}
              height={100}
              className=" h-96 w-full"
            />

            <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
              <h3 className="text-xl text-white font-bold">
                Some description text. Some dummy text here. Welcome to xyz
                Academy.
              </h3>
            </div>
          </div>
        </div>
        <div className="bg-slate-200">
          <div className="relative w-full">
            <Image
              src="/ai.jpg"
              alt="Banner"
              width={200}
              height={100}
              className=" h-96 w-full"
            />

            <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
              <h3 className="text-xl text-white font-bold">
                Some description text. Some dummy text here. Welcome to xyz
                Academy.
              </h3>
              <p className="mt-2 text-sm text-gray-300"></p>
            </div>
          </div>
        </div>
        <div className="bg-slate-200">
          <div className="relative w-full">
            <Image
              src="/ai.jpg"
              alt="Banner"
              width={200}
              height={100}
              className=" h-96 w-full"
            />

            <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
              <h3 className="text-xl text-white font-bold">
                Some description text. Some dummy text here. Welcome to xyz
                Academy.
              </h3>
              <p className="mt-2 text-sm text-gray-300"></p>
            </div>
          </div>
        </div>
        <div className="bg-slate-200">
          <div className="relative w-full">
            <Image
              src="/ai.jpg"
              alt="Banner"
              width={200}
              height={100}
              className=" h-96 w-full"
            />

            <div className="absolute bottom-0 left-0 right-0 px-4 py-2 bg-gray-800 opacity-70">
              <h3 className="text-xl text-white font-bold">
                Some description text. Some dummy text here. Welcome to xyz
                Academy.
              </h3>
              <p className="mt-2 text-sm text-gray-300"></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Reviews;
