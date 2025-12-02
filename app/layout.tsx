import type { Metadata } from "next";
import { Manrope, Shippori_Mincho } from "next/font/google";
import "./globals.css";

const manrope = Manrope({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  display: "swap",
});

const mincho = Shippori_Mincho({
  variable: "--font-heading",
  subsets: ["latin", "latin-ext"],
  weight: ["500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "（有）富士マルヨ塗装工業 | 静岡県東部の外壁・屋根塗装",
  description:
    "静岡県富士市の（有）富士マルヨ塗装工業。自社職人による丁寧な外壁塗装・屋根塗装・防水工事。最長10年保証、3社相見積もり歓迎、創業20年の安心品質。",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <body className={`${manrope.variable} ${mincho.variable} antialiased`}>
        {children}
      </body>
    </html>
  );
}
