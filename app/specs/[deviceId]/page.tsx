import { RedirectType, redirect } from "next/navigation";
import {
    findNearestMobiles,
    getPhoneSpecByModel,
    getPriceByMisc,
} from "@/db/phoneSpecs";
import { IPhoneSpecs } from "@/types/phoneSpecs";
import { getURLFriendlyName } from "@/utils/fileHelper";
import Link from "next/link";

const Specs = async ({ params }: { params: { deviceId: string } }) => {
    const getParams = () => {
        return params.deviceId.substring(params.deviceId.lastIndexOf("-") + 1);
    };

    const device: IPhoneSpecs | null = await getPhoneSpecByModel(getParams());
    const currentUrl = getURLFriendlyName(
        `${device?.brand} ${device?.model} ${device?.customId}`
    );
    const price = await getPriceByMisc(device?.customId as string);
    const comp = await findNearestMobiles(price as number);

    const priceInRupees0 = comp![0]?.Misc?.Price.split("/")[0]?.trim();
    const priceInUSD0 = comp![0]?.Misc?.Price.split("/")[1]?.trim();
    const finalPrice0 = priceInRupees0 || priceInUSD0;
    console.log(finalPrice0);

    if (params.deviceId !== currentUrl) {
        redirect(currentUrl, RedirectType.replace);
    }

    if (!device) {
        return null;
    }

    return (
        <>
            <div>
                <div className="section1 max-w-7xl  mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-10  bg-white shadow-md pt-6">
                    <div className=" ">
                        <div className=" bg-gray-100  w-full h-60 text-center  flex items-center justify-center">
                            {" "}
                            Google add space
                        </div>
                    </div>
                    <div className="text-gray-800 text-2xl   md:pt-10 ml-4 pt-6 font-semibold ">
                        {" "}
                        {`${device.brand} ${device.model}`}{" "}
                    </div>

                    {/*================ images ============== */}
                    <div className=" mt-6">
                        <div>
                            <div className="grid md:grid-cols-3  sm:grid-cols-1 gap-12">
                                <div className="md:col-span-2 sm:col-span-1 ">
                                    <img className="w-11/12  " src={device.images[0]} />

                                    <div className="md:flex  mt-16">
                                        <div className=" text-gray-800  text-2xl font-semibold  ">
                                            {`${device.Misc.Price}`}{" "}
                                            <span className="md:pl-2 text-gray-600 text-base font-normal ">
                                                {" "}
                                                (onwards)
                                            </span>
                                            <div className=" text-gray-600 text-base font-normal underline">
                                                Set Price Drop Alert{" "}
                                            </div>
                                        </div>
                                        <div>
                                            {/* <div className="text-blue-700 text-base font-normal  ">See All Prices</div> */}
                                        </div>
                                    </div>
                                    {/* <div className=" md:pt-5 pt-5 inline-block md:inline-block">
                                        <div className="md:pl-0 text-gray-600 text-xs font-normal  ">variant</div>
                                        <div className="inline-flex pl-4 pt-2 md:mt-3 mt-2 mr-3 md:ml-0 md:w-[157px] md:h-10 bg-white rounded-sm border border-stone-300 text-gray-700 text-sm text-center font-normal  ">256GB Storage <span> <img className="pl-2 pt-2 text-center" src="/specs-img/Polygon_2.svg" alt="" /></span></div>
                                    </div>
                                    <div className="inline-block md:inline-block">
                                        <div className="md:pl-5 text-gray-600 text-xs font-normal  ">Colour</div>
                                        <div className="inline-flex pl-6 pt-2 md:mt-3 mt-2 md:ml-4 text-gray-700 md:w-[157px] md:h-10 bg-white rounded-sm border border-stone-300 text-sm text-center font-normal  ">Any Color <span> <img className="pl-2 pt-2 text-center" src="/specs-img/Polygon_2.svg" alt="" /></span></div>
                                    </div> */}

                                    {/*========= go to store=========== */}
                                    <div className="mt-6 px-4  bg-gray-100 rounded-md border border-dashed border-gray-400 border-opacity-50">
                                        <div className=" flex  flex-wrap justify-between  ">
                                            <div className="pt-4">
                                                <img
                                                    className="mb-2 h-10  "
                                                    src="/specs-img/FB_icon_big.svg "
                                                />
                                                <div className="flex ">
                                                    <div className="  bg-[url('/specs-img/Rectangle_503.svg')]  mt-2 text-black bg-cover pt-1 pl-1 w-16 h-5 text-[10px] font-bold   ">
                                                        5 OFFERS
                                                    </div>
                                                    <div className="pl-3 ">
                                                        <div className="text-gray-700 text-xs font-normal">
                                                            1. 4000 Off On HDFC Bank Credit Card EMI Transa
                                                        </div>
                                                        <Link href="">
                                                            {" "}
                                                            <div className="text-gray-700 text-xs font-semibold  ">
                                                                + 4 more offer(s)
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="md:p-6 pt-3">
                                                <div className="text-gray-800 text-xl font-semibold ">
                                                    Rs. 156,900.00
                                                </div>
                                                <Link href="">
                                                    <button className=" p-2 px-4 inline-flex rounded-sm bg-tpblue hover:bg-[#0647A9] text-center text-white text-base font-semibold">
                                                        Go To Store{" "}
                                                        <span>
                                                            <img
                                                                className="pl-2 pt-1"
                                                                src="/specs-img/Union_1.svg"
                                                                alt=""
                                                            />
                                                        </span>
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>

                                        <div className="my-4 border-b border-dashed border-gray-400 border-opacity-50 "></div>

                                        <div className="pb-3 flex  flex-wrap justify-between  ">
                                            <div className="">
                                                <img
                                                    className="mb-2 h-10 "
                                                    src="/specs-img/amazon_in.svg "
                                                />
                                                <div className="flex ">
                                                    <div className="  bg-[url('/specs-img/Rectangle_503.svg')]  mt-2 text-black bg-cover pt-1 pl-1 w-16 h-5 text-[10px] font-bold   ">
                                                        5 OFFERS
                                                    </div>
                                                    <div className="pl-3 ">
                                                        <div className="text-gray-700 text-xs font-normal">
                                                            1. 4000 Off On HDFC Bank Credit Card EMI Transa
                                                        </div>
                                                        <Link href="">
                                                            {" "}
                                                            <div className="text-gray-700 text-xs font-semibold  ">
                                                                + 4 more offer(s)
                                                            </div>
                                                        </Link>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="md:px-6 md:pb-6 pt-3">
                                                <div className="text-gray-800 text-xl font-semibold ">
                                                    Rs. 156,900.00
                                                </div>
                                                <Link href="">
                                                    <button className=" p-2 px-4 inline-flex rounded-sm bg-tpblue hover:bg-[#0647A9] text-center text-white text-base font-semibold">
                                                        Go To Store{" "}
                                                        <span>
                                                            <img
                                                                className="pl-2 pt-1"
                                                                src="/specs-img/Union_1.svg"
                                                                alt=""
                                                            />
                                                        </span>
                                                    </button>
                                                </Link>
                                            </div>
                                        </div>
                                    </div>

                                    {/*================ Key specs ============== */}
                                    <div className="flex flex-wrap justify-between">
                                        <div className="text-gray-800 mt-8 text-[26px] font-semibold ">
                                            Key Specs
                                        </div>
                                        {/* <img className=" md:pl-2 mt-12 w-3.5 h-3.5" src="https://via.placeholder.com/14x14" />
                                        <div className="md:pl-2 mt-12 text-gray-600 text-xs font-normal ">iOS v 17</div> */}
                                        <Link href="">
                                            {" "}
                                            <div className="inline-flex mr-2  md:ml-20 mt-10 text-tpblue hover:text-[#0647A9] text-base font-normal ">
                                                See all prices{" "}
                                                <span>
                                                    <img
                                                        className="pt-2 pl-2"
                                                        src="/specs-img/Polygon_3.svg"
                                                        alt=""
                                                    />
                                                </span>
                                            </div>
                                        </Link>
                                    </div>

                                    <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-4 mt-4 ml-1.5 md:ml-0 ">
                                        <div className="md:mt-0 pl-2 pt-2 rounded-md border border-gray-400 border-opacity-50 ">
                                            Performance
                                            <ul className=" md:h-28 sm:h-auto overflow-y-auto leading-normal text-xs text-gray-400">
                                                <li className="pt-2">{`${device.Platform.CPU}`}</li>
                                                <li className="pt-2">{`${device.Platform.Chipset}`}</li>
                                                <li className="pt-2">{`${device.Platform.GPU}`}</li>
                                            </ul>
                                        </div>

                                        <div className="md:mt-0 pl-2 pt-2 rounded-md border border-gray-400 border-opacity-50 ">
                                            Display
                                            <ul className=" md:h-28 sm:h-auto overflow-y-auto leading-normal text-xs text-gray-400">
                                                <li className="pt-2">{`${device.Display.Size}`} </li>
                                                <li className="pt-2">{`${device.Display.Type}`}</li>
                                                {/* <li className="pt-2">120 Hz Refresh Rate</li> */}
                                            </ul>
                                        </div>

                                        <div className="md:mt-0 pl-2 pt-2 rounded-md border border-gray-400 border-opacity-50 ">
                                            Camera
                                            <ul className="md:h-28 sm:h-auto overflow-y-auto  leading-relaxed text-xs text-gray-400 ">
                                                <li className="pt-2 ">
                                                    {`${device["Main Camera"].Dual}`}{" "}
                                                </li>
                                                <li className="pt-2  ">{`${device["Main Camera"].Features}`}</li>
                                                <li className="pt-2 ">
                                                    {`${device["Selfie camera"].Single}`} Front Camera
                                                </li>
                                            </ul>
                                        </div>
                                        <div className="md:mt-0 pl-2 pt-2 rounded-md border border-gray-400 border-opacity-50 ">
                                            Battery
                                            <ul className="md:h-28 sm:h-auto overflow-y-auto  leading-relaxed  text-xs text-gray-400">
                                                <li className="pt-2">{`${device.Battery.Type}`}</li>
                                                <li className="pt-2">{`${device.Battery.Charging}`}</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className="my-6 border-b pb-3 "></div>
                                    <div className="flex flex-wrap justify-between ">
                                        <div className=" md:w-6/12 sm:w-full pr-2  ">
                                            <div className="text-gray-600 leading-loose text-sm">
                                                <span className=" font-bold">SIM : </span>{" "}
                                                {`${device.Body.SIM}`}
                                            </div>
                                            <div className="pt-6 text-gray-600 leading-loose text-sm">
                                                {" "}
                                                <span className=" font-bold">CHARGING : </span>{" "}
                                                {`${device.Battery.Charging}`}
                                            </div>
                                            <div className="pt-6  text-gray-600 leading-loose text-sm pb-6 ">
                                                {" "}
                                                <span className=" font-bold">WATERPROOF : </span>{" "}
                                                {`${device.Body[""]}`}
                                            </div>
                                        </div>
                                        <div className=" md:w-6/12 sm:w-full md:pl-2  ">
                                            <div className="text-gray-600 text-sm leading-loose md:pt-0  ">
                                                <span className=" font-bold">INTERNAL : </span>{" "}
                                                {`${device.Memory.Internal}`}
                                            </div>
                                            <div className="pt-6 text-gray-600 leading-loose text-sm ">
                                                <span className=" font-bold">TECHNOLOGY : </span>{" "}
                                                {`${device.Network.Technology}`}
                                            </div>
                                            <div className="pt-6 text-gray-600 leading-loose text-sm">
                                                {" "}
                                                <span className=" font-bold">RADIO : </span>{" "}
                                                {`${device.Comms.Radio}`}
                                            </div>
                                        </div>
                                        {/* <div className="pl-16 ">

                                            <div className="pt-6 text-gray-600 text-sm font-normal  ">SNo Fingerprint sensor</div>
                                         
                                        </div> */}
                                    </div>
                                </div>
                                <div className="col-span-1 inline-block md:inline-block md:mt-0 mt-6  ">
                                    <div className="bg-gray-100 w-full h-60 text-center flex items-center justify-center ">
                                        Google add space
                                    </div>
                                    <div className="bg-gray-100 w-full mt-6 h-96 text-center flex items-center justify-center ">
                                        Google add space
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/*=========== section 2================ */}
                <div className="section2 mt-6 max-w-7xl  mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-10  bg-white shadow-md pt-6">
                    <div className=" section2 md:mx-4 px-4 py-8 md:px-6 lg:px-8 xl:px-10 text-center  flex items-center justify-center mt-4 ">
                        <div className="md:w-[750px] w-96 h-40 md:h-[200px]  bg-stone-300 text-center  flex items-center justify-center">
                            {" "}
                            Advertisements
                        </div>
                    </div>
                    <div className=" max-w-7xl  mx-auto   bg-white pt-6">
                        <div className="max-w-7xl shadow-md pt-6    bg-black mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-10  ">
                            <div className="text-2xl font-semibold text-white ">
                                Top Competitors
                            </div>
                            {/*=========== mobile specs iphone15 pro max=========== */}

                            {/* =============================================================== */}

                            <div className="grid md:grid-cols-8 sm:grid-cols-1 gap-6  mt-6 ">
                                <div className="md:col-span-6 sm:col-span-1 bg-white rounded-lg ">
                                    <div className="  rounded px-8  py-7 ">
                                        <p className="text-lg font-semibold">
                                            {" "}
                                            {`${comp![0]?.brand} ${comp![0]?.model}`} Price In India{" "}
                                        </p>

                                        <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-6 mt-6 ">
                                            <div className="md:col-span-1 sm:col-span-1 justify-center items-center  ">
                                                <img className="  " src={`${comp![0]?.images}`} />
                                                <button
                                                    type="button"
                                                    className="text-white w-full mt-6 rounded-sm bg-tpblue hover:opacity-80  font-medium  text-xl px-5 py-2.5 me-2 "
                                                >{`${comp![0]?.Misc?.Price.split("/").slice(
                                                    0,
                                                    1
                                                )}`}</button>
                                            </div>

                                            <div className="md:col-span-3 sm:col-span-1  leading-loose">
                                                {/* <p className="border-b   text-sm font-semibold">Space</p> */}
                                                <div className="grid md:grid-cols-2 sm:cols-row-1 gap-2  ">
                                                    <div className="">
                                                        Performance
                                                        <ul className=" text-xs md:h-28 sm:h-auto overflow-y-auto  leading-normal text-gray-600">
                                                            <li className="pt-1">
                                                                {`${comp![0]?.Platform.CPU}`}.
                                                            </li>
                                                            <li className="pt-1 ">
                                                                {`${comp![0]?.Platform.Chipset}`}.
                                                            </li>
                                                            <li className="pt-1 ">
                                                                {`${comp![0]?.Platform.GPU}`}.
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="">
                                                        Display
                                                        <ul className=" text-xs md:h-28 sm:h-auto  overflow-y-auto leading-normal text-gray-600">
                                                            <li className="pt-1">
                                                                {`${comp![0]?.Display.Size}`}.{" "}
                                                            </li>
                                                            <li className="pt-1">
                                                                {`${comp![0]?.Display.Type}`}.
                                                            </li>
                                                            <li className="pt-1">
                                                                {`${comp![0]?.Display.Resolution}`}.
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="">
                                                        Camera
                                                        <ul className=" text-xs md:h-28 sm:h-auto overflow-y-auto  leading-normal text-gray-600">
                                                            <li className="pt-1">
                                                                {`${comp![0]?.["Main Camera"].Dual}`}.
                                                            </li>
                                                            <li className="pt-1">
                                                                {`${comp![0]?.["Main Camera"].Features}`}.
                                                            </li>
                                                            <li className="pt-1">
                                                                {`${comp![0]?.["Selfie camera"].Single}`}Front
                                                                Camera.
                                                            </li>
                                                        </ul>
                                                    </div>

                                                    <div className="">
                                                        Battery
                                                        <ul className=" text-xs md:h-28 sm:h-auto  overflow-y-auto leading-normal text-gray-600">
                                                            <li className="pt-1">
                                                                {`${comp![0]?.Battery.Type}`}.
                                                            </li>
                                                            <li className="pt-1">
                                                                {`${comp![0]?.Battery.Charging}`}.{" "}
                                                            </li>
                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                <div className="md:col-span-2 sm:col-span-1   ">
                                    <div className="grid md:grid-row-2 sm:grid-row-1 gap-6  ">
                                        <div className="rounded px-4 py-5 bg-white">
                                            <div className=" flex  border-gray-200 ">
                                                <div className=" flex justify-center items-center ">
                                                    {" "}
                                                    <img className=" w-20" src={`${comp![1]?.images}`} />
                                                </div>
                                                <div className="pl-6">
                                                    <span className="text-gray-700 text-base font-semibold ">
                                                        {`${comp![1]?.brand}`} <br />
                                                        {`${comp![1]?.model}`}
                                                        <br />
                                                    </span>
                                                    <span className="text-gray-700 text-xl font-semibold  leading-[30px]">{`${comp![1]?.Misc?.Price.split(
                                                        "/"
                                                    ).slice(0, 1)}`}</span>{" "}
                                                </div>
                                            </div>
                                        </div>

                                        <div className="rounded px-4 py-5 bg-white">
                                            <div className=" flex  border-gray-200 ">
                                                <div className="  flex justify-center items-center ">
                                                    {" "}
                                                    <img
                                                        className="  w-20 "
                                                        src={`${comp![2]?.images}`}
                                                    />
                                                </div>
                                                <div className="pl-6">
                                                    <span className="text-gray-700 text-base font-semibold ">
                                                        {`${comp![2]?.brand}`} <br />
                                                        {`${comp![2]?.model}`}
                                                        <br />
                                                    </span>
                                                    <span className="text-gray-700 text-xl font-semibold  leading-[30px]">{`${comp![2]?.Misc?.Price.split(
                                                        "/"
                                                    ).slice(0, 1)}`}</span>
                                                </div>
                                            </div>
                                        </div>

                                        <div className="rounded px-4 py-5 bg-white">
                                            <div className=" flex  border-gray-200 ">
                                                <div className=" flex justify-center items-center  ">
                                                    {" "}
                                                    <img className=" w-20" src={`${comp![3]?.images}`} />
                                                </div>
                                                <div className="pl-6">
                                                    <span className="text-gray-700 text-base font-semibold ">
                                                        {`${comp![3]?.brand}`}
                                                        <br />
                                                        {`${comp![3]?.model}`}
                                                        <br />
                                                    </span>
                                                    <span className="text-gray-700 text-xl font-semibold  leading-[30px]">{`${comp![3]?.Misc?.Price.split(
                                                        "/"
                                                    ).slice(0, 1)}`}</span>{" "}
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            {/* =============================================================== */}
                            {/* <div>
                                <div className=" mt-2 md:flex block ">
                                    <div className="md:w-[800px] ml-2  w-80 md:h-[357px] bg-gray-100 rounded-md border border-gray-400 border-opacity-50">
                                        <div className=" pt-6 pl-6 text-gray-800 text-lg font-semibold capitalize">{`${comp![0]?.brand} ${comp![0]?.model}`} Price In India </div>
                                        <div className="md:flex block ">
                                            <div>
                                                <img className=" mt-6 ml-6  w-[154px] h-[204px]" src={`${comp![0]?.images}`} />
                                                <div className=" mt-5 ml-6 pt-2 bg-[#066EE8] hover:bg-[#0647A9] w-40 h-11 text-center rounded-sm  text-white text-base font-semibold ">{`${comp![0]?.Misc?.Price.split('/').slice(0, 1)}`}</div>
                                            </div>
                                            <div className="">
                                                <div className=" mt-11 px-4  md:w-[545px] w-80 md:h-[88px] text-black text-xs font-normal  leading-snug">{`${comp![0]?.brand} ${comp![0]?.model}`} price in India starts from Rs. {`${comp![0]?.Misc?.Price.split('/').slice(0, 1)}`}. The lowest price of{`${comp![0]?.brand} ${comp![0]?.model}`} is Rs. 156,900 at flipkart.com. This is 8 GB RAM / 256 GB internal storage base variant of {`${comp![0]?.brand} ${comp![0]?.model}`} which is available in {`${comp![0]?.Misc.Colors}`} .</div>
                                                <div className="pt-4 pl-4 text-gray-800 text-sm font-semibold  capitalize">Specs</div>
                                                <div className="mt-4 md:w-[495px] w-72 ml-3 h-[0px] opacity-40 border border-gray-400"></div>
                                                <div className=" md:inline-flex block px-2 ">
                                                    <div className="pl-2 pt-2  md:col-span-1 sm:col-span-1 md:w-[130px] md:h-[115px] overflow-scroll ">Performance
                                                        <ul className=" text-xs leading-normal text-gray-400">
                                                            <li className="pt-2">{`${comp![0]?.Platform.CPU}`}</li>
                                                            <li className="pt-2 ">{`${comp![0]?.Platform.Chipset}`}</li>
                                                            <li className="pt-2 ">{`${comp![0]?.Platform.GPU}`}</li>
                                                        </ul>
                                                    </div>
                                                    <div className="pl-2 pt-2 md:col-span-1 sm:col-span-1 md:w-[130px] md:h-[115px] overflow-scroll ">Display
                                                        <ul className=" text-xs leading-normal text-gray-400">
                                                            <li className="pt-2">{`${comp![0]?.Display.Size}`} </li>
                                                            <li className="pt-2">{`${comp![0]?.Display.Type}`}</li>
                                                            <li className="pt-2">{`${comp![0]?.Display.Resolution}`}</li>
                                                        </ul>
                                                    </div>
                                                    <div className="pl-2 pt-2 md:col-span-1 sm:col-span-1 md:w-[130px] md:h-[115px] overflow-scroll ">Camera
                                                        <ul className=" text-xs leading-normal text-gray-400">
                                                            <li className="pt-2">{`${comp![0]?.["Main Camera"].Dual}`}</li>
                                                            <li className="pt-2">{`${comp![0]?.["Main Camera"].Features}`}</li>
                                                            <li className="pt-2">{`${comp![0]?.["Selfie camera"].Single}`}Front Camera</li>
                                                        </ul>
                                                    </div>
                                                    <div className="pl-2 pt-2 pb-2 md:col-span-1 sm:col-span-1 md:w-[130px] md:h-[115px] overflow-scroll">Battery
                                                        <ul className=" text-xs leading-normal text-gray-400">
                                                            <li className="pt-2">{`${comp![0]?.Battery.Type}`}</li>
                                                            <li className="pt-2">{`${comp![0]?.Battery.Charging}`} </li>

                                                        </ul>
                                                    </div>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-4 md:mt-0 md:ml-16 ">
                                        <div className=" md:ml-4 ml-9 mb-2 inline-flex w-64 h-[114px] bg-gray-100 rounded-md border border-gray-400 border-opacity-50 ">
                                            <img className="mx-6 my-6 w-[47.46px] h-[66px]" src={`${comp![1]?.images}`} />
                                            <div className="w-[154px] my-5"><span className="text-gray-700 text-base font-semibold ">{`${comp![1]?.brand}`} <br />{`${comp![1]?.model}`}<br /></span><span className="text-gray-700 text-2xl font-semibold  leading-[30px]">{`${comp![1]?.Misc?.Price.split('/').slice(0, 1)}`}</span></div>
                                        </div>
                                        <div className="md:ml-4 ml-9 mb-2 inline-flex w-64 h-[114px] bg-gray-100 rounded-md border border-gray-400 border-opacity-50 ">
                                            <img className="mx-6 my-6 w-[47.46px] h-[66px]" src={`${comp![2]?.images}`} />
                                            <div className="w-[154px] my-5"><span className="text-gray-700 text-base font-semibold ">{`${comp![2]?.brand}`} <br />{`${comp![2]?.model}`}<br /></span><span className="text-gray-700 text-2xl font-semibold  leading-[30px]">{`${comp![2]?.Misc?.Price.split('/').slice(0, 1)}`}</span></div>
                                        </div>
                                        <div className="md:ml-4 ml-9 inline-flex w-64 h-[114px] bg-gray-100 rounded-md border border-gray-400 border-opacity-50 ">
                                            <img className="mx-6 my-6 w-[47.46px] h-[66px]" src={`${comp![3]?.images}`} />
                                            <div className="w-[154px] my-5"><span className="text-gray-700 text-base font-semibold ">{`${comp![3]?.brand}`}<br />{`${comp![3]?.model}`}<br /></span><span className="text-gray-700 text-2xl font-semibold  leading-[30px]">{`${comp![3]?.Misc?.Price.split('/').slice(0, 1)}`}</span></div>
                                        </div>
                                    </div>
                                </div>
                            </div> */}
                        </div>
                    </div>
                    {/*============== new manufacturer warranty ====================*/}
                    <div className="   bg-white  pt-6">
                        <div className="  text-gray-800 text-[26px] font-semibold   capitalize leading-[42px]">{`${device.brand} ${device.model}`}</div>
                        <div className="md:w-[1103px] pt-3 h-11 text-black text-xs font-normal   leading-snug">
                            Vivo Y36 was launched in India in June this year in a single RAM
                            and storage configuration. The smartphone, at the time of its
                            release, was priced at Rs. 16,999 in the country for the 8GB RAM +
                            128GB storage variant.
                        </div>
                        <div className="pt-10 md:pt-6 text-stone-900 text-[26px] font-semibold  ">
                            New / Manufacturer Warranty
                        </div>
                        {/* <div className="md:inline-flex inline-block mt-8">
                            <div >
                                <div className="text-gray-600 text-xs font-normal  ">Variant</div>
                                <div className=" pl-2 flex mt-2 mr-6 text-gray-700 text-sm font-normal   w-[157px] h-10 bg-white rounded-sm border border-stone-300  text-center pt-2 ">256GB Storage  <span> <img className="pl-2 pt-2 text-center" src="/specs-img/Polygon_2.svg" alt="" /></span></div>
                            </div>
                            <div>
                                <div className="text-gray-600 text-xs font-normal  ">Colour</div>
                                <div className=" pl-2 flex mt-2 mr-6 text-gray-700 text-sm font-normal   w-[157px] h-10 bg-white rounded-sm border border-stone-300  text-center pt-2 ">Any Colour <span> <img className="pl-2 pt-2 text-center" src="/specs-img/Polygon_2.svg" alt="" /></span></div>
                            </div>

                            <div>
                                <div className="text-gray-600 text-xs font-normal  ">FILTER BY</div>
                                <div className="flex">
                                    <div className=" mt-5 w-4 h-4 mr-2 bg-gray-100 bg-opacity-75 rounded-sm border border-black border-opacity-20"></div>
                                    <div className="mt-5 text-gray-700 text-sm font-normal  ">With Coupon</div>
                                </div>
                            </div>
                        </div> */}
                        <div className="text-gray-700 md:pt-6 pt-4 text-[26px] font-normal   capitalize">
                            Store Name
                        </div>

                        <div className=" border-b pb-3"></div>

                        <div className="md:flex md:justify-between  mb-7">
                            <div className="mt-6">
                                <img className=" h-10" src="/specs-img/FB_icon_big.svg" />
                                <div className=" inline-flex mt-2">
                                    <div className=" bg-[url('/specs-img/Rectangle_503.svg')]  text-black bg-cover pl-1 pt-1 w-16 h-5 text-[10px] font-bold  ">
                                        5 OFFERS
                                    </div>
                                    <div className=" pl-2 pr-2 pt-1 text-gray-700 text-xs font-normal  ">
                                        1. 4000 Off On HDFC Bank Credit Card EMI Transa
                                    </div>
                                    {/* <div className="text-gray-700 text-xs font-semibold   underline">+ 4 more offer(s)</div> */}
                                </div>
                            </div>
                            <div className="mt-6 ">
                                <div className="pr-44 text-gray-800 text-sm font-normal   capitalize">
                                    2-4 Working Days
                                </div>
                                <div className="text-gray-600 text-xs font-normal  ">
                                    Free Shipping
                                </div>
                            </div>
                            <div className="mt-6">
                                <div className="text-gray-800 text-[22px] font-semibold  ">
                                    Rs. 156,900.00
                                </div>
                                <Link href="">
                                    <button className=" p-2 px-4 inline-flex rounded-sm bg-tpblue hover:bg-[#0647A9] text-center text-white text-base font-semibold">
                                        Go To Store{" "}
                                        <span>
                                            <img
                                                className="pl-2 pt-1"
                                                src="/specs-img/Union_1.svg"
                                                alt=""
                                            />
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className=" h-[0px] opacity-70 border-b border-dashed border-gray-400"></div>

                        <div className="md:flex  md:justify-between   mb-7">
                            <div className="mt-6">
                                <img className=" h-10" src="/specs-img/amazon_in.svg" />
                                <div className="inline-flex mt-2">
                                    <div className=" bg-[url('/specs-img/Rectangle_503.svg')]  text-black bg-cover pl-1 pt-1 w-16 h-5 text-[10px] font-bold  ">
                                        1 OFFERS{" "}
                                    </div>
                                    <div className="pr-2 pl-2 pt-1 text-gray-700 text-xs font-normal  ">
                                        Flat INR 4000 Instant Discount on HDFC Bank Credit Card
                                    </div>
                                </div>
                            </div>
                            <div className="mt-6 ">
                                <div className="pr-56 text-gray-800 text-sm font-normal   capitalize">
                                    2-10 Working Days
                                </div>
                            </div>
                            <div className="mt-6">
                                <div className="text-gray-800 text-[22px] font-semibold  ">
                                    Rs. 156,900.00
                                </div>
                                <Link href="">
                                    <button className=" p-2 px-4 inline-flex rounded-sm bg-tpblue hover:bg-[#0647A9] text-center text-white text-base font-semibold">
                                        Go To Store{" "}
                                        <span>
                                            <img
                                                className="pl-2 pt-1"
                                                src="/specs-img/Union_1.svg"
                                                alt=""
                                            />
                                        </span>
                                    </button>
                                </Link>
                            </div>
                        </div>

                        <div className=" h-[0px] border-b border-dashed opacity-70 border-gray-400"></div>

                        <div className="pt-6">
                            <span className="text-gray-700 text-xs font-semibold  ">
                                Disclaimer
                            </span>
                            <span className="text-gray-700 text-xs font-normal  ">
                                : The price & specs shown may be different from actual. Please
                                confirm on the retailer site before purchasing.
                            </span>
                        </div>
                    </div>
                </div>
                {/* ============section3 apple iphone 11 review================= */}

                <div className="section3 mt-6 max-w-7xl  mx-auto   bg-white pt-6">
                    <div className=" section3 mx-4 px-4 py-8 md:px-6 lg:px-8 xl:px-10 text-center  flex items-center bg-white justify-center mt-4 ">
                        <div className="md:w-[750px] md:h-[200px] bg-stone-300 text-center  flex items-center justify-center">
                            {" "}
                            Advertisements
                        </div>
                    </div>
                    <div className="bg-white mx-4 px-6  py-4  ">
                        <div className="md:h-[555px]  bg-gray-100 rounded-md">
                            <div className="md:flex justify-between px-5 pt-8 pb-4">
                                <div className="text-gray-800 text-[26px] font-semibold   capitalize">
                                    {`${device.brand} ${device.model}`} Review
                                </div>
                                <Link href="">
                                    {" "}
                                    <div className=" inline-flex text-tpblue hover:text-[#0647A9] text-base font-normal  ">
                                        Read Full Review{" "}
                                        <span>
                                            <img
                                                className="pt-2 pl-2"
                                                src="/specs-img/Polygon_3.svg"
                                                alt=""
                                            />
                                        </span>{" "}
                                    </div>
                                </Link>
                            </div>
                            <div className=" border-b "></div>
                            <div className="md:flex pb-4">
                                <div className="pr-8 pl-4 ">
                                    <img
                                        className=" mt-2 w-[78px] h-[78px]"
                                        src="/specs-img/review_icon.svg"
                                    />
                                    <div className="pl-2">
                                        <span className="text-stone-900 text-[46px] font-semibold  ">
                                            8.0
                                        </span>
                                        <span className="text-gray-600 text-base font-semibold  ">
                                            / 10
                                        </span>
                                    </div>
                                </div>

                                <div>
                                    <div className="pt-6 pl-2 text-stone-900 w-96 text-xl font-semibold  ">
                                        {`${device.brand} ${device.model}`} review
                                    </div>
                                    <div className="pt-2 pl-2 text-black text-sm font-normal   leading-snug">
                                        The {`${device.brand} ${device.model}`} is the biggest
                                        iPhone upgrades in recent years
                                    </div>
                                </div>
                            </div>
                            <div className="   border-b "></div>

                            <div className="md:flex pt-4 pb-2">
                                <div className="pr-40 pl-4">
                                    <div className="text-gray-800 text-base font-semibold   capitalize">
                                        Pros
                                    </div>
                                    <div className="text-gray-600 text-sm font-normal   leading-[34px]">
                                        Slightly smaller & lighter
                                        <br />
                                        Smooth performance
                                        <br />
                                        Excellent cameras & pro features
                                        <br />
                                        Type-C finally
                                    </div>
                                </div>
                                <div className="pl-4 md:pl-0">
                                    <div className="text-gray-800 text-base font-semibold   capitalize">
                                        cons
                                    </div>
                                    <div className="text-gray-600 text-sm font-normal   leading-[34px]">
                                        Action button performs 1 task
                                        <br />
                                        Slow charging
                                        <br />
                                        Pricey
                                    </div>
                                </div>
                            </div>
                            <div className="border-b pb-2"></div>
                            <div className="pt-4 pl-4 text-gray-800 text-lg font-semibold   capitalize">
                                Verdict
                            </div>
                            <div className="pl-4 pt-2 pb-4   text-black text-xs font-normal   leading-snug">
                                The iPhone 15 Pro Max comes as one of the most significant
                                upgrades in recent years, and not just because of the Type-C
                                port. It shines in the performance and display departments, and
                                boasts capable cameras that shoot excellent stills and videos.
                                On the other hand, charging is still slow, and you need to shell
                                out quite a bit to acquire one.
                            </div>
                        </div>

                        <div className="  mt-8 mb-4 mx-auto  md:my-4 bg-gray-100 rounded-md">
                            <div className=" flex justify-between  px-4 py-4">
                                <div className="text-gray-800 text-lg font-semibold capitalize">
                                    User Reviews
                                </div>
                                <Link href="">
                                    {" "}
                                    <div className="md:pl-5  inline-flex text-tpblue hover:text-[#0647A9] text-base font-normal  ">
                                        Read Full Review{" "}
                                        <span>
                                            <img
                                                className="pt-2 pl-2 pr-1"
                                                src="/specs-img/Polygon_3.svg"
                                                alt=""
                                            />
                                        </span>{" "}
                                    </div>
                                </Link>
                            </div>
                            <div className="   border-b"></div>
                            <div className="md:flex md:justify-between px-4 py-6 ">
                                <div className="">
                                    <div className="text-gray-600 text-base font-normal   leading-snug">
                                        Overall Rating
                                    </div>
                                    <img
                                        className="w-[78px] h-[78px]"
                                        src="/specs-img/review_icon.svg"
                                    />
                                    <div className="pl-2">
                                        <span className="text-stone-900 text-[46px] font-semibold  ">
                                            8.0
                                        </span>
                                        <span className="text-gray-600 text-base font-semibold  ">
                                            / 10
                                        </span>
                                    </div>
                                    <div className="text-gray-600 text-xs font-semibold   leading-snug">
                                        Based on 318 Rating(s)
                                    </div>
                                </div>
                                <div className="pl-4 pt-4">
                                    <div className="text-gray-600 text-base font-normal   leading-snug">
                                        Overall Rating
                                    </div>

                                    <button className="bg-white w-40 h-12 mt-5 hover:bg-slate-600 hover:text-white rounded">
                                        Rating <span className="pl-4"> 🔽</span>{" "}
                                    </button>
                                </div>
                                <div className="">
                                    <div className="text-gray-600 text-base font-normal   leading-snug">
                                        Share your thoughts
                                    </div>
                                    <Link href="">
                                        <button className="mt-3 pl-4 inline-flex bg-tpblue hover:bg-[#0647A9] rounded-sm  w-48 h-10 pt-2   text-center text-white text-base font-semibold  ">
                                            Write a Review{" "}
                                            <span>
                                                <img
                                                    className="pl-2 pt-1"
                                                    src="/specs-img/Union_1.svg"
                                                    alt=""
                                                />
                                            </span>
                                        </button>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                {/* =============section 4========= */}
                <div className="section4 max-w-7xl  mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-10  bg-white shadow-md pt-6 mt-6">
                    <div className="justify-between flex">
                        <div className=" text-gray-800 text-[26px] font-semibold   capitalize">
                            Related Stories
                        </div>
                        <Link href="">
                            {" "}
                            <div className=" inline-flex text-right md:mr-0 mr-4 text-tpblue text-base font-normal  ">
                                View More{" "}
                                <span>
                                    <img
                                        className="pt-2 pl-2"
                                        src="/specs-img/Polygon_3.svg"
                                        alt=""
                                    />
                                </span>{" "}
                            </div>
                        </Link>
                    </div>
                    <div className="grid md:grid-cols-3 mt-2 sm:grid-cols-1 gap-12 ">
                        <div>
                            <img
                                className="w-full"
                                src="https://via.placeholder.com/347x195"
                            />
                            <div className=" py-4 pl-4   bg-neutral-800 text-white text-lg font-semibold  ">
                                This sweet deal lets you snatch the JBL Flip 6 at 27% off get
                                yours at Amazon UK
                            </div>
                        </div>
                        <div>
                            <img
                                className="w-full"
                                src="https://via.placeholder.com/347x195"
                            />
                            <div className=" py-4 pl-4   bg-neutral-800 text-white text-lg font-semibold  ">
                                This sweet deal lets you snatch the JBL Flip 6 at 27% off get
                                yours at Amazon UK
                            </div>
                        </div>
                        <div>
                            <img
                                className="w-full"
                                src="https://via.placeholder.com/347x195"
                            />
                            <div className=" py-4 pl-4   bg-neutral-800 text-white text-lg font-semibold  ">
                                This sweet deal lets you snatch the JBL Flip 6 at 27% off get
                                yours at Amazon UK
                            </div>
                        </div>
                        <div>
                            <img
                                className="w-full"
                                src="https://via.placeholder.com/347x195"
                            />
                            <div className=" py-4 pl-4   bg-neutral-800 text-white text-lg font-semibold  ">
                                This sweet deal lets you snatch the JBL Flip 6 at 27% off get
                                yours at Amazon UK
                            </div>
                        </div>
                        <div>
                            <img
                                className="w-full"
                                src="https://via.placeholder.com/347x195"
                            />
                            <div className=" py-4 pl-4   bg-neutral-800 text-white text-lg font-semibold  ">
                                This sweet deal lets you snatch the JBL Flip 6 at 27% off get
                                yours at Amazon UK
                            </div>
                        </div>
                        <div>
                            <img
                                className="w-full"
                                src="https://via.placeholder.com/347x195"
                            />
                            <div className=" py-4 pl-4   bg-neutral-800 text-white text-lg font-semibold  ">
                                This sweet deal lets you snatch the JBL Flip 6 at 27% off get
                                yours at Amazon UK
                            </div>
                        </div>
                        <div>
                            <img
                                className="w-full"
                                src="https://via.placeholder.com/347x195"
                            />
                            <div className=" py-4 pl-4   bg-neutral-800 text-white text-lg font-semibold  ">
                                This sweet deal lets you snatch the JBL Flip 6 at 27% off get
                                yours at Amazon UK
                            </div>
                        </div>
                        <div>
                            <img
                                className="w-full"
                                src="https://via.placeholder.com/347x195"
                            />
                            <div className=" py-4 pl-4   bg-neutral-800 text-white text-lg font-semibold  ">
                                This sweet deal lets you snatch the JBL Flip 6 at 27% off get
                                yours at Amazon UK
                            </div>
                        </div>
                        <div>
                            <img
                                className="w-full"
                                src="https://via.placeholder.com/347x195"
                            />
                            <div className=" py-4 pl-4   bg-neutral-800 text-white text-lg font-semibold  ">
                                This sweet deal lets you snatch the JBL Flip 6 at 27% off get
                                yours at Amazon UK
                            </div>
                        </div>
                    </div>
                </div>

                {/* ===============section 5============== */}
                <div className="section5 max-w-7xl mt-6 mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-10 flex  bg-white shadow-md pt-6">
                    <div className="">
                        <div className="text-gray-800 text-[26px] font-semibold   capitalize">
                            {`${device.brand} ${device.model}`} Specifications
                        </div>
                        <table className="w-full text-sm text-left border mt-6 rtl:text-right text-gray-500 ">
                            <thead className="text-xl  bg-sky-100 font-semibold text-sky-950 capitalize ">
                                <tr>
                                    <th scope="col" className="px-6 py-2 w-48 ">
                                        Launch
                                    </th>
                                    <th scope="col" className="px-6 py-2"></th>
                                </tr>
                            </thead>
                            <tbody className="">
                                <tr className="bg-white border-b ">
                                    <th
                                        scope="row"
                                        className="px-6 py-3 whitespace-nowrap  text-sky-950 text-sm font-semibold   "
                                    >
                                        Announced
                                    </th>
                                    <td className="px-6 py-3 text-sky-900 text-sm font-normal">
                                        {`${device.Launch.Announced}`}
                                    </td>
                                </tr>

                                <tr className="bg-white border-b  ">
                                    <th
                                        scope="row"
                                        className="px-6 py-3  whitespace-nowrap  text-sky-950 text-sm font-semibold   "
                                    >
                                        Status
                                    </th>
                                    <td className="px-6 py-3 text-sky-900 text-sm font-normal">
                                        {`${device.Launch.Status}`}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="w-full text-sm text-left border mt-6 rtl:text-right text-gray-500 ">
                            <thead className=" text-xl bg-sky-100 font-semibold  text-sky-950 capitalize ">
                                <tr>
                                    <th scope="col" className="px-6 py-2 w-48 ">
                                        Body
                                    </th>
                                    <th scope="col" className="px-6 py-2"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b ">
                                    <th
                                        scope="row"
                                        className="px-6 py-3 whitespace-nowrap  text-sky-950 text-sm font-semibold   "
                                    >
                                        Dimension
                                    </th>
                                    <td className="px-6 py-3 text-sky-900 text-sm font-normal">
                                        {`${device.Body.Dimensions}`}
                                    </td>
                                </tr>

                                <tr className="bg-white border-b ">
                                    <th
                                        scope="row"
                                        className="px-6 py-3  whitespace-nowrap  text-sky-950 text-sm font-semibold   "
                                    >
                                        Weight
                                    </th>
                                    <td className="px-6 py-3 text-sky-900 text-sm font-normal">
                                        {`${device.Body.Weight}`}
                                    </td>
                                </tr>
                                <tr className="bg-white border-b ">
                                    <th
                                        scope="row"
                                        className="px-6 py-3  whitespace-nowrap  text-sky-950 text-sm font-semibold   "
                                    >
                                        Build
                                    </th>
                                    <td className="px-6 py-3 text-sky-900 text-sm font-normal">
                                        {`${device.Body.Build}`}
                                    </td>
                                </tr>
                                <tr className="bg-white border-b ">
                                    <th
                                        scope="row"
                                        className="px-6 py-3  whitespace-nowrap  text-sky-950 text-sm font-semibold   "
                                    >
                                        Sim
                                    </th>
                                    <td className="px-6 py-3 text-sky-900 text-sm font-normal">
                                        {`${device.Body.SIM}`}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="w-full text-sm text-left border mt-6 rtl:text-right text-gray-500 ">
                            <thead className=" text-xl bg-sky-100 font-semibold  text-sky-950 capitalize ">
                                <tr>
                                    <th scope="col" className="px-6 py-2 w-48 ">
                                        Display
                                    </th>
                                    <th scope="col" className="px-6 py-2"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b ">
                                    <th
                                        scope="row"
                                        className="px-6 py-3 whitespace-nowrap  text-sky-950 text-sm font-semibold   "
                                    >
                                        Type
                                    </th>
                                    <td className="px-6 py-3 text-sky-900 text-sm font-normal">
                                        {`${device.Display.Type}`}
                                    </td>
                                </tr>

                                <tr className="bg-white border-b ">
                                    <th
                                        scope="row"
                                        className="px-6 py-3  whitespace-nowrap  text-sky-950 text-sm font-semibold   "
                                    >
                                        Size
                                    </th>
                                    <td className="px-6 py-3 text-sky-900 text-sm font-normal">
                                        {`${device.Display.Size}`}
                                    </td>
                                </tr>
                                <tr className="bg-white border-b ">
                                    <th
                                        scope="row"
                                        className="px-6 py-3  whitespace-nowrap  text-sky-950 text-sm font-semibold   "
                                    >
                                        Resolution
                                    </th>
                                    <td className="px-6 py-3 text-sky-900 text-sm font-normal">
                                        {`${device.Display.Resolution}`}
                                    </td>
                                </tr>
                                <tr className="bg-white border-b ">
                                    <th
                                        scope="row"
                                        className="px-6 py-3  whitespace-nowrap  text-sky-950 text-sm font-semibold   "
                                    >
                                        Protection
                                    </th>
                                    <td className="px-6 py-3 text-sky-900 text-sm font-normal">
                                        {`${device.Display.Protection}`}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="w-full text-sm text-left border mt-6 rtl:text-right text-gray-500 ">
                            <thead className=" text-xl bg-sky-100 font-semibold  text-sky-950 capitalize ">
                                <tr>
                                    <th scope="col" className="px-6 py-2 w-48 ">
                                        Platform
                                    </th>
                                    <th scope="col" className="px-6 py-2"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b ">
                                    <th
                                        scope="row"
                                        className="px-6 py-3 whitespace-nowrap  text-sky-950 text-sm font-semibold   "
                                    >
                                        OS
                                    </th>
                                    <td className="px-6 py-3 text-sky-900 text-sm font-normal">
                                        {`${device.Platform.OS}`}
                                    </td>
                                </tr>

                                <tr className="bg-white border-b ">
                                    <th
                                        scope="row"
                                        className="px-6 py-3  whitespace-nowrap  text-sky-950 text-sm font-semibold   "
                                    >
                                        Chipset
                                    </th>
                                    <td className="px-6 py-3 text-sky-900 text-sm font-normal">
                                        {`${device.Platform.Chipset}`}
                                    </td>
                                </tr>
                                <tr className="bg-white border-b ">
                                    <th
                                        scope="row"
                                        className="px-6 py-3  whitespace-nowrap  text-sky-950 text-sm font-semibold   "
                                    >
                                        CPU
                                    </th>
                                    <td className="px-6 py-3 text-sky-900 text-sm font-normal">
                                        {`${device.Platform.CPU}`}
                                    </td>
                                </tr>
                                <tr className="bg-white border-b ">
                                    <th
                                        scope="row"
                                        className="px-6 py-3  whitespace-nowrap  text-sky-950 text-sm font-semibold   "
                                    >
                                        GPU
                                    </th>
                                    <td className="px-6 py-3 text-sky-900 text-sm font-normal">
                                        {`${device.Platform.GPU}`}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="w-full text-sm text-left border mt-6 rtl:text-right text-gray-500 ">
                            <thead className=" text-xl bg-sky-100 font-semibold  text-sky-950 capitalize ">
                                <tr>
                                    <th scope="col" className="px-6 py-2 w-48 ">
                                        Memory
                                    </th>
                                    <th scope="col" className="px-6 py-2"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b ">
                                    <th
                                        scope="row"
                                        className="px-6 py-3 whitespace-nowrap  text-sky-950 text-sm font-semibold   "
                                    >
                                        Card slot
                                    </th>
                                    <td className="px-6 py-3 text-sky-900 text-sm font-normal">
                                        {`${device.Memory["Card slot"]}`}
                                    </td>
                                </tr>

                                <tr className="bg-white border-b ">
                                    <th
                                        scope="row"
                                        className="px-6 py-3  whitespace-nowrap  text-sky-950 text-sm font-semibold   "
                                    >
                                        internal
                                    </th>
                                    <td className="px-6 py-3 text-sky-900 text-sm font-normal">
                                        {`${device.Memory.Internal}`}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="w-full text-sm text-left border mt-6 rtl:text-right text-gray-500 ">
                            <thead className=" text-xl bg-sky-100 font-semibold  text-sky-950 capitalize ">
                                <tr>
                                    <th scope="col" className="px-6 py-2 w-48 ">
                                        Main Camera
                                    </th>
                                    <th scope="col" className="px-6 py-2"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b ">
                                    <th
                                        scope="row"
                                        className="px-6 py-3 whitespace-nowrap  text-sky-950 text-sm font-semibold   "
                                    >
                                        Single
                                    </th>
                                    <td className="px-6 py-3 text-sky-900 text-sm font-normal">
                                        {`${device["Main Camera"].Dual}`}
                                    </td>
                                </tr>

                                <tr className="bg-white border-b ">
                                    <th
                                        scope="row"
                                        className="px-6 py-3  whitespace-nowrap  text-sky-950 text-sm font-semibold   "
                                    >
                                        Features
                                    </th>
                                    <td className="px-6 py-3 text-sky-900 text-sm font-normal">
                                        {`${device["Main Camera"].Features}`}
                                    </td>
                                </tr>
                                <tr className="bg-white border-b ">
                                    <th
                                        scope="row"
                                        className="px-6 py-3  whitespace-nowrap  text-sky-950 text-sm font-semibold   "
                                    >
                                        Video
                                    </th>
                                    <td className="px-6 py-3 text-sky-900 text-sm font-normal">
                                        {`${device["Main Camera"].Video}`}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="w-full text-sm text-left border mt-6 rtl:text-right text-gray-500 ">
                            <thead className=" text-xl bg-sky-100 font-semibold  text-sky-950 capitalize ">
                                <tr>
                                    <th scope="col" className="px-6 py-2 w-48 ">
                                        Selfie Camera
                                    </th>
                                    <th scope="col" className="px-6 py-2"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b ">
                                    <th
                                        scope="row"
                                        className="px-6 py-3 whitespace-nowrap  text-sky-950 text-sm font-semibold   "
                                    >
                                        Single
                                    </th>
                                    <td className="px-6 py-3 text-sky-900 text-sm font-normal">
                                        {`${device["Selfie camera"].Single}`}
                                    </td>
                                </tr>

                                <tr className="bg-white border-b ">
                                    <th
                                        scope="row"
                                        className="px-6 py-3  whitespace-nowrap  text-sky-950 text-sm font-semibold   "
                                    >
                                        Video
                                    </th>
                                    <td className="px-6 py-3 text-sky-900 text-sm font-normal">
                                        {`${device["Selfie camera"].Video}`}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="w-full text-sm text-left border mt-6 rtl:text-right text-gray-500 ">
                            <thead className=" text-xl bg-sky-100 font-semibold  text-sky-950 capitalize ">
                                <tr>
                                    <th scope="col" className="px-6 py-2 w-48 ">
                                        Sound
                                    </th>
                                    <th scope="col" className="px-6 py-2"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b ">
                                    <th
                                        scope="row"
                                        className="px-6 py-3 whitespace-nowrap  text-sky-950 text-sm font-semibold   "
                                    >
                                        Loudspeaker
                                    </th>
                                    <td className="px-6 py-3 text-sky-900 text-sm font-normal">
                                        {`${device.Sound.Loudspeaker}`}
                                    </td>
                                </tr>

                                <tr className="bg-white border-b ">
                                    <th
                                        scope="row"
                                        className="px-6 py-3  whitespace-nowrap  text-sky-950 text-sm font-semibold   "
                                    >
                                        3.5mm Jack
                                    </th>
                                    <td className="px-6 py-3 text-sky-900 text-sm font-normal">
                                        {`${device.Sound["3.5mm jack"]}`}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="w-full text-sm text-left border mt-6 rtl:text-right text-gray-500 ">
                            <thead className=" text-xl bg-sky-100 font-semibold  text-sky-950 capitalize ">
                                <tr>
                                    <th scope="col" className="px-6 py-2 w-48 ">
                                        Comms
                                    </th>
                                    <th scope="col" className="px-6 py-2"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b ">
                                    <th
                                        scope="row"
                                        className="px-6 py-3 whitespace-nowrap  text-sky-950 text-sm font-semibold   "
                                    >
                                        WLAN
                                    </th>
                                    <td className="px-6 py-3 text-sky-900 text-sm font-normal">
                                        {`${device.Comms.WLAN}`}
                                    </td>
                                </tr>

                                <tr className="bg-white border-b ">
                                    <th
                                        scope="row"
                                        className="px-6 py-3  whitespace-nowrap  text-sky-950 text-sm font-semibold   "
                                    >
                                        Bluetooth
                                    </th>
                                    <td className="px-6 py-3 text-sky-900 text-sm font-normal">
                                        {`${device.Comms.Bluetooth}`}
                                    </td>
                                </tr>
                                <tr className="bg-white border-b ">
                                    <th
                                        scope="row"
                                        className="px-6 py-3  whitespace-nowrap  text-sky-950 text-sm font-semibold   "
                                    >
                                        Positioning
                                    </th>
                                    <td className="px-6 py-3 text-sky-900 text-sm font-normal">
                                        {`${device.Comms.Positioning}`}
                                    </td>
                                </tr>
                                <tr className="bg-white border-b ">
                                    <th
                                        scope="row"
                                        className="px-6 py-3  whitespace-nowrap  text-sky-950 text-sm font-semibold   "
                                    >
                                        NFC
                                    </th>
                                    <td className="px-6 py-3 text-sky-900 text-sm font-normal">
                                        {`${device.Comms.NFC}`}
                                    </td>
                                </tr>
                                <tr className="bg-white border-b ">
                                    <th
                                        scope="row"
                                        className="px-6 py-3  whitespace-nowrap  text-sky-950 text-sm font-semibold   "
                                    >
                                        Radio
                                    </th>
                                    <td className="px-6 py-3 text-sky-900 text-sm font-normal">
                                        {`${device.Comms.Radio}`}
                                    </td>
                                </tr>
                                <tr className="bg-white border-b ">
                                    <th
                                        scope="row"
                                        className="px-6 py-3  whitespace-nowrap  text-sky-950 text-sm font-semibold   "
                                    >
                                        USB
                                    </th>
                                    <td className="px-6 py-3 text-sky-900 text-sm font-normal">
                                        {`${device.Comms.USB}`}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="w-full text-sm text-left border mt-6 rtl:text-right text-gray-500 ">
                            <thead className=" text-xl bg-sky-100 font-semibold  text-sky-950 capitalize ">
                                <tr>
                                    <th scope="col" className="px-6 py-2 w-48 ">
                                        Features
                                    </th>
                                    <th scope="col" className="px-6 py-2"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b ">
                                    <th
                                        scope="row"
                                        className="px-6 py-3 whitespace-nowrap  text-sky-950 text-sm font-semibold   "
                                    >
                                        Sensors
                                    </th>
                                    <td className="px-6 py-3 text-sky-900 text-sm font-normal">
                                        {`${device.Features.Sensors}`}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="w-full text-sm text-left border mt-6 rtl:text-right text-gray-500 ">
                            <thead className=" text-xl bg-sky-100 font-semibold  text-sky-950 capitalize ">
                                <tr>
                                    <th scope="col" className="px-6 py-2 w-48 ">
                                        Battery
                                    </th>
                                    <th scope="col" className="px-6 py-2"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b ">
                                    <th
                                        scope="row"
                                        className="px-6 py-3 whitespace-nowrap  text-sky-950 text-sm font-semibold   "
                                    >
                                        Type
                                    </th>
                                    <td className="px-6 py-3 text-sky-900 text-sm font-normal">
                                        {`${device.Battery.Type}`}
                                    </td>
                                </tr>

                                <tr className="bg-white border-b ">
                                    <th
                                        scope="row"
                                        className="px-6 py-3  whitespace-nowrap  text-sky-950 text-sm font-semibold   "
                                    >
                                        Charging
                                    </th>
                                    <td className="px-6 py-3 text-sky-900 text-sm font-normal">
                                        {`${device.Battery.Charging}`}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                        <table className="w-full text-sm text-left border mt-6 rtl:text-right text-gray-500 ">
                            <thead className=" text-xl bg-sky-100 font-semibold  text-sky-950 capitalize ">
                                <tr>
                                    <th scope="col" className="px-6 py-2 w-48 ">
                                        Misc
                                    </th>
                                    <th scope="col" className="px-6 py-2"></th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr className="bg-white border-b ">
                                    <th
                                        scope="row"
                                        className="px-6 py-3 whitespace-nowrap  text-sky-950 text-sm font-semibold   "
                                    >
                                        Colors
                                    </th>
                                    <td className="px-6 py-3 text-sky-900 text-sm font-normal">
                                        {`${device.Misc.Colors}`}
                                    </td>
                                </tr>

                                <tr className="bg-white border-b ">
                                    <th
                                        scope="row"
                                        className="px-6 py-3  whitespace-nowrap  text-sky-950 text-sm font-semibold   "
                                    >
                                        Models
                                    </th>
                                    <td className="px-6 py-3 text-sky-900 text-sm font-normal">
                                        {`${device.Misc.Models}`}
                                    </td>
                                </tr>
                                <tr className="bg-white border-b ">
                                    <th
                                        scope="row"
                                        className="px-6 py-3  whitespace-nowrap  text-sky-950 text-sm font-semibold   "
                                    >
                                        Price
                                    </th>
                                    <td className="px-6 py-3 text-sky-900 text-sm font-normal">
                                        {`${device.Misc.Price}`}
                                    </td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Specs;
