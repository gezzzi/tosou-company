"use client";
"use client";

/* eslint-disable @next/next/no-img-element */

import { FadeIn } from "./fade-in";

export function AboutSection() {
  return (
    <section id="about" className="py-24 md:py-32 bg-white relative overflow-hidden">
      <div className="absolute top-20 left-10 text-[8rem] md:text-[14rem] font-bold text-zinc-50 font-[var(--font-heading)] select-none pointer-events-none leading-none opacity-50">
        PRIDE
      </div>
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div className="order-2 md:order-1 relative">
            <FadeIn direction="right" delay={200}>
              <div className="aspect-[4/5] bg-zinc-100 relative z-10 overflow-hidden rounded-sm shadow-2xl group">
                <img
                  src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=900&q=80"
                  alt="塗装職人"
                  className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500" />
                <div className="absolute bottom-6 left-6 bg-white/95 text-[#0f172a] px-5 py-3 font-bold font-sans text-xs tracking-widest shadow-lg border-l-2 border-[#cfa968] backdrop-blur-sm">
                  MASTER CRAFTSMAN
                </div>
              </div>
              <div className="hidden md:block absolute top-10 left-10 w-[80%] h-[90%] border border-zinc-200 -z-10 translate-y-8 -translate-x-8" />
            </FadeIn>
          </div>

          <div className="order-1 md:order-2">
            <FadeIn direction="left">
              <span className="text-[#cfa968] font-sans tracking-widest text-xs font-bold mb-4 flex items-center gap-2">
                <span className="w-6 h-[1px] bg-[#cfa968]" />
                代表メッセージ
              </span>
              <h2 className="text-3xl md:text-5xl font-bold mb-8 leading-snug font-[var(--font-heading)] text-[#0f172a]">
                「見えない下地こそ、
                <br />
                美しくあれ。」
              </h2>
            </FadeIn>

            <FadeIn direction="up" delay={200}>
              <div className="space-y-6 text-zinc-600 font-sans leading-relaxed text-justify">
                <p>
                  塗装歴は30年以上。外壁も屋根も、仕上げの前に「洗浄・補修・下地づくり」に時間をかけます。
                  それが塗膜を長持ちさせ、10年後の美しさを守る近道だからです。
                </p>
                <p>
                  富士市を中心に静岡県東部の気候や潮風、火山灰の影響を考えた塗料選定を行います。
                  強引な営業はしません。まずは無料の現地調査で状態を診断し、明細入りの見積書をお渡しします。
                </p>
              </div>
              <div className="mt-10 pt-8 border-t border-zinc-100">
                <div className="font-[var(--font-heading)] text-3xl italic text-zinc-400">Masayasu Mochizuki</div>
                <p className="mt-2 text-xs font-sans tracking-widest text-zinc-400">代表 / 1級塗装技能士</p>
                <p className="mt-1 text-xs font-sans text-zinc-400">望月 政康</p>
              </div>
            </FadeIn>
          </div>
        </div>
      </div>
    </section>
  );
}
