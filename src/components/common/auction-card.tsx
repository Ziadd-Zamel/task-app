import Image from "next/image";
import { Button } from "../ui/button";

export default function AuctionCard() {
  return (
    <div className=" w-full md:w-[250px] bg-white  rounded-lg transition p-4 flex flex-col">
      {/* Car Image */}
      <div className="w-full h-[200px] rounded-sm">
        <Image
          src="/assets/car.png"
          alt="car"
          width={260}
          height={165}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Title */}
      <h3 className="text-start text-[#3E3E3E] font-bold mt-3">مرسيدس بنز</h3>

      {/* Serial Number */}
      <p className="text-start text-lg font-bold text-[#868686] mt-1">
        التسلسل : 485194{" "}
      </p>

      {/* Price + Time */}
      <div className="mt-3 flex items-center justify-between ">
        <span className="text-sm w-1/2 font-bold text-[#3E3E3E] border py-1">
          21:9:ث
        </span>

        <span className="text-base w-1/2 font-bold text-[#3E3E3E] border py-0.5">
          50000
          <span className="mx-1">جنيه</span>
        </span>
      </div>

      {/* Button */}
      <Button className="mt-3 w-fit px-5 h-6 self-center bg-main rounded-sm text-white font-bold flex items-center justify-center gap-2 hover:bg-main/90">
        <Image src="/assets/bid.svg" alt="bid" width={15} height={15} />
        مزاد
      </Button>
    </div>
  );
}
