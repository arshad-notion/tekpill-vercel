import { getLatestDevices } from "@/db/phoneSpecs";

export default async function BudgetLayout({
    children, // will be a page or nested layout
}: {
    children: React.ReactNode;
}) {
    const latestDevices = await getLatestDevices();

    return (
        <section >
            <div >
                <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-10 bg-white text-black shadow-md pt-6">
                    <h3 className="text-3xl font-semibold pt-3">Choose your Phone Budget</h3>
                    <div className="pt-3 md:grid md:grid-cols-8  sm:grid-cols-2  md:ml-0 ml-12 border-b pb-8">
                        <a href="/budget">
                            <button className={`mr-4 mt-4 w-32 h-10 outline outline-tpblue outline-1 hover:bg-tpblue hover:text-white rounded-full`}>
                                All Devices
                            </button>
                        </a>
                        {["0-10k", "10k-20k", "20k-30k", "30k-40k", "40k-50k", "50k-60k", "60k-70k", "70k-80k", "80k-90k", "90k-100k", "100k-150k", "150k-200k"].map(
                            (range, index) => (
                                <a href={`/budget/${range.toLowerCase().replace(" ", "-")}`} key={index}>
                                    <button className={`mr-4 mt-4 w-32 h-10 outline outline-tpblue outline-1 hover:bg-tpblue hover:text-white rounded-full`}>
                                        {range}
                                    </button>
                                </a>
                            )
                        )}
                    </div>
                </div>

                <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-10 bg-white text-black shadow-md pt-6">
                    <div className="grid md:grid-cols-3 sm:grid-cols-1 gap-10">
                        <div className="md:col-span-2 sm:col-span-1 justify-center">
                            {children}
                        </div>

                        <div className="md:col-span-1 sm:col-span-1">
                            <div className="bg-gray-100 w-full h-60 text-center flex items-center justify-center ">
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
        </section>
    );
}
