import { getBrandList } from "@/db/brands";
import PhoneBrand from "../components/reusableComponent/PhoneBrand";

export default async function PhoneFinderLayout({
  children, // will be a page or nested layout
}: {
  children: React.ReactNode;
}) {
  const brandList = await getBrandList();

  return (
    <section>
      <div className="max-w-7xl mx-auto px-4 py-8 md:px-6 lg:px-8 xl:px-10 bg-white shadow-md">
        <div className="grid md:grid-cols-2 sm:grid-cols-2 gap-12 ">
          <div className="md:col-span-1 sm:col-span-1 text-3xl font-bold">
            Phone Finder
          </div>
          <div className="md:col-span-1 sm:col-span-1 text-right">
            <a href="#" className="text-gray-400 font-medium">
              Total results:
              <span className="text-fuchsia-800 font-bold">156516</span>{" "}
            </a>{" "}
          </div>
        </div>

        <p className="mt-3 leading-loose border-b pb-8">
          The Phone Finder tool offers you access to the large Tekpill database,
          where you can sort devices by different features and narrow down the
          results to find just the right phone for you. Use the drop-down tabs
          on the left to select a feature and the results will show up
          automatically.
        </p>

        <div className="grid md:grid-cols-5 sm:grid-cols-1 gap-4 mt-8 md:mb-48 justify-center ">
          {brandList.map((brand) => (
            <PhoneBrand {...brand} key={brand.name} />
          ))}
        </div>

        {children}
      </div>
    </section>
  );
}
