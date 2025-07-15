import React, { useState } from 'react';
import { Send } from 'lucide-react';

interface ContactFormProps {
  onClose?: () => void;
  className?: string;
}

export function ContactForm({ onClose, className = '' }: ContactFormProps) {
  const [status, setStatus] = useState<'idle' | 'sending' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setStatus('sending');

    const form = e.currentTarget;
    const formData = new FormData(form);
    const data = {
      name: formData.get('name'),
      email: formData.get('email'),
      message: formData.get('message'),
    };

    try {
      // In a real app, you would send this to your backend
      // For demo purposes, we'll simulate a successful send
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStatus('success');
      form.reset();
      setTimeout(() => {
        setStatus('idle');
        onClose?.();
      }, 2000);
    } catch (error) {
      setStatus('error');
      setTimeout(() => setStatus('idle'), 3000);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={`space-y-6 ${className}`}>
      <div className="flex gap-4">
        <div className="flex-1">
          <label htmlFor="name" className="block text-sm font-medium text-gray-400 mb-2">Name</label>
          <input
            type="text"
            name="name"
            id="name"
            required
            className="w-full px-4 py-2 bg-black/50 border border-blue-500/20 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-500/20 transition-all"
            placeholder="Your name"
          />
        </div>
        <div className="flex-1">
          <label htmlFor="company" className="block text-sm font-medium text-gray-400 mb-2">Company</label>
          <input
            type="text"
            name="company"
            id="company"
            required
            className="w-full px-4 py-2 bg-black/50 border border-blue-500/20 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-500/20 transition-all"
            placeholder="Company name"
          />
        </div>
      </div>
      <div>
        <label htmlFor="email" className="block text-sm font-medium text-gray-400 mb-2">Work Email</label>
        <input
          type="email"
          name="email"
          id="email"
          required
          className="w-full px-4 py-2 bg-black/50 border border-blue-500/20 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-500/20 transition-all"
          placeholder="work@company.com"
        />
      </div>
      <div>
        <label htmlFor="team_size" className="block text-sm font-medium text-gray-400 mb-2">Current Team Size</label>
        <select
          name="team_size"
          id="team_size"
          required
          className="w-full px-4 py-2 bg-black/50 border border-blue-500/20 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-500/20 transition-all"
        >
          <option value="">Select team size</option>
          <option value="1-10">1-10 employees</option>
          <option value="11-50">11-50 employees</option>
          <option value="51-200">51-200 employees</option>
          <option value="201+">201+ employees</option>
        </select>
      </div>
      <div>
        <label htmlFor="industry" className="block text-sm font-medium text-gray-400 mb-2">Industry</label>
        <select
          name="industry"
          id="industry"
          required
          className="w-full px-4 py-2 bg-black/50 border border-blue-500/20 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-500/20 transition-all"
        >
          <option value="">Select your industry</option>
          <option value="ecommerce">E-commerce</option>
          <option value="saas">SaaS</option>
          <option value="finance">Finance & Banking</option>
          <option value="healthcare">Healthcare</option>
          <option value="retail">Retail</option>
          <option value="manufacturing">Manufacturing</option>
          <option value="technology">Technology</option>
          <option value="other">Other</option>
        </select>
      </div>
      <div>
        <label htmlFor="message" className="block text-sm font-medium text-gray-400 mb-2">Message</label>
        <textarea
          name="message"
          id="message"
          required
          rows={3}
          className="w-full px-4 py-2 bg-black/50 border border-blue-500/20 rounded-lg focus:border-blue-500 focus:ring focus:ring-blue-500/20 transition-all"
          placeholder="What teams are you looking to automate? (e.g., Support, Sales, Social Media)"
        ></textarea>
      </div>
      <p className="text-xs text-gray-400">Get your personalized AI cost savings report instantly</p>
      <button
        type="submit"
        disabled={status === 'sending'}
        className="w-full px-6 py-3 bg-blue-500 text-white rounded-lg hover:bg-blue-600 transition-all button-glow flex items-center justify-center space-x-2 disabled:opacity-50 disabled:cursor-not-allowed"
      >
        <span>{
          status === 'idle' ? 'Send Message' :
          status === 'sending' ? 'Sending...' :
          status === 'success' ? 'Message Sent!' :
          'Error - Try Again'
        }</span>
        <Send className={`w-4 h-4 ${status === 'sending' ? 'animate-pulse' : ''}`} />
      </button>
    </form>
  );
}