import { AreaSection } from "@/app/components/area";
import { ContactSection } from "@/app/components/contact";
import { Navbar } from "@/app/components/navbar";
import { PageHero } from "@/app/components/page-hero";
import { SiteFooter } from "@/app/components/site-footer";

export default function AreaPage() {
  return (
    <div className="min-h-screen bg-white text-[#0f172a]">
      <Navbar heroLoaded />
      <PageHero
        tag="AREA"
        title="静岡県東部〜中部の気候に合わせた施工"
        description="潮風や火山灰、寒暖差など地域特有の環境に合わせ、塩害対策・遮熱・ひび割れ対策を組み合わせてご提案します。エリア外もご相談ください。"
      />

      <main className="space-y-20 pb-24 pt-10 md:space-y-24">
        <AreaSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
