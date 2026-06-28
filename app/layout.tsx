import type { Metadata, Viewport } from "next";
import { Shippori_Mincho, Yuji_Syuku, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";

// Mincho serif — títulos e corpo (ar tradicional de xilogravura)
const shippori = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

// Pincel (fude) — kanji decorativos, selos, brush
const yuji = Yuji_Syuku({
  subsets: ["latin"],
  weight: ["400"],
  variable: "--font-jp-serif",
  display: "swap",
});

// Gótica japonesa — rótulos pequenos / UI legível
const zen = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["400", "500", "700", "900"],
  variable: "--font-jp",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Sushi Kamei | 亀井 寿司 — Sushi artesanal em Belo Horizonte",
  description:
    "Sushi Kamei — barcos de sushi, jantares completos, festas de 15 e formaturas em Belo Horizonte. Sushi artesanal feito pelo sushiman Hilton. Peça pelo nosso atendente de IA.",
  keywords: [
    "sushi",
    "Belo Horizonte",
    "BH",
    "delivery sushi",
    "barco de sushi",
    "festa de 15 anos",
    "formatura",
    "Sushi Kamei",
  ],
  openGraph: {
    title: "Sushi Kamei | 亀井 寿司",
    description:
      "Barcos de sushi, jantares completos e buffet para festas em Belo Horizonte.",
    type: "website",
    locale: "pt_BR",
  },
  icons: {
    icon: "/images/marca/logo.jpg",
  },
};

export const viewport: Viewport = {
  themeColor: "#f1e3c6",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${shippori.variable} ${yuji.variable} ${zen.variable}`}>
        {children}
      </body>
    </html>
  );
}
