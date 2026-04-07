import type { Metadata } from "next";
import { Montserrat, Tenor_Sans, Lato } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat",
  weight: ["300"], // Light weight for H1/H2
  display: "swap",
});

const tenorSans = Tenor_Sans({
  subsets: ["latin"],
  variable: "--font-tenor",
  weight: ["400"],
  display: "swap",
});

const lato = Lato({
  subsets: ["latin"],
  variable: "--font-lato",
  weight: ["400", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Rebeca - Intuitive Coach & Sound Healing | Ciudad Colón, Costa Rica",
  description: "Del control a tu poder interior. Coach intuitiva y facilitadora de Sound Healing. Sesiones 1:1 de coaching, sound healing individual, en pareja y grupal. Estudio en Ciudad Colón.",
  keywords: [
    "sound healing costa rica",
    "coaching intuitivo",
    "coach femenina",
    "cuencos tibetanos",
    "sanación sonora",
    "ciudad colón",
    "sesiones de coaching",
    "meditación",
    "desarrollo personal",
    "bienestar",
  ],
  authors: [{ name: "Rebeca Abarca" }],
  creator: "Rebeca Abarca",
  openGraph: {
    type: "website",
    locale: "es_CR",
    url: "https://rebecaintuitivecoach.com",
    title: "Rebeca - Intuitive Coach & Sound Healing",
    description: "Del control a tu poder interior. Coaching intuitivo y Sound Healing en Ciudad Colón, Costa Rica.",
    siteName: "Rebeca - Intuitive Coach & Sound Healing",
  },
  twitter: {
    card: "summary_large_image",
    title: "Rebeca - Intuitive Coach & Sound Healing",
    description: "Del control a tu poder interior. Coaching intuitivo y Sound Healing en Ciudad Colón, Costa Rica.",
    creator: "@rebecaintuitivecoach",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="es" className="scroll-smooth">
      <body className={`${montserrat.variable} ${tenorSans.variable} ${lato.variable} antialiased`}>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
