"use client";

import { areaItems } from "@/app/data/site";
import { Compass, MapPin, Navigation, Waves } from "lucide-react";
import { FadeIn } from "./fade-in";

export function AreaSection() {
  return (
    <section id="area" className="relative overflow-hidden bg-zinc-50 py-28">
      <div className="absolute inset-0 bg-gradient-to-br from-white via-zinc-50 to-white" />
      <div className="absolute right-[-6rem] top-[-4rem] h-[16rem] w-[16rem] rounded-full bg-[#cfa968]/20 blur-3xl" />
      <div className="absolute bottom-[-6rem] left-[-4rem] h-[14rem] w-[14rem] rounded-full bg-[#0f172a]/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="grid gap-10 md:grid-cols-2 md:items-end">
          <FadeIn direction="up">
            <div className="space-y-4">
              <span className="inline-flex items-center gap-2 rounded-full border border-[#0f172a]/10 bg-white px-3 py-1 text-[11px] font-bold uppercase tracking-[0.25em] text-[#0f172a]">
                <MapPin size={14} className="text-[#cfa968]" /> 対応エリア
              </span>
              <h2 className="text-4xl font-bold text-[#0f172a] md:text-5xl font-[var(--font-heading)]">静岡県東部〜中部を広くカバー</h2>
              <p className="text-sm text-zinc-600 md:text-base">
                海風・火山灰・寒暖差など地域特有の環境を踏まえ、塩害対策や遮熱、ひび割れ対策を組み合わせた施工を行います。エリア外もまずはご相談ください。
              </p>
              <div className="flex flex-wrap gap-3 text-xs text-[#0f172a]/80">
                <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-2"><Waves size={14} className="text-[#cfa968]" />潮風対策</span>
                <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-2"><Navigation size={14} className="text-[#cfa968]" />ドローン診断</span>
                <span className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white px-3 py-2"><Compass size={14} className="text-[#cfa968]" />色選びサポート</span>
              </div>
            </div>
          </FadeIn>

          <FadeIn direction="left" delay={200}>
            <div className="overflow-hidden rounded-sm border border-zinc-200 bg-white shadow-xl">
              <div className="flex items-center justify-between border-b border-zinc-200 px-6 py-4">
                <div>
                  <p className="text-xs uppercase tracking-[0.3em] text-zinc-400">Map</p>
                  <p className="text-lg font-bold text-[#0f172a]">SHIZUOKA EAST / CENTRAL</p>
                </div>
                <MapPin size={20} className="text-[#cfa968]" />
              </div>
              <div className="grid gap-6 p-6 md:grid-cols-2">
                {areaItems.map((area) => (
                  <div key={area.title} className="rounded-sm border border-zinc-200/70 bg-zinc-50 p-4 shadow-sm">
                    <p className="text-xs font-bold uppercase tracking-[0.2em] text-[#cfa968]">Area</p>
                    <h3 className="mt-1 text-lg font-bold text-[#0f172a]">{area.title}</h3>
                    <p className="mt-2 text-sm text-zinc-600">{area.desc}</p>
                    <div className="mt-3 flex flex-wrap gap-2 text-[11px] text-[#0f172a]">
                      {area.coverage.map((city) => (
                        <span key={city} className="rounded-full bg-white px-2.5 py-1 shadow-sm">
                          {city}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </FadeIn>
        </div>

        <div className="mt-10 flex flex-col gap-4 text-sm text-[#0f172a]/70 md:flex-row md:items-center md:justify-between">
          <p>市境・県境付近の物件や法人・テナント物件も対応いたします。現地調査は無料です。</p>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-[#0f172a] px-5 py-3 text-xs font-bold tracking-widest text-[#0f172a] transition-colors hover:bg-[#0f172a] hover:text-white"
          >
            エリア外の相談をする
          </a>
        </div>
      </div>
    </section>
  );
}
