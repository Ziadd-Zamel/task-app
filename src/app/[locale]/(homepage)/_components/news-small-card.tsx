import Image from "next/image";
export default function NewsSmallCard() {
  return (
    <div className="flex items-center gap-3">
      {/* Image */}
      <div className="min-w-[90px] h-[75px] rounded-md overflow-hidden">
        <Image
          src="/assets/new.png"
          alt="news"
          width={120}
          height={80}
          className="w-full h-full object-cover"
        />
      </div>

      {/* Text */}
      <div className="flex-1">
        <span className="text-[10px] font-bold text-[#6C757D]">
          14 يونيو 2024
        </span>
        <h3 className="text-sm font-bold text-[#3E3E3E] mt-1">
          «إينوك» توقع اتفاقية مع المزادات لتحسين إجراءات الأعمال{" "}
        </h3>
      </div>
    </div>
  );
}
