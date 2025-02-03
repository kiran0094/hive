import React from 'react';
import SpeakerCard from './SpeakerCard';

const Speakers = () => {
  const speakers = [
    {
      name: 'Dr. Sarah Chen',
      role: 'Blockchain Researcher',
      company: 'Web3 Institute',
      image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&h=400&fit=crop',
      linkedin: 'https://linkedin.com',
      twitter: 'https://twitter.com',
    },
    {
      name: 'Michael Rodriguez',
      role: 'Chief Innovation Officer',
      company: 'DeFi Solutions',
      image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=400&h=400&fit=crop',
      linkedin: 'https://linkedin.com',
    },
  ];

  return (
    <section id="speakers" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-3xl font-extrabold text-white sm:text-4xl">Featured Speakers</h2>
          <p className="mt-4 text-xl text-violet-200">Learn from industry experts</p>
        </div>
        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {speakers.map((speaker) => (
            <SpeakerCard key={speaker.name} {...speaker} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Speakers;