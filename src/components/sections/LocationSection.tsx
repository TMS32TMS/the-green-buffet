import { LOCATION_INFO } from '@/lib/constants';
import { HiClock, HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';

export default function LocationSection() {
  const { name, address, city, state, zip, phone, email, hours, googleMapsUrl } =
    LOCATION_INFO;

  const fullAddress = `${address}, ${city}, ${state} ${zip}`;

  // Real Google Maps embed URL
  const mapsEmbedUrl =
    'https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240.38916837266834!2d28.31275684193476!3d-15.41831136162428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19408de85e1ab8bb%3A0xd44185ec4f650f44!2sLiberty%20mall%20limited!5e0!3m2!1sen!2szm!4v1783191339808!5m2!1sen!2szm';

  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
  const todayHours = hours[today as keyof typeof hours] || 'Closed';

  return (
    <section className="py-16 md:py-20 bg-brand-cream" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section header */}
        <div className="text-center mb-12">
          <span className="text-brand-fresh font-semibold text-sm uppercase tracking-wider">
            Come Visit Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mt-2 mb-4">
            Find Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Fresh food, friendly faces. We&apos;re conveniently located and ready to
            serve you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map with real embed */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden min-h-[400px] relative">
            <iframe
              src={mapsEmbedUrl}
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title={`Map showing ${name} at ${fullAddress}`}
              className="absolute inset-0 w-full h-full"
            />
          </div>

          {/* Info cards */}
          <div className="space-y-6">
            {/* Address card */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="bg-brand-forest/10 p-3 rounded-xl">
                  <HiLocationMarker className="w-6 h-6 text-brand-forest" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark text-lg mb-1">
                    Address
                  </h3>
                  <p className="text-gray-600">{address}</p>
                  <p className="text-gray-600">
                    {city}, {state} {zip}
                  </p>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 text-brand-forest hover:text-brand-leaf font-medium mt-3 transition-colors"
                  >
                    Get Directions
                    <svg
                      className="w-4 h-4"
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14"
                      />
                    </svg>
                  </a>
                </div>
              </div>
            </div>

            {/* Hours card */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="bg-brand-forest/10 p-3 rounded-xl">
                  <HiClock className="w-6 h-6 text-brand-forest" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-brand-dark text-lg mb-3">
                    Opening Hours
                  </h3>
                  <div className="space-y-2">
                    {Object.entries(hours).map(([day, time]) => {
                      const isToday = day === today;
                      return (
                        <div
                          key={day}
                          className={`flex justify-between text-sm ${
                            isToday
                              ? 'text-brand-forest font-bold'
                              : 'text-gray-600'
                          }`}
                        >
                          <span className="capitalize">
                            {day}
                            {isToday && ' (Today)'}
                          </span>
                          <span>{time}</span>
                        </div>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>

            {/* Contact card */}
            <div className="bg-white rounded-2xl shadow-md p-6">
              <div className="flex items-start gap-4">
                <div className="bg-brand-forest/10 p-3 rounded-xl">
                  <HiPhone className="w-6 h-6 text-brand-forest" />
                </div>
                <div className="flex-1">
                  <h3 className="font-bold text-brand-dark text-lg mb-3">
                    Contact
                  </h3>
                  <div className="space-y-3">
                    <a
                      href={`tel:${phone.replace(/[^0-9]/g, '')}`}
                      className="flex items-center gap-2 text-gray-600 hover:text-brand-forest transition-colors"
                    >
                      <HiPhone className="w-4 h-4" />
                      {phone}
                    </a>
                    <a
                      href={`mailto:${email}`}
                      className="flex items-center gap-2 text-gray-600 hover:text-brand-forest transition-colors"
                    >
                      <HiMail className="w-4 h-4" />
                      {email}
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}