"use client";

import { services } from "@/app/data/site";
import { FadeIn } from "./fade-in";

export function ServicesSection() {
  return (
    <section id="service" className="py-32 bg-white relative">
      <div className="absolute top-0 right-0 w-1/3 h-full bg-zinc-50 -z-0 hidden lg:block" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <FadeIn direction="up">
          <div className="text-center mb-20">
            <span className="text-[#cfa968] font-sans tracking-widest text-xs font-bold">OUR SERVICES</span>
            <h2 className="text-4xl font-bold mt-4 font-[var(--font-heading)] text-[#0f172a]">提供する価値</h2>
          </div>
        </FadeIn>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-0 border border-zinc-200 bg-white shadow-2xl">
          {services.map((item, i) => (
            <div
              key={item.en}
              className="group relative h-80 border-b md:border-b-0 lg:border-r border-zinc-200 last:border-r-0 hover:bg-zinc-50 transition-colors cursor-pointer flex flex-col items-center justify-center text-center p-6 overflow-hidden"
            >
              <div className="text-zinc-100 text-6xl font-[var(--font-heading)] font-bold absolute top-6 left-6 group-hover:text-[#cfa968]/10 transition-colors duration-500">
                0{i + 1}
              </div>
              <div className="relative z-10 transform group-hover:-translate-y-2 transition-transform duration-500">
                <h3 className="text-xl font-bold font-sans tracking-widest mb-2 text-zinc-400 group-hover:text-[#cfa968] transition-colors">
                  {item.en}
                </h3>
                <p className="text-2xl font-[var(--font-heading)] font-bold mb-4 text-[#0f172a]">{item.jp}</p>
                <div className="w-8 h-[1px] bg-zinc-300 mb-4 mx-auto group-hover:w-16 group-hover:bg-[#cfa968] transition-all duration-500" />
                <p className="text-xs text-zinc-500 font-sans max-w-[200px] opacity-0 group-hover:opacity-100 transition-opacity duration-500 transform translate-y-4 group-hover:translate-y-0">
                  {item.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
