"use client";

import { Mail, MapPin, Phone } from "lucide-react";
import { FadeIn } from "./fade-in";

export function ContactSection() {
  return (
    <section id="contact" className="py-24 bg-zinc-50 relative overflow-hidden border-t border-zinc-200">
      <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#cfa968]/12 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 animate-pulse" />
      <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-zinc-200/50 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2" />

      <div className="max-w-4xl mx-auto px-6 text-center relative z-10">
        <FadeIn direction="up">
          <h2 className="text-3xl md:text-5xl font-bold mb-6 font-[var(--font-heading)] text-[#0f172a]">
            まずは無料の現地調査・お見積もりから
          </h2>
          <p className="text-zinc-600 mb-12 text-lg font-sans">
            強引な営業はしません。劣化状況の報告書と複数プランのお見積もりをお渡しします。
            <br />
            <span className="text-xs text-zinc-500 mt-2 block">営業時間外でもお電話対応しています。お気軽にご相談ください。</span>
          </p>
        </FadeIn>

        <div className="grid md:grid-cols-2 gap-6 max-w-2xl mx-auto">
          <FadeIn delay={200} direction="up" className="h-full">
            <div className="h-full bg-white text-[#0f172a] p-8 rounded-sm text-center shadow-xl hover:shadow-2xl hover:translate-y-[-5px] transition-all cursor-pointer border border-zinc-100 group">
              <Phone size={32} className="mx-auto mb-4 text-[#cfa968] group-hover:scale-110 transition-transform" />
              <h3 className="text-xl font-bold mb-2 font-[var(--font-heading)]">お電話でのお問い合わせ</h3>
              <p className="text-2xl font-bold tracking-widest font-sans mb-1">
                <a href="tel:0545-52-8798" className="hover:text-[#cfa968]">
                  0545-52-8798
                </a>
              </p>
              <p className="text-xs text-zinc-500">受付時間 平日 8:00 - 17:00</p>
            </div>
          </FadeIn>
          <FadeIn delay={300} direction="up" className="h-full">
            <div className="h-full bg-[#0f172a] border border-[#0f172a] p-8 rounded-sm text-center shadow-xl hover:bg-[#111b35] hover:shadow-2xl hover:translate-y-[-5px] transition-all cursor-pointer group">
              <Mail size={32} className="mx-auto mb-4 text-zinc-400 group-hover:text-[#cfa968] group-hover:scale-110 transition-all" />
              <h3 className="text-xl font-bold mb-2 text-white font-[var(--font-heading)]">Webからのお問い合わせ</h3>
              <p className="text-sm text-zinc-400 mb-4">24時間受付中・資料請求もこちら</p>
              <span className="inline-block border-b border-[#cfa968] text-[#cfa968] pb-1 text-sm font-bold tracking-wider group-hover:text-white group-hover:border-white transition-colors">
                メールで問い合わせる
              </span>
            </div>
          </FadeIn>
        </div>

        <div className="mt-10 flex flex-col items-center gap-3 text-sm text-[#0f172a]/80">
          <div className="flex items-center gap-2">
            <Phone size={18} className="text-[#cfa968]" />
            <span>電話：0545-52-8798（営業時間外も対応可）</span>
          </div>
          <div className="flex items-center gap-2">
            <Mail size={18} className="text-[#cfa968]" />
            <span>Webフォーム：24時間受付 / 資料請求もOK</span>
          </div>
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-[#cfa968]" />
            <span>対応エリア：静岡県東部〜中部（富士市・沼津市・静岡市 ほか）</span>
          </div>
        </div>
      </div>
    </section>
  );
}
