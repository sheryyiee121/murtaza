import React from 'react';
import Pricing from '../components/Pricing';

export const metadata = {
    title: 'Best Price IPTV Subscription in UK | FirestickIPTV.io',
    description: 'Find the best price for your firestick iptv subscription in UK. We offer the cheapest and most reliable IPTV packages with 28,000+ channels and anti-buffering tech.',
    keywords: 'best price iptv uk, best iptv subscription in uk, firestick iptv subscription in uk, cheap iptv uk, iptv price uk, uk iptv plans, reliable uk iptv'
};

export default function PricingPage() {
    return (
        <main style={{ background: "#000", minHeight: "100vh" }}>
            <Pricing />
        </main>
    );
}
