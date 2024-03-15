import Image from "next/image";
import { BrandType } from "@/db/brands";
import Link from "next/link";

const PhoneBrand = (props: BrandType) => {
  return (
    <div className="md:col-span-1 sm:col-span-1 flex justify-center items-center ">
   
      <Link href={`/phonefinder/${props.name}`}  className="hover:bg-red-500">
        <Image
          src={props.imgUrl}
          alt={props.name}
          width={200}
          height={200}
          className="w-auto h-auto justify-center justify-self-center mx-auto text-center"
        />
      </Link>
      
    </div>
  );
};

export default PhoneBrand;
