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
  title: "FirestickIPTV.io - #1 Best IPTV Subscription for Firestick & Smart TVs",
  description: "Get the best affordable IPTV subscription for Amazon Firestick, Smart TVs, Android, and iOS. Watch 28,000+ live TV channels, 150,000 VODs, 4K/8K sports and movies.",
  keywords: "IPTV, Firestick IPTV, Best IPTV service, IPTV UK, IPTV USA, 4K IPTV, buy IPTV, IPTV subscription, IPTV provider, catchup TV, live sports IPTV, Fire TV Stick",
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
