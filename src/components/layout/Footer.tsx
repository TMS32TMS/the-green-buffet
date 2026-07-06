import Link from 'next/link';
import {
  HiMail,
  HiPhone,
  HiLocationMarker,
} from 'react-icons/hi';
import {
  FaInstagram,
  FaFacebookF,
  FaTiktok,
  FaYelp,
} from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-brand-dark text-white">
      {/* Main footer content */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Column 1: About */}
          <div>
            <h3 className="text-xl font-bold mb-4 text-white">
              The Green Buffet
            </h3>
            <p className="text-gray-400 leading-relaxed mb-4">
              Fresh, healthy bowls and burritos made with quality ingredients.
              Eat well, live well.
            </p>
            {/* Social media */}
            <div className="flex gap-3">
              <a
                href="https://www.instagram.com/thegreenbuffet?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-brand-fresh p-2.5 rounded-full transition-colors"
                aria-label="Follow us on Instagram"
              >
                <FaInstagram className="w-4 h-4" />
              </a>
              {/*<a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-brand-fresh p-2.5 rounded-full transition-colors"
                aria-label="Follow us on Facebook"
              >
                <FaFacebookF className="w-4 h-4" />
              </a>*/}
              <a
                href="https://www.tiktok.com/@the.green.buffet?is_from_webapp=1&sender_device=pc"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-brand-fresh p-2.5 rounded-full transition-colors"
                aria-label="Follow us on TikTok"
              >
                <FaTiktok className="w-4 h-4" />
              </a>
              {/*<a
                href="https://yelp.com"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-white/10 hover:bg-brand-fresh p-2.5 rounded-full transition-colors"
                aria-label="Find us on Yelp"
              >
                <FaYelp className="w-4 h-4" />
              </a>*/}
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Quick Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/menu"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Menu
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/location"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Location
                </Link>
              </li>
              <li>
                {/*<Link
                  href="/order"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Order Online
                </Link>*/}
              </li>
              <li>
                {/*<Link
                  href="/catering"
                  className="text-gray-400 hover:text-white transition-colors"
                >
                  Catering
                </Link>*/}
              </li>
            </ul>
          </div>

          {/* Column 3: Contact */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Contact</h4>
            <ul className="space-y-3">
              <li>
                <a
                  href="tel:+15035550147"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <HiPhone className="w-4 h-4 text-brand-fresh" />
                  +260 97 2699005

                </a>
              </li>
              <li>
                <a
                  href="mailto:hello@thegreenbuffet.com"
                  className="flex items-center gap-3 text-gray-400 hover:text-white transition-colors"
                >
                  <HiMail className="w-4 h-4 text-brand-fresh" />
                  thegreenbuffet@gmail.com
                </a>
              </li>
              <li className="flex items-start gap-3 text-gray-400">
                <HiLocationMarker className="w-4 h-4 text-brand-fresh mt-0.5" />
                <span>
                  Plot 4718
                  <br />
                  Lusaka
                </span>
              </li>
            </ul>
          </div>

          {/* Column 4: Hours */}
          <div>
            <h4 className="text-lg font-bold mb-4 text-white">Opening Hours</h4>
            <ul className="space-y-2 text-gray-400 text-sm">
              <li className="flex justify-between">
                <span>Mon - Thu</span>
                <span>08:30am - 07:30pm</span>
              </li>
              <li className="flex justify-between">
                <span>Friday</span>
                <span>08:30am - 07:30pm</span>
              </li>
              <li className="flex justify-between">
                <span>Saturday</span>
                <span>08:30am - 07:30pm</span>
              </li>
              <li className="flex justify-between">
                <span>Sunday</span>
                <span>08:30am - 03:00pm</span>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-white/10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-gray-500">
            <p>&copy; {currentYear} The Green Buffet. All rights reserved.</p>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <Link
                href="/privacy"
                className="hover:text-white transition-colors"
              >
                Privacy Policy
              </Link>
              <Link
                href="/terms"
                className="hover:text-white transition-colors"
              >
                Terms & Conditions
              </Link>
              <Link
                href="/cookies"
                className="hover:text-white transition-colors"
              >
                Cookie Policy
              </Link>
              <Link
                href="/accessibility"
                className="hover:text-white transition-colors"
              >
                Accessibility
              </Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}