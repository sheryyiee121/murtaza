import type { MetadataRoute } from 'next';

const siteUrl = 'https://www.quicktvpackagess.co.uk';
const blogPostIds = ['1', '2', '3', '4', '5', '6', '7'];

export default function sitemap(): MetadataRoute.Sitemap {
  const staticPages = ['', '/pricing', '/setup', '/blog'];

  return [
    ...staticPages.map((path) => ({ url: `${siteUrl}${path}` })),
    ...blogPostIds.map((id) => ({ url: `${siteUrl}/blog/${id}` }))
  ];
}
