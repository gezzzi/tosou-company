"use client";

import { Clock3, MapPin, Phone, ShieldCheck } from "lucide-react";
import { FadeIn } from "./fade-in";

const licenses = [
  "県知事許可（般-5）第41642号",
  "古物商許可 静岡県公安委員会 第491100145100号",
  "1級塗装技能士 / 危険物取扱責任者 / 高所作業者取扱責任者",
];

export function CompanySection() {
  return (
    <section id="company" className="mx-auto max-w-6xl bg-white px-6 py-14 shadow-2xl shadow-black/5">
      <div className="grid gap-10 md:grid-cols-2">
        <div className="space-y-3">
          <p className="text-xs font-bold uppercase tracking-[0.3em] text-[#cfa968]">Company</p>
          <h2 className="font-[var(--font-heading)] text-3xl font-semibold text-[#0f172a] md:text-4xl">会社案内</h2>
          <p className="text-sm text-[#0f172a]/70">富士市で創業し、自社職人による施工と地域密着のサポートを続けています。住宅も法人案件もお気軽にご相談ください。</p>
          <div className="mt-4 space-y-3 text-sm text-[#0f172a]/80">
            <div className="flex items-start gap-3">
              <ShieldCheck className="mt-1 text-[#cfa968]" size={18} />
              <div>
                <p className="text-[#0f172a]">会社名</p>
                <p>（有）富士マルヨ塗装工業</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 text-[#cfa968]" size={18} />
              <div>
                <p className="text-[#0f172a]">所在地</p>
                <p>〒417-0061 静岡県富士市伝法2503-5</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Phone className="mt-1 text-[#cfa968]" size={18} />
              <div>
                <p className="text-[#0f172a]">電話</p>
                <p>
                  <a href="tel:0545-52-8798" className="font-semibold">
                    0545-52-8798
                  </a>
                  <span className="ml-2 text-xs text-[#0f172a]/60">営業時間外でも対応可</span>
                </p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <Clock3 className="mt-1 text-[#cfa968]" size={18} />
              <div>
                <p className="text-[#0f172a]">営業時間 / 定休日</p>
                <p>平日 8:00〜17:00 / 土曜・日曜</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <MapPin className="mt-1 text-[#cfa968]" size={18} />
              <div>
                <p className="text-[#0f172a]">対応エリア</p>
                <p>東海（静岡県） 富士市・沼津市・静岡市など</p>
              </div>
            </div>
          </div>
        </div>

        <FadeIn direction="up">
          <div className="border border-[#e6dfd4] bg-[#f8f5ef] p-6 shadow-inner">
            <div className="flex items-center gap-3">
              <ShieldCheck className="text-[#cfa968]" size={18} />
              <p className="text-sm font-semibold text-[#0f172a]">許可・資格</p>
            </div>
            <ul className="mt-4 space-y-3 text-sm text-[#0f172a]/80">
              {licenses.map((license) => (
                <li key={license} className="flex items-start gap-2">
                  <span className="mt-1 h-2 w-2 rounded-full bg-[#cfa968]" />
                  <span>{license}</span>
                </li>
              ))}
            </ul>
            <div className="mt-6 rounded-xl bg-white p-4 text-xs text-[#0f172a]/85 shadow">
              下塗りを2〜3回重ねてから上塗りで仕上げ、養生や乾燥時間管理も徹底。作業後はお手入れ方法のアドバイスと保証書をお渡しします。
            </div>
          </div>
        </FadeIn>
      </div>
    </section>
  );
}
