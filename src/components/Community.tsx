import React from 'react';
import { Users, Heart, Megaphone } from 'lucide-react';

const initiatives = [
  {
    title: "Pride Events Organization",
    description: "Leading local LGBTQ+ pride celebrations and cultural events",
    icon: Users
  },
  {
    title: "Support Groups",
    description: "Facilitating safe spaces for LGBTQ+ individuals to share and connect",
    icon: Heart
  },
  {
    title: "Advocacy Work",
    description: "Speaking up for LGBTQ+ rights and promoting inclusive policies",
    icon: Megaphone
  }
];

const Community = () => {
  return (
    <section id="community" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Community Engagement</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {initiatives.map((initiative, index) => (
            <div key={index} className="p-6 rounded-lg bg-slate-800 hover:bg-slate-800/80 transition-colors">
              <initiative.icon className="w-12 h-12 mb-4 text-pink-500" />
              <h3 className="text-xl font-bold mb-3">{initiative.title}</h3>
              <p className="text-gray-400">{initiative.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-16 p-8 rounded-lg bg-gradient-to-r from-pink-500/10 via-purple-500/10 to-indigo-500/10 border border-white/10">
          <h3 className="text-2xl font-bold mb-4 text-center">Join Our Community</h3>
          <p className="text-center text-gray-300 max-w-2xl mx-auto">
            Together, we create a more inclusive world. Whether you're part of the LGBTQ+ community or an ally, 
            there's a place for you here. Join us in celebrating diversity, promoting understanding, and building 
            meaningful connections.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Community;