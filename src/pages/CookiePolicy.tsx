import React from 'react';
import { SEO } from '../components/SEO';
import { MouseGlow } from '../components/MouseGlow';
import { DataGrid } from '../components/DataGrid';

export default function CookiePolicy() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative pt-24">
      <SEO 
        title="Cookie Policy - AIDEA"
        description="Learn about how AIDEA uses cookies and similar technologies."
      />
      <MouseGlow />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <DataGrid />
      </div>
      <div className="tech-background fixed inset-0 z-10 pointer-events-none opacity-30" />

      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Cookie Policy</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-400 mb-6">Last updated: March 15, 2024</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. What Are Cookies</h2>
              <p className="text-gray-400 mb-4">
                Cookies are small text files that are placed on your computer or mobile device when you visit our website. They are widely used to make websites work more efficiently and provide useful information to website owners.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. How We Use Cookies</h2>
              <p className="text-gray-400 mb-4">We use cookies for the following purposes:</p>
              <ul className="list-disc pl-6 text-gray-400 mb-4">
                <li>Essential cookies for website functionality</li>
                <li>Analytics cookies to understand user behavior</li>
                <li>Preference cookies to remember your settings</li>
                <li>Marketing cookies for targeted advertising</li>
                <li>Session cookies for user authentication</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Types of Cookies We Use</h2>
              
              <h3 className="text-xl font-bold mb-2">3.1 Essential Cookies</h3>
              <p className="text-gray-400 mb-4">
                These cookies are necessary for the website to function properly. They enable basic functions like page navigation and access to secure areas of the website.
              </p>

              <h3 className="text-xl font-bold mb-2">3.2 Analytics Cookies</h3>
              <p className="text-gray-400 mb-4">
                We use analytics cookies to understand how visitors interact with our website, helping us improve our services and user experience.
              </p>

              <h3 className="text-xl font-bold mb-2">3.3 Marketing Cookies</h3>
              <p className="text-gray-400 mb-4">
                These cookies track your online activity to help advertisers deliver more relevant advertising or to limit how many times you see an ad.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Cookie Management</h2>
              <p className="text-gray-400 mb-4">
                You can control and manage cookies in various ways:
              </p>
              <ul className="list-disc pl-6 text-gray-400 mb-4">
                <li>Browser settings to block/delete cookies</li>
                <li>Cookie consent preferences on our website</li>
                <li>Third-party opt-out tools</li>
                <li>Private browsing modes</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Third-Party Cookies</h2>
              <p className="text-gray-400 mb-4">
                We use services from these third parties that may place cookies:
              </p>
              <ul className="list-disc pl-6 text-gray-400 mb-4">
                <li>Google Analytics</li>
                <li>Facebook Pixel</li>
                <li>LinkedIn Insight Tag</li>
                <li>HubSpot</li>
                <li>Intercom</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Updates to This Policy</h2>
              <p className="text-gray-400 mb-4">
                We may update this Cookie Policy from time to time. We will notify you of any changes by posting the new Cookie Policy on this page.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Contact Us</h2>
              <p className="text-gray-400 mb-4">
                If you have questions about our Cookie Policy, please contact us at:
                <br />
                Email: privacy@aidea.com
                <br />
                Address: San Francisco, CA
              </p>
            </section>
          </div>
        </div>
      </div>
    </div>
  );
}