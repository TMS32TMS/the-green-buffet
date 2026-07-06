import type { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Accessibility Statement',
  description: 'The Green Buffet is committed to making our website accessible to everyone.',
};

export default function AccessibilityPage() {
  return (
    <div className="min-h-screen pt-24 pb-16">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <h1 className="text-3xl font-bold text-brand-dark mb-2">Accessibility Statement</h1>
        <p className="text-gray-500 mb-8">Last updated: January 2025</p>

        <div className="prose prose-lg text-gray-600 space-y-6">
          <p>
            The Green Buffet is committed to ensuring digital accessibility for people of all abilities.
            We are continually improving the user experience for everyone and applying the relevant
            accessibility standards.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-8">1. Our Commitment</h2>
          <p>
            We strive to make our website accessible to the widest possible audience, regardless of
            technology or ability. Our goal is to comply with the Web Content Accessibility Guidelines
            (WCAG) 2.1 Level AA standards.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-8">2. Accessibility Features</h2>
          <p>Our website includes the following accessibility features:</p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Semantic HTML structure for screen reader compatibility</li>
            <li>Descriptive alt text for all images</li>
            <li>Keyboard-navigable menus and interactive elements</li>
            <li>Sufficient color contrast for readability</li>
            <li>Resizable text without loss of functionality</li>
            <li>ARIA labels on interactive elements</li>
            <li>Clear and consistent navigation</li>
          </ul>

          <h2 className="text-xl font-bold text-brand-dark mt-8">3. Ongoing Efforts</h2>
          <p>
            We regularly review our website to identify and fix accessibility issues. Our development
            team follows accessibility best practices when adding new features and content. We welcome
            feedback on how we can improve.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-8">4. Limitations</h2>
          <p>
            While we strive for full accessibility, some content may not yet be fully adapted. This
            includes:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Third-party embedded content (such as Google Maps)</li>
            <li>Older browser versions that may not support modern accessibility features</li>
          </ul>
          <p>
            We are working to address these limitations and provide alternative ways to access this
            information where possible.
          </p>

          <h2 className="text-xl font-bold text-brand-dark mt-8">5. Physical Accessibility</h2>
          <p>
            Our restaurant at Liberty Mall, Lusaka is wheelchair accessible with:
          </p>
          <ul className="list-disc pl-6 space-y-2">
            <li>Ground floor access with no stairs</li>
            <li>Wide doorways suitable for wheelchairs</li>
            <li>Accessible restroom facilities within the mall</li>
            <li>Staff trained to assist customers with disabilities</li>
          </ul>

          <h2 className="text-xl font-bold text-brand-dark mt-8">6. Feedback & Contact</h2>
          <p>
            We welcome your feedback on the accessibility of The Green Buffet website and restaurant.
            If you encounter any barriers or have suggestions for improvement, please contact us:
          </p>
          <p>
            <strong>Email:</strong> hello@thegreenbuffet.com<br />
            <strong>Phone:</strong> (260) 211 555 0147<br />
            <strong>Address:</strong> Liberty Mall,Lusaka, Zambia
          </p>
          <p>
            We aim to respond to accessibility feedback within 3 business days.
          </p>
        </div>
      </div>
    </div>
  );
}