"use client";
import AuctionCard from "@/components/common/auction-card";
import SectionTitle from "@/components/common/section-title";
import { Button } from "@/components/ui/button";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { useLocale } from "next-intl";

export default function TopAuctions() {
  const locale = useLocale();

  return (
    <section className="pb-14 pt-20 bg-[#F7F7F7]">
      <div className="box-container text-center">
        <div className="flex w-full justify-center -mb-7">
          <SectionTitle title="أهم مزاداتنا" />
        </div>

        <div className="relative">
          <div className="">
            <Carousel
              opts={{
                align: "center",
                direction: locale === "ar" ? "rtl" : "ltr",
                slidesToScroll: 1,
              }}
              className="w-full max-w-[1000px] mx-auto px-12 sm:px-16 py-20"
            >
              <CarouselContent className="">
                {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((item) => (
                  <CarouselItem
                    key={item}
                    className="md:basis-1/2 lg:basis-1/3"
                  >
                    <AuctionCard />
                  </CarouselItem>
                ))}
              </CarouselContent>
              <CarouselPrevious className="absolute -left-4 right-auto top-1/2 rounded-none -translate-y-1/2 w-12 h-32 bg-[#B8B8B8] hover:bg-[#A0A0A0] border-none text-white" />
              <CarouselNext className="absolute -right-4 left-auto top-1/2 rounded-none -translate-y-1/2 w-12 h-32 bg-[#B8B8B8] hover:bg-[#A0A0A0] border-none text-white" />
            </Carousel>
          </div>

          <div className="mt-10">
            <Button className="py-6 px-9 text-lg font-bold">
              عرض كل المزادات
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
