import React from 'react';

export default function Features() {
    return (
        <>
            <style>{`
        .features-section {
          background-color: #000;
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
          color: #3b82f6; 
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
          background-color: #1a1a1a;
          border-radius: 16px;
          padding: 48px 24px 40px;
          border: 1px solid #2a2a2a;
          transition: transform 0.2s ease, box-shadow 0.2s ease, border-color 0.2s ease;
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .feature-card:hover {
          transform: translateY(-8px);
          box-shadow: 0 16px 40px rgba(0,0,0,0.5);
          border-color: #444;
        }

        .card-graphic {
          width: 100%;
          height: 160px;
          display: flex;
          align-items: center;
          justify-content: center;
          margin-bottom: 30px;
          position: relative;
        }

        /* Graphic 1: Colored Columns */
        .graphic-1 {
          display: flex;
          height: 130px;
          width: 85%;
          border-radius: 12px;
          overflow: hidden;
          box-shadow: 0 10px 30px rgba(0,0,0,0.5);
        }
        .graphic-1 .col {
          flex: 1;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #fff;
          font-weight: 800;
          font-size: 12px;
          text-transform: uppercase;
          text-shadow: 0 2px 4px rgba(0,0,0,0.5);
        }
        .graphic-1 .col.c1 { background: #ff7e00; }
        .graphic-1 .col.c2 { background: #00a8e1; }
        .graphic-1 .col.c3 { background: #6c2b8c; }
        .graphic-1 .col.c4 { background: #00b074; }

        /* Graphic 2: Devices Mockup */
        .graphic-2 {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: flex-end;
          justify-content: center;
          padding-bottom: 10px;
        }
        .mock-tv {
          width: 220px;
          height: 140px;
          background: #111;
          border: 4px solid #333;
          border-bottom: 8px solid #444;
          border-radius: 8px;
          position: relative;
          box-shadow: 0 10px 20px rgba(0,0,0,0.5);
          overflow: hidden;
          background: linear-gradient(135deg, #18385d, #0b111a);
          background-size: cover;
          background-position: center;
        }
        .mock-tv::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(135deg, rgba(255,255,255,0.1) 0%, transparent 50%);
        }
        .mock-laptop {
          width: 130px;
          height: 85px;
          background: #111;
          border: 3px solid #555;
          border-bottom: 12px solid #666;
          border-radius: 6px 6px 0 0;
          position: absolute;
          bottom: 10px;
          left: 10%;
          box-shadow: -5px 5px 15px rgba(0,0,0,0.6);
          background: linear-gradient(135deg, #243e2b, #101510);
          background-size: cover;
          background-position: center;
        }
        .mock-phone {
          width: 45px;
          height: 90px;
          background: #000;
          border: 3px solid #555;
          border-radius: 8px;
          position: absolute;
          bottom: 10px;
          right: 20%;
          box-shadow: 5px 5px 15px rgba(0,0,0,0.7);
          background: linear-gradient(135deg, #3f265f, #130e1a);
          background-size: cover;
          background-position: center;
        }

        /* Graphic 3: Tilted Posters */
        .graphic-3 {
          position: relative;
          width: 100%;
          height: 100%;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        .poster {
          width: 70px;
          height: 105px;
          background: #222;
          border-radius: 6px;
          position: absolute;
          box-shadow: -5px 15px 25px rgba(0,0,0,0.7);
          overflow: hidden;
          border: 1px solid rgba(255,255,255,0.1);
        }
        .poster:nth-child(1) { background: linear-gradient(160deg, #8b3c23, #191010); }
        .poster:nth-child(2) { background: linear-gradient(160deg, #293d6a, #101321); }
        .poster:nth-child(3) { background: linear-gradient(160deg, #47755c, #101712); }
        .poster:nth-child(4) { background: linear-gradient(160deg, #704e80, #1a1120); }
        .poster:nth-child(5) { background: linear-gradient(160deg, #947b3c, #1c1709); }
        .poster:nth-child(1) { transform: translateX(-80px) rotate(-15deg); z-index: 1; }
        .poster:nth-child(2) { transform: translateX(-40px) rotate(-8deg); z-index: 2; height: 115px; width: 75px; }
        .poster:nth-child(3) { transform: translateX(0) rotate(0deg); z-index: 3; height: 130px; width: 85px; }
        .poster:nth-child(4) { transform: translateX(40px) rotate(8deg); z-index: 2; height: 115px; width: 75px; }
        .poster:nth-child(5) { transform: translateX(80px) rotate(15deg); z-index: 1; }

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
      `}</style>
            <section className="features-section">
                <h2 className="features-title">
                    Say Goodbye to <span className="highlight-blue">Cable Costs</span>
                </h2>
                <p className="features-subtitle">The only TV subscription you need</p>

                <div className="features-grid">
                    {/* Card 1 */}
                    <div className="feature-card">
                        <div className="card-graphic">
                            <div className="graphic-1">
                                <div className="col c1">Comedy</div>
                                <div className="col c2">Sci-fi</div>
                                <div className="col c3">Drama</div>
                                <div className="col c4">Life</div>
                            </div>
                        </div>
                        <h3 className="feature-title">Channel availability</h3>
                        <p className="feature-desc">
                            Channel availability depends on the selected plan, the provider’s rights, and your location. Review the current plan details before subscribing.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="feature-card">
                        <div className="card-graphic">
                            <div className="graphic-2">
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

                    {/* Card 3 */}
                    <div className="feature-card">
                        <div className="card-graphic">
                            <div className="graphic-3">
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
