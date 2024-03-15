import dbConnect from "@/lib/mongodb";
import { Coverage } from "@/mongoModels/coverage";

export const getCoverageByCountry = async (country: string) => {
  await dbConnect();
  try {
    const updatedCountry = country.replaceAll("-", " ");

    let foundCoverage = await Coverage.findOne({
      countryName: updatedCountry,
    });
    if (!foundCoverage) {
      foundCoverage = await Coverage.findOne({
        countryName: "India",
      });
    }
    return JSON.parse(JSON.stringify(foundCoverage));
  } catch (err) {}
};

export const getCountryList = async (): Promise<string[]> => {
  await dbConnect();

  const countryList = await Coverage.find({}, "countryName");
  return (
    JSON.parse(JSON.stringify(countryList))
      .map((x: any) => x.countryName)
      .sort() || []
  );
};
