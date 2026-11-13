import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import FloatingWhatsApp from "./components/FloatingWhatsApp";
import JsonLd from "./components/JsonLd";
import { SITE_NAME, SITE_URL } from "./lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} | Plans, Pricing & Setup Guides`,
    template: `%s | ${SITE_NAME}`
  },
  description: "Compare Firestick IPTV UK plans, pricing, device compatibility, and setup guides. Confirm app support, content, and provider terms before you subscribe.",
  keywords: [
    "Firestick IPTV UK",
    "IPTV packages UK",
    "IPTV subscription UK",
    "Fire TV Stick IPTV UK",
    "IPTV setup guide UK",
    "IPTV pricing UK",
    "TiviMate setup UK",
    "IPTV Smarters UK",
    "best IPTV for Firestick UK"
  ],
  alternates: {
    canonical: "/"
  },
  openGraph: {
    title: `${SITE_NAME} | Plans, Pricing & Setup Guides`,
    description: "Compare Firestick IPTV UK plans, pricing, device compatibility, and setup guides before you subscribe.",
    url: SITE_URL,
    siteName: SITE_NAME,
    locale: "en_GB",
    type: "website",
    images: [
      {
        url: "/images/image.png",
        width: 1200,
        height: 630,
        alt: "Firestick IPTV UK on TV, laptop and phone"
      }
    ]
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME} | Plans, Pricing & Setup Guides`,
    description: "Compare Firestick IPTV UK plans, pricing, device compatibility, and setup guides before you subscribe.",
    images: ["/images/image.png"]
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1
    }
  }
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en-GB"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <JsonLd />
        <a className="skip-link" href="#main-content">Skip to main content</a>
        <Navbar />
        {children}
        <Footer />
        <FloatingWhatsApp />
      </body>
    </html>
  );
}
