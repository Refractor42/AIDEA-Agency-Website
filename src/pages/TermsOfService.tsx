import React from 'react';
import { SEO } from '../components/SEO';
import { MouseGlow } from '../components/MouseGlow';
import { DataGrid } from '../components/DataGrid';

export default function TermsOfService() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative pt-24">
      <SEO 
        title="Terms of Service - AIDEA"
        description="Read about AIDEA's terms of service and usage conditions."
      />
      <MouseGlow />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <DataGrid />
      </div>
      <div className="tech-background fixed inset-0 z-10 pointer-events-none opacity-30" />

      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Terms of Service</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-400 mb-6">Last updated: March 15, 2024</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Agreement to Terms</h2>
              <p className="text-gray-400 mb-4">
                By accessing or using AIDEA's services, you agree to be bound by these Terms of Service. If you disagree with any part of the terms, you may not access our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Use License</h2>
              <p className="text-gray-400 mb-4">
                Permission is granted to temporarily access and use our services for personal, non-commercial transitory viewing only. This is the grant of a license, not a transfer of title, and under this license you may not:
              </p>
              <ul className="list-disc pl-6 text-gray-400 mb-4">
                <li>Modify or copy the materials</li>
                <li>Use the materials for any commercial purpose</li>
                <li>Attempt to decompile or reverse engineer any software</li>
                <li>Remove any copyright or proprietary notations</li>
                <li>Transfer the materials to another person</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. Service Description</h2>
              <p className="text-gray-400 mb-4">
                AIDEA provides AI automation solutions for businesses. Our services include:
              </p>
              <ul className="list-disc pl-6 text-gray-400 mb-4">
                <li>AI-powered CRM integration</li>
                <li>24/7 customer support automation</li>
                <li>Automated lead generation</li>
                <li>Social media management</li>
                <li>Appointment scheduling</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Payment Terms</h2>
              <p className="text-gray-400 mb-4">
                Services are billed on a subscription basis. You agree to pay all fees associated with your chosen plan. Fees are non-refundable except as required by law.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. User Responsibilities</h2>
              <p className="text-gray-400 mb-4">You are responsible for:</p>
              <ul className="list-disc pl-6 text-gray-400 mb-4">
                <li>Maintaining the confidentiality of your account</li>
                <li>All activities that occur under your account</li>
                <li>Ensuring your use complies with applicable laws</li>
                <li>Providing accurate information</li>
                <li>Using services in good faith</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Limitation of Liability</h2>
              <p className="text-gray-400 mb-4">
                AIDEA shall not be liable for any indirect, incidental, special, consequential, or punitive damages resulting from your use or inability to use the service.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">7. Changes to Terms</h2>
              <p className="text-gray-400 mb-4">
                We reserve the right to modify these terms at any time. We will notify users of any material changes via email or through our website.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">8. Contact Information</h2>
              <p className="text-gray-400 mb-4">
                Questions about the Terms of Service should be sent to:
                <br />
                Email: legal@aidea.com
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