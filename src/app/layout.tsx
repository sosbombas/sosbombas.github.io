import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import WhatsAppButton from "@/components/WhatsAppButton";
import { Big_Shoulders , Inter, IBM_Plex_Mono } from "next/font/google";

const display = Big_Shoulders({ subsets: ["latin"], variable: "--font-display", weight: ["700", "800"] });
const mono = IBM_Plex_Mono({ subsets: ["latin"], variable: "--font-mono", weight: ["400", "500"] });

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "S.O.S | Catálogo de Bombas Hidráulicas",
  description:
    "Comércio de bombas e peças. Encontre a bomba hidráulica ideal para sua aplicação.",
};
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-BR">
      <body className={`${inter.variable} bg-[#f8fafc] text-slate-800 antialiased`}>        <Header />
        <main>{children}</main>
        <Footer />
        <WhatsAppButton />
      </body>
    </html>
  );
}
