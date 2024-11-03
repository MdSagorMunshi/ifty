import React from 'react';
import { Heart } from 'lucide-react';

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden">
      <div className="absolute inset-0 bg-gradient-to-r from-red-500/10 via-yellow-500/10 via-green-500/10 via-blue-500/10 to-purple-500/10" />
      
      <div className="relative z-10 text-center px-4 sm:px-6 lg:px-8">
        <h1 className="text-4xl sm:text-6xl font-bold mb-6">
          <span className="block mb-2">Celebrating Authenticity</span>
          <span className="rainbow-text">
            Iftakher Rahman
          </span>
        </h1>
        
        <p className="text-xl sm:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
          Proudly Embracing My Journey as a Creative, Advocate, and Proud Member of the LGBTQ+ Community
        </p>
        
        <div className="flex justify-center gap-4">
          <button className="px-8 py-3 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 rounded-full font-semibold hover:opacity-90 transition-opacity flex items-center gap-2 rainbow-glow">
            <Heart className="w-5 h-5" />
            Connect With Me
          </button>
          <button className="px-8 py-3 rainbow-border rounded-full font-semibold hover:bg-white/10 transition-colors">
            View Portfolio
          </button>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-slate-950 to-transparent" />
    </section>
  );
};

export default Hero;