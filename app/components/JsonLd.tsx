import { PHONE_DISPLAY, SITE_NAME, SITE_URL, TEL_HREF, WHATSAPP_NUMBER } from '../lib/site';

const faqs = [
  {
    question: 'How do I set up an IPTV app?',
    answer: 'Check the setup guide for general instructions, then follow the official instructions for your device and chosen service.'
  },
  {
    question: 'How can I get support?',
    answer: 'Contact the provider using the WhatsApp link on this site and include your device model and a description of the issue.'
  },
  {
    question: 'Which devices are supported?',
    answer: 'Compatibility varies by app, model, and plan. Check the setup guide and confirm your exact device with the provider.'
  },
  {
    question: 'What internet speed do I need?',
    answer: 'Requirements vary by stream quality and simultaneous use. Check the service’s recommendations and your device’s network requirements.'
  }
];

export default function JsonLd() {
  const data = [
    {
      '@context': 'https://schema.org',
      '@type': 'WebSite',
      name: SITE_NAME,
      url: SITE_URL,
      inLanguage: 'en-GB'
    },
    {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: SITE_NAME,
      url: SITE_URL,
      telephone: TEL_HREF.replace('tel:', ''),
      contactPoint: {
        '@type': 'ContactPoint',
        telephone: PHONE_DISPLAY,
        contactType: 'customer support',
        areaServed: 'GB',
        availableLanguage: 'English'
      },
      sameAs: [`https://wa.me/${WHATSAPP_NUMBER}`]
    },
    {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map((faq) => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    }
  ];

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}
