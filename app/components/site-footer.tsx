"use client";

import { MapPin } from "lucide-react";

export function SiteFooter() {
  return (
    <footer className="bg-[#0f172a] text-zinc-300 py-16 font-sans text-sm relative z-10">
      <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-4 gap-12">
        <div className="md:col-span-1">
          <div className="text-white text-2xl font-bold tracking-widest mb-4">富士マルヨ塗装工業</div>
          <p className="leading-relaxed text-xs">
            〒417-0061 静岡県富士市伝法2503-5
            <br />
            Tel. 0545-52-8798
            <br />
            県知事許可（般-5）第41642号
          </p>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Services</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <a href="/services" className="hover:text-white transition-colors">
                外壁塗装
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white transition-colors">
                屋根塗装
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white transition-colors">
                防水工事
              </a>
            </li>
            <li>
              <a href="/services" className="hover:text-white transition-colors">
                付帯部塗装・リフォーム
              </a>
            </li>
            <li>
              <a href="/pricing" className="hover:text-white transition-colors">
                価格表
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Company</h4>
          <ul className="space-y-2 text-xs">
            <li>
              <a href="/company" className="hover:text-white transition-colors">
                私たちについて
              </a>
            </li>
            <li>
              <a href="/works" className="hover:text-white transition-colors">
                施工事例
              </a>
            </li>
            <li>
              <a href="/company" className="hover:text-white transition-colors">
                会社概要
              </a>
            </li>
            <li>
              <a href="/#contact" className="hover:text-white transition-colors">
                お問い合わせ・資料請求
              </a>
            </li>
          </ul>
        </div>
        <div>
          <h4 className="text-white font-bold mb-4 uppercase tracking-wider">Area</h4>
          <div className="flex gap-2 items-start text-xs">
            <MapPin size={14} className="shrink-0 mt-0.5" />
            <p>
              静岡県東部〜中部
              <br />
              富士市 / 富士宮市 / 沼津市 / 静岡市 ほか
            </p>
          </div>
        </div>
      </div>
      <div className="max-w-7xl mx-auto px-6 mt-16 pt-8 border-t border-zinc-800 flex flex-col md:flex-row justify-between items-center text-xs">
        <p>&copy; 2024 Fuji Maruyo Paint Co.,Ltd. All Rights Reserved.</p>
        <div className="flex gap-6 mt-4 md:mt-0">
          <a href="#" className="hover:text-white transition-colors">
            Privacy Policy
          </a>
          <a href="#" className="hover:text-white transition-colors">
            Terms of Service
          </a>
        </div>
      </div>
    </footer>
  );
}
