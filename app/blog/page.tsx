import React from 'react';
import Link from 'next/link';
import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Firestick IPTV UK Blog | Setup, Apps & Streaming Guides',
  description: 'Read practical UK-focused guides to Fire TV Stick setup, streaming apps, service compatibility, and IPTV subscription checks.',
  alternates: {
    canonical: '/blog'
  },
  keywords: [
    'best iptv subscription in uk',
    'iptv blog',
    'firestick iptv subscription in uk',
    'iptv news uk',
    'iptv guides',
    'buy iptv uk',
    'premium iptv uk',
    'iptv sky glass firestick',
    'firestick packages uk',
    'sky glass iptv',
    'iptv firestick'
  ],
  openGraph: {
    title: 'Firestick IPTV Blog & UK Streaming Guides',
    description: 'Practical UK-focused guides to Firestick, streaming apps, and IPTV subscriptions.',
    url: 'https://www.quicktvpackagess.co.uk/blog',
    locale: 'en_GB',
    type: 'website'
  }
};

const blogs = [
  {
    id: 1,
    title: 'How to Stop Buffering on Firestick IPTV',
    date: 'October 1, 2026',
    excerpt: 'Work through practical Wi-Fi, device, and app checks that may help diagnose buffering on a Fire TV Stick.',
    readTime: '4 min read'
  },
  {
    id: 2,
    title: 'Top 10 Must-Have Apps for Firestick in 2026',
    date: 'September 24, 2026',
    excerpt: 'Learn how to find compatible Fire TV apps, check their publishers, and install them from official sources.',
    readTime: '6 min read'
  },
  {
    id: 3,
    title: 'TiviMate vs IPTV Smarters: Which is Better?',
    date: 'September 15, 2026',
    excerpt: 'Compare IPTV player interfaces and check current features, pricing, and device compatibility before choosing.',
    readTime: '5 min read'
  },
  {
    id: 4,
    title: 'The Ultimate Guide to Cord-Cutting',
    date: 'September 5, 2026',
    excerpt: 'Review your TV and streaming costs in the UK and compare legitimate, authorised services before changing packages.',
    readTime: '8 min read'
  },
  {
    id: 5,
    title: 'Can You Get Sky Glass on Firestick? UK Compatibility Guide',
    date: 'October 30, 2026',
    excerpt: 'Understand the difference between Sky Glass and Fire TV Stick, what works together, and how to check for official streaming apps in the UK.',
    readTime: '5 min read'
  },
  {
    id: 6,
    title: 'Firestick Packages UK: How to Compare Your Options',
    date: 'October 30, 2026',
    excerpt: 'A practical checklist for comparing Firestick packages, device compatibility, subscription terms, and licensed UK streaming services.',
    readTime: '6 min read'
  },
  {
    id: 7,
    title: 'IPTV on Firestick: A Safe, Legal UK Setup Guide',
    date: 'October 30, 2026',
    excerpt: 'Learn what IPTV means, how to check whether a provider is authorised, and how to use official apps on a Fire TV Stick.',
    readTime: '5 min read'
  }
];

export default function BlogPage() {
  return (
    <main id="main-content" style={{ background: "#000", minHeight: "100vh", paddingTop: "120px" }}>
      <style>{`
        .blog-container {
          max-width: 1200px;
          margin: 0 auto;
          padding: 0 24px 80px;
          font-family: var(--font-geist-sans), sans-serif;
        }

        .blog-header {
          text-align: center;
          margin-bottom: 60px;
        }

        .blog-title {
          font-size: clamp(36px, 5vw, 56px);
          font-weight: 900;
          color: #fff;
          margin-bottom: 16px;
          letter-spacing: -1px;
        }

        .blog-subtitle {
          color: #aaa;
          font-size: 18px;
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
          gap: 30px;
        }

        .blog-card {
          background: #0a0a0a;
          border: 1px solid #1a1a1a;
          border-radius: 12px;
          padding: 30px;
          transition: transform 0.2s, box-shadow 0.2s, border-color 0.2s;
          display: flex;
          flex-direction: column;
        }

        .blog-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 15px 30px rgba(0,0,0,0.5);
          border-color: #333;
        }

        .blog-meta {
          display: flex;
          justify-content: space-between;
          font-size: 12px;
          color: #00d2ff;
          font-weight: 700;
          text-transform: uppercase;
          margin-bottom: 16px;
          letter-spacing: 1px;
        }

        .blog-card-title {
          font-size: 22px;
          font-weight: 800;
          color: #fff;
          margin: 0 0 16px 0;
          line-height: 1.3;
        }

        .blog-card-excerpt {
          font-size: 15px;
          color: #888;
          line-height: 1.6;
          margin: 0 0 24px 0;
          flex-grow: 1;
        }

        .blog-read-more {
          color: #fff;
          text-decoration: none;
          font-size: 14px;
          font-weight: 700;
          display: inline-flex;
          align-items: center;
          gap: 6px;
          transition: color 0.2s;
        }

        .blog-read-more:hover {
          color: #00d2ff;
        }

        .blog-read-more svg {
          width: 16px;
          height: 16px;
        }
      `}</style>
      <div className="blog-container">
        <div className="blog-header">
          <h1 className="blog-title">Firestick IPTV Blog</h1>
          <p className="blog-subtitle">Latest news, streaming tips, and technical guides.</p>
        </div>

        <div className="blog-grid">
          {blogs.map((blog) => (
            <div className="blog-card" key={blog.id}>
              <div className="blog-meta">
                <span>{blog.date}</span>
                <span>{blog.readTime}</span>
              </div>
              <h2 className="blog-card-title">{blog.title}</h2>
              <p className="blog-card-excerpt">{blog.excerpt}</p>
              <Link href={`/blog/${blog.id}`} className="blog-read-more">
                Read Article
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <line x1="5" y1="12" x2="19" y2="12"></line>
                  <polyline points="12 5 19 12 12 19"></polyline>
                </svg>
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}
