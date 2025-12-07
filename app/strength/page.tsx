import { AboutSection } from "@/app/components/about";
import { ContactSection } from "@/app/components/contact";
import { FeaturesSection } from "@/app/components/features";
import { FlowSection } from "@/app/components/flow";
import { Navbar } from "@/app/components/navbar";
import { PageHero } from "@/app/components/page-hero";
import { SiteFooter } from "@/app/components/site-footer";

export default function StrengthPage() {
  return (
    <div className="min-h-screen bg-white text-[#0f172a]">
      <Navbar heroLoaded />
      <PageHero
        tag="STRENGTH"
        title="藤丸世塗装の強み"
        description="診断・提案・施工・アフターまで自社職人が責任を持つワンストップ体制。見えない下地づくりを重視し、静岡の気候に合わせた塗料選定と保証で10年先の美観を守ります。"
      />

      <main className="space-y-20 pb-24 pt-10 md:space-y-24">
        <FeaturesSection />
        <AboutSection />
        <FlowSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
