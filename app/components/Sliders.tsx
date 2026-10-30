import React from 'react';

const movieSlides = [
  { label: "Live TV" },
  { label: "Movies" },
  { label: "Series" },
  { label: "Sports" },
  { label: "News" },
  { label: "Documentaries" },
  { label: "Kids" },
  { label: "Entertainment" }
];

const stats = [
  { value: "Compare", sub: "plan inclusions" },
  { value: "Confirm", sub: "device compatibility" },
  { value: "Review", sub: "subscription terms" },
  { value: "Check", sub: "regional availability" }
];

export default function Sliders() {
  return (
    <>
      <style>{`
        .sliders-section {
          width: 100%;
          background: #000;
          padding: 60px 0 50px;
          overflow: hidden;
        }

        .slider-track-wrapper {
          width: 100%;
          overflow: hidden;
          position: relative;
          mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
          -webkit-mask-image: linear-gradient(to right, transparent 0%, black 8%, black 92%, transparent 100%);
        }

        .slider-track {
          display: flex;
          gap: 16px;
          width: max-content;
        }

        .slider-track.scroll-right {
          animation: scrollRight 35s linear infinite;
        }

        .slider-track.scroll-left {
          animation: scrollLeft 40s linear infinite;
        }

        @media (prefers-reduced-motion: reduce) {
          .slider-track {
            animation: none !important;
          }
        }

        @keyframes scrollRight {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }

        @keyframes scrollLeft {
          0%   { transform: translateX(-50%); }
          100% { transform: translateX(0); }
        }

        .sport-card {
          flex-shrink: 0;
          width: 160px;
          height: 110px;
          border-radius: 12px;
          overflow: hidden;
          position: relative;
          background: #111;
          border: 1px solid #222;
          transition: transform 0.3s, box-shadow 0.3s;
        }

        .sport-card:hover {
          transform: scale(1.06);
          box-shadow: 0 0 20px rgba(59,130,246,0.35);
          border-color: #3b82f6;
        }

        .sport-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .sport-card .card-label {
          position: absolute;
          bottom: 0;
          left: 0;
          right: 0;
          padding: 6px 8px;
          font-size: 10px;
          font-weight: 800;
          letter-spacing: 0.8px;
          color: #fff;
          background: linear-gradient(transparent, rgba(0,0,0,0.85));
          text-align: center;
        }

        .vod-heading {
          text-align: center;
          padding: 40px 24px 30px;
          font-family: Arial, sans-serif;
          font-size: clamp(22px, 3vw, 32px);
          font-weight: 900;
          color: #fff;
          letter-spacing: 0.5px;
        }

        .vod-heading span {
          color: #3b82f6;
        }

        .movie-card {
          flex-shrink: 0;
          width: 170px;
          height: 250px;
          border-radius: 14px;
          overflow: hidden;
          position: relative;
          background: linear-gradient(145deg, #142945, #101018 65%, #070707);
          border: 1px solid #1a1a1a;
          transition: transform 0.35s, box-shadow 0.35s;
        }

        .movie-card:hover {
          transform: scale(1.07);
          box-shadow: 0 8px 30px rgba(59,130,246,0.3);
          border-color: #3b82f6;
        }

        .movie-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }

        .movie-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(transparent 50%, rgba(0,0,0,0.7));
          pointer-events: none;
        }

        .movie-card-label {
          position: absolute;
          inset: 0;
          display: grid;
          place-items: center;
          color: #fff;
          font-size: 15px;
          font-weight: 800;
          letter-spacing: 1px;
          text-align: center;
          text-transform: uppercase;
          text-shadow: 0 2px 8px #000;
        }

        .stats-bar {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: 48px;
          flex-wrap: wrap;
          padding: 50px 24px 10px;
          max-width: 900px;
          margin: 0 auto;
        }

        .stat-item {
          text-align: center;
        }

        .stat-value {
          font-family: 'Arial Black', Arial, sans-serif;
          font-size: clamp(26px, 3.5vw, 38px);
          font-weight: 900;
          color: #fff;
          line-height: 1.2;
        }

        .stat-sub {
          font-family: Arial, sans-serif;
          font-size: 13px;
          color: #3b82f6;
          letter-spacing: 1px;
          margin-top: 4px;
        }

        @media (max-width: 640px) {
          .sport-card { width: 130px; height: 90px; }
          .movie-card { width: 140px; height: 210px; }
          .stats-bar  { gap: 28px; }
        }
      `}</style>
      <section className="sliders-section">
        <div className="slider-track-wrapper">
          <div className="slider-track scroll-right" aria-hidden="true">
            {[...movieSlides, ...movieSlides].map((m, i) => (
              <div key={i} className="movie-card"><span className="movie-card-label">{m.label}</span></div>
            ))}
          </div>
        </div>
        <h2 className="vod-heading">
          <span>Content availability</span> varies by plan and region
        </h2>
        <div className="slider-track-wrapper">
          <div className="slider-track scroll-left" aria-hidden="true">
            {[...movieSlides, ...movieSlides].map((m, i) => (
              <div key={i} className="movie-card"><span className="movie-card-label">{m.label}</span></div>
            ))}
          </div>
        </div>
        <div className="stats-bar">
          {stats.map((s) => (
            <div key={s.sub} className="stat-item">
              <div className="stat-value">{s.value}</div>
              <div className="stat-sub">{s.sub}</div>
            </div>
          ))}
        </div>
      </section>
    </>
  );
}
