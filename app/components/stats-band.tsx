"use client";

import { Clock3, ShieldCheck, Users } from "lucide-react";
import { FadeIn } from "./fade-in";

const stats = [
  {
    title: "創業20年",
    subtitle: "地元に根ざした塗装店",
    icon: ShieldCheck,
  },
  {
    title: "最長10年保証",
    subtitle: "保証書を発行",
    icon: Clock3,
  },
  {
    title: "自社職人施工",
    subtitle: "代表も現場に同行",
    icon: Users,
  },
];

export function StatsBand() {
  return (
    <FadeIn direction="up" className="max-w-6xl mx-auto px-6">
      <div className="relative overflow-hidden rounded-2xl border border-[#e8e1d6] bg-white/80 shadow-[0_20px_50px_-24px_rgba(15,23,42,0.35)]">
        <div className="absolute inset-0 bg-gradient-to-r from-[#f5efe6] via-white to-[#eef1f7] opacity-70" />
        <div className="absolute -right-10 -top-10 h-36 w-36 rounded-full bg-[#cfa968]/20 blur-2xl" />
        <div className="absolute -left-16 bottom-0 h-40 w-40 rounded-full bg-[#0f172a]/5 blur-3xl" />

        <div className="relative grid gap-4 p-6 md:grid-cols-3 md:gap-0 md:divide-x md:divide-[#e8e1d6]">
          {stats.map((item) => (
            <div key={item.title} className="flex items-center gap-4 px-2 py-3 md:justify-center">
              <div className="flex h-11 w-11 items-center justify-center rounded-full bg-[#0f172a] text-white shadow-md shadow-[#0f172a]/20">
                <item.icon size={18} />
              </div>
              <div>
                <p className="text-xs uppercase tracking-[0.2em] text-[#cfa968] font-semibold">{item.subtitle}</p>
                <p className="font-[var(--font-heading)] text-2xl text-[#0f172a] leading-tight">{item.title}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </FadeIn>
  );
}
