"use client";
"use client";

/* eslint-disable @next/next/no-img-element */

import { FadeIn } from "./fade-in";

type Props = {
  heroLoaded: boolean;
};

export function Hero({ heroLoaded }: Props) {
  return (
    <header className="relative min-h-[110vh] md:min-h-[120vh] w-full flex items-center justify-center overflow-hidden bg-[#0f172a]">
      <div className="absolute inset-0 overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1600607686527-6fb886090705?auto=format&fit=crop&w=2400&q=80"
          className={`w-full h-full object-cover opacity-70 transition-transform duration-[18s] ease-linear ${
            heroLoaded ? "scale-110" : "scale-100"
          }`}
          alt="住宅外観"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0f172a]/85 via-[#0f172a]/25 to-[#0f172a]/35" />
      </div>

      <div className="relative z-10 w-full max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-end pb-24">
        <div className="md:col-span-8">
          <FadeIn delay={300} direction="up">
            <p className="text-[#cfa968] tracking-[0.3em] text-sm mb-6 font-sans font-bold flex items-center gap-3">
              <span className="w-8 h-[1px] bg-[#cfa968]" />
              SINCE 2004
            </p>
          </FadeIn>

          <h1
            className={`text-5xl md:text-7xl lg:text-8xl font-bold text-white leading-[1.1] mb-8 tracking-wide font-[var(--font-heading)] drop-shadow-2xl transition-all duration-1000 delay-500 ${
              heroLoaded ? "opacity-100 translate-y-0" : "opacity-0 translate-y-8"
            }`}
          >
            家を守る塗装を、
            <br />
            職人品質で。
          </h1>

          <FadeIn delay={700} direction="up">
            <div className="bg-white/10 backdrop-blur-md p-6 border-l-4 border-[#cfa968] inline-block max-w-xl shadow-lg">
              <p className="text-white/90 text-base md:text-lg font-sans leading-relaxed">
                静岡県富士市の外壁塗装・屋根塗装・防水工事。
                <br className="hidden md:block" />
                自社職人施工で品質を守り、最長10年保証。
                <br className="hidden md:block" />
                3社相見積もり歓迎。築10年以上の住まいに安心を届けます。
              </p>
            </div>
          </FadeIn>
        </div>

        <div className="md:col-span-4" />
      </div>
    </header>
  );
}
