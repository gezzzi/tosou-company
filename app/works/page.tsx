import { ContactSection } from "@/app/components/contact";
import { Navbar } from "@/app/components/navbar";
import { PageHero } from "@/app/components/page-hero";
import { SiteFooter } from "@/app/components/site-footer";
import { WorksSection } from "@/app/components/works";

export default function WorksPage() {
  return (
    <div className="min-h-screen bg-white text-[#0f172a]">
      <Navbar heroLoaded />
      <PageHero
        tag="WORKS"
        title="施工事例と仕上がりの質"
        description="外壁・屋根・防水・付帯部まで施工した事例をピックアップ。素材や環境に合わせた塗料選定と、仕上がりの質をぜひご覧ください。"
      />

      <main className="space-y-20 pb-24 pt-10 md:space-y-24">
        <WorksSection />
        <ContactSection />
      </main>

      <SiteFooter />
    </div>
  );
}
