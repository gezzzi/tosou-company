"use client";

import { FadeIn } from "./fade-in";

type Props = {
  tag: string;
  title: string;
  description: string;
};

export function PageHero({ tag, title, description }: Props) {
  return (
    <section className="relative overflow-hidden bg-[#0f172a] text-white">
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#0f172a] to-[#0b1226]" />
        <div className="absolute right-[-6rem] top-[-8rem] h-[22rem] w-[22rem] rounded-full bg-[#cfa968]/15 blur-3xl" />
        <div className="absolute left-[-10rem] bottom-[-10rem] h-[26rem] w-[26rem] rounded-full bg-white/5 blur-[120px]" />
      </div>

      <div className="relative z-10 mx-auto max-w-6xl px-6 pt-28 pb-16 md:pt-32 md:pb-20">
        <FadeIn direction="up">
          <span className="inline-flex items-center gap-3 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-[11px] font-semibold uppercase tracking-[0.3em] text-[#cfa968]">
            {tag}
          </span>
          <h1 className="mt-6 text-4xl font-[var(--font-heading)] font-bold leading-tight md:text-5xl">{title}</h1>
          <p className="mt-4 max-w-3xl text-base text-zinc-200 md:text-lg leading-relaxed">{description}</p>
        </FadeIn>
      </div>
    </section>
  );
}
