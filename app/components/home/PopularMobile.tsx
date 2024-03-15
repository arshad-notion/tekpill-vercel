import React from "react";
import { getLatestDevices, getPopularDevices } from "@/db/phoneSpecs";
import { Devices } from "../reusableComponent/Device";

const PopularMobile = async () => {
  const popularDevices = (await getPopularDevices(0, 8)) ?? [];
  const latestDevices = (await getLatestDevices(0, 8)) ?? [];
  return (
    <div>
      <div className=" grid md:grid-cols-2 sm:grid-cols-1 gap-12 mt-12">
        <div className=" ">
          <div className=" grid grid-cols-2 gap-2 mb-2">
            <div className=" text-xl font-semibold">Most Interested</div>
            <div className="text-sm text-right text-sky-500"></div>
          </div>

          <div className="bg-gray-100 md:h-96 sm:h-auto">
            <div className=" grid md:grid-cols-4 sm:grid-cols-2 p-4 gap-6 ">
              {popularDevices?.map((device) => (
                <Devices
                  imgUrl={device.images?.[0]}
                  name={`${device.brand} ${device.model}`}
                  key={device.model}
                  id={device.customId}
                />
              ))}
            </div>
          </div>
        </div>
        <div className=" ">
          <div className=" grid grid-cols-2 gap-2 mb-2 ">
            <div className=" text-xl  font-semibold">Popular Mobile</div>
            <div className=" text-sm text-right"></div>
          </div>
          <div className="bg-gray-100 md:h-96 sm:h-auto">
            <div className=" grid md:grid-cols-4 sm:grid-cols-2 p-4 gap-6 ">
              {latestDevices?.map((device) => (
                <Devices
                  imgUrl={device.images?.[0]}
                  name={`${device.brand} ${device.model}`}
                  key={device.model}
                  id={device.customId}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularMobile;
