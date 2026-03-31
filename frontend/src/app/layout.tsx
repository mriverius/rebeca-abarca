import type { Metadata } from "next";
import { Playfair_Display, DM_Sans } from "next/font/google";
import "./globals.css";
import WhatsAppFloat from "@/components/layout/WhatsAppFloat";

const playfair = Playfair_Display({
  subsets: ["latin"],
  variable: "--font-playfair",
  display: "swap",
});

const dmSans = DM_Sans({
  subsets: ["latin"],
  variable: "--font-dm-sans",
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
      <body className={`${playfair.variable} ${dmSans.variable} antialiased`}>
        {children}
        <WhatsAppFloat />
      </body>
    </html>
  );
}
