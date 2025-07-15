import React, { useEffect, useRef, useState, type SetStateAction } from 'react';
import { Bot, MessageSquare, Target, Share2, Quote, ArrowLeft, ArrowRight, Building2, Trophy, Star, Calendar, Code2 } from 'lucide-react';
import { SEO } from '../components/SEO';
import { ServiceModal } from '../components/ServiceModal';

interface Service {
  title: string;
  description: string;
  features: string[];
  benefits: string[];
}

interface HomeProps {
  setIsModalOpen: (value: SetStateAction<boolean>) => void;
}

export default function Home({ setIsModalOpen }: HomeProps) {
  const sectionsRef = useRef<HTMLDivElement[]>([]);
  const [currentTestimonial, setCurrentTestimonial] = useState(0);
  const [selectedService, setSelectedService] = useState<Service | null>(null);

  const services = {
    appointment: {
      title: "AI Appointment Setting",
      description: "Replace your scheduling team with AI that books meetings 24/7. Save $80k+ annually while maintaining perfect scheduling across all time zones.",
      features: [
        "Automated calendar management",
        "Multi-timezone support",
        "Smart availability detection",
        "Follow-up automation",
        "Integration with major calendars",
        "Intelligent rescheduling",
        "Custom booking rules",
        "Meeting preference learning"
      ],
      benefits: [
        "Save $80k+ in scheduling staff costs",
        "Eliminate scheduling conflicts",
        "24/7 booking availability",
        "No more timezone confusion",
        "Zero training & turnover costs",
        "Instant confirmation & reminders"
      ]
    },
    website: {
      title: "AI Website Creation",
      description: "Get a custom, SEO-optimized website built by AI in minutes, not weeks. Save $15k+ in development costs while getting unlimited iterations.",
      features: [
        "Custom design generation",
        "SEO optimization",
        "Mobile responsiveness",
        "Content generation",
        "Analytics integration",
        "Performance optimization",
        "Security implementation",
        "Conversion optimization"
      ],
      benefits: [
        "Save $15k+ in development costs",
        "Launch in days, not months",
        "Unlimited design iterations",
        "SEO-ready from day one",
        "No maintenance overhead",
        "Continuous optimization"
      ]
    },
    crm: {
      title: "AI-Powered CRM Integration",
      description: "Replace your entire CRM team with AI that works 24/7, handling thousands of customer interactions simultaneously at a fraction of the cost of human staff.",
      features: [
        "24/7 automated customer interaction",
        "Real-time data enrichment",
        "Intelligent lead scoring",
        "Automated follow-up sequences",
        "Custom integration options",
        "Efficient interaction management",
        "Behavioral analytics",
        "Real-time data synchronization"
      ],
      benefits: [
        "Reduce response time by 45%",
        "Save $150k+ annually in CRM staff costs",
        "No vacation or sick leave disruptions",
        "Eliminate training & turnover costs",
        "Scale to thousands of customers without adding staff",
        "24/7 operation vs. 8-hour shifts"
      ]
    },
    support: {
      title: "24/7 AI Customer Support",
      description: "Cut support costs by 80% while providing instant, 24/7 customer service. Our AI handles unlimited concurrent conversations without the overhead of a human support team.",
      features: [
        "Natural language processing",
        "Multi-language support",
        "Knowledge base integration",
        "Smart ticket routing",
        "Sentiment analysis",
        "Instant response capabilities",
        "Personalized knowledge integration",
        "24/7 automated support"
      ],
      benefits: [
        "24/7 availability",
        "Save $200k+ annually in support salaries",
        "No more shift scheduling headaches",
        "Eliminate HR and training costs",
        "Handle unlimited support tickets",
        "No overtime or holiday pay required"
      ]
    },
    leads: {
      title: "AI Lead Generation",
      description: "Replace your entire sales development team with AI that generates qualified leads 24/7. Save $60k+ per SDR while achieving better results.",
      features: [
        "LinkedIn profile & company scraping",
        "Intelligent lead scoring",
        "Industry database mining",
        "Multi-channel engagement",
        "Company data enrichment",
        "Business directory scanning",
        "Website visitor identification",
        "Real-time lead verification",
        "Competitor customer discovery"
      ],
      benefits: [
        "Increase qualified leads by 200%",
        "Save $300k+ annually in SDR salaries",
        "No commission costs",
        "Eliminate training & onboarding expenses",
        "Scale without hiring",
        "24/7 lead generation vs. 8-hour shifts"
      ]
    },
    social: {
      title: "Social Media AI",
      description: "Replace your social media team with AI that engages customers 24/7 across all platforms. Save $120k+ annually while improving response times and engagement.",
      features: [
        "Multi-platform management",
        "Content optimization",
        "Engagement automation",
        "Trend analysis",
        "Performance tracking",
        "Real-time response system",
        "Cross-platform consistency",
        "Automated engagement workflows"
      ],
      benefits: [
        "Increase engagement by 85%",
        "Save $120k+ in social media staff costs",
        "No more content calendar coordination",
        "Eliminate multi-shift coverage costs",
        "Handle unlimited social interactions",
        "24/7 engagement vs. limited hours"
      ]
    }
  };

  const testimonials = [
    {
      quote: "AIDEA's AI solutions have transformed our customer service workflow, achieving a remarkable 45% improvement in response times.",
      rating: 4.5,
      author: "Michael Anderson",
      title: "Head of Innovation",
      company: "NovaTech Solutions"
    },
    {
      quote: "The automation platform from AIDEA has revolutionized our lead generation process, increasing qualified leads by 200%.",
      rating: 4,
      author: "Sarah Mitchell",
      title: "VP of Sales",
      company: "DataFlow Systems"
    },
    {
      quote: "Since implementing AIDEA's enterprise solution, our customer engagement metrics have improved across all channels by 85%.",
      rating: 5,
      author: "Robert Hayes",
      title: "CTO",
      company: "Quantum Dynamics"
    }
  ];

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

  const nextTestimonial = () => {
    setCurrentTestimonial((prev) => (prev + 1) % testimonials.length);
  };

  const prevTestimonial = () => {
    setCurrentTestimonial((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  return (
    <>
      <SEO />
      {/* Hero Section */}
      <main className="relative z-10 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="min-h-[calc(80vh-4rem)] flex flex-col items-center justify-center">
            {/* Logo */}
            <div 
              ref={el => el && sectionsRef.current.push(el)}
              className="relative animate-float mb-2 scroll-animate"
              style={{ width: '120px', height: '120px' }}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="relative">
                  <Bot className="w-24 h-24 text-blue-500 animate-pulse" />
                  <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-spin-slow" />
                </div>
              </div>
            </div>

            {/* Main Text */}
            <div 
              ref={el => el && sectionsRef.current.push(el)}
              className="text-center scroll-animate"
              style={{ animationDelay: '0.2s' }}
            >
              <h1 className="text-4xl md:text-6xl font-bold tracking-wider mb-6 bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">
                Revolutionize Your Business with AI Automation
              </h1>
              <p className="text-2xl md:text-4xl font-bold mb-4 max-w-4xl mx-auto leading-tight">
                Replace Entire Teams with AI That Works 24/7, Saving You Millions
              </p>
              <p className="text-xl text-gray-400 mb-8 max-w-3xl mx-auto">
                Join the AI Revolution: Cut Costs by 80%, Boost Efficiency by 200%, and Scale Without Limits
              </p>
            </div>

            {/* Links */}
            <div 
              ref={el => el && sectionsRef.current.push(el)}
              className="flex justify-center scroll-animate"
              style={{ animationDelay: '0.4s' }}
            >
              <button 
                onClick={() => setIsModalOpen(true)}
                className="px-6 py-3 rounded-full bg-blue-500 hover:bg-blue-600 transition-all button-glow"
              >
                Get Started
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Services Section */}
      <section className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Replace Entire Teams with AI</h2>
            <p className="text-xl text-gray-400">Replace Human Teams with AI That Never Sleeps, Never Takes Breaks, and Costs 80% Less</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {/* AI Appointment Setting */}
            <div 
              ref={el => el && sectionsRef.current.push(el)}
              className="p-8 rounded-xl border border-blue-500/20 bg-black/30 scroll-animate cursor-pointer hover:border-blue-500/40 transition-all"
              style={{ animationDelay: '0.2s' }}
              onClick={() => setSelectedService(services.appointment)}
            >
              <Calendar className="h-12 w-12 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">AI Appointment Setting</h3>
              <p className="text-gray-400">Replace your scheduling team with AI that handles bookings 24/7 across all time zones, saving $80k+ annually</p>
            </div>

            {/* Website Creation */}
            <div 
              ref={el => el && sectionsRef.current.push(el)}
              className="p-8 rounded-xl border border-blue-500/20 bg-black/30 scroll-animate cursor-pointer hover:border-blue-500/40 transition-all"
              style={{ animationDelay: '0.4s' }}
              onClick={() => setSelectedService(services.website)}
            >
              <Code2 className="h-12 w-12 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">AI Website Creation</h3>
              <p className="text-gray-400">Get a custom, SEO-optimized website built by AI in minutes - this entire website was created 100% by AI! Save $15k+ in development costs</p>
            </div>

            {/* CRM Integration */}
            <div 
              ref={el => el && sectionsRef.current.push(el)}
              className="p-8 rounded-xl border border-blue-500/20 bg-black/30 scroll-animate cursor-pointer hover:border-blue-500/40 transition-all"
              style={{ animationDelay: '0.2s' }}
              onClick={() => setSelectedService(services.crm)}
            >
              <Bot className="h-12 w-12 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">AI-Powered CRM</h3>
              <p className="text-gray-400">Replace your entire CRM team with AI that works 24/7, handling thousands of customers simultaneously. Save $150k+ annually</p>
            </div>

            {/* Customer Support */}
            <div 
              ref={el => el && sectionsRef.current.push(el)}
              className="p-8 rounded-xl border border-blue-500/20 bg-black/30 scroll-animate cursor-pointer hover:border-blue-500/40 transition-all"
              style={{ animationDelay: '0.4s' }}
              onClick={() => setSelectedService(services.support)}
            >
              <MessageSquare className="h-12 w-12 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">AI Customer Support</h3>
              <p className="text-gray-400">Cut support costs by 80% with AI that handles unlimited tickets simultaneously. Save $200k+ annually in support team costs</p>
            </div>

            {/* Lead Generation */}
            <div 
              ref={el => el && sectionsRef.current.push(el)}
              className="p-8 rounded-xl border border-blue-500/20 bg-black/30 scroll-animate cursor-pointer hover:border-blue-500/40 transition-all"
              style={{ animationDelay: '0.6s' }}
              onClick={() => setSelectedService(services.leads)}
            >
              <Target className="h-12 w-12 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">AI Lead Generation</h3>
              <p className="text-gray-400">Replace your sales team with AI that finds and qualifies leads 24/7. Save $60k+ per sales rep with no commission costs</p>
            </div>

            {/* Social Media AI */}
            <div 
              ref={el => el && sectionsRef.current.push(el)}
              className="p-8 rounded-xl border border-blue-500/20 bg-black/30 scroll-animate cursor-pointer hover:border-blue-500/40 transition-all"
              style={{ animationDelay: '0.8s' }}
              onClick={() => setSelectedService(services.social)}
            >
              <Share2 className="h-12 w-12 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Social Media AI</h3>
              <p className="text-gray-400">Replace your social media team with AI that works 24/7. Save $120k+ annually while maintaining perfect engagement</p>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials & Case Studies */}
      <section className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Real Business Transformation</h2>
            <p className="text-xl text-gray-400">See How Companies Are Revolutionizing Their Operations with AI</p>
          </div>

          {/* Case Studies */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">
            <div 
              ref={el => el && sectionsRef.current.push(el)}
              className="case-study-card p-8 rounded-xl border border-blue-500/20 scroll-animate hover:border-blue-500/40 transition-all cursor-pointer"
              style={{ animationDelay: '0.2s' }}
            >
              <Trophy className="h-12 w-12 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Global Tech Solutions</h3>
              <p className="text-gray-400 mb-4">200% increase in qualified leads using our AI-driven lead generation system</p>
              <div className="flex items-center justify-between">
                <span className="text-blue-500">CRM Integration & Lead Generation</span>
                <Building2 className="h-6 w-6 text-blue-500" />
              </div>
            </div>

            <div 
              ref={el => el && sectionsRef.current.push(el)}
              className="case-study-card p-8 rounded-xl border border-blue-500/20 scroll-animate hover:border-blue-500/40 transition-all cursor-pointer"
              style={{ animationDelay: '0.4s' }}
            >
              <Trophy className="h-12 w-12 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">E-commerce Leader</h3>
              <p className="text-gray-400 mb-4">45% reduction in response time with AI-powered customer support</p>
              <div className="flex items-center justify-between">
                <span className="text-blue-500">Customer Support & Social Media AI</span>
                <Building2 className="h-6 w-6 text-blue-500" />
              </div>
            </div>
          </div>

          {/* Testimonials Carousel */}
          <div className="relative">
            <div 
              ref={el => el && sectionsRef.current.push(el)}
              className="testimonial-card p-8 rounded-xl border border-blue-500/20 scroll-animate"
            >
              <Quote className="h-12 w-12 text-blue-500 mb-6" />
              <blockquote key={currentTestimonial} className="text-xl mb-6">
                {testimonials[currentTestimonial].quote}
              </blockquote>
              <div className="flex items-center justify-between">
                <div>
                  <p key={`author-${currentTestimonial}`} className="font-bold">{testimonials[currentTestimonial].author}</p>
                  <p key={`title-${currentTestimonial}`} className="text-gray-400 mb-1">{testimonials[currentTestimonial].title}</p>
                  <p key={`company-${currentTestimonial}`} className="text-sm font-bold bg-gradient-to-r from-blue-400 to-purple-400 bg-clip-text text-transparent">{testimonials[currentTestimonial].company}</p>
                  <div className="flex items-center mt-2">
                    {[...Array(5)].map((_, i) => {
                      const rating = testimonials[currentTestimonial].rating;
                      const isHalfStar = Math.floor(rating) === i && rating % 1 !== 0;
                      const starGradient = isHalfStar ? 'bg-gradient-to-r from-yellow-400 to-transparent bg-clip-text text-transparent' : '';
                      return (
                        <Star
                          key={i}
                          className={`w-4 h-4 ${
                            i < Math.floor(rating) 
                              ? 'text-yellow-400 fill-current' 
                              : isHalfStar
                                ? `${starGradient} fill-yellow-400/50`
                                : 'text-gray-600'
                          }`}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="flex gap-4">
                  <button 
                    onClick={prevTestimonial}
                    className="p-2 rounded-full border border-blue-500/20 hover:border-blue-500/40 transition-all"
                  >
                    <ArrowLeft className="h-6 w-6 text-blue-500" />
                  </button>
                  <button 
                    onClick={nextTestimonial}
                    className="p-2 rounded-full border border-blue-500/20 hover:border-blue-500/40 transition-all"
                  >
                    <ArrowRight className="h-6 w-6 text-blue-500" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      
      {/* Trusted By Section */}
      <section className="relative py-12 z-10 border-t border-blue-500/20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-center text-gray-400 mb-8">Trusted by leading companies worldwide</p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-12 items-center justify-items-center opacity-80 hover:opacity-100 transition-all">
            <div className="font-sans text-3xl font-bold tracking-tighter text-[#2A4B8C] hover:opacity-90 transition-colors">NEXTECH</div>
            <div className="font-sans text-2xl font-bold text-[#FF4B2B] hover:opacity-90 transition-colors">VERTEX</div>
            <div className="font-sans text-4xl font-bold bg-gradient-to-r from-[#6366F1] to-[#14B8A6] bg-clip-text text-transparent hover:opacity-90 transition-colors">SYNAPSE</div>
            <div className="font-sans text-3xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-[#3B82F6] to-[#EC4899] hover:opacity-90 transition-colors">QUANTUM</div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 z-10">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Ready to Join the AI Revolution?</h2>
            <p className="text-xl text-gray-400 mb-8">Transform Your Business Today and Stay Ahead of the Competition</p>
            <button
              onClick={() => setIsModalOpen(true)}
              className="px-8 py-4 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all button-glow text-lg"
            >
              Start Your Business Transformation
            </button>
          </div>
        </div>
      </section>
      
      {/* Service Modal */}
      <ServiceModal
        isOpen={selectedService !== null}
        onClose={() => setSelectedService(null)}
        service={selectedService || services.crm}
      />
    </>
  );
}