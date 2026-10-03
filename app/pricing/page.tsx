import React from 'react';
import Pricing from '../components/Pricing';

export const metadata = {
    title: 'Pricing Plans - FirestickIPTV.io',
    description: 'View our affordable IPTV subscription plans for Firestick, Smart TVs and more. Get 28,000+ channels in 4K/8K quality with zero buffering.',
    keywords: 'IPTV pricing, cheap IPTV, Firestick IPTV cost, best IPTV packages, 4K IPTV subscription'
};

export default function PricingPage() {
    return (
        <main style={{ background: "#000", minHeight: "100vh" }}>
            <Pricing />
        </main>
    );
}
