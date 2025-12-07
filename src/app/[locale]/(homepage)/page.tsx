import AdvantageSection from "./_components/advantage";
import HeroSection from "./_components/hero-section";
import NewsSection from "./_components/news-section";
import NumbersSection from "./_components/numbers-section";
import TopAuctions from "./_components/top-auctions";

export const dynamic = "force-dynamic";

export default function Page() {
  return (
    <>
      <HeroSection />
      <AdvantageSection />
      <NumbersSection />
      <TopAuctions />
      <NewsSection />
    </>
  );
}
