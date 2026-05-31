const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://elevate-art-entertainment-vulqollc.vercel.app';

const ROUTES = [
  { path: '/', priority: 1.0, changeFrequency: 'weekly' },
  { path: '/page-about/', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/page-services/', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/page-team/', priority: 0.9, changeFrequency: 'monthly' },
  { path: '/page-contact/', priority: 0.8, changeFrequency: 'yearly' },
  { path: '/portfolio-grid/', priority: 0.8, changeFrequency: 'weekly' },
  { path: '/portfolio-gallery/', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/portfolio-creative/', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/portfolio-masonry/', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/blog-classic/', priority: 0.7, changeFrequency: 'weekly' },
  { path: '/page-FAQ/', priority: 0.5, changeFrequency: 'yearly' },
];

export default function sitemap() {
  const now = new Date('2026-05-31');
  return ROUTES.map((r) => ({
    url: `${SITE_URL}${r.path}`,
    lastModified: now,
    changeFrequency: r.changeFrequency,
    priority: r.priority,
  }));
}
