"use client";

import { pricingPlans } from "@/app/data/site";
import { Check, CircleDollarSign, Sparkles } from "lucide-react";
import { FadeIn } from "./fade-in";

export function PricingSection() {
  return (
    <section id="pricing" className="relative overflow-hidden bg-[#0f172a] py-28 text-white">
      <div className="absolute inset-0 bg-gradient-to-br from-[#0f172a] via-[#0f172a] to-[#0c1328]" />
      <div className="absolute top-[-6rem] right-[-4rem] h-[22rem] w-[22rem] rounded-full bg-[#cfa968]/20 blur-3xl" />
      <div className="absolute bottom-[-8rem] left-[-6rem] h-[18rem] w-[18rem] rounded-full bg-white/5 blur-3xl" />

      <div className="relative z-10 mx-auto max-w-6xl px-6">
        <div className="flex flex-col items-start gap-4 md:flex-row md:items-end md:justify-between">
          <div>
            <span className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-3 py-1 text-[11px] font-semibold uppercase tracking-[0.25em] text-[#cfa968]">
              <CircleDollarSign size={14} /> 価格表
            </span>
            <h2 className="mt-4 text-4xl font-bold md:text-5xl font-[var(--font-heading)]">費用感が分かる3つの目安プラン</h2>
            <p className="mt-3 text-sm text-zinc-300 md:text-base">
              すべてのプランで「高圧洗浄・下地補修・養生・足場」を含みます。建物の状態に合わせて最適な塗料と工程を組み立てます。
            </p>
          </div>
          <div className="flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs text-zinc-200 backdrop-blur">
            <Sparkles size={14} className="text-[#cfa968]" />
            最長10年保証 / ドローン診断対応
          </div>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-3">
          {pricingPlans.map((plan, idx) => (
            <FadeIn key={plan.name} delay={idx * 120} direction="up" className="h-full">
              <div className="relative flex h-full flex-col justify-between overflow-hidden rounded-sm border border-white/10 bg-white text-[#0f172a] shadow-2xl">
                {plan.tag ? (
                  <div className="absolute right-3 top-3 rounded-full bg-[#cfa968] px-3 py-1 text-[11px] font-bold tracking-wide text-white">
                    {plan.tag}
                  </div>
                ) : null}
                <div className="p-8">
                  <div className="flex items-center gap-3 text-sm font-semibold text-zinc-500">
                    <CircleDollarSign size={16} className="text-[#cfa968]" />
                    想定30坪前後
                  </div>
                  <h3 className="mt-3 text-2xl font-[var(--font-heading)] font-bold">{plan.name}</h3>
                  <p className="mt-2 text-sm text-zinc-500">{plan.detail}</p>
                  <p className="mt-6 text-xl font-bold text-[#0f172a]">{plan.price}</p>
                  <div className="mt-6 space-y-3 text-sm text-[#0f172a]">
                    {plan.features.map((feature) => (
                      <div key={feature} className="flex items-start gap-2">
                        <Check size={16} className="mt-[2px] text-[#cfa968]" />
                        <span>{feature}</span>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="bg-[#0f172a] px-8 py-4 text-sm text-white/80">
                  料金は建物の状態・面積・足場条件で変動します。現地調査後に正式なお見積もりをお出しします。
                </div>
              </div>
            </FadeIn>
          ))}
        </div>

        <div className="mt-10 flex flex-col gap-4 text-sm text-zinc-300 md:flex-row md:items-center md:justify-between">
          <p>各プランともにカラーシミュレーション・保証書発行・近隣挨拶を標準で実施しています。</p>
          <a
            href="/#contact"
            className="inline-flex items-center justify-center gap-2 rounded-sm border border-[#cfa968] px-5 py-3 text-xs font-bold tracking-widest text-[#cfa968] transition-colors hover:bg-[#cfa968] hover:text-white"
          >
            プランの詳しい内訳を聞く
          </a>
        </div>
      </div>
    </section>
  );
}
