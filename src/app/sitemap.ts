import type { MetadataRoute } from 'next';
import { absoluteUrl } from '@/lib/seo';

export default function sitemap(): MetadataRoute.Sitemap {
  const lastModified = new Date();

  const routes = ['/', '/about', '/coffee-process', '/shop'];

  return routes.map((route) => ({
    url: absoluteUrl(route),
    lastModified,
    changeFrequency: route === '/shop' ? 'daily' : 'weekly',
    priority: route === '/' ? 1 : 0.7,
  }));
}
