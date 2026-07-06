import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Terms & Conditions',
  description: 'Read the terms and conditions for using The Green Buffet website and services.',
};

export default function TermsPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-brand-dark mb-2">Terms & Conditions</h1>
        <p className="text-gray-500 mb-8">Last updated: January 2025</p>

        <div className="prose prose-lg text-gray-600 space-y-6">
          <p>
            Welcome to The Green Buffet. By accessing and using our website, you agree to be bound by
            these Terms & Conditions. If you do not agree with any part of these terms, please do not
            use our website.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-8">1. Use of Website</h2>
          <p>
            This website is provided for informational purposes only. You may browse, view, and interact
            with our content for personal, non-commercial use. You agree not to:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Use the website in any way that violates applicable laws or regulations</li>
            <li>Attempt to gain unauthorized access to any part of the website</li>
            <li>Use the website to transmit viruses or harmful code</li>
            <li>Copy, reproduce, or distribute content without our written permission</li>
          </ul>

          <h2 className="text-xl font-bold text-brand-dark mt-8">2. Intellectual Property</h2>
          <p>
            All content on this website, including text, images, logos, graphics, and design elements,
            is the property of The Green Buffet and is protected by applicable intellectual property
            laws. The Green Buffet name and logo are trademarks of our business.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-8">3. Menu & Pricing</h2>
          <p>
            Menu items and prices displayed on this website are subject to change without notice. While
            we strive to keep information accurate and up to date, we do not guarantee that all menu
            items will be available at all times. Prices are in Zambian Kwacha (K).
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-8">4. Limitation of Liability</h2>
          <p>
            The Green Buffet shall not be liable for any direct, indirect, incidental, or consequential
            damages resulting from the use or inability to use our website. We do not guarantee that
            the website will be error-free or continuously available.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-8">5. Third-Party Links</h2>
          <p>
            Our website may contain links to third-party websites, including Google Maps and social
            media platforms. We are not responsible for the content, privacy policies, or practices
            of these third-party sites.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-8">6. Governing Law</h2>
          <p>
            These Terms & Conditions are governed by and construed in accordance with the laws of the
            Republic of Zambia. Any disputes arising from these terms shall be subject to the exclusive
            jurisdiction of the courts of Zambia.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-8">7. Changes to Terms</h2>
          <p>
            We reserve the right to modify these Terms & Conditions at any time. Changes will be posted
            on this page with an updated date. Your continued use of the website after any changes
            constitutes acceptance of the new terms.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-8">8. Contact Us</h2>
          <p>
            If you have any questions about these Terms & Conditions, please contact us at:
          </p>
          <p>
            <strong>Email:</strong> hello@thegreenbuffet.com<br />
            <strong>Phone:</strong> (260) 211 555 0147<br />
            <strong>Address:</strong> Liberty Mall, Great East Road, Lusaka, Zambia
          </p>
        </div>
      </div>
    </div>
  );
}