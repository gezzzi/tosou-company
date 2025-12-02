"use client";

import { Mail, Menu, Phone, X } from "lucide-react";
import { useEffect, useState } from "react";

type Props = {
  heroLoaded: boolean;
};

export function Navbar({ heroLoaded }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        scrolled
          ? "bg-white/95 backdrop-blur-md py-4 border-zinc-200 text-[#0f172a] shadow-sm"
          : "bg-transparent py-6 border-white/10 text-white"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
        <div
          className={`flex items-center gap-3 transition-all duration-500 ${
            heroLoaded ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <div className="w-10 h-10 bg-[#cfa968] text-white flex items-center justify-center font-bold text-lg rounded-sm shadow-md">
            FM
          </div>
          <div>
            <div className="text-lg font-bold tracking-widest leading-none">富士マルヨ塗装工業</div>
            <div className="text-[10px] tracking-[0.2em] mt-1 font-sans opacity-80">FUJI MARUYO PAINT</div>
          </div>
        </div>

        <div
          className={`hidden md:flex items-center gap-10 transition-all duration-700 delay-100 ${
            heroLoaded ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
          }`}
        >
          <ul className="flex gap-8 text-sm font-sans tracking-widest uppercase font-medium">
            {[
              { label: "Strength", href: "#about" },
              { label: "Works", href: "#works" },
              { label: "Service", href: "#service" },
              { label: "Company", href: "#company" },
            ].map((item) => (
              <li key={item.href}>
                <a href={item.href} className="hover:text-[#cfa968] transition-colors relative group">
                  {item.label}
                  <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#cfa968] transition-all duration-300 group-hover:w-full" />
                </a>
              </li>
            ))}
          </ul>
          <div className="flex gap-4">
            <a
              href="#contact"
              className={`px-6 py-2 bg-transparent border transition-all font-sans text-xs tracking-wider flex items-center gap-2 hover:shadow-lg ${
                scrolled ? "border-zinc-300 hover:border-[#cfa968] hover:text-[#cfa968]" : "border-white/30 hover:border-[#cfa968] hover:text-[#cfa968]"
              }`}
            >
              <Mail size={14} /> 資料請求
            </a>
            <a
              href="tel:0545-52-8798"
              className="px-6 py-2 bg-[#cfa968] text-white font-bold font-sans text-xs tracking-wider hover:bg-[#0f172a] transition-all flex items-center gap-2 shadow-lg shadow-[#cfa968]/30 hover:shadow-xl hover:-translate-y-0.5"
            >
              <Phone size={14} /> 無料見積
            </a>
          </div>
        </div>

        <button
          className={`${scrolled ? "text-[#0f172a]" : "text-white"} md:hidden z-50 relative`}
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          {menuOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      <div
        className={`fixed inset-0 bg-[#0f172a] z-40 flex items-center justify-center transition-all duration-500 md:hidden ${
          menuOpen ? "opacity-100 visible" : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <ul className="flex flex-col gap-8 text-center text-white font-serif text-2xl">
          {["Strength", "Works", "Service", "Company", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase()}`}
                onClick={() => setMenuOpen(false)}
                className="hover:text-[#cfa968] transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
