import React, { useState } from 'react';
import { Mail, Phone, Bot, X } from 'lucide-react';
import { SEO } from '../components/SEO';
import { MouseGlow } from '../components/MouseGlow';
import { ContactForm } from '../components/ContactForm';
import { DataGrid } from '../components/DataGrid';

export default function Contact() {
  const [isModalOpen, setIsModalOpen] = useState(false);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative pt-24">
      <SEO 
        title="Contact AIDEA - Get in Touch"
        description="Contact AIDEA for enterprise AI automation solutions. We're here to help transform your business with cutting-edge AI technology."
      />
      <MouseGlow />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <DataGrid />
      </div>
      <div className="tech-background fixed inset-0 z-10 pointer-events-none opacity-30" />

      <div className="relative z-10 min-h-[calc(100vh-4rem)] flex items-center justify-center">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
          <div className="text-center mb-8">
            <h1 className="text-4xl font-bold mb-4">Get in Touch</h1>
            <p className="text-lg text-gray-400">
              Ready to transform your business with AI? We're here to help.
            </p>
          </div>

          <div className="grid gap-8">
            {/* Contact Button */}
            <div className="text-center">
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all button-glow text-lg inline-flex items-center space-x-2"
              >
                <span>Send us a Message</span>
                <Mail className="w-5 h-5" />
              </button>
            </div>

            {/* Contact Info */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div className="p-6 rounded-xl border border-blue-500/20 bg-black/30 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <Mail className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                  <h3 className="text-lg font-bold mb-2">Email</h3>
                  <a 
                    href="mailto:alek10bg@gmail.com" 
                    className="text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    alek10bg@gmail.com
                  </a>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-blue-500/20 bg-black/30 backdrop-blur-sm flex items-center justify-center">
                <div className="text-center">
                  <Bot className="w-8 h-8 text-blue-500 mx-auto mb-3" />
                  <h3 className="text-lg font-bold mb-2">AI Support</h3>
                  <p className="text-gray-400">
                    24/7 AI-powered support available
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-30 flex items-center justify-center p-4">
          <div 
            className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            onClick={() => setIsModalOpen(false)}
          />
          <div className="relative w-full max-w-md">
            <div className="relative bg-black/90 rounded-xl border border-blue-500/20 p-8">
              <button
                onClick={() => setIsModalOpen(false)}
                className="absolute top-4 right-4 text-gray-400 hover:text-white transition-colors"
              >
                <X className="h-6 w-6" />
              </button>
              <h3 className="text-2xl font-bold mb-6">Send us a Message</h3>
              <ContactForm onClose={() => setIsModalOpen(false)} />
            </div>
          </div>
        </div>
      )}
    </div>
  );
}