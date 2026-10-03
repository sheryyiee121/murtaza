"use client";
import React from 'react';

export default function Testimonials() {
    return (
        <>
            <style>{`
        .testimonials-section {
          background-color: #000;
          padding: 80px 24px 100px;
          text-align: center;
          font-family: var(--font-geist-sans), sans-serif;
          position: relative;
        }

        .testimonials-title {
          font-size: clamp(32px, 5vw, 42px);
          font-weight: 800;
          color: #fff;
          margin: 0 0 16px 0;
          letter-spacing: -0.5px;
        }

        .trustpilot-block {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 12px;
          margin-bottom: 50px;
        }

        .tp-stars {
          display: flex;
          gap: 2px;
        }

        .tp-star-box {
          background-color: #00b67a;
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        .tp-star-box svg {
          width: 20px;
          height: 20px;
          fill: #fff;
        }

        .tp-text {
          color: #fff;
          font-size: 16px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .tp-logo-star svg {
          fill: #00b67a;
          width: 24px;
          height: 24px;
        }
          
        .tp-logo-text {
          font-weight: 700;
          font-size: 18px;
          letter-spacing: -0.5px;
        }

        .testimonials-image-wrapper {
          max-width: 1200px;
          margin: 0 auto;
          box-shadow: 0 20px 50px rgba(0,0,0,0.5);
          border-radius: 8px;
          overflow: hidden;
        }

        .testimonials-image-wrapper img {
          width: 100%;
          height: auto;
          display: block;
        }
      `}</style>
            <section className="testimonials-section">
                <h2 className="testimonials-title">Feedback from our customers</h2>

                <div className="trustpilot-block">
                    <div className="tp-stars">
                        {[1, 2, 3, 4, 5].map((s) => (
                            <div key={s} className="tp-star-box">
                                <svg viewBox="0 0 24 24">
                                    <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                                </svg>
                            </div>
                        ))}
                    </div>
                    <div className="tp-text">
                        rated excellent on
                        <span className="tp-logo-star">
                            <svg viewBox="0 0 24 24">
                                <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
                            </svg>
                        </span>
                        <span className="tp-logo-text">Trustpilot</span>
                    </div>
                </div>

                <div className="testimonials-image-wrapper">
                    <img src="/images/image copy 2.png" alt="Customer WhatsApp Feedback" loading="lazy" />
                </div>
            </section>
        </>
    );
}
