"use client";
import React from 'react';
import Image from 'next/image';

const bgSlides = [
    { src: "https://image.tmdb.org/t/p/w300/qhb1qOilapbapxWQn9jtRCMwXJF.jpg", label: "TV 1" },
    { src: "https://image.tmdb.org/t/p/w300/iuFNMS8U5cb6xfzi51Dbkovj7vM.jpg", label: "TV 2" },
    { src: "https://image.tmdb.org/t/p/w300/f496cm9enuEsZkSPzCwnTESEK5s.jpg", label: "TV 3" },
    { src: "https://image.tmdb.org/t/p/w300/8Gxv8gSFCU0XGDykEGv7zR1n2ua.jpg", label: "TV 4" },
    { src: "https://image.tmdb.org/t/p/w300/gPbM0MK8CP8A174rmUwGsADNYKD.jpg", label: "TV 5" },
    { src: "https://image.tmdb.org/t/p/w300/qNBAXBIQlnOThrVvA6mA2B5ggV6.jpg", label: "TV 6" },
];

const streamingLogos = [
    { name: "Prime Video", bg: "#00A8E0", text: "prime\nvideo", textColor: "#fff" },
    { name: "Apple TV+", bg: "#000", text: "Apple TV+", textColor: "#fff" },
    { name: "Disney+", bg: "#00338d", text: "Disney+", textColor: "#fff" },
    { name: "HBO", bg: "#000", text: "HBO", textColor: "#fff" },
    { name: "Hulu", bg: "#1CE783", text: "hulu", textColor: "#fff" },
    { name: "Netflix", bg: "#E50914", text: "NETFLIX", textColor: "#fff" }
];

export default function Hero() {
    return (
        <>
            <style>{`
        .hero {
          position: relative;
          width: 100%;
          min-height: 100vh;
          background: #000;
          overflow: hidden;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .bg-slider-wrapper {
          position: absolute;
          top: 50%;
          left: 0;
          width: 100%;
          height: auto;
          overflow: hidden;
          opacity: 0.35;
          pointer-events: none;
          transform: translateY(-50%) rotate(-4deg) scale(1.1);
        }

        .bg-slider-track {
          display: flex;
          gap: 20px;
          width: max-content;
          animation: bgScrollLeft 50s linear infinite;
        }

        .bg-slide-img {
          width: 250px;
          height: 350px;
          border-radius: 16px;
          object-fit: cover;
          box-shadow: 0 10px 30px rgba(0,0,0,0.8);
        }

        @keyframes bgScrollLeft {
          0% { transform: translateX(0); }
          50% { transform: translateX(-25%); }
          100% { transform: translateX(-50%); }
        }

        .hero-overlay {
          position: absolute;
          inset: 0;
          background: radial-gradient(ellipse 70% 60% at 50% 40%, rgba(0,0,0,0.82) 0%, rgba(0,0,0,0.55) 70%, rgba(0,0,0,0.3) 100%);
          pointer-events: none;
        }

        .hero-content {
          position: relative;
          z-index: 10;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          padding: 60px 24px 0;
          width: 100%;
          max-width: 860px;
          margin: 0 auto;
        }

        .hero-badge {
          font-family: var(--font-geist-sans), sans-serif;
          font-size: 12px;
          font-weight: 600;
          letter-spacing: 2px;
          color: #aaa;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .hero-title {
          font-family: var(--font-geist-sans), sans-serif;
          font-size: clamp(34px, 5vw, 60px);
          font-weight: 800;
          color: #fff;
          line-height: 1.1;
          margin: 0 0 18px;
          letter-spacing: -1px;
        }

        .hero-title .highlight {
          color: #E50914;
        }

        .hero-sub {
          font-family: var(--font-geist-sans), sans-serif;
          font-size: clamp(15px, 1.8vw, 18px);
          color: #bbb;
          max-width: 650px;
          line-height: 1.6;
          margin: 0 0 32px;
          font-weight: 400;
        }

        .hero-buttons {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: 12px;
          margin-bottom: 48px;
        }

        .btn-primary {
          font-family: var(--font-geist-sans), sans-serif;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 1.2px;
          color: #fff;
          background: #3b82f6;
          border: none;
          padding: 14px 48px;
          border-radius: 99px;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s, box-shadow 0.2s, transform 0.15s;
          display: inline-block;
          min-width: 200px;
          text-align: center;
        }

        .btn-primary:hover {
          background: #2563eb;
          box-shadow: 0 0 24px rgba(59,130,246,0.6);
          transform: translateY(-2px);
        }

        .btn-secondary {
          font-family: var(--font-geist-sans), sans-serif;
          font-size: 14px;
          font-weight: 700;
          letter-spacing: 1.2px;
          color: #3b82f6;
          background: transparent;
          border: 2px solid #3b82f6;
          padding: 12px 48px;
          border-radius: 99px;
          cursor: pointer;
          text-decoration: none;
          transition: background 0.2s, color 0.2s, box-shadow 0.2s, transform 0.15s;
          display: inline-block;
          min-width: 200px;
          text-align: center;
        }

        .btn-secondary:hover {
          background: #3b82f6;
          color: #fff;
          box-shadow: 0 0 24px rgba(59,130,246,0.4);
          transform: translateY(-2px);
        }

        .device-mockup {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 760px;
          margin: 0 auto;
          padding: 0 16px;
          display: flex;
          justify-content: center;
        }

        .device-mockup img {
          width: 100%;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 30px 60px rgba(0,0,0,0.9));
          animation: floatDevice 4s ease-in-out infinite;
        }

        @keyframes floatDevice {
          0%, 100% { transform: translateY(0px); }
          50%       { transform: translateY(-10px); }
        }

        .streaming-bar {
          position: relative;
          z-index: 10;
          width: 100%;
          max-width: 900px;
          margin: 60px auto 50px;
          padding: 0 24px;
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 32px;
          flex-wrap: wrap;
        }

        .streaming-logo {
          display: flex;
          align-items: center;
          justify-content: center;
          padding: 10px 20px;
          border-radius: 12px;
          font-family: var(--font-geist-sans), sans-serif;
          font-weight: 800;
          font-size: 15px;
          letter-spacing: 0.2px;
          white-space: pre-line;
          text-align: center;
          line-height: 1.2;
          min-width: 80px;
          opacity: 0.85;
          transition: opacity 0.2s, transform 0.2s;
          cursor: pointer;
        }

        .streaming-logo:hover {
          opacity: 1;
          transform: scale(1.08);
        }

        @media (max-width: 640px) {
          .device-stack { display: none; }
          .streaming-bar { gap: 16px; }
          .streaming-logo { font-size: 13px; padding: 8px 14px; }
          .hero-content { padding-top: 40px; }
        }
      `}</style>
            <section className="hero">
                <div className="bg-slider-wrapper" aria-hidden="true">
                    <div className="bg-slider-track">
                        {[...bgSlides, ...bgSlides, ...bgSlides, ...bgSlides, ...bgSlides, ...bgSlides].map((s, i) => (
                            <img key={i} className="bg-slide-img" src={s.src} alt={s.label} />
                        ))}
                    </div>
                </div>
                <div className="hero-overlay" aria-hidden="true"></div>
                <div className="hero-content">
                    <p className="hero-badge">✦ FIRESTICK IPTV ✦</p>
                    <h1 className="hero-title">
                        The Best <span className="highlight">Firestick IPTV</span> Subscription Service
                    </h1>
                    <p className="hero-sub">
                        Enjoy your time with excellent image clarity up to 4K, on any device, anytime and anywhere, with over +22,000 channels, +150,000 VOD and uptime 100%
                    </p>
                    <div className="hero-buttons">
                        <a href="#pricing" className="btn-primary">GET STARTED</a>
                        <a href="#trial" className="btn-secondary">24 HOURS TRIAL</a>
                    </div>
                </div>
                <div className="device-mockup">
                    <Image src="/images/image.png" alt="IPTV Smarters running on TV, laptop and phone" width={760} height={500} priority style={{ width: "100%", height: "auto" }} />
                </div>
                <div className="streaming-bar">
                    {streamingLogos.map((logo) => (
                        <div key={logo.name} className="streaming-logo" style={{ background: logo.bg, color: logo.textColor }} title={logo.name}>
                            {logo.text}
                        </div>
                    ))}
                </div>
            </section>
        </>
    );
}
