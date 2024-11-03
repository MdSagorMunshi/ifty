import React from 'react';
import { Heart } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="py-8 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400">
            © 2024 Iftakher Rahman. All rights reserved.
          </p>
          
          <div className="flex items-center gap-2 text-gray-400">
            Made with <Heart className="w-4 h-4 text-pink-500" /> and Pride
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;