import React from 'react';
import { SEO } from '../components/SEO';
import { MouseGlow } from '../components/MouseGlow';
import { DataGrid } from '../components/DataGrid';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative pt-24">
      <SEO 
        title="Privacy Policy - AIDEA"
        description="Learn about how AIDEA collects, uses, and protects your personal information."
      />
      <MouseGlow />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <DataGrid />
      </div>
      <div className="tech-background fixed inset-0 z-10 pointer-events-none opacity-30" />

      <div className="relative z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h1 className="text-4xl font-bold mb-8">Privacy Policy</h1>
          <div className="prose prose-invert max-w-none">
            <p className="text-gray-400 mb-6">Last updated: March 15, 2024</p>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">1. Introduction</h2>
              <p className="text-gray-400 mb-4">
                AIDEA ("we", "our", or "us") is committed to protecting your privacy. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website or use our services.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">2. Information We Collect</h2>
              <h3 className="text-xl font-bold mb-2">2.1 Personal Information</h3>
              <p className="text-gray-400 mb-4">We may collect personal information that you provide to us, including:</p>
              <ul className="list-disc pl-6 text-gray-400 mb-4">
                <li>Name and contact information</li>
                <li>Company information</li>
                <li>Email address</li>
                <li>Phone number</li>
                <li>Payment information</li>
              </ul>

              <h3 className="text-xl font-bold mb-2">2.2 Usage Information</h3>
              <p className="text-gray-400 mb-4">We automatically collect certain information when you visit our website:</p>
              <ul className="list-disc pl-6 text-gray-400 mb-4">
                <li>IP address</li>
                <li>Browser type</li>
                <li>Device information</li>
                <li>Pages visited</li>
                <li>Time spent on pages</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">3. How We Use Your Information</h2>
              <p className="text-gray-400 mb-4">We use the collected information for various purposes:</p>
              <ul className="list-disc pl-6 text-gray-400 mb-4">
                <li>Provide and maintain our services</li>
                <li>Improve our website and services</li>
                <li>Communicate with you</li>
                <li>Send marketing and promotional materials</li>
                <li>Analyze usage patterns</li>
                <li>Prevent fraud</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">4. Data Security</h2>
              <p className="text-gray-400 mb-4">
                We implement appropriate technical and organizational security measures to protect your personal information. However, no method of transmission over the Internet is 100% secure.
              </p>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">5. Your Rights</h2>
              <p className="text-gray-400 mb-4">You have the right to:</p>
              <ul className="list-disc pl-6 text-gray-400 mb-4">
                <li>Access your personal information</li>
                <li>Correct inaccurate information</li>
                <li>Request deletion of your information</li>
                <li>Object to processing of your information</li>
                <li>Withdraw consent</li>
              </ul>
            </section>

            <section className="mb-8">
              <h2 className="text-2xl font-bold mb-4">6. Contact Us</h2>
              <p className="text-gray-400 mb-4">
                If you have questions about this Privacy Policy, please contact us at:
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