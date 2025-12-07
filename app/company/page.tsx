import { AboutSection } from "@/app/components/about";
import { CompanySection } from "@/app/components/company";
import { ContactSection } from "@/app/components/contact";
import { Navbar } from "@/app/components/navbar";
import { PageHero } from "@/app/components/page-hero";
import { SiteFooter } from "@/app/components/site-footer";

export default function CompanyPage() {
  return (
    <div className="min-h-screen bg-white text-[#0f172a]">
      <Navbar heroLoaded />
      <PageHero
        tag="COMPANY"
        title="会社案内と代表メッセージ"
        description="富士市で創業し、自社職人による責任施工と地域密着のサポートを続けています。住宅から法人案件まで、安心してお任せください。"
      />

      <main className="space-y-20 pb-24 pt-10 md:space-y-24">
        <CompanySection />
        <AboutSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
