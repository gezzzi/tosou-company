"use client";

import { features } from "@/app/data/site";
import { FadeIn } from "./fade-in";

export function FeaturesSection() {
  return (
    <section className="py-24 bg-zinc-50 border-y border-zinc-100">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-3 gap-8 md:gap-12">
          {features.map((feature, idx) => (
            <FadeIn key={feature.title} delay={idx * 150} direction="up" className="h-full">
              <div className="group h-full p-8 bg-white border border-zinc-200 hover:border-[#cfa968]/50 hover:shadow-2xl hover:-translate-y-2 transition-all duration-500 relative overflow-hidden rounded-sm">
                <div className="absolute -right-10 -bottom-10 opacity-[0.05] group-hover:opacity-[0.12] group-hover:scale-110 transition-all duration-700 text-zinc-900">
                  <feature.icon size={150} />
                </div>

                <div className="flex items-center gap-4 mb-6 relative z-10">
                  <div className="w-12 h-12 rounded-full bg-zinc-50 border border-zinc-200 flex items-center justify-center text-zinc-600 group-hover:bg-[#cfa968] group-hover:text-white group-hover:border-[#cfa968] transition-colors shadow-sm duration-300">
                    <feature.icon size={24} />
                  </div>
                  <span className="text-[#cfa968] font-sans text-xs tracking-[0.2em] font-bold">{feature.sub}</span>
                </div>

                <h3 className="text-2xl font-bold mb-4 font-[var(--font-heading)] text-[#0f172a] relative z-10">
                  {feature.title}
                </h3>
                <p className="text-zinc-600 text-sm leading-7 font-sans relative z-10">{feature.desc}</p>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
