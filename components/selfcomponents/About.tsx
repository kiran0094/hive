import React from 'react';
import { Code2, Blocks, Zap } from 'lucide-react';

const About = () => {
  return (
    <div id="about" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="font-mono text-4xl font-extrabold text-white sm:text-5xl">
            About the Hackathon
          </h2>
          <p className="mt-4 max-w-2xl mx-auto text-xl text-white/80 font-sans">
            Join us in pushing the boundaries of blockchain technology and Web3 innovation
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {[
              {
                icon: Code2,
                title: 'Build Innovative Solutions',
                description: 'Create groundbreaking applications using cutting-edge blockchain technology and Web3 frameworks.',
              },
              {
                icon: Blocks,
                title: 'Connect with Experts',
                description: 'Network with industry leaders and get mentorship from experienced blockchain developers.',
              },
              {
                icon: Zap,
                title: 'Win Amazing Prizes',
                description: 'Compete for substantial prizes and opportunities to launch your project with industry support.',
              },
            ].map((item) => (
              <div key={item.title} className="pt-6">
                <div className="flow-root rounded-lg px-6 pb-8 relative group">
                  <div className="absolute inset-0 bg-white/5 rounded-lg transform transition-all duration-300 group-hover:scale-105"></div>
                  <div className="absolute inset-0 backdrop-blur-sm bg-black/30 rounded-lg"></div>
                  <div className="relative">
                    <div className="-mt-6">
                      <span className="inline-flex items-center justify-center p-3 bg-white/10 rounded-md shadow-lg group-hover:scale-110 transition-transform duration-300">
                        <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                      </span>
                    </div>
                    <h3 className="mt-8 text-lg font-medium text-white tracking-tight font-mono">{item.title}</h3>
                    <p className="mt-5 text-base text-white/80 font-sans">{item.description}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About