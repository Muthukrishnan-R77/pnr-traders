import './globals.css';
import type { Metadata } from 'next';
import { Inter, Space_Grotesk } from 'next/font/google';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
});
const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
});

export const metadata: Metadata = {
  metadataBase: new URL('https://pnrtraders.in'),
  title: {
    default: 'PNR Traders | Electrical, Plumbing & Hardware',
    template: '%s | PNR Traders',
  },
  icons: {
    icon: '/images/logo.jpg',
    shortcut: '/images/logo.jpg',
  },
  description:
    'PNR Traders is a trusted wholesale & retail supplier in Madurai, Tamil Nadu offering premium Electrical, Plumbing, Hardware and Building Materials from leading brands like Finolex, Havells, Polycab, Legrand and more.',
  keywords: [
    'PNR Traders',
    'electrical supplier Madurai',
    'plumbing products Madurai',
    'hardware store Madurai',
    'building materials Tamil Nadu',
    'wholesale electrical',
    'Finolex',
    'Havells',
    'Polycab',
    'Legrand',
  ],
  authors: [{ name: 'PNR Traders' }],
  openGraph: {
    title: 'PNR Traders | Electrical, Plumbing & Hardware Solutions',
    description:
      'Your Trusted Partner for Electrical, Plumbing & Hardware Solutions in Madurai, Tamil Nadu.',
    type: 'website',
    locale: 'en_IN',
    siteName: 'PNR Traders',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'PNR Traders | Electrical, Plumbing & Hardware Solutions',
    description:
      'Your Trusted Partner for Electrical, Plumbing & Hardware Solutions in Madurai.',
  },
  robots: { index: true, follow: true },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'LocalBusiness',
  name: 'PNR Traders',
  description:
    'Wholesale & retail supplier of Electrical, Plumbing, Hardware and Building Materials in Madurai, Tamil Nadu.',
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Madurai',
    addressRegion: 'Tamil Nadu',
    addressCountry: 'IN',
  },
  telephone: '+91-9952180405',
  areaServed: 'Madurai, Tamil Nadu',
  priceRange: '₹₹',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${inter.variable} ${spaceGrotesk.variable} dark`}>
      <body className="font-sans antialiased bg-background text-foreground">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
      </body>
    </html>
  );
}
