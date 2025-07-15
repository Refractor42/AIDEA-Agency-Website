import React, { useEffect, useRef, useState } from 'react';
import { Bot, MessageSquare, Target, Share2, Zap, BarChart, Brain, Workflow, Calendar, Code2 } from 'lucide-react';
import { SEO } from '../components/SEO';
import { MouseGlow } from '../components/MouseGlow';
import { DataGrid } from '../components/DataGrid';
import { ServiceModal } from '../components/ServiceModal';

interface Service {
  title: string;
  description: string;
  features: string[];
  benefits: string[];
}

export default function Services() {
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services = {
    appointment: {
      title: "AI Appointment Setting",
      description: "Transform your scheduling with AI that works 24/7, handling bookings across all time zones. Our appointment setting solution eliminates scheduling conflicts and manual coordination.",
      features: [
        "Automated calendar management",
        "Multi-timezone support",
        "Smart availability detection",
        "Follow-up automation",
        "Integration with major calendars"
      ],
      benefits: [
        "Save $80k+ annually",
        "24/7 booking availability",
        "Zero scheduling conflicts",
        "Improved client experience",
        "Scalable scheduling operations"
      ]
    },
    website: {
      title: "AI Website Creation",
      description: "Get a professional, SEO-optimized website built by AI in minutes. Our website creation solution delivers custom designs with unlimited iterations at a fraction of traditional costs.",
      features: [
        "Custom design generation",
        "SEO optimization",
        "Mobile responsiveness",
        "Content generation",
        "Analytics integration"
      ],
      benefits: [
        "Save $15k+ in development",
        "Launch in days, not months",
        "Unlimited design iterations",
        "SEO-ready from day one",
        "No maintenance overhead"
      ]
    },
    crm: {
      title: "AI-Powered CRM Integration",
      description: "Scale your customer relationships with AI that works 24/7, handling thousands of interactions simultaneously. Our CRM integration solution transforms how you manage and engage with your customers.",
      features: [
        "24/7 automated customer interaction",
        "Real-time data enrichment",
        "Intelligent lead scoring",
        "Automated follow-up sequences",
        "Custom integration options"
      ],
      benefits: [
        "Reduce response time by 45%",
        "Increase customer satisfaction",
        "Scale customer interactions",
        "Improve data accuracy",
        "Save time and resources"
      ]
    },
    support: {
      title: "24/7 AI Customer Support",
      description: "Transform your customer support with AI that learns your entire knowledge base and handles thousands of inquiries simultaneously, providing instant, accurate responses.",
      features: [
        "Natural language processing",
        "Multi-language support",
        "Knowledge base integration",
        "Smart ticket routing",
        "Sentiment analysis"
      ],
      benefits: [
        "24/7 availability",
        "Instant response times",
        "Reduced support costs",
        "Improved customer satisfaction",
        "Scalable support operations"
      ]
    },
    leads: {
      title: "AI Lead Generation",
      description: "Supercharge your sales pipeline with AI-driven lead generation that identifies, qualifies, and engages prospects with unprecedented accuracy and scale.",
      features: [
        "Targeted LinkedIn profile scanning",
        "Business directory mining",
        "Industry database integration",
        "Company website analysis",
        "LinkedIn & directory scanning",
        "Intelligent lead scoring",
        "Multi-channel engagement",
        "Real-time data verification"
      ],
      benefits: [
        "Increase qualified leads by 200%",
        "Improve conversion rates",
        "Reduce acquisition costs",
        "Scale outreach efforts",
        "Better ROI on marketing spend"
      ]
    },
    social: {
      title: "Social Media AI",
      description: "Transform your social media presence with AI that personally engages thousands of customers simultaneously across all platforms.",
      features: [
        "Multi-platform management",
        "Content optimization",
        "Engagement automation",
        "Trend analysis",
        "Performance tracking"
      ],
      benefits: [
        "Increase engagement by 85%",
        "Consistent brand voice",
        "Real-time response",
        "Improved content strategy",
        "Better audience insights"
      ]
    }
  };

  useEffect(() => {
    const handleScroll = () => {
      // Trigger initial animation
      sectionsRef.current.forEach((section) => {
        if (section) {
          section.classList.add('visible');
        }
      });

      sectionsRef.current.forEach((section) => {
        if (!section) return;
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top <= window.innerHeight * 0.75;
        if (isVisible) {
          section.classList.add('visible');
        }
      });
    };

    // Trigger initial animation
    handleScroll();
    
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="min-h-screen bg-black text-white overflow-x-hidden relative flex flex-col">
      <SEO 
        title="AIDEA Services - Enterprise AI Solutions"
        description="Explore AIDEA's comprehensive suite of AI automation services including CRM integration, customer support, lead generation, and social media management."
      />
      <MouseGlow />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <DataGrid />
      </div>
      <div className="tech-background fixed inset-0 z-10 pointer-events-none opacity-30" />

      {/* Hero Section */}
      <section className="relative min-h-[calc(80vh-4rem)] flex items-center justify-center z-10 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={el => el && sectionsRef.current.push(el)}
            className="text-center scroll-animate"
          >
            <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Services</h1>
            <p className="text-xl text-gray-400 max-w-3xl mx-auto">
              Transform your business operations with our enterprise-grade AI solutions. 
              Get a custom, SEO-optimized website built by AI in minutes - this entire website was created 100% by AI! Save $15k+ in development costs while getting unlimited iterations.
            </p>
          </div>
        </div>
      </section>

      {/* Main Services */}
      <section className="relative z-10 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* AI Appointment Setting */}
            <div 
              ref={el => el && sectionsRef.current.push(el)}
              className="p-8 rounded-xl border border-blue-500/20 bg-black/30 scroll-animate"
              style={{ animationDelay: '0.2s', cursor: 'pointer' }}
              onClick={() => setSelectedService(services.appointment)}
            >
              <Calendar className="h-16 w-16 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">AI Appointment Setting</h3>
              <p className="text-gray-400 mb-6">
                Replace your scheduling team with AI that books meetings 24/7. Save $80k+ annually while maintaining perfect scheduling across all time zones.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <Zap className="h-5 w-5 text-blue-500 mr-3" />
                  Eliminate scheduling staff costs
                </li>
                <li className="flex items-center">
                  <Zap className="h-5 w-5 text-blue-500 mr-3" />
                  24/7 booking availability
                </li>
                <li className="flex items-center">
                  <Zap className="h-5 w-5 text-blue-500 mr-3" />
                  Zero timezone confusion
                </li>
              </ul>
            </div>

            {/* Website Creation */}
            <div 
              ref={el => el && sectionsRef.current.push(el)}
              className="p-8 rounded-xl border border-blue-500/20 bg-black/30 scroll-animate"
              style={{ animationDelay: '0.4s', cursor: 'pointer' }}
              onClick={() => setSelectedService(services.website)}
            >
              <Code2 className="h-16 w-16 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">AI Website Creation</h3>
              <p className="text-gray-400 mb-6">
                Get a custom, SEO-optimized website built by AI in minutes, not weeks. Save $15k+ in development costs while getting unlimited iterations.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <Zap className="h-5 w-5 text-blue-500 mr-3" />
                  Launch in days, not months
                </li>
                <li className="flex items-center">
                  <Zap className="h-5 w-5 text-blue-500 mr-3" />
                  SEO-ready from day one
                </li>
                <li className="flex items-center">
                  <Zap className="h-5 w-5 text-blue-500 mr-3" />
                  Unlimited design iterations
                </li>
              </ul>
            </div>

            {/* CRM Integration */}
            <div 
              ref={el => el && sectionsRef.current.push(el)}
              className="p-8 rounded-xl border border-blue-500/20 bg-black/30 scroll-animate"
              style={{ animationDelay: '0.2s', cursor: 'pointer' }}
              onClick={() => setSelectedService(services.crm)}
            >
              <Bot className="h-16 w-16 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">AI-Powered CRM Integration</h3>
              <p className="text-gray-400 mb-6">
                Replace your entire CRM team with AI that works 24/7. Save $150k+ annually while handling thousands of customers simultaneously - no breaks, no benefits, no overhead.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <Zap className="h-5 w-5 text-blue-500 mr-3" />
                  Eliminate CRM staff costs completely
                </li>
                <li className="flex items-center">
                  <Zap className="h-5 w-5 text-blue-500 mr-3" />
                  No more employee benefits or HR costs
                </li>
                <li className="flex items-center">
                  <Zap className="h-5 w-5 text-blue-500 mr-3" />
                  24/7 operation vs. 8-hour shifts
                </li>
              </ul>
            </div>

            {/* Customer Support */}
            <div 
              ref={el => el && sectionsRef.current.push(el)}
              className="p-8 rounded-xl border border-blue-500/20 bg-black/30 scroll-animate"
              style={{ animationDelay: '0.4s', cursor: 'pointer' }}
              onClick={() => setSelectedService(services.support)}
            >
              <MessageSquare className="h-16 w-16 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">24/7 AI Customer Support</h3>
              <p className="text-gray-400 mb-6">
                Cut support costs by 80% with AI that never sleeps, never takes breaks, and handles unlimited tickets simultaneously. Save $200k+ annually in support team costs.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <Zap className="h-5 w-5 text-blue-500 mr-3" />
                  Eliminate support staff salaries
                </li>
                <li className="flex items-center">
                  <Zap className="h-5 w-5 text-blue-500 mr-3" />
                  No vacation or sick leave costs
                </li>
                <li className="flex items-center">
                  <Zap className="h-5 w-5 text-blue-500 mr-3" />
                  Zero training & turnover expenses
                </li>
              </ul>
            </div>

            {/* Lead Generation */}
            <div 
              ref={el => el && sectionsRef.current.push(el)}
              className="p-8 rounded-xl border border-blue-500/20 bg-black/30 scroll-animate"
              style={{ animationDelay: '0.6s', cursor: 'pointer' }}
              onClick={() => setSelectedService(services.leads)}
            >
              <Target className="h-16 w-16 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">AI Lead Generation</h3>
              <p className="text-gray-400 mb-6">
                Replace your entire sales team with AI that generates qualified leads 24/7. Save $60k+ per sales rep with no commission or training costs.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <Zap className="h-5 w-5 text-blue-500 mr-3" />
                  Automated lead discovery
                </li>
                <li className="flex items-center">
                  <Zap className="h-5 w-5 text-blue-500 mr-3" />
                  Intelligent qualification
                </li>
                <li className="flex items-center">
                  <Zap className="h-5 w-5 text-blue-500 mr-3" />
                  24/7 prospect verification
                </li>
              </ul>
            </div>

            {/* Social Media Management */}
            <div 
              ref={el => el && sectionsRef.current.push(el)}
              className="p-8 rounded-xl border border-blue-500/20 bg-black/30 scroll-animate"
              style={{ animationDelay: '0.8s', cursor: 'pointer' }}
              onClick={() => setSelectedService(services.social)}
            >
              <Share2 className="h-16 w-16 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Social Media AI</h3>
              <p className="text-gray-400 mb-6">
                Replace your entire social media team with AI that works 24/7. Save $120k+ annually while maintaining perfect response times and engagement across all platforms.
              </p>
              <ul className="space-y-3 text-gray-400">
                <li className="flex items-center">
                  <Zap className="h-5 w-5 text-blue-500 mr-3" />
                  Eliminate social media staff costs
                </li>
                <li className="flex items-center">
                  <Zap className="h-5 w-5 text-blue-500 mr-3" />
                  No more shift coverage expenses
                </li>
                <li className="flex items-center">
                  <Zap className="h-5 w-5 text-blue-500 mr-3" />
                  Zero overtime or holiday pay
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={el => el && sectionsRef.current.push(el)}
            className="text-center mb-16 scroll-animate"
          >
            <h2 className="text-4xl font-bold mb-4">Our Process</h2>
            <p className="text-xl text-gray-400">How we implement AI solutions for your business</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">
            {/* Process Steps */}
            <div 
              ref={el => el && sectionsRef.current.push(el)}
              className="text-center scroll-animate"
              style={{ animationDelay: '0.2s' }}
            >
              <Brain className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Analysis</h3>
              <p className="text-gray-400">Deep analysis of your business needs and current processes</p>
            </div>

            <div 
              ref={el => el && sectionsRef.current.push(el)}
              className="text-center scroll-animate"
              style={{ animationDelay: '0.4s' }}
            >
              <Workflow className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Strategy</h3>
              <p className="text-gray-400">Custom AI solution design and implementation planning</p>
            </div>

            <div 
              ref={el => el && sectionsRef.current.push(el)}
              className="text-center scroll-animate"
              style={{ animationDelay: '0.6s' }}
            >
              <Bot className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Implementation</h3>
              <p className="text-gray-400">Seamless integration of AI solutions into your workflow</p>
            </div>

            <div 
              ref={el => el && sectionsRef.current.push(el)}
              className="text-center scroll-animate"
              style={{ animationDelay: '0.8s' }}
            >
              <BarChart className="h-12 w-12 text-blue-500 mx-auto mb-4" />
              <h3 className="text-xl font-bold mb-2">Optimization</h3>
              <p className="text-gray-400">Continuous monitoring and performance optimization</p>
            </div>
          </div>
        </div>
      </section>
      
      {/* Service Modal */}
      <ServiceModal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        service={selectedService || services.crm}
      />
    </div>
  );
}