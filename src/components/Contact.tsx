import React from 'react';
import { FaWhatsapp, FaFacebook } from 'react-icons/fa';
import { MdPerson } from 'react-icons/md';

const Contact = () => {
  return (
    <section id="contact" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12">
          <div>
            <h2 className="text-3xl font-bold mb-6 rainbow-text">Let's Connect</h2>
            <p className="text-gray-300 mb-8">
              Whether you want to collaborate, share your story, or just say hello, 
              I'd love to hear from you. Let's create something meaningful together.
            </p>
            
            <div className="space-y-4">
              <a href="#about" className="flex items-center gap-3 text-gray-300 hover:text-red-500 transition-colors">
                <MdPerson className="w-5 h-5" />
                I F T Y 
              </a>
              <div className="flex gap-4">
                <a href="https://facebook.com/100016191977908" className="text-gray-300 hover:text-yellow-500 transition-colors">
                  <FaFacebook className="w-6 h-6" />
                </a>
                <a href="https://wa.me/8801407992896" className="text-gray-300 hover:text-green-500 transition-colors">
                  <FaWhatsapp className="w-6 h-6" />
                </a>
              </div>
            </div>
          </div>
          
          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-300 mb-2">
                Name
              </label>
              <input
                type="text"
                id="name"
                className="w-full px-4 py-2 bg-slate-800 rainbow-border rounded-lg focus:outline-none"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-300 mb-2">
                Email
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-2 bg-slate-800 rainbow-border rounded-lg focus:outline-none"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-300 mb-2">
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                className="w-full px-4 py-2 bg-slate-800 rainbow-border rounded-lg focus:outline-none"
              ></textarea>
            </div>
            
            <button
              type="submit"
              className="w-full px-8 py-3 bg-gradient-to-r from-red-500 via-yellow-500 via-green-500 via-blue-500 to-purple-500 rounded-lg font-semibold hover:opacity-90 transition-opacity rainbow-glow"
            >
              Send Message
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;