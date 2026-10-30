import React from 'react';
import Link from 'next/link';

export default function Footer() {
  return (
    <>
      <style>{`
        .footer-section {
          background-color: #050505;
          border-top: 1px solid #1a1a1a;
          padding: 80px 24px 40px;
          font-family: var(--font-geist-sans), sans-serif;
          color: #aaa;
        }

        .footer-container {
          max-width: 1200px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 1fr 1fr 1fr;
          gap: 40px;
          margin-bottom: 60px;
        }

        .footer-brand {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .footer-logo {
          font-size: 24px;
          font-weight: 900;
          color: #fff;
          text-decoration: none;
          letter-spacing: -0.5px;
          display: flex;
          align-items: center;
          gap: 6px;
        }

        .footer-logo span.firestick {
          color: #E50914; 
        }
          
        .footer-logo span.iptv {
          color: #fff;
        }

        .footer-logo span.dot-io {
          color: #fff;
          font-size: 16px;
        }

        .footer-desc {
          font-size: 14px;
          line-height: 1.6;
          max-width: 300px;
        }

        .footer-links h4 {
          font-size: 16px;
          font-weight: 700;
          color: #fff;
          margin: 0 0 20px 0;
        }

        .footer-links ul {
          list-style: none;
          padding: 0;
          margin: 0;
          display: flex;
          flex-direction: column;
          gap: 12px;
        }

        .footer-links a {
          color: #aaa;
          text-decoration: none;
          font-size: 14px;
          transition: color 0.2s;
        }

        .footer-links a:hover {
          color: #E50914;
        }

        .footer-whatsapp {
          display: flex;
          flex-direction: column;
          gap: 16px;
        }

        .wa-box {
          background: rgba(37, 211, 102, 0.05);
          border: 1px solid rgba(37, 211, 102, 0.15);
          padding: 24px;
          border-radius: 12px;
          text-align: center;
        }

        .wa-title {
          font-size: 14px;
          color: #fff;
          font-weight: 600;
          margin: 0 0 12px 0;
        }

        .wa-button {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          gap: 10px;
          background: #25d366;
          color: #fff;
          text-decoration: none;
          padding: 12px 24px;
          border-radius: 99px;
          font-weight: 700;
          font-size: 15px;
          transition: all 0.2s;
        }

        .wa-button:hover {
          background: #20bd5a;
          transform: translateY(-2px);
          box-shadow: 0 8px 20px rgba(37, 211, 102, 0.3);
        }

        .wa-button svg {
          width: 20px;
          height: 20px;
          fill: currentColor;
        }

        .footer-bottom {
          max-width: 1200px;
          margin: 0 auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
          padding-top: 30px;
          border-top: 1px solid #1a1a1a;
          font-size: 13px;
        }

        .footer-bottom a {
          color: #aaa;
          text-decoration: none;
          margin-left: 20px;
          transition: color 0.2s;
        }

        .footer-bottom a:hover {
          color: #fff;
        }

        @media (max-width: 900px) {
          .footer-container {
            grid-template-columns: 1fr;
            text-align: center;
          }
          .footer-desc {
            margin: 0 auto;
          }
          .footer-bottom {
            flex-direction: column;
            gap: 16px;
          }
          .footer-bottom a {
            margin: 0 10px;
          }
        }
      `}</style>
      <footer className="footer-section">
        <div className="footer-container">
          <div className="footer-brand">
            <Link href="/" className="footer-logo">
              <span className="firestick">Firestick</span>
              <span className="iptv">IPTV</span>
              <span className="dot-io">.io</span>
            </Link>
            <p className="footer-desc">
              Review plan details, device compatibility, and service terms before subscribing.
            </p>
          </div>

          <div className="footer-links">
            <h4>Quick Links</h4>
            <ul>
              <li><Link href="/">Home</Link></li>
              <li><Link href="/pricing">Pricing Plans</Link></li>
              <li><Link href="/setup">Setup Guide</Link></li>
              <li><Link href="/blog">Blog</Link></li>
              <li><Link href="/#faq">FAQ</Link></li>
            </ul>
          </div>

          <div className="footer-whatsapp">
            <div className="wa-box">
              <p className="wa-title">Ready to Buy? Chat with us instantly.</p>
              <a
                href="https://wa.me/447393653591?text=Hello,%20I'm%20interested%20in%20your%20IPTV%20service"
                target="_blank"
                rel="noopener noreferrer"
                className="wa-button"
              >
                <svg viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
                </svg>
                +44 7393 653591
              </a>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <div className="copyright">
            © {new Date().getFullYear()} Firestick IPTV. All rights reserved.
          </div>
          <div className="legal">
            <a href="https://wa.me/447393653591?text=Please%20send%20me%20the%20terms%20and%20conditions" target="_blank" rel="noopener noreferrer">Request Terms</a>
            <a href="https://wa.me/447393653591?text=Please%20send%20me%20your%20privacy%20information" target="_blank" rel="noopener noreferrer">Request Privacy Information</a>
            <a href="https://wa.me/447393653591?text=Please%20send%20me%20your%20refund%20policy" target="_blank" rel="noopener noreferrer">Request Refund Policy</a>
          </div>
        </div>
      </footer>
    </>
  );
}
