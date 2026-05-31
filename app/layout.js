import './globals.css';
import generateStylesheetObject from '@/common/generateStylesheetsObject';

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
    // App Router auto-detects app/icon.svg, app/apple-icon.png, app/favicon.ico
    // but we still need this entry for the template's CSS via the `other` field.
    other: generateStylesheetObject([
      '/assets/css/plugins.css',
      '/assets/css/style.css',
      'https://fonts.googleapis.com/css?family=Poppins:100,200,300,400,500,600,700,800,900&display=swap',
      'https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:wght@200;300;400;500;600;700&display=swap',
    ]),
  },
};

export default function RootLayout({ children }) {
  return <html lang="en">{children}</html>;
}
