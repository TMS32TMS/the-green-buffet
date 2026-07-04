'use client';

import { motion } from 'framer-motion';
import {
  HiClock,
  HiPhone,
  HiMail,
  HiLocationMarker,
  HiArrowRight,
  HiStar,
} from 'react-icons/hi';
import { FaWalking, FaCar, FaBus } from 'react-icons/fa';

interface LocationClientProps {
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  fullAddress: string;
  phone: string;
  email: string;
  hours: Record<string, string>;
  coordinates: { lat: number; lng: number };
  googleMapsUrl: string;
  mapsEmbedUrl: string;
  mapsPlaceUrl: string;
}

export default function LocationClient({
  name,
  address,
  city,
  state,
  zip,
  fullAddress,
  phone,
  email,
  hours,
  coordinates,
  googleMapsUrl,
  mapsPlaceUrl,
}: LocationClientProps) {
  const today = new Date().toLocaleDateString('en-US', { weekday: 'long' }).toLowerCase();
  const todayHours = hours[today] || 'Closed';

  return (
    <>
      {/* Hero header */}
      <div className="relative bg-gradient-to-br from-brand-forest via-brand-leaf to-brand-dark py-20 md:py-28">
        <div className="absolute inset-0 bg-black/20" />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.4 }}
            className="text-brand-fresh font-semibold text-sm uppercase tracking-wider"
          >
            Come Visit Us
          </motion.span>
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.3, duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mt-3 mb-4"
          >
            Find Us
          </motion.h1>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-gray-200 max-w-2xl mx-auto text-lg md:text-xl"
          >
            {fullAddress}
          </motion.p>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.5, duration: 0.5 }}
            className="text-gray-400 text-sm mt-3"
          >
            {coordinates.lat.toFixed(4)}, {coordinates.lng.toFixed(4)}
          </motion.p>
        </div>
        {/* Wave */}
        <div className="absolute bottom-0 left-0 right-0">
          <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M0 60V30C240 0 480 0 720 30C960 60 1200 60 1440 30V60H0Z"
              fill="#FAFAF7"
            />
          </svg>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Map Section */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
          className="bg-white rounded-3xl shadow-lg overflow-hidden mb-12 relative"
        >
          <div className="relative w-full h-[400px] md:h-[500px]">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d240.38916837266834!2d28.31275684193476!3d-15.41831136162428!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19408de85e1ab8bb%3A0xd44185ec4f650f44!2sLiberty%20mall%20limited!5e0!3m2!1sen!2szm!4v1783191339808!5m2!1sen!2szm"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="strict-origin-when-cross-origin"
              title={`Map showing ${name} at ${fullAddress}`}
              className="absolute inset-0"
            />
          </div>
          {/* Map action buttons */}
          <div className="absolute bottom-4 left-4 right-4 z-10 flex flex-col sm:flex-row gap-3">
            <a
              href={googleMapsUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-white text-brand-forest px-4 py-2.5 rounded-full text-sm font-medium shadow-lg hover:bg-brand-cream transition-colors inline-flex items-center justify-center gap-2"
            >
              <HiArrowRight className="w-4 h-4" />
              Get Directions
            </a>
            <a
              href={mapsPlaceUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="bg-brand-forest text-white px-4 py-2.5 rounded-full text-sm font-medium shadow-lg hover:bg-brand-leaf transition-colors inline-flex items-center justify-center"
            >
              View on Google Maps
            </a>
          </div>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left column - Info cards */}
          <div className="lg:col-span-1 space-y-6">
            {/* Address Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-md p-6"
            >
              <div className="flex items-start gap-4">
                <div className="bg-brand-forest/10 p-3 rounded-xl">
                  <HiLocationMarker className="w-6 h-6 text-brand-forest" />
                </div>
                <div>
                  <h3 className="font-bold text-brand-dark text-lg mb-2">Address</h3>
                  <p className="text-gray-600">{address}</p>
                  <p className="text-gray-600">
                    {city}, {state} {zip}
                  </p>
                  <a
                    href={googleMapsUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 bg-brand-forest text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-brand-leaf transition-colors mt-4"
                  >
                    Get Directions
                    <HiArrowRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </motion.div>

            {/* Contact Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-md p-6"
            >
              <h3 className="font-bold text-brand-dark text-lg mb-4">Contact</h3>
              <div className="space-y-3">
                <a
                  href={`tel:${phone.replace(/[^0-9]/g, '')}`}
                  className="flex items-center gap-3 text-gray-600 hover:text-brand-forest transition-colors"
                >
                  <HiPhone className="w-5 h-5 text-brand-forest" />
                  {phone}
                </a>
                <a
                  href={`mailto:${email}`}
                  className="flex items-center gap-3 text-gray-600 hover:text-brand-forest transition-colors"
                >
                  <HiMail className="w-5 h-5 text-brand-forest" />
                  {email}
                </a>
              </div>
            </motion.div>

            {/* Today&apos;s Hours Card */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-brand-forest rounded-2xl shadow-md p-6 text-white"
            >
              <div className="flex items-center gap-2 mb-3">
                <HiClock className="w-5 h-5 text-brand-fresh" />
                <h3 className="font-bold text-lg">Today&apos;s Hours</h3>
              </div>
              <p className="text-2xl font-bold text-brand-fresh">{todayHours}</p>
              <p className="text-white/70 text-sm mt-1 capitalize">{today}</p>
            </motion.div>
          </div>

          {/* Right column - Hours & Getting Here */}
          <div className="lg:col-span-2 space-y-6">
            {/* Full Hours */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5 }}
              className="bg-white rounded-2xl shadow-md p-6 md:p-8"
            >
              <h3 className="font-bold text-brand-dark text-xl mb-6">Opening Hours</h3>
              <div className="space-y-3">
                {Object.entries(hours).map(([day, time]) => {
                  const isToday = day === today;
                  return (
                    <div
                      key={day}
                      className={`flex items-center justify-between py-2 px-4 rounded-xl ${
                        isToday ? 'bg-brand-forest/10 font-bold' : ''
                      }`}
                    >
                      <span
                        className={`capitalize text-lg ${
                          isToday ? 'text-brand-forest' : 'text-gray-700'
                        }`}
                      >
                        {day}
                        {isToday && (
                          <span className="ml-2 text-xs bg-brand-fresh text-white px-2 py-0.5 rounded-full">
                            Today
                          </span>
                        )}
                      </span>
                      <span
                        className={`text-lg ${
                          isToday ? 'text-brand-forest font-bold' : 'text-gray-600'
                        }`}
                      >
                        {time}
                      </span>
                    </div>
                  );
                })}
              </div>
            </motion.div>

            {/* Getting Here */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.1 }}
              className="bg-white rounded-2xl shadow-md p-6 md:p-8"
            >
              <h3 className="font-bold text-brand-dark text-xl mb-6">Getting Here</h3>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="text-center p-4 rounded-xl bg-brand-cream">
                  <FaCar className="w-8 h-8 text-brand-forest mx-auto mb-3" />
                  <h4 className="font-bold text-brand-dark mb-1">By Car</h4>
                  <p className="text-gray-500 text-sm">
                    Free parking available in our lot. Street parking also available.
                  </p>
                </div>
                <div className="text-center p-4 rounded-xl bg-brand-cream">
                  <FaBus className="w-8 h-8 text-brand-forest mx-auto mb-3" />
                  <h4 className="font-bold text-brand-dark mb-1">Public Transit</h4>
                  <p className="text-gray-500 text-sm">
                    Bus lines 15 and 20 stop directly in front. MAX station 5 min walk.
                  </p>
                </div>
                <div className="text-center p-4 rounded-xl bg-brand-cream">
                  <FaWalking className="w-8 h-8 text-brand-forest mx-auto mb-3" />
                  <h4 className="font-bold text-brand-dark mb-1">Walking</h4>
                  <p className="text-gray-500 text-sm">
                    10 minute walk from downtown. Sidewalks the entire way.
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Review highlight */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className="bg-gradient-to-br from-brand-warm to-orange-600 rounded-2xl shadow-md p-6 md:p-8 text-white text-center"
            >
              <div className="flex justify-center gap-1 mb-3">
                {[...Array(5)].map((_, i) => (
                  <HiStar key={i} className="w-6 h-6 text-yellow-300" />
                ))}
              </div>
              <p className="text-lg font-medium mb-2">
                &quot;Best healthy bowls in Portland! Fresh ingredients and amazing flavors.&quot;
              </p>
              <p className="text-white/80 text-sm">— Sarah M., Local Guide</p>
            </motion.div>
          </div>
        </div>
      </div>
    </>
  );
}