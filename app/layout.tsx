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
  title: "FirestickIPTV.io - #1 Best IPTV Subscription in UK",
  description: "Get the best IPTV subscription in UK at the best price. Premium Firestick IPTV UK provider with 28,000+ live TV channels, 150,000 VODs, Sky Glass, 4K/8K sports and movies without buffering.",
  keywords: "best iptv subscription in uk, firestick iptv subscription in uk, iptv uk, best premium iptv uk, buy iptv uk, cheap iptv uk, best price iptv uk, reliable firestick iptv uk, 4k iptv subscription uk, top iptv providers uk, sky glass iptv uk, iptv smarters uk, tivimate iptv uk",
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
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
