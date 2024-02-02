import { inter } from '@/app/ui/fonts';
import '@/app/ui/global.css';
import { Metadata } from 'next';
import Script from 'next/script';

export const metadata: Metadata = {
  title: {
    template: '%s | Acme Dashboard',
    default: 'Acme Dashboard',
  },
  description: 'The official Next.js Learn Dashboard built with App Router.',
  metadataBase: new URL('https://next-learn-dashboard.vercel.sh'),
};

const jsonLD = {
  '@context': 'https://schema.org',
  '@type': 'Store',
  name: 'Tiki',
  image: {
    '@type': 'ImageObject',
    url: 'https://salt.tikicdn.com/cache/w500/ts/upload/c0/8b/46/c3f0dc850dd93bfa7af7ada0cbd75dc0.png',
    width: 1080,
    height: 1080,
  },
  telephone: '19006035',
  url: 'https://tiki.vn/',
  address: {
    '@type': 'PostalAddress',
    streetAddress: '52 Ut Tich, Ward 4, Tan Binh District, Ho Chi Minh City',
    addressLocality: 'Ho Chi Minh',
    postalCode: '700000',
    addressRegion: 'Ho Chi Minh',
    addressCountry: 'VN',
  },
  priceRange: '1000 - 1000000000',
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: [
        'Monday',
        'Tuesday',
        'Wednesday',
        'Thursday',
        'Friday',
        'Saturday',
        'Sunday',
      ],
      opens: '08:00',
      closes: '21:00',
    },
  ],
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '10.79664498748942',
    longitude: '106.65856519879867',
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
      <Script
        id="json-ld"
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLD) }}
      />
    </html>
  );
}
