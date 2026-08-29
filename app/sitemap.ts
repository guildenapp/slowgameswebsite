import type { MetadataRoute } from 'next';
import { site } from '@/data/site';

// Généré statiquement en /sitemap.xml au build
export default function sitemap(): MetadataRoute.Sitemap {
  return [
    {
      url: site.url,
      lastModified: new Date(),
      changeFrequency: 'monthly',
      priority: 1,
    },
  ];
}
