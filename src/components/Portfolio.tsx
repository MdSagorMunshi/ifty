import React from 'react';
import { Palette, Camera, PenTool } from 'lucide-react';

const projects = [
  {
    title: "Pride & Identity",
    category: "Digital Art",
    description: "A series exploring the intersection of cultural identity and LGBTQ+ experience",
    image: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
    icon: Palette,
    color: "from-red-500 to-yellow-500"
  },
  {
    title: "Love Stories",
    category: "Photography",
    description: "Capturing intimate moments and authentic connections in the LGBTQ+ community",
    image: "https://images.unsplash.com/photo-1516575334481-f85287c2c82d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
    icon: Camera,
    color: "from-green-500 to-blue-500"
  },
  {
    title: "Queer Narratives",
    category: "Writing",
    description: "Personal essays and stories celebrating diverse LGBTQ+ experiences",
    image: "https://images.unsplash.com/photo-1471107340929-a87cd0f5b5f3?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80",
    icon: PenTool,
    color: "from-blue-500 to-purple-500"
  }
];

const Portfolio = () => {
  return (
    <section id="portfolio" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center rainbow-text">Creative Portfolio</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <div key={index} className="group relative overflow-hidden rounded-lg rainbow-border">
              <div className="aspect-[4/3] overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-110"
                />
              </div>
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute bottom-0 p-6">
                  <project.icon className={`w-8 h-8 mb-3 bg-gradient-to-r ${project.color} text-transparent bg-clip-text`} />
                  <h3 className="text-xl font-bold mb-2">{project.title}</h3>
                  <p className="text-sm text-gray-300 mb-2">{project.category}</p>
                  <p className="text-sm text-gray-400">{project.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Portfolio;