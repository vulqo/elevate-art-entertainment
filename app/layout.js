import './globals.css';

const SITE_URL =
  process.env.NEXT_PUBLIC_SITE_URL ||
  'https://elevate-art-entertainment-vulqollc.vercel.app';

export const metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'Elevate Art Entertainment',
    template: '%s · Elevate Art Entertainment',
  },
  description:
    'Elevate Art Entertainment — full-service entertainment company. Artist management, production, label, and live events.',
  applicationName: 'Elevate Art Entertainment',
  keywords: [
    'Elevate Art',
    'entertainment',
    'artist management',
    'music production',
    'record label',
    'live events',
    'Cliffside Park',
    'New Jersey',
  ],
  authors: [{ name: 'Elevate Art Entertainment' }],
  creator: 'Elevate Art Entertainment',
  publisher: 'Elevate Art Entertainment',
  openGraph: {
    type: 'website',
    siteName: 'Elevate Art Entertainment',
    title: 'Elevate Art Entertainment',
    description:
      'Full-service entertainment company. Artist management, production, label, and live events.',
    url: SITE_URL,
    images: [
      {
        url: '/assets/imgs/brand/logo-stacked-dark.svg',
        width: 468,
        height: 498,
        alt: 'Elevate Art Entertainment',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Elevate Art Entertainment',
    description:
      'Full-service entertainment company. Artist management, production, label, and live events.',
    images: ['/assets/imgs/brand/logo-stacked-dark.svg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon.ico', sizes: 'any' },
      { url: '/icon.svg', type: 'image/svg+xml' },
    ],
    apple: '/apple-icon.png',
  },
};

export default function RootLayout({ children }) {
  return <html lang="en">{children}</html>;
}
