import React, { useState, useEffect } from 'react';

interface HeroProps {}

const BACKGROUND_IMAGES = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80"
];

export const Hero: React.FC<HeroProps> = () => {
  const [bgIndex, setBgIndex] = useState(0);

  // Background slideshow logic: cross-fades every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const grassUrl = "https://res.cloudinary.com/dy5er7kv5/image/upload/q_auto/f_auto/v1781191264/grass_eam204.png";

  return (
    <section className="relative min-h-[100svh] overflow-hidden flex flex-col w-full bg-gray-150">
      {/* Background Image Slideshow Layers */}
      {BACKGROUND_IMAGES.map((url, idx) => (
        <div
          key={url}
          style={{ backgroundImage: `url("${url}")` }}
          className={`absolute inset-0 bg-cover bg-center transition-opacity duration-1000 z-0 ${
            idx === bgIndex ? 'opacity-100' : 'opacity-0'
          }`}
        />
      ))}

      {/* Dim overlay to improve text readability */}
      <div className="absolute inset-0 bg-white/70 z-0 pointer-events-none" />

      {/* Centered Content Area with flex-1 to occupy remaining height and center text */}
      <div className="flex-1 flex flex-col justify-center items-center text-center px-4 relative z-10 pb-20 sm:pb-28 lg:pb-36 max-w-3xl mx-auto">
        {/* Headline */}
        <h1 className="text-gray-900 font-normal leading-[1.05] tracking-tight text-[38px] min-[400px]:text-[42px] sm:text-5xl lg:text-6xl xl:text-[72px]">
          <span className="block animate-fade-up">Building Homes That</span>
          <span className="block animate-fade-up [animation-delay:100ms] text-[#926f20] font-medium">Last Generations</span>
        </h1>

        {/* Description */}
        <p className="animate-fade-up [animation-delay:220ms] mt-6 text-gray-800 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl font-medium">
          Varma Constructions delivers custom-built residential spaces engineered with certified materials, absolute financial transparency, and dedicated master craftsmanship.
        </p>

        {/* CTA Buttons */}
        <div className="mt-8 animate-fade-up [animation-delay:320ms]">
          <a
            href="#contact"
            onClick={(e) => {
              e.preventDefault();
              document.getElementById('contact')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gray-900 text-white hover:bg-gray-800 text-[13px] sm:text-sm font-semibold px-6 sm:px-8 py-3.5 rounded-full transition-all active:scale-95 shadow-md inline-block cursor-pointer"
          >
            Get Free Consultation
          </a>
        </div>
      </div>

      {/* Bottom Grass Overlay */}
      <img 
        src={grassUrl} 
        alt="" 
        className="pointer-events-none absolute bottom-0 left-0 z-10 w-full select-none object-cover" 
      />
    </section>
  );
};
