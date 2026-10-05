import React from 'react';
import Link from 'next/link';

export const metadata = {
  title: 'Blog & News - FirestickIPTV.io | Best IPTV Subscription in UK',
  description: 'Read the latest news, guides, and tips about Firestick IPTV, streaming setups, and finding the best iptv subscription in the UK.',
  keywords: 'best iptv subscription in uk, iptv blog, firestick iptv subscription in uk, iptv news uk, iptv guides, buy iptv uk, premium iptv uk'
};

const blogs = [
  {
    id: 1,
    title: 'How to Stop Buffering on Firestick IPTV',
    date: 'October 1, 2026',
    excerpt: 'Buffering can ruin movie night. Discover the top 5 ways to optimize your Fire TV Stick and router settings to guarantee a seamless 4K streaming experience.',
    readTime: '4 min read'
  },
  {
    id: 2,
    title: 'Top 10 Must-Have Apps for Firestick in 2026',
    date: 'September 24, 2026',
    excerpt: 'Unlock the full potential of your Amazon Firestick. From Downloader to advanced VPNs, here are the essential applications you need to install right now.',
    readTime: '6 min read'
  },
  {
    id: 3,
    title: 'TiviMate vs IPTV Smarters: Which is Better?',
    date: 'September 15, 2026',
    excerpt: 'We compare the two most popular IPTV players on the market. Learn which interface, recording features, and EPG systems perform best for live TV.',
    readTime: '5 min read'
  },
  {
    id: 4,
    title: 'The Ultimate Guide to Cord-Cutting',
    date: 'September 5, 2026',
    excerpt: 'Tired of massive cable bills? Here is exactly how much money you can save by switching exclusively to an IPTV subscription and internet bundle.',
    readTime: '8 min read'
  }
];

export default function BlogPage() {
  return (
    <main style={{ background: "#000", minHeight: "100vh", paddingTop: "120px" }}>
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
