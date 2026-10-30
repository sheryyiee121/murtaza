import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Firestick IPTV UK | Plans & Setup Guides - FirestickIPTV.io",
  description: "Explore UK-focused Firestick IPTV plans, subscription information, and setup guides, with English-language streaming guidance for viewers in the USA and Western Europe.",
  keywords: [
    "best IPTV subscription UK",
    "Firestick IPTV UK",
    "IPTV packages UK",
    "IPTV subscription UK",
    "Fire TV Stick IPTV UK",
    "IPTV setup guide UK",
    "IPTV pricing UK",
    "Firestick streaming guide USA",
    "IPTV streaming USA",
    "Firestick IPTV Europe",
    "IPTV streaming Western Europe",
    "TiviMate setup UK",
    "IPTV Smarters UK"
  ],
  openGraph: {
    title: "Firestick IPTV UK | Plans & Setup Guides",
    description: "UK-focused Firestick IPTV plans and setup guides, with English-language streaming guidance for viewers in the USA and Western Europe.",
    locale: "en_GB",
    type: "website"
  },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
