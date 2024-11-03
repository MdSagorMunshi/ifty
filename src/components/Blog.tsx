import React from 'react';

const posts = [
  {
    title: "Embracing My Truth: A Journey of Self-Discovery",
    date: "March 15, 2024",
    excerpt: "Reflecting on my personal journey of coming out and finding strength in authenticity.",
    image: "https://images.unsplash.com/photo-1517960413843-0aee8e2b3285?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
  },
  {
    title: "The Power of LGBTQ+ Representation in Art",
    date: "March 10, 2024",
    excerpt: "Exploring how visibility in creative spaces shapes perceptions and inspires change.",
    image: "https://images.unsplash.com/photo-1496449903678-68ddcb189a24?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
  },
  {
    title: "Building Bridges: LGBTQ+ Advocacy in Action",
    date: "March 5, 2024",
    excerpt: "Sharing experiences from recent community initiatives and their impact.",
    image: "https://images.unsplash.com/photo-1573164713714-d95e436ab8d6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1064&q=80"
  }
];

const Blog = () => {
  return (
    <section id="blog" className="py-20 bg-slate-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <h2 className="text-3xl font-bold mb-12 text-center">Latest Thoughts</h2>
        
        <div className="grid md:grid-cols-3 gap-8">
          {posts.map((post, index) => (
            <article key={index} className="group">
              <div className="aspect-[16/9] rounded-lg overflow-hidden mb-4">
                <img
                  src={post.image}
                  alt={post.title}
                  className="w-full h-full object-cover transition-transform duration-300 group-hover:scale-105"
                />
              </div>
              
              <div className="space-y-2">
                <span className="text-sm text-pink-500">{post.date}</span>
                <h3 className="text-xl font-bold group-hover:text-pink-500 transition-colors">
                  {post.title}
                </h3>
                <p className="text-gray-400">{post.excerpt}</p>
                
                <button className="text-sm font-semibold text-pink-500 hover:text-pink-400 transition-colors">
                  Read More →
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Blog;