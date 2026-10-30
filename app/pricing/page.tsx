import React from 'react';
import Pricing from '../components/Pricing';
import type { Metadata } from 'next';

export const metadata: Metadata = {
    title: 'IPTV Plans & Pricing UK | FirestickIPTV.io',
    description: 'Compare advertised Firestick IPTV plan prices and durations. Confirm device compatibility, content availability, renewal, and cancellation terms before subscribing.',
    keywords: ['IPTV plans UK', 'IPTV pricing UK', 'Firestick IPTV subscription UK', 'Fire TV Stick plans'],
    alternates: {
        canonical: '/pricing'
    },
    openGraph: {
        title: 'IPTV Plans & Pricing UK | FirestickIPTV.io',
        description: 'Compare advertised Firestick IPTV plan prices and durations. Confirm device compatibility, content availability, renewal, and cancellation terms before subscribing.',
        url: 'https://www.quicktvpackagess.co.uk/pricing',
        locale: 'en_GB',
        type: 'website'
    }
};

export default function PricingPage() {
    return (
        <main id="main-content" style={{ background: "#000", minHeight: "100vh" }}>
            <h1 style={{ color: "#fff", fontSize: "clamp(32px, 5vw, 48px)", fontWeight: 800, margin: "0 auto", maxWidth: "1200px", padding: "120px 24px 0", textAlign: "center" }}>
                Firestick IPTV Plans and Pricing
            </h1>
            <Pricing />
        </main>
    );
}
