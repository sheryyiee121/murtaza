"use client";
import React from 'react';
import Image from 'next/image';

export default function Compatible() {
    return (
        <>
            <style>{`
        .compatible-section {
          background-color: #000;
          padding: 100px 24px;
          font-family: var(--font-geist-sans), sans-serif;
          position: relative;
        }

        .compatible-container {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          gap: 60px;
        }

        .compatible-text {
          flex: 1;
        }

        .compatible-title {
          font-size: clamp(32px, 5vw, 48px);
          font-weight: 900;
          color: #fff;
          margin: 0 0 24px 0;
          line-height: 1.1;
          letter-spacing: -1px;
          text-transform: uppercase;
        }

        .compatible-desc {
          font-size: 16px;
          color: #bbb;
          line-height: 1.8;
          margin: 0;
          font-weight: 400;
        }

        .compatible-desc strong {
          color: #fff;
          font-weight: 700;
        }

        .compatible-image-wrapper {
          flex: 1;
          display: flex;
          justify-content: flex-end;
          position: relative;
        }

        .compatible-image-wrapper img {
          width: 100%;
          max-width: 700px;
          height: auto;
          object-fit: contain;
          filter: drop-shadow(0 20px 40px rgba(0,0,0,0.8));
        }

        @media (max-width: 900px) {
          .compatible-container {
            flex-direction: column;
            text-align: center;
            gap: 40px;
          }

          .compatible-image-wrapper {
            justify-content: center;
          }
        }
      `}</style>
            <section className="compatible-section">
                <div className="compatible-container">
                    <div className="compatible-text">
                        <h2 className="compatible-title">
                            COMPATIBLE WITH ALL<br />DEVICES.
                        </h2>
                        <p className="compatible-desc">
                            Our <strong>Firestick IPTV</strong> service is compatible with all your devices, including Smart TVs, Android Box and Phone, Apple Devices, Amazon Fire Stick, KODI, and MAG Box. We literally support all kinds of devices, making <strong>Firestick IPTV</strong> the perfect choice for seamless streaming across any platform.
                        </p>
                    </div>
                    <div className="compatible-image-wrapper">
                        <img src="/images/image copy.png" alt="Compatible with all devices" loading="lazy" />
                    </div>
                </div>
            </section>
        </>
    );
}
