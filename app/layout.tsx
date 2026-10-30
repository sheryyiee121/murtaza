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
  metadataBase: new URL("https://www.quicktvpackagess.co.uk"),
  title: "Firestick IPTV UK | Plans & Setup Guides - FirestickIPTV.io",
  description: "UK-first Firestick IPTV pricing and setup guidance. Check regional availability, app compatibility, content, and provider terms before subscribing.",
  keywords: [
    "Firestick IPTV UK",
    "IPTV packages UK",
    "IPTV subscription UK",
    "Fire TV Stick IPTV UK",
    "IPTV setup guide UK",
    "IPTV pricing UK",
    "TiviMate setup UK",
    "IPTV Smarters UK"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: "Firestick IPTV UK | Plans & Setup Guides",
    description: "UK-first Firestick IPTV pricing and setup guidance. Check regional availability, app compatibility, content, and provider terms before subscribing.",
    url: "https://www.quicktvpackagess.co.uk",
    locale: "en_GB",
    type: "website"
  },
  twitter: {
    card: "summary",
    title: "Firestick IPTV UK | Plans & Setup Guides",
    description: "UK-first Firestick IPTV pricing and setup guidance. Check regional availability, app compatibility, content, and provider terms before subscribing."
  },
  robots: {
    index: true,
    follow: true
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
