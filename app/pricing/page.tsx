import { ContactSection } from "@/app/components/contact";
import { FlowSection } from "@/app/components/flow";
import { Navbar } from "@/app/components/navbar";
import { PageHero } from "@/app/components/page-hero";
import { PricingSection } from "@/app/components/pricing";
import { SiteFooter } from "@/app/components/site-footer";

export default function PricingPage() {
  return (
    <div className="min-h-screen bg-white text-[#0f172a]">
      <Navbar heroLoaded />
      <PageHero
        tag="PRICING"
        title="費用の目安と標準に含まれる内容"
        description="高圧洗浄・下地補修・養生・足場・近隣挨拶を標準セット。建物の状態やご要望に合わせて正式なお見積もりを作成します。"
      />

      <main className="space-y-20 pb-24 pt-10 md:space-y-24">
        <PricingSection />
        <FlowSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
