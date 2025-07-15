import React, { useEffect, useRef } from 'react';
import { Bot, Users, Lightbulb, Target, Award } from 'lucide-react';
import { SEO } from '../components/SEO';
import { MouseGlow } from '../components/MouseGlow';
import { DataGrid } from '../components/DataGrid';

export default function About() {
  const sectionsRef = useRef<HTMLDivElement[]>([]);

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
        title="About AIDEA - Our Story & Mission"
        description="Learn about AIDEA's journey in AI automation and our mission to transform businesses through innovative AI solutions."
      />
      <MouseGlow />
      <div className="fixed inset-0 z-0 pointer-events-none">
        <DataGrid />
      </div>
      <div className="tech-background fixed inset-0 z-10 pointer-events-none opacity-30" />

      {/* Hero Section */}
      <section className="relative min-h-[calc(80vh-4rem)] flex items-center justify-center z-10 pt-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div 
              ref={el => el && sectionsRef.current.push(el)}
              className="scroll-animate"
            >
              <h1 className="text-5xl md:text-7xl font-bold mb-6">Our Story</h1>
              <p className="text-xl text-gray-400 max-w-3xl mx-auto">
                Founded in 2020, AIDEA emerged from a vision to democratize AI technology
                and make enterprise-grade automation accessible to businesses of all sizes.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative z-10 pb-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
            <div 
              ref={el => el && sectionsRef.current.push(el)}
              className="scroll-animate"
            >
              <h2 className="text-4xl font-bold mb-6">Our Mission</h2>
              <p className="text-gray-400 mb-6">
                We're on a mission to transform how businesses operate through intelligent
                automation. Our AI solutions are designed to enhance efficiency, drive
                growth, and create meaningful connections with customers.
              </p>
              <div className="space-y-4">
                <div className="flex items-start space-x-4">
                  <Target className="w-6 h-6 text-blue-500 mt-1" />
                  <p className="text-gray-400">Democratizing AI technology</p>
                </div>
                <div className="flex items-start space-x-4">
                  <Users className="w-6 h-6 text-blue-500 mt-1" />
                  <p className="text-gray-400">Building lasting client relationships</p>
                </div>
                <div className="flex items-start space-x-4">
                  <Lightbulb className="w-6 h-6 text-blue-500 mt-1" />
                  <p className="text-gray-400">Driving innovation in AI automation</p>
                </div>
              </div>
            </div>
            <div 
              ref={el => el && sectionsRef.current.push(el)}
              className="relative scroll-animate"
              style={{ animationDelay: '0.2s' }}
            >
              <div className="aspect-square rounded-full bg-gradient-to-br from-blue-500/20 to-purple-500/20 flex items-center justify-center">
                <Bot className="w-32 h-32 text-blue-500" />
              </div>
              <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10 rounded-full animate-spin-slow" />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="relative py-20 z-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div 
            ref={el => el && sectionsRef.current.push(el)}
            className="text-center mb-16 scroll-animate"
          >
            <h2 className="text-4xl font-bold mb-4">Our Values</h2>
            <p className="text-xl text-gray-400">The principles that guide our innovation</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div 
              ref={el => el && sectionsRef.current.push(el)}
              className="p-8 rounded-xl border border-blue-500/20 bg-black/30 scroll-animate"
              style={{ animationDelay: '0.2s' }}
            >
              <Award className="h-12 w-12 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Excellence</h3>
              <p className="text-gray-400">
                We strive for excellence in every solution we deliver, ensuring the
                highest standards of quality and performance.
              </p>
            </div>

            <div 
              ref={el => el && sectionsRef.current.push(el)}
              className="p-8 rounded-xl border border-blue-500/20 bg-black/30 scroll-animate"
              style={{ animationDelay: '0.4s' }}
            >
              <Users className="h-12 w-12 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Collaboration</h3>
              <p className="text-gray-400">
                We believe in working closely with our clients to understand their
                unique needs and deliver tailored solutions.
              </p>
            </div>

            <div 
              ref={el => el && sectionsRef.current.push(el)}
              className="p-8 rounded-xl border border-blue-500/20 bg-black/30 scroll-animate"
              style={{ animationDelay: '0.6s' }}
            >
              <Lightbulb className="h-12 w-12 text-blue-500 mb-6" />
              <h3 className="text-2xl font-bold mb-4">Innovation</h3>
              <p className="text-gray-400">
                We continuously push the boundaries of what's possible with AI
                technology to create groundbreaking solutions.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}