import { unstable_noStore as noStore } from "next/cache";
import { Devices } from "@/app/components/reusableComponent/Device";
import { getPhoneSpecByBrand } from "@/db/phoneSpecs";
import { IPhoneSpecs } from "@/types/phoneSpecs";

const DevicesByBrand = async ({
  params,
}: {
  params: { brandName: string };
}) => {
  noStore();
  const formatParam = () => {
    return params.brandName
      .replaceAll("-", " ")
      .replace(/\b\w/g, (x) => x.toUpperCase());
  };

  const devices: IPhoneSpecs[] = await getPhoneSpecByBrand(formatParam());
  return (
    <>
      <h3 className="text-2xl font-bold mt-12 ">{`${formatParam()} Devices`}</h3>
      <div className="grid md:grid-cols-3 sm:grid-cols-1 mt-12 gap-6 ">
        <div className=" md:col-span-2 sm:col-span-1">
          <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-4 ">
            {devices.map((x) => (
              <Devices
                imgUrl={x.images?.[0]}
                name={`${x.brand} ${x.model}`}
                key={x.model}
                id={x.customId}
              />
            ))}
          </div>
        </div>

        {/* ==== left col end ====  */}
        <div className=" md:col-span-1 sm:col-span-1">
          <div className="bg-gray-100 w-full h-60 text-center  flex items-center justify-center ">
            {" "}
            Google add space
          </div>

          <div className="bg-gray-100 w-full mt-10 h-96 text-center  flex items-center justify-center ">
            {" "}
            Google add space
          </div>
        </div>
      </div>

      <div></div>
    </>
  );
};

export default DevicesByBrand;
