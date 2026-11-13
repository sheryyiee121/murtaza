export const SITE_URL = 'https://www.quicktvpackagess.co.uk';
export const SITE_NAME = 'Firestick IPTV UK';
export const PHONE_DISPLAY = '+44 7348 505648';
export const WHATSAPP_NUMBER = '447348505648';
export const TEL_HREF = 'tel:+447348505648';

export function whatsappUrl(message: string) {
  return `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(message)}`;
}

export const BLOG_POSTS = [
  { id: '1', lastModified: '2026-10-01' },
  { id: '2', lastModified: '2026-09-24' },
  { id: '3', lastModified: '2026-09-15' },
  { id: '4', lastModified: '2026-09-05' },
  { id: '5', lastModified: '2026-10-30' },
  { id: '6', lastModified: '2026-10-30' },
  { id: '7', lastModified: '2026-10-30' }
] as const;
