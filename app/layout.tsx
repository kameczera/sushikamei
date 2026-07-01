import type { Metadata, Viewport } from "next";
import { Cormorant_Garamond, Shippori_Mincho, Zen_Kaku_Gothic_New } from "next/font/google";
import "./globals.css";

// Serif alta-contraste (couture) — títulos, numerais, ar de alfaiataria
const cormorant = Cormorant_Garamond({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  style: ["normal", "italic"],
  variable: "--font-cormorant",
  display: "swap",
});

// Mincho refinada — kanji, assinaturas e acentos serifados (elegância japonesa)
const shippori = Shippori_Mincho({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-mincho",
  display: "swap",
});

// Gótica japonesa — corpo, rótulos e UI (silenciosa e legível)
const zen = Zen_Kaku_Gothic_New({
  subsets: ["latin"],
  weight: ["300", "400", "500", "700"],
  variable: "--font-zen",
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
  themeColor: "#f4efe4",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="pt-BR">
      <body className={`${cormorant.variable} ${shippori.variable} ${zen.variable}`}>
        {children}
      </body>
    </html>
  );
}
