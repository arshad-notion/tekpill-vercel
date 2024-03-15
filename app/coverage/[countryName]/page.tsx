import DropdownWithNavigation from "@/app/components/reusableComponent/dropdown";
import { getCountryList, getCoverageByCountry } from "@/db/coverage";
import { ICoverage } from "@/mongoModels/coverage";

const CountryBands = async ({
  params,
}: {
  params: { countryName: string };
}) => {
  const countryList = await getCountryList();
  const countryBands: ICoverage = await getCoverageByCountry(
    params.countryName
  );
  return (
    <>
      <h3 className="text-3xl font-semibold ">
        Network coverage in {countryBands.countryName}
      </h3>

      <p className="pt-6 pb-4 leading-loose">
        The Phone Finder tool offers you access to the large TekPill database,
        where you can sort devices by different features and narrow down the
        results to find just the right phone for you. Use the drop-down tabs on
        the left to select a feature and the results will show up automatically.
      </p>

      <DropdownWithNavigation
        optionList={countryList.map((x) => ({ text: x, value: x }))}
        shouldNavigateOnSelect
        selectedValue={countryBands.countryName as string}
      />

      <div className="relative overflow-x-auto">
        <table className="w-full text-sm text-left border mt-6 rtl:text-right text-gray-500 ">
          <thead className="text-xl text-sky-900 font-bold bg-sky-100 ">
            <tr>
              <th scope="col" className="px-6 py-2 w-44 ">
                {countryBands.countryName}
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
                {countryBands["2g"] ?? "--"}
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
                {countryBands["3g"] ?? "--"}
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
                {countryBands["4g"] ?? "--"}
              </td>
            </tr>
            <tr className="bg-white border-b ">
              <th
                scope="row"
                className="px-6 py-3 font-bold text-sky-900 whitespace-nowrap  "
              >
                5G capabilities
              </th>
              <td className="px-6 py-3 text-sky-900">
                {countryBands["5g"] ?? "--"}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </>
  );
};

export default CountryBands;
