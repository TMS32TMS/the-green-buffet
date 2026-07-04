export default function StructuredData() {
  const jsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Restaurant',
    name: 'The Green Buffet',
    description: 'Build your own healthy bowls and burritos with fresh ingredients.',
    image: 'https://thegreenbuffet.com/images/og-image.jpg',
    url: 'https://thegreenbuffet.com',
    telephone: '(503) 555-0147',
    email: 'hello@thegreenbuffet.com',
    address: {
      '@type': 'PostalAddress',
      streetAddress: '742 Evergreen Terrace',
      addressLocality: 'Portland',
      addressRegion: 'OR',
      postalCode: '97201',
      addressCountry: 'US',
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: 45.5155,
      longitude: -122.6789,
    },
    openingHoursSpecification: [
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday'],
        opens: '10:00',
        closes: '21:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Friday',
        opens: '10:00',
        closes: '22:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Saturday',
        opens: '09:00',
        closes: '22:00',
      },
      {
        '@type': 'OpeningHoursSpecification',
        dayOfWeek: 'Sunday',
        opens: '09:00',
        closes: '20:00',
      },
    ],
    servesCuisine: ['Healthy', 'Mexican', 'American'],
    priceRange: '$',
    menu: 'https://thegreenbuffet.com/menu',
    acceptsReservations: false,
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
    />
  );
}