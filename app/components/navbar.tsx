"use client";

import { BadgePercent, Building2, CircleDollarSign, Images, Mail, MapPin, Menu, PaintRoller, Phone, ShieldCheck, X } from "lucide-react";
import { createPortal } from "react-dom";
import { useEffect, useState } from "react";

type Props = {
  heroLoaded: boolean;
};

export function Navbar({ heroLoaded }: Props) {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const sticky = menuOpen || scrolled;

  const navItems = [
    { label: "藤丸世塗装の強み", href: "/strength", icon: ShieldCheck },
    { label: "塗装サービス", href: "/services", icon: PaintRoller },
    { label: "価格表", href: "/pricing", icon: CircleDollarSign },
    { label: "施工事例", href: "/works", icon: Images },
    { label: "対応エリア", href: "/area", icon: MapPin },
    { label: "会社案内", href: "/company", icon: Building2 },
  ];

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [menuOpen]);

  useEffect(() => setMounted(true), []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-[60] transition-all duration-500 border-b ${
          sticky
            ? "bg-white/95 backdrop-blur-md py-4 border-zinc-200 text-[#0f172a] shadow-sm"
            : "bg-transparent py-4 border-white/10 text-white"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <a
            href="/"
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
          </a>

          <div
            className={`hidden md:flex items-center gap-10 transition-all duration-700 delay-100 ${
              heroLoaded ? "translate-y-0 opacity-100" : "-translate-y-4 opacity-0"
            }`}
          >
            <ul className="flex gap-6 text-[13px] font-sans tracking-wide font-medium">
              {navItems.map((item) => (
                <li key={item.href}>
                  <a href={item.href} className="hover:text-[#cfa968] transition-colors relative group flex items-center gap-2">
                    <item.icon size={16} className="text-[#cfa968]" />
                    {item.label}
                    <span className="absolute -bottom-2 left-0 w-0 h-[1px] bg-[#cfa968] transition-all duration-300 group-hover:w-full" />
                  </a>
                </li>
              ))}
            </ul>
            <div className="flex gap-4">
              <a
                href="/#contact"
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

          <div className="md:hidden w-7 h-7" />
        </div>

        {mounted
          ? createPortal(
              <div
              className={`fixed inset-0 z-[120] bg-black/50 md:hidden transition-opacity duration-400 ${
                  menuOpen ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setMenuOpen(false)}
              >
                <div
                className={`ml-auto flex min-h-screen w-[82%] max-w-sm flex-col bg-white text-[#0f172a] shadow-2xl transition-transform duration-500 transform-gpu will-change-transform ${
                  menuOpen ? "translate-x-0" : "translate-x-full"
                }`}
                  onClick={(e) => e.stopPropagation()}
                >
                <div className="flex flex-col gap-8 overflow-y-auto overscroll-contain px-10 pt-20 pb-16 text-left font-serif text-2xl">
                    {navItems.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setMenuOpen(false)}
                        className="flex items-center gap-3 hover:text-[#cfa968] transition-colors"
                      >
                        <item.icon size={24} className="text-[#cfa968]" />
                        {item.label}
                      </a>
                    ))}
                    <a
                      href="/#contact"
                      onClick={() => setMenuOpen(false)}
                      className="flex items-center gap-3 text-base hover:text-[#cfa968] transition-colors"
                    >
                      <BadgePercent size={22} className="text-[#cfa968]" />
                      資料請求・無料見積もり
                    </a>
                  </div>
                </div>
              </div>,
              document.body
            )
          : null}
      </nav>

      {mounted
        ? createPortal(
            <button
              className={`md:hidden fixed top-4 right-4 z-[160] ${menuOpen || sticky ? "text-[#0f172a]" : "text-white"}`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "メニューを閉じる" : "メニューを開く"}
              aria-expanded={menuOpen}
            >
              <div className="relative h-7 w-7">
                <Menu
                  size={28}
                  className={`absolute inset-0 transition-all duration-300 ${
                    menuOpen ? "opacity-0 -rotate-90 scale-75" : "opacity-100 rotate-0 scale-100"
                  }`}
                />
                <X
                  size={28}
                  className={`absolute inset-0 transition-all duration-300 ${
                    menuOpen ? "opacity-100 rotate-0 scale-100" : "opacity-0 rotate-90 scale-75"
                  }`}
                />
              </div>
            </button>,
            document.body
          )
        : null}
    </>
  );
}
