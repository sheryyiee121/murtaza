'use client';

import React, { useEffect, useRef } from 'react';
import Image from 'next/image';

const movieSlides = [
  { label: "Live TV", src: "/images/carousel/live-tv.jpg" },
  { label: "Movies", src: "/images/carousel/movies.jpg" },
  { label: "Series", src: "/images/carousel/series.jpg" },
  { label: "Sports", src: "/images/carousel/sports.jpg" },
  { label: "News", src: "/images/carousel/news.jpg" },
  { label: "Documentaries", src: "/images/carousel/docs.jpg" },
  { label: "Kids", src: "/images/carousel/kids.jpg" },
  { label: "Entertainment", src: "/images/carousel/entertainment.jpg" }
];

const stats = [
  { value: "Compare", sub: "plan inclusions" },
  { value: "Confirm", sub: "device compatibility" },
  { value: "Review", sub: "subscription terms" },
  { value: "Check", sub: "regional availability" }
];

function useMarquee(direction: 'left' | 'right', speed = 55) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    let offset = 0;
    let primed = false;
    let frame = 0;
    let last = performance.now();

    const tick = (now: number) => {
      const delta = Math.min(now - last, 48) / 1000;
      last = now;
      const loopWidth = el.scrollWidth / 3;
      if (loopWidth > 0) {
        if (!primed) {
          offset = direction === 'right' ? -loopWidth : 0;
          primed = true;
        }
        if (direction === 'left') {
          offset -= speed * delta;
          if (offset <= -loopWidth) offset += loopWidth;
        } else {
          offset += speed * delta;
          if (offset >= 0) offset -= loopWidth;
        }
        el.style.transform = `translate3d(${offset}px, 0, 0)`;
      }
      frame = requestAnimationFrame(tick);
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [direction, speed]);

  return ref;
}

function PosterCard({ src, label }: { src: string; label: string }) {
  return (
    <div className="movie-card">
      <Image src={src} alt={label} width={340} height={500} sizes="170px" draggable={false} />
      <span className="movie-card-label">{label}</span>
    </div>
  );
}

function MarqueeRow({ direction, speed }: { direction: 'left' | 'right'; speed: number }) {
  const trackRef = useMarquee(direction, speed);
  const loop = [...movieSlides, ...movieSlides, ...movieSlides];

  return (
    <div className="slider-track-wrapper">
      <div ref={trackRef} className="slider-track">
        {loop.map((m, i) => (
          <PosterCard key={`${direction}-${i}`} src={m.src} label={m.label} />
        ))}
      </div>
    </div>
  );
}

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
          will-change: transform;
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
          background: #0b0b0b;
          border: 1px solid #1a1a1a;
        }

        .movie-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          pointer-events: none;
        }

        .movie-card::after {
          content: '';
          position: absolute;
          inset: 0;
          background: linear-gradient(transparent 45%, rgba(0,0,0,0.78));
          pointer-events: none;
        }

        .movie-card-label {
          position: absolute;
          left: 0;
          right: 0;
          bottom: 12px;
          z-index: 1;
          color: #fff;
          font-size: 13px;
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
          .movie-card { width: 140px; height: 210px; }
          .stats-bar  { gap: 28px; }
        }
      `}</style>
      <section className="sliders-section">
        <MarqueeRow direction="left" speed={70} />
        <h2 className="vod-heading">
          <span>Content availability</span> varies by plan and region
        </h2>
        <MarqueeRow direction="right" speed={55} />
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
