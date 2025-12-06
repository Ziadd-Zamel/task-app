import SectionTitle from "@/components/common/section-title";
import Image from "next/image";

export default function NumbersSection() {
  const stats = [
    {
      id: 4,
      value: "+ 5 مليون",
      label: "إجمالي المستخدمين",
      icon: "/assets/user.png",
      alt: "إجمالي المستخدمين",
    },
    {
      id: 3,
      value: "4000 +",
      label: "مزاد تم بيعه",
      icon: "/assets/auction.png",
      alt: "عدد المزادات المباعة",
    },
    {
      id: 2,
      value: "+ 20",
      label: "عاماً من الخبرة",
      icon: "/assets/experiance.png",
      alt: "سنوات الخبرة",
    },
    {
      id: 1,
      value: "21",
      label: "فرع",
      icon: "/assets/office.svg",
      alt: "عدد الفروع",
    },
  ];

  return (
    <section className="bg-main py-8">
      <div className="box-container gap-12 flex flex-col items-center text-white">
        {/* Title */}
        <SectionTitle title="أرقام منصة مزادات" />

        {/* Numbers */}
        <div className="max-w-5xl w-full">
          <div className="flex items-center justify-between w-full flex-wrap gap-6">
            {stats.map((item) => (
              <div key={item.id} className="flex items-center gap-4">
                <Image
                  src={item.icon}
                  alt={item.alt}
                  width={48}
                  height={48}
                  className="w-10 h-10 md:w-12 md:h-12"
                />
                <div className="text-start">
                  <div className="text-lg md:text-xl font-bold">
                    {item.value}
                  </div>
                  <div className="text-xs md:text-sm text-[#C1C2C3] font-bold">
                    {item.label}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
