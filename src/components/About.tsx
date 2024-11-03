import React from 'react';

const About = () => {
  return (
    <section id="about" className="py-20 bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <div className="relative grid grid-cols-8 grid-rows-7 gap-4 h-[600px]">
            {/* Main photo */}
            <div className="col-span-5 row-span-4 row-start-1 col-start-1 relative rounded-lg overflow-hidden rainbow-border">
              <img
                src="/images/about/ifty.jpg"
                alt="Iftakher Rahman Portrait"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Second photo */}
            <div className="col-span-4 row-span-4 row-start-2 col-start-5 relative rounded-lg overflow-hidden rainbow-border z-10">
              <img
                src="/images/about/ifty1.jpg"
                alt="Iftakher Rahman Creative Work"
                className="w-full h-full object-cover"
              />
            </div>
            
            {/* Third photo */}
            <div className="col-span-4 row-span-3 row-start-5 col-start-2 relative rounded-lg overflow-hidden rainbow-border">
              <img
                src="/images/about/ifty2.jpg"
                alt="Iftakher Rahman Community Work"
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <div>
            <h2 className="text-3xl font-bold mb-6 rainbow-text">About Me</h2>
            <div className="space-y-4 text-gray-300">
              <p>
                Hello! I'm Iftakher Rahman, but you can call me Ifty. As a proud member of the LGBTQ+ community, 
                I've learned that authenticity is our greatest strength. My journey of self-discovery and acceptance 
                has shaped not only my personal life but also my creative vision and professional path.
              </p>
              <p>
                My work is deeply influenced by my experiences as a gay man, celebrating the beauty of love in all 
                its forms. I believe in creating spaces where everyone feels seen, heard, and valued, regardless of 
                who they love or how they identify.
              </p>
              <p>
                Through my art and advocacy, I aim to challenge stereotypes, promote understanding, and create 
                meaningful connections within and beyond the LGBTQ+ community. Every project I undertake is infused 
                with the vibrant spirit of pride and the unwavering commitment to authenticity.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;