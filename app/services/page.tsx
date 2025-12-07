import { ContactSection } from "@/app/components/contact";
import { FlowSection } from "@/app/components/flow";
import { Navbar } from "@/app/components/navbar";
import { PageHero } from "@/app/components/page-hero";
import { PricingSection } from "@/app/components/pricing";
import { ServicesSection } from "@/app/components/services";
import { SiteFooter } from "@/app/components/site-footer";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-[#0f172a]">
      <Navbar heroLoaded />
      <PageHero
        tag="SERVICES"
        title="建物を長く美しく保つ塗装サービス"
        description="外壁・屋根・防水・付帯部までワンストップ。劣化状況とご予算に合わせて最適な塗料グレードと工程を提案し、近隣配慮と保証まで徹底します。"
      />

      <main className="space-y-20 pb-24 pt-10 md:space-y-24">
        <ServicesSection />
        <PricingSection />
        <FlowSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
