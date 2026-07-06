import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Cookie Policy',
  description: 'Understand how The Green Buffet uses cookies on our website.',
};

export default function CookiesPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-brand-dark mb-2">Cookie Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: January 2025</p>

        <div className="prose prose-lg text-gray-600 space-y-6">
          <p>
            This Cookie Policy explains how The Green Buffet uses cookies and similar technologies on
            our website. By using our website, you consent to the use of cookies as described in this
            policy.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-8">1. What Are Cookies?</h2>
          <p>
            Cookies are small text files that are placed on your device (computer, tablet, or mobile
            phone) when you visit a website. They are widely used to make websites work efficiently
            and provide information to the website owners.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-8">2. How We Use Cookies</h2>
          <p>We use the following types of cookies:</p>

          <h3 className="text-lg font-semibold text-brand-dark">Essential Cookies</h3>
          <p>
            These cookies are necessary for the website to function properly. They enable core
            functionality such as page navigation and access to secure areas. The website cannot
            function properly without these cookies.
          </p>

          <h3 className="text-lg font-semibold text-brand-dark">Analytics Cookies</h3>
          <p>
            These cookies help us understand how visitors interact with our website by collecting and
            reporting information anonymously. We use this data to improve our website and your
            browsing experience.
          </p>

          <h3 className="text-lg font-semibold text-brand-dark">Functional Cookies</h3>
          <p>
            These cookies allow the website to remember choices you make (such as your preferred
            language) and provide enhanced, more personal features.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-8">3. Third-Party Cookies</h2>
          <p>
            Some cookies may be set by third-party services that appear on our pages, such as:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Google Maps:</strong> When you view our location map, Google may set cookies.</li>
            <li><strong>Social Media:</strong> Links to Instagram, Facebook, and TikTok may set cookies when you interact with them.</li>
          </ul>
          <p>
            We do not control these third-party cookies. Please review the respective privacy policies
            of these services for more information.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-8">4. Managing Cookies</h2>
          <p>
            Most web browsers allow you to control cookies through their settings. You can:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Delete all cookies from your browser</li>
            <li>Block cookies from being set</li>
            <li>Set your browser to alert you when cookies are being placed</li>
          </ul>
          <p>
            Please note that blocking or deleting cookies may affect your experience on our website
            and some features may not work as intended.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-8">5. Updates to This Policy</h2>
          <p>
            We may update this Cookie Policy from time to time. Any changes will be posted on this
            page with an updated revision date.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-8">6. Contact Us</h2>
          <p>
            If you have any questions about our Cookie Policy, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> hello@thegreenbuffet.com<br />
            <strong>Phone:</strong> (260) 211 555 0147
          </p>
        </div>
      </div>
    </div>
  );
}