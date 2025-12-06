"use client";
import { Button } from "@/components/ui/button";
import { useIsMobile } from "@/hooks/use-mobile";
import Image from "next/image";
import Link from "next/link";

export default function HeroSection() {
  const auctionCards = [
    { id: 1, count: "1068", category: "مركبات", date: "فب،س،21خوت" },
    { id: 2, count: "1068", category: "مركبات", date: "فب،س،21خوت" },
    { id: 3, count: "1068", category: "مركبات", date: "فب،س،21خوت" },
    { id: 4, count: "1068", category: "مركبات", date: "فب،س،21خوت" },
    { id: 5, count: "1068", category: "مركبات", date: "فب،س،21خوت" },
    { id: 6, count: "1068", category: "مركبات", date: "فب،س،21خوت" },
    { id: 7, count: "1068", category: "مركبات", date: "فب،س،21خوت" },
    { id: 8, count: "1068", category: "مركبات", date: "فب،س،21خوت" },
    { id: 9, count: "1068", category: "مركبات", date: "فب،س،21خوت" },
    { id: 10, count: "1068", category: "مركبات", date: "فب،س،21خوت" },
    { id: 11, count: "1068", category: "مركبات", date: "فب،س،21خوت" },
    { id: 12, count: "1068", category: "مركبات", date: "فب،س،21خوت" },
  ];
  const isMobile = useIsMobile();
  const cardsToShow = isMobile
    ? auctionCards.slice(0, 4)
    : auctionCards.slice(0, 12);

  return (
    <section className="relative h-[90vh] sm:h-[120vh] bg-white">
      {/* Background Image Section  */}
      <div
        className="absolute top-0 left-0 w-full h-[45vh] sm:h-[60vh]"
        style={{
          backgroundImage: "url('/assets/bg-image.png')",
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
        }}
      ></div>

      {/* White Bottom Section  */}
      <div className="absolute bottom-0 left-0 w-full h-[45vh] sm:h-[60vh] bg-white"></div>

      {/* Cards Container */}
      <div className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[95%] md:w-[90%] lg:w-[85%] max-w-7xl z-20">
        <div className=" rounded-xl shadow-2xl p-4 md:p-6 border-5 border-[#EFEFEF]">
          {/* Grid of Cards */}
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-4 gap-3 md:gap-4">
            {cardsToShow.map((card) => (
              <Link
                key={card.id}
                href={`/auction/${card.id}`}
                className="group"
              >
                <div className="bg-[#EFEFEF] flex px-1 py-2 flex-col items-center rounded-lg shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border-2 border-gray-200 hover:border-second">
                  {/* Car Icon */}
                  <Image
                    src="/assets/car.svg"
                    alt="Car"
                    width={150}
                    height={60}
                    className="sm:w-[150px] w-[70px]"
                  />

                  {/* Card Content */}
                  <div className="self-start w-full">
                    <div className="flex items-center  gap-2 mt-4">
                      <span className="text-[#3E3E3E] font-bold text-xs md:text-base">
                        {card.category}
                      </span>
                      <span className="border-main border text-main text-sm font-bold px-1 rounded">
                        {card.count}
                      </span>
                    </div>
                    <div className="flex flex-wrap justify-between sm:flex-row flex-col w-full mt-3">
                      <p className=" text-sm font-bold text-[#3E3E3E]">
                        {card.date}
                      </p>
                      <Button className=" w-full sm:w-20 mt-4 sm:mt-0 bg-main h-6 rounded-sm hover:bg-main/80 ">
                        <Image
                          src="/assets/bid.svg"
                          alt="bid"
                          width={15}
                          height={15}
                        />
                        مزاد
                      </Button>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
