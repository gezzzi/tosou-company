"use client";
"use client";

/* eslint-disable @next/next/no-img-element */

import { ArrowUpRight } from "lucide-react";
import { works } from "@/app/data/site";
import { FadeIn } from "./fade-in";

export function WorksSection() {
  return (
    <section id="works" className="py-32 bg-zinc-50 text-[#0f172a]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-4">
          <FadeIn direction="right">
            <div>
              <span className="text-[#cfa968] font-sans tracking-widest text-xs font-bold uppercase">Portfolio</span>
              <h2 className="text-4xl font-bold mt-2 font-[var(--font-heading)]">施工事例</h2>
              <p className="text-zinc-500 mt-4 font-sans text-sm">技術と丁寧さの仕上がりをご覧ください。</p>
            </div>
          </FadeIn>
          <FadeIn direction="left" delay={200}>
            <a
              href="#contact"
              className="hidden md:flex items-center gap-2 font-sans font-bold text-sm border-b border-[#0f172a] pb-1 hover:text-[#cfa968] hover:border-[#cfa968] transition-colors group"
            >
              詳細を問い合わせる
              <ArrowUpRight size={16} className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" />
            </a>
          </FadeIn>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">
          {works.map((work, idx) => (
            <FadeIn
              key={work.id}
              delay={idx * 150}
              direction="up"
              className={idx % 2 === 1 ? "md:translate-y-16" : ""}
            >
              <div className="group cursor-pointer">
                <div className="relative overflow-hidden aspect-[4/3] mb-6 shadow-xl bg-zinc-200">
                  <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors z-10 duration-500" />
                  <img
                    src={work.imageUrl}
                    alt={work.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                  />
                  <div className="absolute bottom-0 left-0 bg-white/95 backdrop-blur px-6 py-4 translate-y-full group-hover:translate-y-0 transition-transform duration-500 z-20 w-full border-t border-[#cfa968] flex justify-between items-center">
                    <span className="text-[#cfa968] text-xs font-bold tracking-widest font-sans block">VIEW DETAILS</span>
                    <ArrowUpRight size={16} className="text-zinc-400" />
                  </div>
                </div>
                <div className="flex justify-between items-start border-t border-zinc-300 pt-4">
                  <div>
                    <h3 className="text-2xl font-bold group-hover:text-[#cfa968] transition-colors font-[var(--font-heading)] text-[#0f172a]">
                      {work.title}
                    </h3>
                    <p className="text-zinc-500 font-sans text-xs mt-2 tracking-wide uppercase">{work.category}</p>
                  </div>
                  <div className="w-10 h-10 rounded-full border border-zinc-300 flex items-center justify-center text-zinc-400 group-hover:bg-[#0f172a] group-hover:text-white group-hover:border-[#0f172a] transition-all duration-300">
                    <ArrowUpRight size={18} />
                  </div>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-24 text-center md:hidden">
          <button className="bg-[#0f172a] text-white px-8 py-4 w-full font-bold">もっと見る</button>
        </div>
      </div>
    </section>
  );
}
