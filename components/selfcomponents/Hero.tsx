"use client"
import React, { useEffect, useRef } from 'react';

const Hero = () => {
  const starsRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const generateStars = () => {
      if (!starsRef.current) return;
      const stars = starsRef.current;
      stars.innerHTML = '';
      
      for (let i = 0; i < 100; i++) {
        const star = document.createElement('div');
        star.className = 'star';
        star.style.left = `${Math.random() * 100}%`;
        star.style.top = `${Math.random() * 100}%`;
        star.style.animationDelay = `${Math.random() * 3}s`;
        stars.appendChild(star);
      }
    };

    generateStars();
  }, []);

  return (
    <div className="relative min-h-screen bg-black overflow-hidden">
      <div ref={starsRef} className="absolute inset-0 z-0" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pt-32">
        <div className="max-w-3xl">
          <h1 className="font-mono text-[130px] leading-none font-black text-white tracking-tighter animate-title">
            HACK<br />
            TO THE<br />
            HIVE
          </h1>

          <div className="mt-12 flex flex-wrap gap-4">
            <a
              href="#register"
              className="font-mono group relative inline-flex items-center px-8 py-3 bg-transparent border border-white text-white text-lg font-bold rounded-lg overflow-hidden transition-all duration-300"
            >
              <span className="relative z-10">REGISTER NOW</span>
              <div className="absolute inset-0 bg-white/10 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left"></div>
            </a>
          </div>
        </div>
      </div>

      <div className="absolute top-0 right-0 w-1/2 h-screen">
        <img
          src="/planet.png"
          alt="Colorful Planet"
          className="object-contain object-right w-full h-full"
          style={{ transform: 'translateX(50%)' }}
        />
      </div>
    </div>
  );
};

export default Hero