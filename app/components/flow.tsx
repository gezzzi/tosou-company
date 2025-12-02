"use client";

import { flowSteps } from "@/app/data/site";
import { FadeIn } from "./fade-in";

export function FlowSection() {
  return (
    <section className="py-24 bg-white border-t border-zinc-100">
      <div className="max-w-5xl mx-auto px-6">
        <FadeIn direction="up">
          <h2 className="text-center text-3xl font-[var(--font-heading)] font-bold mb-16 text-[#0f172a]">施工までの流れ</h2>
        </FadeIn>
        <div className="relative">
          <div className="absolute left-[19px] top-0 bottom-0 w-[2px] bg-zinc-100 md:left-1/2 md:-ml-[1px]" />

          {flowSteps.map((item, idx) => (
            <FadeIn key={item.step} delay={idx * 100} direction={idx % 2 === 0 ? "left" : "right"}>
              <div
                className={`relative flex items-start mb-12 md:mb-0 ${
                  idx % 2 === 0 ? "md:flex-row-reverse" : ""
                } md:justify-between group`}
              >
                <div className="w-[40px] h-[40px] md:w-[60px] md:h-[60px] rounded-full bg-white border-2 border-[#cfa968] flex items-center justify-center text-[#cfa968] font-bold z-10 shrink-0 shadow-lg group-hover:scale-110 transition-transform duration-300">
                  {item.step}
                </div>
                <div className={`ml-6 md:ml-0 md:w-[45%] ${idx % 2 === 0 ? "md:text-left" : "md:text-right"} pl-4 md:pl-0`}>
                  <h3 className="text-xl font-bold text-[#0f172a] mb-2 font-[var(--font-heading)] group-hover:text-[#cfa968] transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-zinc-600 text-sm leading-relaxed font-sans">{item.text}</p>
                </div>
              </div>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
