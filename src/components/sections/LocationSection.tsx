import { LOCATION_INFO } from '@/lib/constants';
import { HiClock, HiPhone, HiMail, HiLocationMarker } from 'react-icons/hi';

export default function LocationSection() {
  const { name, address, city, state, zip, phone, email, hours, googleMapsUrl } =
    LOCATION_INFO;

  const fullAddress = `${address}, ${city}, ${state} ${zip}`;
  // Fixed: Correctly wrapped the variable in ${}
  const mapsEmbedUrl = `https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${encodeURIComponent(fullAddress)}`;

  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
  const todayHours = hours[today as keyof typeof hours] || 'Closed';

  return (
    <section className="py-16 md:py-20 bg-brand-cream" id="location">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <span className="text-brand-fresh font-semibold text-sm uppercase tracking-wider">
            Come Visit Us
          </span>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-brand-dark mt-2 mb-4">
            Find Us
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Fresh food, friendly faces. We are conveniently located and ready to
            serve you.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map placeholder */}
          <div className="bg-white rounded-3xl shadow-lg overflow-hidden min-h-[400px] relative">
            <iframe
              title="Location Map"
              src={mapsEmbedUrl}
              className="absolute inset-0 w-full h-full border-0"
              allowFullScreen
              loading="lazy"
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
                    {name}
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
                  <div className="flex justify-between items-center mb-3">
                    <h3 className="font-bold text-brand-dark text-lg">Opening Hours</h3>
                    <span className="text-xs font-bold text-brand-forest bg-brand-forest/10 px-2 py-1 rounded">
                      Today: {todayHours}
                    </span>
                  </div>
                  <div className="space-y-2">
                    {Object.entries(hours).map(([day, time]) => {
                      const isToday = day === today;
                      return (
                        <div
                          key={day}
                          className={`flex justify-between text-sm ${
                            isToday ? 'text-brand-forest font-bold' : 'text-gray-600'
                          }`}
                        >
                          <span className="capitalize">{day}</span>
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
                  <h3 className="font-bold text-brand-dark text-lg mb-3">Contact</h3>
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