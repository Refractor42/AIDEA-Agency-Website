import React from 'react';
import { Bot, Code2, Zap, MessageSquare, Target, Share2, Calendar } from 'lucide-react';
import { SEO } from '../components/SEO';
import { MouseGlow } from '../components/MouseGlow';
import { DataGrid } from '../components/DataGrid';

export default function Docs() {
  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative pt-24">
      <SEO 
        title="AIDEA Documentation - AI Integration Guide"
        description="Technical documentation and integration guides for AIDEA's AI automation solutions."
      />
      <MouseGlow />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <DataGrid />
      </div>
      <div className="tech-background fixed inset-0 z-10 pointer-events-none opacity-30" />

      <div className="relative z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Hero Section */}
          <div className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">Documentation</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Comprehensive guides and API documentation for integrating AIDEA's AI solutions into your business workflow
            </p>
          </div>

          {/* Quick Start */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Quick Start Guides</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="p-6 rounded-xl border border-blue-500/20 bg-black/30">
                <Code2 className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">API Integration</h3>
                <p className="text-gray-400 mb-4">Get started with our RESTful API endpoints</p>
                <div className="bg-black/50 rounded-lg p-4">
                  <code className="text-sm text-blue-400">
                    curl -X POST https://api.aidea.ai/v1/analyze \<br />
                    &nbsp;&nbsp;-H "Authorization: Bearer YOUR_API_KEY" \<br />
                    &nbsp;&nbsp;-d "text=Your text here"
                  </code>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-blue-500/20 bg-black/30">
                <Bot className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">SDK Setup</h3>
                <p className="text-gray-400 mb-4">Install our SDK for quick implementation</p>
                <div className="bg-black/50 rounded-lg p-4">
                  <code className="text-sm text-blue-400">
                    npm install @aidea/sdk<br />
                    # or<br />
                    yarn add @aidea/sdk
                  </code>
                </div>
              </div>

              <div className="p-6 rounded-xl border border-blue-500/20 bg-black/30">
                <Zap className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-xl font-bold mb-2">Webhooks</h3>
                <p className="text-gray-400 mb-4">Set up real-time event notifications</p>
                <div className="bg-black/50 rounded-lg p-4">
                  <code className="text-sm text-blue-400">
                    POST /webhooks/configure<br />
                    {'{'}
                    &nbsp;&nbsp;"url": "https://your-domain.com/webhook",<br />
                    &nbsp;&nbsp;"events": ["lead.created", "support.ticket"]
                    {'}'}
                  </code>
                </div>
              </div>
            </div>
          </div>

          {/* Service Documentation */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Service Documentation</h2>
            <div className="space-y-8">
              <div className="p-8 rounded-xl border border-blue-500/20 bg-black/30">
                <MessageSquare className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-2xl font-bold mb-4">AI Customer Support</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-bold mb-2">Integration</h4>
                    <p className="text-gray-400">Connect our AI support system to your existing help desk:</p>
                    <div className="bg-black/50 rounded-lg p-4 mt-2">
                      <code className="text-sm text-blue-400">
                        const {'{'} Support {'}'} = require('@aidea/sdk');<br />
                        <br />
                        const support = new Support({'{'}<br />
                        &nbsp;&nbsp;apiKey: 'YOUR_API_KEY',<br />
                        &nbsp;&nbsp;platform: 'zendesk',<br />
                        &nbsp;&nbsp;autoResolve: true<br />
                        {'}'});
                      </code>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-xl border border-blue-500/20 bg-black/30">
                <Target className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-2xl font-bold mb-4">AI Lead Generation</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-bold mb-2">Configuration</h4>
                    <p className="text-gray-400">Set up automated lead discovery and qualification:</p>
                    <div className="bg-black/50 rounded-lg p-4 mt-2">
                      <code className="text-sm text-blue-400">
                        const {'{'} LeadGen {'}'} = require('@aidea/sdk');<br />
                        <br />
                        const leadGen = new LeadGen({'{'}<br />
                        &nbsp;&nbsp;apiKey: 'YOUR_API_KEY',<br />
                        &nbsp;&nbsp;sources: ['linkedin', 'crunchbase'],<br />
                        &nbsp;&nbsp;qualificationCriteria: {'{'}<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;minEmployees: 50,<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;industries: ['tech', 'finance']<br />
                        &nbsp;&nbsp;{'}'}<br />
                        {'}'});
                      </code>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-xl border border-blue-500/20 bg-black/30">
                <Share2 className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-2xl font-bold mb-4">Social Media AI</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-bold mb-2">Platform Connection</h4>
                    <p className="text-gray-400">Connect social media platforms for automated engagement:</p>
                    <div className="bg-black/50 rounded-lg p-4 mt-2">
                      <code className="text-sm text-blue-400">
                        const {'{'} SocialAI {'}'} = require('@aidea/sdk');<br />
                        <br />
                        const social = new SocialAI({'{'}<br />
                        &nbsp;&nbsp;apiKey: 'YOUR_API_KEY',<br />
                        &nbsp;&nbsp;platforms: ['twitter', 'linkedin'],<br />
                        &nbsp;&nbsp;engagementRules: {'{'}<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;responseTime: 'under 5min',<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;sentiment: 'positive'<br />
                        &nbsp;&nbsp;{'}'}<br />
                        {'}'});
                      </code>
                    </div>
                  </div>
                </div>
              </div>

              <div className="p-8 rounded-xl border border-blue-500/20 bg-black/30">
                <Calendar className="h-8 w-8 text-blue-500 mb-4" />
                <h3 className="text-2xl font-bold mb-4">AI Appointment Setting</h3>
                <div className="space-y-4">
                  <div>
                    <h4 className="text-lg font-bold mb-2">Calendar Integration</h4>
                    <p className="text-gray-400">Set up automated appointment scheduling:</p>
                    <div className="bg-black/50 rounded-lg p-4 mt-2">
                      <code className="text-sm text-blue-400">
                        const {'{'} Scheduler {'}'} = require('@aidea/sdk');<br />
                        <br />
                        const scheduler = new Scheduler({'{'}<br />
                        &nbsp;&nbsp;apiKey: 'YOUR_API_KEY',<br />
                        &nbsp;&nbsp;calendar: 'google',<br />
                        &nbsp;&nbsp;rules: {'{'}<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;bufferTime: "15",<br />
                        &nbsp;&nbsp;&nbsp;&nbsp;maxMeetingsPerDay: "8"<br />
                        &nbsp;&nbsp;{'}'}<br />
                        {'}'});
                      </code>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Additional Resources */}
          <div className="mb-16">
            <h2 className="text-3xl font-bold mb-8">Additional Resources</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <a href="#" className="block p-6 rounded-xl border border-blue-500/20 bg-black/30 hover:border-blue-500/40 transition-all">
                <h3 className="text-xl font-bold mb-2">API Reference</h3>
                <p className="text-gray-400">Complete API documentation with examples and use cases</p>
              </a>
              <a href="#" className="block p-6 rounded-xl border border-blue-500/20 bg-black/30 hover:border-blue-500/40 transition-all">
                <h3 className="text-xl font-bold mb-2">SDK Guides</h3>
                <p className="text-gray-400">Detailed SDK implementation guides for all services</p>
              </a>
              <a href="#" className="block p-6 rounded-xl border border-blue-500/20 bg-black/30 hover:border-blue-500/40 transition-all">
                <h3 className="text-xl font-bold mb-2">Best Practices</h3>
                <p className="text-gray-400">Learn about AI integration best practices and optimization tips</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}