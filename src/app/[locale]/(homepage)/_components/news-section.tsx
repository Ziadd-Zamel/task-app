import SectionTitle from "@/components/common/section-title";
import NewsSmallCard from "./news-small-card";
import NewsMainCard from "./news-main-card";
export default function NewsSection() {
  return (
    <section className="pb-40 pt-10 bg-[#F7F7F7]">
      <div className="box-container">
        {/* Title */}

        <div className="flex w-full justify-center mb-12">
          <SectionTitle
            title="أخبار"
            className="text-3xl"
            lineWidth="w-[100px]"
          />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:items-start">
          {/* Right Main Card */}
          <div className="lg:col-span-2 order-1">
            <NewsMainCard />
          </div>

          {/* Left Small Cards List */}
          <div className="lg:col-span-1 order-2 space-y-2 bg-white p-4 rounded-lg">
            {[1, 2, 3, 4, 5, 6].map((i) => (
              <NewsSmallCard key={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
