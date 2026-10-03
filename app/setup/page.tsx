import React from 'react';
import Link from 'next/link';

export const metadata = {
    title: 'Setup Guide - FirestickIPTV.io',
    description: 'Step-by-step instructions for setting up IPTV Smarters and TiviMate on Fire TV Stick, Apple, Android, Smart TV, Windows, Mac, and MAG.',
    keywords: 'IPTV setup, Firestick IPTV installation, TiviMate setup, IPTV smarters windows'
};

export default function SetupPage() {
    return (
        <main style={{ background: "#000", minHeight: "100vh", paddingTop: "120px" }}>
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

        .setup-block h3 {
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
                <p className="setup-subtitle">Follow these quick step-by-step guides to install and configure your IPTV app on any device.</p>

                <section className="setup-block" id="firestick">
                    <h3>Fire TV Stick (IPTV Smarters)</h3>
                    <ol>
                        <li>From the home screen, hover over the Find option.</li>
                        <li>Click Search.</li>
                        <li>Search for and select Downloader.</li>
                        <li>Choose the Downloader app, click Download and then Open.</li>
                        <li>Go to Settings {'>'} My Fire TV {'>'} Developer options {'>'} Install unknown apps.</li>
                        <li>Enable Downloader app for side-loading.</li>
                        <li>Launch Downloader, click Allow, then OK.</li>
                        <li>Type <strong>https://www.iptvsmarters.com/smarters.apk</strong> and click Go.</li>
                        <li>Click Install, then Done.</li>
                        <li>Open IPTV Smarters and log in with Xtream codes API provided by us.</li>
                    </ol>
                </section>

                <section className="setup-block" id="ios">
                    <h3>Apple / iOS</h3>
                    <ol>
                        <li>Download IPTV Smarters from the Apple App Store.</li>
                        <li>Install and open the app, then enter the login details we provided.</li>
                        <li>Click “ADD USER” and wait a few seconds.</li>
                        <li>Select “Live TV,” choose a channel group, and double-click to go full screen.</li>
                        <li>Click “Install EPG” to load the TV Guide.</li>
                    </ol>
                </section>

                <section className="setup-block" id="android">
                    <h3>Android</h3>
                    <ol>
                        <li>Download IPTV Smarters from the Google Play Store or our direct link.</li>
                        <li>Open the app and enter the login details.</li>
                        <li>Click “ADD USER” and wait a few seconds.</li>
                        <li>Select “Live TV,” choose a channel group, and double-click to go full screen.</li>
                    </ol>
                </section>

                <section className="setup-block" id="smart-tv">
                    <h3>Smart TV</h3>
                    <ol>
                        <li>Download SetIPTV, NetIPTV, or Smart IPTV from your TV app store (Samsung, LG, etc.).</li>
                        <li>Open the app to find your TV's MAC Address.</li>
                        <li>Send us the MAC address via WhatsApp, Email, or Live Chat.</li>
                        <li>Restart your TV and open the app once we confirm connection.</li>
                    </ol>
                </section>

                <section className="setup-block" id="mag">
                    <h3>MAG Box</h3>
                    <ol>
                        <li>Send us the MAC Address of your MAG device via WhatsApp, Email, or Live Chat.</li>
                        <li>After your payment is confirmed, we will provide the direct portal link to enter in your settings.</li>
                    </ol>
                </section>

                <section className="setup-block" id="windows-mac">
                    <h3>Windows / Mac</h3>
                    <ol>
                        <li>For Windows, download IPTV Smarters for PC from their official site.</li>
                        <li>For Mac, download IPTV Smarters for MacOS.</li>
                        <li>Launch the program, select Xtream Codes API, and input our credentials.</li>
                    </ol>
                </section>

                <section className="setup-block" id="tivimate">
                    <h3>TiviMate on Fire TV Stick</h3>
                    <ol>
                        <li>From the home screen, hover over Find and click Search.</li>
                        <li>Search for <strong>Downloader</strong> and download the app.</li>
                        <li>Enable unknown sources for Downloader in your Developer options.</li>
                        <li>Launch Downloader, enter <strong>https://tivimates.com/tiviapk</strong> and click Go.</li>
                        <li>After download completes, click Install and open TiviMate.</li>
                        <li>Click “Add Playlist” and choose “Xtream codes.”</li>
                        <li>Enter the server URL, username, and password details provided.</li>
                    </ol>
                </section>

                <div className="setup-links">
                    Still having trouble? <a href="https://wa.me/447393653591" target="_blank" rel="noopener noreferrer">Chat with our support team</a> or check out our <Link href="/#faq">FAQ section</Link>.
                </div>
            </div>
        </main>
    );
}
