import React from 'react';
import Link from 'next/link';

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

        .support-copy {
          max-width: 620px;
          margin: 0 auto;
          color: #aaa;
          line-height: 1.7;
        }

        .support-link {
          display: inline-block;
          margin-top: 20px;
          padding: 12px 24px;
          border-radius: 99px;
          background: #25d366;
          color: #fff;
          font-weight: 700;
          text-decoration: none;
        }

        .support-link:focus-visible {
          outline: 3px solid #fff;
          outline-offset: 3px;
        }
      `}</style>
            <section className="testimonials-section">
                <h2 className="testimonials-title">Questions before you subscribe?</h2>
                <p className="support-copy">
                    Ask the provider about current plan terms, app compatibility, content availability, and support before making a purchase.
                </p>
                <Link
                    className="support-link"
                    href="https://wa.me/447393653591?text=Hello,%20I%20have%20a%20question%20about%20your%20plans"
                    target="_blank"
                    rel="noopener noreferrer"
                >
                    Contact support on WhatsApp
                </Link>
            </section>
        </>
    );
}
