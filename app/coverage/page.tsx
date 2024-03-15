import { IpData, getCountryName } from "@/utils/countries";
import { headers } from "next/headers";
import { RedirectType, redirect } from "next/navigation";

const coverage = async () => {
  const header = headers();
  let ip = (header.get("x-forwarded-for") ?? "127.0.0.1").split(",")[0];
  let countryName = "";
  if (ip === "::1") {
    countryName = getCountryName(
      Intl.DateTimeFormat().resolvedOptions().timeZone
    );
  } else {
    try {
      ip = ip.replace("::ffff:", "");
      const response = await fetch(
        `https://ipinfo.io/${ip}?token=d038ad4990ecca`
      );
      const countryCodeObj: IpData = await response.json();
      countryName = getCountryName(countryCodeObj.timezone);
    } catch (err) {
      redirect(`/coverage/${countryName ?? "India"}`, RedirectType.replace);
    }
  }

  redirect(`/coverage/${countryName ?? "India"}`, RedirectType.replace);
};

export default coverage;
