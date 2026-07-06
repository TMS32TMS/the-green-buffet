import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Privacy Policy',
  description: 'Learn how The Green Buffet collects, uses, and protects your personal information.',
};

export default function PrivacyPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-brand-dark mb-2">Privacy Policy</h1>
        <p className="text-gray-500 mb-8">Last updated: January 2025</p>

        <div className="prose prose-lg text-gray-600 space-y-6">
          <p>
            At The Green Buffet, we take your privacy seriously. This Privacy Policy explains how we
            collect, use, disclose, and safeguard your information when you visit our website or interact
            with us.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-8">1. Information We Collect</h2>
          <p>We may collect the following types of information:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li><strong>Personal Information:</strong> Name, email address, and phone number when you contact us or sign up for our newsletter.</li>
            <li><strong>Usage Data:</strong> Information about how you access and use our website, including your IP address, browser type, and pages visited.</li>
            <li><strong>Cookies:</strong> Small data files stored on your device to improve your browsing experience. See our Cookie Policy for more details.</li>
          </ul>

          <h2 className="text-xl font-bold text-brand-dark mt-8">2. How We Use Your Information</h2>
          <p>We use the information we collect to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Respond to your inquiries and provide customer support</li>
            <li>Send you updates, promotions, and newsletters (with your consent)</li>
            <li>Improve our website and services</li>
            <li>Comply with legal obligations</li>
          </ul>

          <h2 className="text-xl font-bold text-brand-dark mt-8">3. Data Protection</h2>
          <p>
            We implement appropriate technical and organizational measures to protect your personal
            information against unauthorized access, alteration, disclosure, or destruction. However,
            no method of transmission over the internet is 100% secure.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-8">4. Third-Party Services</h2>
          <p>
            We may use third-party services such as Google Maps and analytics providers. These services
            have their own privacy policies, and we encourage you to review them. We do not sell, trade,
            or rent your personal information to third parties.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-8">5. Your Rights</h2>
          <p>Under Zambian data protection laws, you have the right to:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Access the personal information we hold about you</li>
            <li>Request correction of inaccurate information</li>
            <li>Request deletion of your information</li>
            <li>Withdraw consent for marketing communications</li>
            <li>Lodge a complaint with the relevant data protection authority</li>
          </ul>

          <h2 className="text-xl font-bold text-brand-dark mt-8">6. Contact Us</h2>
          <p>
            If you have any questions about this Privacy Policy, please contact us at:
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