import React, { useEffect, useState, useRef } from 'react';
import { Award, ShieldCheck } from 'lucide-react';

interface StatCounterProps {
  value: number;
  suffix: string;
  label: string;
}

const StatCounter: React.FC<StatCounterProps> = ({ value, suffix, label }) => {
  const [count, setCount] = useState(0);
  const elementRef = useRef<HTMLDivElement>(null);
  const [hasStarted, setHasStarted] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          setHasStarted(true);
        }
      },
      { threshold: 0.1 }
    );

    if (elementRef.current) {
      observer.observe(elementRef.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!hasStarted) return;
    let start = 0;
    const duration = 2000;
    const increment = value / (duration / 16);
    
    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(counter);
  }, [hasStarted, value]);

  return (
    <div ref={elementRef} className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 text-center shadow-sm hover:shadow-lg transition-all duration-300 transform hover:-translate-y-1">
      <div className="text-4xl sm:text-5xl font-light text-gray-900 mb-2 font-sans tracking-tight">
        <span className="text-[#b38b30] font-medium">{count}</span>
        <span className="text-[#b38b30]">{suffix}</span>
      </div>
      <div className="text-xs uppercase tracking-widest text-gray-400 font-bold font-sans">
        {label}
      </div>
    </div>
  );
};

export const AboutUs: React.FC = () => {
  const milestones = [
    { year: "2011", title: "Founding & Vision", desc: "Varma Constructions was founded in Santa Monica with a mission to build architecturally sound and structurally superior residential estates." },
    { year: "2016", title: "Luxury Expansion", desc: "Scaled our operations to Bel-Air and Malibu, executing ultra-premium custom villa builds and gaining a reputation for engineering precision." },
    { year: "2021", title: "Green Integration", desc: "Incorporated advanced geothermal climate control systems and sustainable materials as a standard for all our new residential structures." },
    { year: "2026", title: "Digital Quality Tracker", desc: "Launched client-focused portal tracking, enabling homeowners to review quality tests and construction progress live." }
  ];

  return (
    <section id="about" className="max-w-6xl mx-auto px-5 sm:px-8 py-16 scroll-mt-20">
      
      {/* Section Header */}
      <div className="max-w-2xl mx-auto text-center mb-16">
        <span className="text-[11px] tracking-[0.2em] font-bold text-[#926f20] uppercase block mb-2">Our Story</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-900 tracking-tight leading-tight">
          Crafting Homes That Endure
        </h2>
        <div className="w-12 h-1 bg-[#b38b30] mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
        
        {/* Story Text (Left) */}
        <div className="lg:col-span-6 space-y-6 text-left">
          <h3 className="text-2xl sm:text-3xl font-light text-gray-900 leading-tight">
            Engineering Precision. <br/>
            <span className="text-[#926f20] font-medium">Architectural Distinction.</span>
          </h3>
          <p className="text-gray-600 text-sm leading-relaxed">
            At Varma Constructions, we believe a home is a permanent legacy. For over 15 years, we have collaborated with top-tier structural engineers and visionary designers to build houses that combine design excellence with structural durability.
          </p>
          <p className="text-gray-600 text-sm leading-relaxed">
            Our approach is built on meticulous transparency, premium-grade materials, and unmatched craftsmanship. From solid foundations built on deep concrete pilings to state-of-the-art automation and custom finishes, we craft spaces tailored to stand the test of time.
          </p>

          {/* Key pillars */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-4">
            <div className="flex gap-3 items-start">
              <div className="w-10 h-10 rounded-lg bg-[#926f20]/10 flex items-center justify-center text-[#926f20] shrink-0">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">Custom Quality</h4>
                <p className="text-xs text-gray-500 mt-0.5">Strict quality controls and premium material specs.</p>
              </div>
            </div>
            <div className="flex gap-3 items-start">
              <div className="w-10 h-10 rounded-lg bg-[#926f20]/10 flex items-center justify-center text-[#926f20] shrink-0">
                <ShieldCheck className="w-5 h-5" />
              </div>
              <div>
                <h4 className="text-sm font-bold text-gray-900">Licensed & Insured</h4>
                <p className="text-xs text-gray-500 mt-0.5">Fully bonded, licensed and backed by home structural warranty.</p>
              </div>
            </div>
          </div>
        </div>

        {/* Milestone Timeline (Right) */}
        <div className="lg:col-span-6 text-left relative pl-4 border-l border-gray-100 space-y-8">
          {milestones.map((item, index) => (
            <div key={index} className="relative group pl-6">
              {/* Year Tag Indicator */}
              <div className="absolute left-0 top-1.5 -translate-x-[25px] w-[10px] h-[10px] rounded-full bg-white border-2 border-[#b38b30] group-hover:bg-[#b38b30] transition-colors z-10" />
              
              <div className="inline-block text-[11px] font-bold px-2 py-0.5 bg-[#926f20]/10 text-[#926f20] rounded-md mb-1.5">
                {item.year}
              </div>
              <h4 className="text-sm font-bold text-gray-900 group-hover:text-[#b38b30] transition-colors">
                {item.title}
              </h4>
              <p className="text-xs text-gray-500 mt-1 leading-relaxed">
                {item.desc}
              </p>
            </div>
          ))}
        </div>

      </div>

      {/* Animated Counter Section */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-6 mt-16">
        <StatCounter value={150} suffix="+" label="Homes Completed" />
        <StatCounter value={15} suffix="+" label="Years of Experience" />
        <StatCounter value={200} suffix="+" label="Happy Clients" />
      </div>

    </section>
  );
};
