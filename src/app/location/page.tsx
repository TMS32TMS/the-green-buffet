import type { Metadata } from 'next';
import { LOCATION_INFO } from '@/lib/constants';
import LocationClient from './LocationClient';

export const metadata: Metadata = {
  title: 'Location',
  description:
    'Find The Green Buffet at Liberty Mall in Lusaka. View our address, opening hours, and get directions.',
  openGraph: {
    title: 'Location | The Green Buffet',
    description:
      'Find The Green Buffet at Liberty Mall in Lusaka. View our address, opening hours, and get directions.',
  },
};

export default function LocationPage() {
  const { name, address, city, state, zip, phone, email, hours, coordinates, googleMapsUrl } =
    LOCATION_INFO;

  const fullAddress = `${address}, ${city}, ${state} ${zip}`;
  const mapsPlaceUrl = `https://www.google.com/maps/place/${encodeURIComponent(fullAddress)}`;

  // Real Google Maps embed URL from your provided iframe
  const mapsEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240.38916837266834!2d28.31275684193476!3d-15.41831136162428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19408de85e1ab8bb%3A0xd44185ec4f650f44!2sLiberty%20mall%20limited!5e0!3m2!1sen!2szm!4v1783191339808!5m2!1sen!2szm';

  return (
    <main>
      <LocationClient
        name={name}
        address={address}
        city={city}
        state={state}
        zip={zip}
        fullAddress={fullAddress}
        phone={phone}
        email={email}
        hours={hours}
        coordinates={coordinates}
        googleMapsUrl={googleMapsUrl}
        mapsEmbedUrl={mapsEmbedUrl}
        mapsPlaceUrl={mapsPlaceUrl}
      />
    </main>
  );
}