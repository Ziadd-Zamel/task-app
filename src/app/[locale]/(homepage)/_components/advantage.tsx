import { cn } from "@/lib/utils/utils";
import Image from "next/image";

export default function AdvantageSection() {
  const advantages = [
    {
      id: "01",
      title: "المشاركة عن بعد",
      description: "بإمكانك المزايدة بشكل إلكتروني في أي وقت ومن أي مكان",
      bgColor: "bg-[#046E925C]",
    },
    {
      id: "02",
      title: "المزايدة على أكثر من مزاد في نفس الوقت",
      description:
        "يمكنك المزايدة على عدة مزادات مختلفة عبر المنصة في نفس الوقت",
      bgColor: "bg-[#046E925C]",
    },
    {
      id: "03",
      title: "وسائل دفع إلكترونية",
      description:
        "توفر المنصة وسائل دفع إلكترونية آمنة يمكنك من خلالها شحن محفظتك واسترجاع المبلغ بكل أمان",
      bgColor: "bg-[#A6252C66]",
    },
  ];

  return (
    <section className="relative z-0 pb-20 -mt-20 bg-[#F7F7F7] overflow-hidden">
      <div className="hidden md:block top-3 absolute inset-0 pointer-events-none overflow-hidden -z-10">
        <Image
          src="/assets/line.png"
          alt="background line"
          width={1550}
          height={0}
          className="2xl:w-full w-[1550px]"
        />
      </div>

      <div className="box-container">
        <div className="flex flex-col-reverse lg:flex-row gap-12 lg:gap-10 items-center">
          {/* Right Side - Content */}
          <div className="flex-1 relative">
            {/* Title */}
            <h2 className="text-[22px] font-bold text-[#3E3E3E] mb-4">
              لماذا منصة مزادات احسن منصة مزادات في العالم
            </h2>
            <p className="text-sm font-bold text-[#6C757D] mb-12 leading-relaxed">
              تتيح لك منصة المزاد الإلكتروني المشاركة في المزادات المطروحة في أي
              وقت ومن أي مكان بكل سهولة
            </p>

            {/* Advantages Cards */}
            <div className="space-y-6">
              {advantages.map((advantage) => (
                <div
                  key={advantage.id}
                  className={`flex items-center px-5 bg-[#FFFFFF] gap-0 rounded-xl hover:shadow-md transition-all duration-300 overflow-hidden`}
                >
                  {/* Number Badge  */}
                  <div
                    className={cn(
                      "text-xl font-bold w-10 h-10 text-second rounded-sm flex items-center justify-center",
                      advantage.bgColor
                    )}
                  >
                    {advantage.id}
                  </div>
                  {/* Card Content */}
                  <div className="flex-1  rounded-l-xl p-4">
                    <h3 className="text-lg font-bold text-[#3E3E3E] mb-2">
                      {advantage.title}
                    </h3>
                    <p className="text-sm font-bold text-[#6C757D] leading-relaxed">
                      {advantage.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Left Side - Image */}
          <div className="relative flex-1">
            <Image
              src="/assets/why-us.png"
              alt="Why Mazadat"
              width={600}
              height={500}
              className="w-full h-[400px] -mt-4 rounded-lg"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
