import React, { ReactNode } from "react";
import Image from "next/image";
import Subscribe from "../components/Subscribe";

const coveragePage = ({ children }: { children: ReactNode }) => {
  return (
    <div>
      <div className=" md:pb-2 md:max-w-7xl mx-auto  bg-white shadow-md">
        <div className="bg-gray-100 w-full text-center  flex items-center justify-center ">
          <Image
            src="/coverage-img/image-322.png"
            alt="Banner"
            width={200}
            height={100}
            className=" w-full h-96"
          />
        </div>
      </div>
      <div className=" text-black max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-10 bg-white shadow-md">
        <div className="grid md:grid-cols-3 sm:grid-cols-1  gap-10 ">
          <div className=" md:col-span-2 sm:col-span-1">
            {children}

            {/* <h3 className="text-3xl font-bold pt-8">India</h3>

            <div className="relative overflow-x-auto">
              <table className="w-full text-sm text-left border mt-6 rtl:text-right text-gray-500 ">
                <thead className="text-xl text-sky-900 font-bold bg-sky-100 ">
                  <tr>
                    <th scope="col" className="px-6 py-2 w-44 ">
                      Launch
                    </th>
                    <th scope="col" className="px-6 py-2"></th>
                  </tr>
                </thead>
                <tbody>
                  <tr className="bg-white border-b ">
                    <th
                      scope="row"
                      className="px-6 py-3 font-bold text-sky-900 whitespace-nowrap  "
                    >
                      2G capabilities
                    </th>
                    <td className="px-6 py-3 text-sky-900">
                      GSM 900, GSM 1800
                    </td>
                  </tr>

                  <tr className="bg-white border-b ">
                    <th
                      scope="row"
                      className="px-6 py-3 font-bold text-sky-900 whitespace-nowrap  "
                    >
                      3G capabilities
                    </th>
                    <td className="px-6 py-3 text-sky-900">
                      UMTS 900, UMTS 2100
                    </td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <th
                      scope="row"
                      className="px-6 py-3 font-bold text-sky-900 whitespace-nowrap  "
                    >
                      4G capabilities
                    </th>
                    <td className="px-6 py-3 text-sky-900">
                      LTE 850 (5), LTE 900 (8) LTE 1800 (3), LTE 2100 (1), LTE
                      2300 (40), LTE 2500 (41)
                    </td>
                  </tr>
                  <tr className="bg-white border-b ">
                    <th
                      scope="row"
                      className="px-6 py-3 font-bold text-sky-900 whitespace-nowrap  "
                    >
                      5G capabilities
                    </th>
                    <td className="px-6 py-3 text-sky-900">---------</td>
                  </tr>
                </tbody>
              </table>
            </div> */}

            <p className=" mt-6 leading-loose">
              2G, first introduced in 1992, is the second-generation of cellular
              telephone technology and the first to use digital encryption of
              conversations. 2G networks were the first to offer data services
              and SMS text messaging, but their data transfer rates are lower
              than those of their successors.
            </p>

            <p className=" mt-6 leading-loose">
              3G networks succeed 2G ones, offering faster data transfer rates
              and are the first to enable video calls. This makes them
              especially suitable for use in modern smartphones, which require
              constant high-speed internet connection for many of their
              applications.
            </p>

            <div className="bg-gray-100 w-full h-28 text-center flex items-center justify-center my-8 ">
              Google add space
            </div>

            <p className=" mt-6 leading-loose">
              4G is the fourth generation of mobile phone communications
              standards. It is a successor of the 3G and provides
              ultra-broadband internet access for mobile devices. The high data
              transfer rates make 4G networks suitable for use in USB wireless
              modems for laptops and even home internet access.
            </p>

            <p className=" mt-6 leading-loose">
              5G is the fifth generation of mobile phone communications
              standards. It is a successor to 4G and promises to be faster than
              previous generations while opening up new uses cases for mobile
              data. The 5G benefits range from faster speeds (up to 10x faster),
              much lower latency (up to 50x lower) and greater capacity allowing
              many more devices to be connected at the same time.
            </p>

            <p className=" mt-6 leading-loose   ">
              Make note that for complete accuracy you should always check with
              your home service provider or with the local service providers in
              the country you are staying at. <br />
              <br />
              If you happen to find any incorrect information in our frequency
              bands directory, please do not hesitate to contact us at
              <a href="mailto:people@tekpill.com" className=" text-tpblue"> people@tekpill.com</a>
            </p>

            {/* <Email></Email> */}

            {/* <div>
              <div className="bg-[url(/coverage-img/Image.png)] w-[734px] h-[306px] items-center  justify-between opacity-70 mb-40">
                <div className="">
                  <h1 className="pt-[56px] text-center text-white text-4xl font-semibold font-['Anek Tamil']">
                    Designtocode Weekly
                  </h1>
                  <p className=" text-white text-center pt-4">
                    Enjoy the hottest mobile tech storylines, delivered straight
                    to your inbox.
                  </p>
                </div>
                <div className="ml-[52px] pt-8 mt-16 w-[630px] h-[186px] bg-white shadow justify-between items-center">
                  <div className="pl-2 pt-2 ml-[75px] w-[480px] h-11 bg-gray-100 bg-opacity-75 rounded border border-black border-opacity-5">
                    <input
                      type="Email"
                      placeholder="Email"
                      id="Email"
                      className="text-slate-400 text-sm font-medium font-['Work Sans'] capitalize "
                    />
                  </div>
                  <div className="flex ml-[75px] pb-4 space-x-3 pt-3">
                    <div className="w-4 h-4 bg-gray-100 bg-opacity-75 rounded-sm border border-black border-opacity-5" />
                    <div className="text-zinc-600 text-xs font-medium font-['Sora'] flex-wrap leading-7">
                      <p>
                        By subscribing you agree to our terms and conditions and
                        privacy policy.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div> */}
            <Subscribe />
          </div>

          <div className=" md:col-span-1 sm:col-span-1">
            <div className="bg-gray-100 w-full h-60 text-center flex items-center justify-center ">
              Google add space
            </div>

            <div className="bg-gray-100 w-full h-96 text-center mt-12 flex items-center justify-center ">
              Google add space
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default coveragePage;
