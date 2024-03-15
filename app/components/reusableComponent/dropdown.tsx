"use client";

import { ReactEventHandler, useState } from "react";
import { useRouter } from "next/navigation";
import { getURLFriendlyName } from "@/utils/fileHelper";

type IDropdownWithNavigationProps = {
  selectedValue: string;
  optionList: { value: string; text: string }[];
  shouldNavigateOnSelect: boolean;
  onSelect?(selectedValue: string): void;
};

const DropdownWithNavigation = (props: IDropdownWithNavigationProps) => {
  const router = useRouter();
  const [selectedValue, setSelectedValue] = useState(props.selectedValue);

  const handleOnChange: ReactEventHandler<HTMLSelectElement> = (event) => {
    // console.log((event.target as any).value);
    router.push(((event.target as any).value as string).replaceAll(" ", "-"));
  };
  return (
    <div className="bg-gray-100 w-full p-4 border-dashed border-2   ">
      <h3 className="text-3xl font-semibold">
        Please select the country you are interested in:
      </h3>
      <select
        className="border  outline-tpblue bg-white p-4 mt-4 w-full"
        value={selectedValue}
        onChange={handleOnChange}
      >
        <option>Choose Country</option>
        {props.optionList.map((x) => (
          <option value={x.value} key={x.value}>
            {x.text}
            {/* <Link href={`$/coverage/${getURLFriendlyName(x)}`}>{x}</Link> */}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownWithNavigation;
