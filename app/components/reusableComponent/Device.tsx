import { getURLFriendlyName } from "@/utils/fileHelper";
import Image from "next/image";
import Link from "next/link";
import { FunctionComponent } from "react";

type DeviceProps = {
  name: string;
  imgUrl: string;
  id: string;
};

export const Devices: FunctionComponent<DeviceProps> = (props) => {
  return (
    <Link href={getURLFriendlyName(`/specs/${props.name} ${props.id}`)}>
      <div className="md:col-span-1 sm:col-span-1 text-center rounded-lg">
        <Image
          src={props.imgUrl}
          alt={props.name}
          width={200}
          height={100}
          className="w-full p-4 h-28"
        />
        <h3 className="text-xs font-bold pb-4">{props.name}</h3>
      </div>
    </Link>
  );
};
