import type { Metadata } from "next";
import { Jost, Lora, Playfair_Display } from "next/font/google";
import "./globals.css";

const jost = Jost({ variable: "--font-jost", subsets: ["latin"] });
const lora = Lora({ variable: "--font-lora", subsets: ["latin"] });
const playfair = Playfair_Display({ variable: "--font-playfair", subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Aprajita Art – Handmade Art, Reels & Collaborations",
  description:
    "Aprajita Kaira's art studio: watercolour, anime and handmade paintings. Watch reels and videos, and collaborate directly via call or WhatsApp.",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${jost.variable} ${lora.variable} ${playfair.variable} h-full antialiased`}>
      <body className="min-h-full flex flex-col font-serif">{children}</body>
    </html>
  );
}
