import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Firestick IPTV Setup Guide UK | Device Compatibility',
  description: 'General setup guidance for Fire TV Stick, Apple, Android, Smart TV, and computer users. Use verified apps and confirm compatibility with your provider.',
  keywords: ['Firestick IPTV setup UK', 'Fire TV Stick app setup', 'IPTV device compatibility', 'TiviMate setup guide'],
  alternates: {
    canonical: '/setup'
  },
  openGraph: {
    title: 'Firestick IPTV Setup Guide UK | Device Compatibility',
    description: 'General setup guidance for Fire TV Stick, Apple, Android, Smart TV, and computer users. Use verified apps and confirm compatibility with your provider.',
    url: 'https://www.quicktvpackagess.co.uk/setup',
    locale: 'en_GB',
    type: 'website'
  }
};

export default function SetupPage() {
  return (
    <main id="main-content" style={{ background: "#000", minHeight: "100vh", paddingTop: "120px" }}>
      <style>{`
        .setup-container {
          max-width: 900px;
          margin: 0 auto;
          padding: 0 24px 80px;
          font-family: var(--font-geist-sans), sans-serif;
        }

        .setup-title {
          font-size: clamp(32px, 5vw, 48px);
          font-weight: 900;
          color: #fff;
          margin-bottom: 24px;
          letter-spacing: -1px;
          text-align: center;
        }

        .setup-subtitle {
          color: #bbb;
          text-align: center;
          margin-bottom: 60px;
          font-size: 16px;
        }

        .setup-block {
          background: #111;
          border: 1px solid #222;
          border-radius: 12px;
          padding: 32px;
          margin-bottom: 24px;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }

        .setup-block h2 {
          color: #00d2ff;
          font-size: 24px;
          margin: 0 0 20px 0;
          font-weight: 700;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .setup-block ol {
          padding-left: 20px;
          margin: 0;
          color: #ddd;
          line-height: 1.8;
          font-size: 15px;
        }

        .setup-block ol li {
          margin-bottom: 12px;
        }

        .setup-block ol li::marker {
          color: #555;
          font-weight: 600;
        }

        .setup-links {
          margin-top: 40px;
          text-align: center;
        }

        .setup-links a {
          color: #00d2ff;
          text-decoration: none;
          font-weight: 600;
          transition: color 0.2s;
        }

        .setup-links a:hover {
          color: #00b0d9;
          text-decoration: underline;
        }
      `}</style>
      <div className="setup-container">
        <h1 className="setup-title">Firestick IPTV Setup Instructions</h1>
        <p className="setup-subtitle">Use official app stores and provider instructions. App availability and compatibility vary by device, region, and service.</p>

        <section className="setup-block" id="firestick">
          <h2>Fire TV Stick</h2>
          <ol>
            <li>Connect your Fire TV Stick to the internet and open its app store.</li>
            <li>Search for the app named by your service provider. Confirm the publisher and compatibility before installing.</li>
            <li>Install and open the app, then follow the provider&apos;s official sign-in instructions.</li>
            <li>A player app does not include TV channels or subscriptions. Use only a service you are authorised to access.</li>
            <li>Avoid unknown APK files and do not disable device security protections to install an unverified app.</li>
          </ol>
        </section>

        <section className="setup-block" id="ios">
          <h2>Apple / iOS</h2>
          <ol>
            <li>Search the Apple App Store for the app recommended by your authorised provider.</li>
            <li>Check the publisher, app permissions, and supported device versions before installing.</li>
            <li>Open the app and follow the provider&apos;s current sign-in instructions.</li>
            <li>Do not share account credentials or activation details with anyone you do not trust.</li>
          </ol>
        </section>

        <section className="setup-block" id="android">
          <h2>Android</h2>
          <ol>
            <li>Use Google Play to find the app recommended by your authorised provider.</li>
            <li>Verify the publisher and device compatibility before installing.</li>
            <li>Open the app and follow the provider&apos;s official sign-in instructions.</li>
          </ol>
        </section>

        <section className="setup-block" id="smart-tv">
          <h2>Smart TV</h2>
          <ol>
            <li>Search your television&apos;s official app store for an app supported by your provider.</li>
            <li>Check the app publisher, device model, and any activation fees or subscription requirements.</li>
            <li>Follow the app developer&apos;s official setup instructions. Do not send device identifiers or account credentials unless you understand why they are needed and trust the recipient.</li>
          </ol>
        </section>

        <section className="setup-block" id="mag">
          <h2>MAG Box</h2>
          <ol>
            <li>Check the device manual and confirm that your provider supports your specific MAG model.</li>
            <li>Only enter portal settings supplied by a provider you have independently verified and are authorised to use.</li>
            <li>Avoid sharing device identifiers or account details in public messages.</li>
          </ol>
        </section>

        <section className="setup-block" id="windows-mac">
          <h2>Windows / Mac</h2>
          <ol>
            <li>Use the provider&apos;s official support page or the operating system&apos;s app store to find supported software.</li>
            <li>Check the publisher and download only from a verified official source.</li>
            <li>Follow the provider&apos;s current sign-in instructions and keep credentials private.</li>
          </ol>
        </section>

        <section className="setup-block" id="tivimate">
          <h2>TiviMate on Fire TV Stick</h2>
          <ol>
            <li>Check the Amazon Appstore for the official app listing and confirm it supports your device and region.</li>
            <li>Install only from the verified listing or the app publisher&apos;s official instructions.</li>
            <li>Use a playlist or credentials only from a provider you have verified and are authorised to access.</li>
            <li>Review the app&apos;s privacy information and permissions before signing in.</li>
          </ol>
        </section>

        <div className="setup-links">
          Still having trouble? <a href="https://wa.me/447393653591" target="_blank" rel="noopener noreferrer">Chat with our support team</a> or check out our <Link href="/#faq">FAQ section</Link>.
        </div>
      </div>
    </main>
  );
}
