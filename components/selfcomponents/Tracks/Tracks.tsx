import React from 'react';

interface Track {
  title: string;
  description: string;
  image: string;
}

const Tracks = () => {
  const tracks: Track[] = [
    {
      title: 'DeFi Innovation',
      description: 'Build the future of decentralized finance',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'Web3 Gaming',
      description: 'Create immersive blockchain gaming experiences',
      image: 'https://images.unsplash.com/photo-1614729939124-032d1e6c9945?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'NFT Platforms',
      description: 'Develop next-gen NFT marketplaces and tools',
      image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&q=80&w=800',
    },
    {
      title: 'DAO Infrastructure',
      description: 'Build tools for decentralized governance',
      image: 'https://images.unsplash.com/photo-1639762681286-36f0d87cf456?auto=format&fit=crop&q=80&w=800',
    },
  ];

  return (
    <section id="tracks" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-mono text-4xl font-extrabold text-white sm:text-5xl">
            Hackathon Tracks
          </h2>
          <p className="mt-4 text-xl text-white/80 font-sans">Choose your challenge and make an impact</p>
        </div>
        
        <div className="grid grid-cols-4 gap-4">
          {tracks.map((track) => (
            <div key={track.title} className="relative w-full aspect-square group overflow-hidden rounded-xl">
              <img
                src={track.image}
                alt={track.title}
                className="absolute inset-0 w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
              />
              
              <div className="absolute inset-0 bg-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                <div className="absolute inset-0 flex flex-col items-center justify-center p-4 text-center">
                  <h3 className="text-lg font-bold text-white mb-2 font-mono">
                    {track.title}
                  </h3>
                  <p className="text-sm text-white/80 font-sans">{track.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Tracks