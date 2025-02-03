import React from 'react';

const Prizes = () => {
  const prizes = [
    {
      title: 'Grand Prize',
      amount: '$1,500',
      image: 'https://images.unsplash.com/photo-1614728894747-a83421e2b9c9?auto=format&fit=crop&w=800',
      description: 'Plus exclusive mentorship opportunities',
    },
    {
      title: 'DeFi Track',
      amount: '$250',
      image: 'https://images.unsplash.com/photo-1639762681485-074b7f938ba0?auto=format&fit=crop&w=800',
      description: 'Development Tools Package',
    },
    {
      title: 'Gaming Track',
      amount: '$200',
      image: 'https://images.unsplash.com/photo-1614729939124-032d1e6c9945?auto=format&fit=crop&w=800',
      description: 'Gaming Platform Credits',
    },
    {
      title: 'NFT Track',
      amount: '$200',
      image: 'https://images.unsplash.com/photo-1639762681057-408e52192e55?auto=format&fit=crop&w=800',
      description: 'NFT Marketplace Credits',
    },
    {
      title: 'DAO Track',
      amount: '$150',
      image: 'https://images.unsplash.com/photo-1639762681286-36f0d87cf456?auto=format&fit=crop&w=800',
      description: 'Governance Token Package',
    },
  ];

  return (
    <section id="prizes" className="py-24 bg-black">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="font-mono text-4xl font-extrabold text-white sm:text-5xl">
            Prizes & Rewards
          </h2>
          <p className="mt-4 text-xl text-white/80 font-sans">
            Compete for amazing prizes and opportunities
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">
          {prizes.map((prize, index) => (
            <div key={prize.title} 
                 className={`relative rounded-xl overflow-hidden shine-border ${
                   index === 0 ? 'lg:col-span-5 aspect-[3/1] mb-6' : 'aspect-square'
                 }`}>
              <img
                src={prize.image}
                alt={prize.title}
                className="absolute inset-0 w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-transparent">
                <div className="absolute bottom-0 left-0 right-0 p-4 text-center">
                  <h3 className="text-xl font-bold text-white mb-2 font-mono">
                    {prize.title}
                  </h3>
                  <div className="text-2xl font-bold text-white mb-1 font-mono">{prize.amount}</div>
                  <p className="text-sm text-white/80 font-sans">{prize.description}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Prizes