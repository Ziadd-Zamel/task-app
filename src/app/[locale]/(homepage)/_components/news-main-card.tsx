import Image from "next/image";
export default function NewsMainCard() {
  return (
    <div className="bg-white rounded-lg p-2 sm:p-7 h-full">
      <Image
        src="/assets/main-new.png"
        alt="news"
        width={800}
        height={400}
        className="object-cover w-full h-[380px]"
      />

      <span className="text-sm text-[#6C757D] font-bold">19 يوليو 2024</span>

      <h3 className="text-lg font-bold text-[#3E3E3E] mt-2">
        المناعي: &#34;يوم عهد الاتحاد&rdquo; مناسبة وطنية نستذكر فيها التضحيات
      </h3>

      <p className="text-sm text-[#6C757D] font-bold">
        ثمن سعادة عبد الله مطر المناعي رئيس مجلس الإدارة العضو المنتدب للإمارات
        للمزادات، إعلان صاحب السمو...
      </p>
    </div>
  );
}
