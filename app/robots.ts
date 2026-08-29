import type { MetadataRoute } from 'next';
import { site } from '@/data/site';

// Généré statiquement en /robots.txt au build
export default function robots(): MetadataRoute.Robots {
  return {
    rules: {
      userAgent: '*',
      allow: '/',
    },
    sitemap: `${site.url}/sitemap.xml`,
  };
}
