
import { unstable_noStore as noStore } from 'next/cache';
import { IPhoneSpecs } from '@/types/phoneSpecs';
import { getDevicesByPriceRange } from '@/db/budget';
import Link from 'next/link';

const BudgetPage = async ({ params }: { params: { priceRange?: string } }) => {
    noStore();

    console.log('Received params:', params);

    const parsePriceRange = (range?: string) => {
        if (!range) return [0, 100];
        const [min, max] = range.split('-').map(val => parseInt(val, 10));
        return [min * 1000, max * 1000];
    };
    const [minPrice, maxPrice] = parsePriceRange(params?.priceRange);
    console.log('Parsed min and max:', minPrice, maxPrice);

    try {
        const devices: IPhoneSpecs[] = await getDevicesByPriceRange(minPrice, maxPrice);

        console.log('Fetched devices:', devices);

        return (
            <>
                <h1 className='text-3xl font-semibold pb-4'>Mobiles in the price range: {`${minPrice / 1000}k-${maxPrice / 1000}k`}</h1>

                <div className="grid md:grid-cols-1 sm:grid-cols-1  gap-6">
                    {devices.map((spec, index) => (
                        <div className="border-b" key={index}>

                            <div className="flex ">
                                <Link href={`/specs/${spec.customId}`}>
                                    {spec.images.map((imageUrl, imageIndex) => (
                                        <img className="h-36 w-32 mb-10 mr-40 mt-6"
                                            key={imageIndex}
                                            src={imageUrl}
                                            alt={`Image ${imageIndex + 1}`}
                                            width={200}
                                            height={200}
                                        />
                                    ))}
                                </Link>
                                <div>
                                    <div className="md:col-span-3 sm:col-span-1 md:flex block  mt-6">
                                        <div className="grid md:grid-cols-4 sm:grid-cols-1 md:gap-6 gap-2 ">
                                            <div className=" md:col-start-1 md:col-end-3">
                                                <h1 className="mt-2">{`${spec.brand} ${spec.model}`} </h1>
                                            </div>
                                            <div className=" md:col-start-3 md:ml-12">
                                                <h1 className=" md:mt-2"> {`${spec.Misc.Price.split('/').slice(0, 1)}`}</h1>
                                            </div>
                                            <div className="mb-3 md:mt-0  md:col-end-5  md:ml-2">
                                                <Link href="">
                                                    <button className=" p-2 px-4 inline-flex rounded-sm bg-tpblue hover:bg-[#0647A9] text-center text-white text-base font-semibold">Buy Now  <span><img className="pl-2 pt-1" src="/specs-img/Union_1.svg" alt="" /></span></button>
                                                </Link>
                                            </div>
                                        </div>

                                    </div>
                                    <div className="md:col-span-3 sm:col-span-1  leading-loose mb-4">
                                        <div className="">
                                            <h1 className=" text-gray-600  ">Key Specs</h1>
                                        </div>
                                        {/* <p className="border-b   text-sm font-semibold">Space</p> */}
                                        <div className="grid md:grid-cols-4 sm:grid-cols-1 gap-2 mt-2 md:ml-0   ">
                                            <div className="">Performance

                                                <ul className=" text-xs md:h-28 sm:h-auto overflow-y-auto  leading-normal text-gray-600">
                                                    <li className="pt-1 ">{`${spec.Platform.CPU}`}.</li>
                                                    {/* <li className="pt-1 ">{`${spec.Platform.Chipset}`}.</li> */}
                                                    {/* <li className="pt-1 ">{`${spec.Platform.GPU}`}.</li> */}
                                                </ul>
                                            </div>


                                            <div className="">Display
                                                <ul className=" text-xs md:h-28 sm:h-auto  overflow-y-auto leading-normal text-gray-600">
                                                    <li className="pt-1 ">{`${spec.Display.Size}`}. </li>
                                                    {/* <li className="pt-1">{`${spec.Display.Type}`}.</li> */}
                                                    {/* <li className="pt-1">{`${spec.Display.Resolution}`}.</li> */}
                                                </ul>
                                            </div>

                                            <div className="">Camera
                                                <ul className=" text-xs md:h-28 sm:h-auto overflow-y-auto  leading-normal text-gray-600">
                                                    <li className="pt-1">{`${spec["Main Camera"].Dual}`}.</li>
                                                    {/* <li className="pt-1">{`${spec["Main Camera"].Features}`}.</li> */}
                                                    {/* <li className="pt-1">{`${spec["Selfie camera"].Single}`}Front Camera.</li> */}
                                                </ul>
                                            </div>

                                            <div className="">Battery
                                                <ul className=" text-xs md:h-28 sm:h-auto  overflow-y-auto leading-normal text-gray-600">
                                                    <li className="pt-1">{`${spec.Battery.Type}`}.</li>
                                                    {/* <li className="pt-1">{`${spec.Battery.Charging}`}. </li> */}
                                                </ul>
                                            </div>
                                            <div className="md:col-start-4  md:ml-4 ">
                                                <Link href={`/specs/${spec.customId}`}> <div className="md:ml-7 inline-flex text-right md:mr-0 mr-4 text-tpblue text-base font-normal  ">View More <span><img className="pt-2 pl-2" src="/specs-img/Polygon_3.svg" alt="" /></span> </div></Link>
                                            </div>
                                        </div>

                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </>
        );
    } catch (error: any) {
        console.error('Error fetching devices by price range:', error);

        return (
            <div>
                Error fetching devices. Please try again. Error: {error.message}
            </div>
        );
    }
};

export default BudgetPage;
