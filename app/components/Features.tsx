import React from 'react';

export default function Features() {
    return (
        <>
            <style>{`
        .features-section {
          background:
            radial-gradient(ellipse 70% 40% at 50% 0%, rgba(229, 9, 20, 0.12), transparent 55%),
            #000;
          padding: 80px 24px;
          text-align: center;
          font-family: var(--font-geist-sans), sans-serif;
        }
        
        .features-title {
          font-size: clamp(28px, 4vw, 42px);
          font-weight: 800;
          color: #fff;
          margin: 0 0 12px 0;
          letter-spacing: -0.5px;
        }

        .features-title .highlight-blue {
          background: linear-gradient(90deg, #60a5fa, #22d3ee);
          -webkit-background-clip: text;
          background-clip: text;
          color: transparent;
        }

        .features-subtitle {
          font-size: 16px;
          color: #aaa;
          margin: 0 0 60px 0;
          font-weight: 500;
        }

        .features-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
          gap: 24px;
          max-width: 1200px;
          margin: 0 auto;
        }

        .feature-card {
          background:
            linear-gradient(180deg, rgba(255,255,255,0.04), rgba(255,255,255,0.015)),
            #111;
          border-radius: 22px;
          padding: 40px 24px 36px;
          border: 1px solid rgba(255,255,255,0.08);
          transition: transform 0.35s ease, box-shadow 0.35s ease, border-color 0.35s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
          overflow: hidden;
          position: relative;
        }

        .feature-card::before {
          content: '';
          position: absolute;
          inset: 0;
          background: radial-gradient(circle at 50% 0%, rgba(255,255,255,0.08), transparent 46%);
          pointer-events: none;
        }

        .feature-card:hover {
          transform: translateY(-10px);
          box-shadow: 0 24px 60px rgba(0,0,0,0.55), 0 0 40px rgba(34, 211, 238, 0.08);
          border-color: rgba(255,255,255,0.18);
        }

        .card-graphic {
          width: 100%;
          height: 180px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 28px;
          position: relative;
        }

        .graphic-1 {
          display: flex;
          height: 140px;
          width: 88%;
          border-radius: 16px;
          overflow: hidden;
          box-shadow: 0 18px 40px rgba(0,0,0,0.55);
          position: relative;
        }
        .graphic-1 .col {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: flex-end;
          color: #fff;
          font-weight: 800;
          font-size: 11px;
          letter-spacing: 0.08em;
          text-transform: uppercase;
          padding-bottom: 14px;
          position: relative;
        }
        .graphic-1 .col::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(180deg, rgba(255,255,255,0.22), transparent 42%, rgba(0,0,0,0.28));
        }
        .graphic-1 .col span { position: relative; z-index: 1; }
        .graphic-1 .col.c1 { background: linear-gradient(180deg, #ffb347, #ff6a00); }
        .graphic-1 .col.c2 { background: linear-gradient(180deg, #5ad6ff, #0077ff); }
        .graphic-1 .col.c3 { background: linear-gradient(180deg, #c084fc, #6d28d9); }
        .graphic-1 .col.c4 { background: linear-gradient(180deg, #34d399, #059669); }

        .graphic-2 {
          position: relative;
          width: 250px;
          height: 160px;
        }
        .mock-tv,
        .mock-laptop,
        .mock-phone {
          position: absolute;
          overflow: hidden;
        }
        .mock-tv {
          width: 176px;
          height: 118px;
          left: 38px;
          top: 8px;
          background: linear-gradient(145deg, #1e3a8a, #0b1220 62%);
          border: 3px solid #3f3f46;
          border-bottom-width: 9px;
          border-radius: 10px;
          box-shadow: 0 18px 30px rgba(0,0,0,0.45), 0 0 28px rgba(37, 99, 235, 0.22);
        }
        .mock-tv::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.18), transparent 42%);
        }
        .mock-laptop {
          width: 118px;
          height: 72px;
          left: 8px;
          bottom: 10px;
          background: linear-gradient(145deg, #166534, #052e16);
          border: 2px solid #737373;
          border-bottom: 9px solid #a3a3a3;
          border-radius: 8px 8px 2px 2px;
          box-shadow: -10px 14px 24px rgba(0,0,0,0.5);
          z-index: 2;
        }
        .mock-laptop::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.16), transparent 48%);
        }
        .mock-phone {
          width: 42px;
          height: 84px;
          right: 18px;
          bottom: 12px;
          background: linear-gradient(180deg, #7c3aed, #2e1065);
          border: 2px solid #d4d4d8;
          border-radius: 9px;
          box-shadow: 8px 12px 22px rgba(0,0,0,0.5), 0 0 18px rgba(168, 85, 247, 0.28);
          z-index: 3;
        }
        .mock-phone::before {
          content: '';
          position: absolute;
          top: 6px;
          left: 50%;
          width: 14px;
          height: 3px;
          border-radius: 99px;
          transform: translateX(-50%);
          background: #09090b;
        }
        .mock-phone::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.2), transparent 45%);
        }

        .graphic-3 {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
          perspective: 700px;
        }
        .poster {
          width: 74px;
          height: 112px;
          border-radius: 8px;
          position: absolute;
          box-shadow: 0 18px 30px rgba(0,0,0,0.55);
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.16);
        }
        .poster::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(120deg, transparent 30%, rgba(255,255,255,0.28) 48%, transparent 62%);
          transform: translateX(-120%);
          animation: posterShine 3.6s ease-in-out infinite;
        }
        .poster:nth-child(1) { background: radial-gradient(circle at 30% 20%, #fb7185, #7c2d12 70%); transform: translateX(-86px) rotate(-16deg); z-index: 1; }
        .poster:nth-child(2) { background: radial-gradient(circle at 70% 10%, #60a5fa, #1e3a8a 72%); transform: translateX(-44px) rotate(-8deg); z-index: 2; height: 122px; width: 80px; }
        .poster:nth-child(3) { background: radial-gradient(circle at 50% 0%, #34d399, #064e3b 68%); transform: translateX(0) rotate(0deg) translateY(-6px); z-index: 3; height: 138px; width: 90px; }
        .poster:nth-child(4) { background: radial-gradient(circle at 20% 10%, #c084fc, #4c1d95 72%); transform: translateX(44px) rotate(8deg); z-index: 2; height: 122px; width: 80px; }
        .poster:nth-child(5) { background: radial-gradient(circle at 80% 20%, #fbbf24, #78350f 70%); transform: translateX(86px) rotate(16deg); z-index: 1; }

        .feature-title {
          font-size: 20px;
          font-weight: 800;
          color: #fff;
          margin: 0 0 16px 0;
          letter-spacing: -0.3px;
        }

        .feature-desc {
          font-size: 14px;
          color: #999;
          line-height: 1.6;
          margin: 0;
        }

        @keyframes posterShine {
          0%, 55% { transform: translateX(-120%); }
          80%, 100% { transform: translateX(120%); }
        }
          
        @media (max-width: 768px) {
          .features-title {
             font-size: 28px;
          }
          .features-subtitle {
             margin-bottom: 40px;
          }
          .features-section {
             padding: 60px 20px;
          }
        }

        @media (prefers-reduced-motion: reduce) {
          .poster::after {
            animation: none;
          }
        }
      `}</style>
            <section className="features-section">
                <h2 className="features-title">
                    Say Goodbye to <span className="highlight-blue">Cable Costs</span>
                </h2>
                <p className="features-subtitle">The only TV subscription you need</p>

                <div className="features-grid">
                    <div className="feature-card">
                        <div className="card-graphic">
                            <div className="graphic-1" aria-hidden="true">
                                <div className="col c1"><span>Comedy</span></div>
                                <div className="col c2"><span>Sci-fi</span></div>
                                <div className="col c3"><span>Drama</span></div>
                                <div className="col c4"><span>Life</span></div>
                            </div>
                        </div>
                        <h3 className="feature-title">Channel availability</h3>
                        <p className="feature-desc">
                            Channel availability depends on the selected plan, the provider’s rights, and your location. Review the current plan details before subscribing.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="card-graphic">
                            <div className="graphic-2" aria-hidden="true">
                                <div className="mock-tv"></div>
                                <div className="mock-laptop"></div>
                                <div className="mock-phone"></div>
                            </div>
                        </div>
                        <h3 className="feature-title">Device compatibility</h3>
                        <p className="feature-desc">
                            Device and app compatibility varies by plan and model. Check the setup guide or confirm compatibility with support before subscribing.
                        </p>
                    </div>

                    <div className="feature-card">
                        <div className="card-graphic">
                            <div className="graphic-3" aria-hidden="true">
                                <div className="poster" />
                                <div className="poster" />
                                <div className="poster" />
                                <div className="poster" />
                                <div className="poster" />
                            </div>
                        </div>
                        <h3 className="feature-title">Content and features</h3>
                        <p className="feature-desc">
                            Available programmes, video quality, and catch-up features depend on the service and subscription. Confirm what is included in your chosen plan.
                        </p>
                    </div>
                </div>
            </section>
        </>
    );
}
