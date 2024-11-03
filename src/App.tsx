import React from 'react';
import { Heart, Palette, Users, MessageCircle, Mail, Github, Twitter, Instagram, PenTool } from 'lucide-react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Portfolio from './components/Portfolio';
import Community from './components/Community';
import Blog from './components/Blog';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 to-slate-900 text-white">
      <Navbar />
      <main>
        <Hero />
        <About />
        <Portfolio />
        <Community />
        <Blog />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;