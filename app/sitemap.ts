import type { MetadataRoute } from 'next';
import { BLOG_POSTS, SITE_URL } from './lib/site';

export default function sitemap(): MetadataRoute.Sitemap {
  const now = new Date().toISOString();

  const pages: MetadataRoute.Sitemap = [
    {
      url: SITE_URL,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 1,
      images: [`${SITE_URL}/images/image.png`]
    },
    {
      url: `${SITE_URL}/pricing`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.9
    },
    {
      url: `${SITE_URL}/setup`,
      lastModified: now,
      changeFrequency: 'monthly',
      priority: 0.8
    },
    {
      url: `${SITE_URL}/blog`,
      lastModified: now,
      changeFrequency: 'weekly',
      priority: 0.8
    }
  ];

  const posts: MetadataRoute.Sitemap = BLOG_POSTS.map((post) => ({
    url: `${SITE_URL}/blog/${post.id}`,
    lastModified: post.lastModified,
    changeFrequency: 'monthly',
    priority: 0.7
  }));

  return [...pages, ...posts];
}
