import React from "react";
import Image from "next/image";
import Link from "next/link";
import Latestmobile from "./Latestmobile";

import AppBar from "./AppBar";
import Routes from "./Routes";

const Header = () => {
  return (
    <div className=" bg-white">
    <Latestmobile/>
      <div className="max-w-7xl mx-auto  border-b border-b-gray-200 shadow-sm">
        <div className="py-2.5 last:pt-3 pb-3   first-line:top-0 ">
          <div className="flex flex-wrap justify-between items-center mx-auto ">
            <div>
              <div className="w-32 float-left pt-1 text-3xl font-bold text-gray-900">
                <Link href="/">
                  <Image
                    src="/tekpill.svg"
                    alt="Banner"
                    width={200}
                    height={100}
                    className=" h-10 w-full"
                  />
                </Link>
              </div>

              <div className="self-center whitespace-nowrap text-xl float-left font-semibold  ml-2 pt-1 tracking-wide"></div>
            </div>

            <div className="float-right  w-3/5">
              <form className="flex items-center w-5/5">
                <label className="sr-only">Search</label>
                <div className="relative w-full">
                  <input
                    type="text"
                    id="simple-search"
                    className="bg-gray-50 border border-gray-200 text-gray-900 text-sm rounded-sm focus:ring-blue-500 focus:border-tpblue block w-full   p-2.5 "
                    placeholder="Search ..."
                    required
                  ></input>
                </div>
                <button
                  type="submit"
                  className="p-2.5 ms-2 text-sm font-medium text-gray-300 bg-gray-50 rounded-sm border border-gray-300 hover:bg-tpblue focus:ring-4 focus:outline-none focus:ring-blue-300"
                >
                  <svg
                    className="w-4 h-4"
                    aria-hidden="true"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 20 20"
                  >
                    <path
                      stroke="currentColor"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                    />
                  </svg>
                  <span className="sr-only">Search</span>
                </button>
              </form>
            </div>

            <AppBar />
          </div>
        </div>

        <nav className="bg-white border-gray-200 ">
          <div className="max-w-screen-xl flex flex-wrap items-center justify-center mx-auto py-4">
            <span className="self-center text-2xl font-semibold whitespace-nowrap "></span>

            <button
              data-collapse-toggle="navbar-default"
              type="button"
              className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-sm md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 "
              aria-controls="navbar-default"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <svg
                className="w-5 h-5"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 17 14"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 1h15M1 7h15M1 13h15"
                />
              </svg>
            </button>
            <div
              className="hidden w-full md:block md:w-auto"
              id="navbar-default"
            >
              <Routes />
            </div>
          </div>
        </nav>
      </div>
    </div>
  );
};

export default Header;
