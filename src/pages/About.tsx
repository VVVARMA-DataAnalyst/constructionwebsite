import React, { useState, useEffect, useRef } from 'react';
import { motion } from 'framer-motion';
import { Eye, Target, Sparkles, MessageSquare, CalendarClock, Users, Search, HeartHandshake } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config';

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
    <div ref={elementRef} className="bg-white border border-gray-150 rounded-2xl p-6 text-center shadow-sm">
      <div className="text-3xl sm:text-4xl font-light text-gray-900 mb-1 font-sans tracking-tight">
        <span className="text-[#C9A227] font-medium">{count}</span>
        <span className="text-[#C9A227]">{suffix}</span>
      </div>
      <div className="text-[10px] uppercase tracking-widest text-gray-400 font-bold font-sans">
        {label}
      </div>
    </div>
  );
};

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.4 } }
};

export const About: React.FC = () => {
  const milestones = [
    { year: "2011", title: "Founding & Vision", desc: "Varma Constructions was founded in Ongole, Andhra Pradesh with a mission to build architecturally sound and structurally superior residential estates." },
    { year: "2016", title: "Regional Expansion", desc: "Scaled operations to Vijayawada and Guntur, executing premium custom villa builds and gaining a strong reputation for engineering precision." },
    { year: "2021", title: "Eco Integration", desc: "Incorporated advanced eco-friendly foundation practices and sustainable materials as a standard for all new residential structures across AP." },
    { year: "2026", title: "Digital Quality Tracker", desc: "Launched a client-focused portal for homeowners to track quality inspection logs, curing schedules, and construction progress in real time." }
  ];

  const features = [
    {
      icon: <Sparkles className="w-5 h-5 text-[#C9A227]" />,
      title: "Premium Quality Materials",
      desc: "We build with certified high-strength materials — Tata Tiscon steel, UltraTech cement, and Grade-A structural inputs for lasting durability."
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-[#C9A227]" />,
      title: "Transparent Communication",
      desc: "Track timelines, check building permits, and review quality inspection reports with zero hidden terms or surprise charges."
    },
    {
      icon: <CalendarClock className="w-5 h-5 text-[#C9A227]" />,
      title: "On-Time Delivery",
      desc: "Our project managers execute rigid critical-path scheduling, ensuring structural milestones are delivered on or before contract terms."
    },
    {
      icon: <Users className="w-5 h-5 text-[#C9A227]" />,
      title: "Skilled Workforce",
      desc: "Every carpenter, welder, brickmason, and field supervisor on our sites is a fully licensed professional with a proven safety record."
    },
    {
      icon: <Search className="w-5 h-5 text-[#C9A227]" />,
      title: "Attention to Detail",
      desc: "From exact tile layout planning to flush doors and seamless geometric trims, we measure twice to execute flawless architectural lines."
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#C9A227]" />,
      title: "Structural Warranty",
      desc: "We stand behind our builds with a comprehensive structural warranty and regular post-handover checkups for complete peace of mind."
    }
  ];

  return (
    <motion.div 
      variants={pageVariants} 
      initial="initial" 
      animate="animate" 
      exit="exit"
      className="w-full text-left bg-[#f9f9fb] pt-20"
    >
      {/* Page Header banner */}
      <section className="bg-gray-900 py-16 sm:py-24 text-center text-white relative z-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-15" />
        <div className="relative z-10 max-w-4xl mx-auto px-5">
          <span className="text-[11px] tracking-[0.25em] font-bold text-[#b38b30] uppercase block mb-3">About Varma Constructions</span>
          <h1 className="text-3xl sm:text-5xl font-normal leading-tight tracking-tight">Our Story & Core Values</h1>
          <p className="mt-4 text-xs sm:text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
            Discover our dedication to engineering custom modern residential estates that stand the test of time.
          </p>
        </div>
      </section>

      {/* Main Content container */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 space-y-24">
        
        {/* Story Section */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] tracking-[0.2em] font-bold text-[#C9A227] uppercase block">History</span>
            <h2 className="text-2xl sm:text-3xl font-light text-gray-900 leading-tight">
              Engineering Custom Homes in Andhra Pradesh Since 2011
            </h2>
            <div className="w-12 h-1 bg-[#C9A227]" />
            <p className="text-gray-600 text-sm leading-relaxed">
              Varma Constructions was founded in Ongole, Andhra Pradesh with a strict commitment: to design and build custom residential architectures that merge high design standards with structural durability.
            </p>
            <p className="text-gray-600 text-sm leading-relaxed">
              We manage all stages of construction on behalf of our clients — from land geological testing and AP RERA permitting approvals to concrete pours, steel structural framing, and premium interior finishings. Every Varma project represents permanent craftsmanship.
            </p>
          </div>
          <div className="lg:col-span-5 relative pl-4 border-l border-gray-100 space-y-8">
            {milestones.map((item, index) => (
              <div key={index} className="relative pl-6">
                <div className="absolute left-0 top-1.5 -translate-x-[25px] w-[10px] h-[10px] rounded-full bg-white border-2 border-[#C9A227]" />
                <div className="inline-block text-[10px] font-bold px-2 py-0.5 bg-[#C9A227]/10 text-[#C9A227] rounded mb-1">
                  {item.year}
                </div>
                <h4 className="text-sm font-bold text-gray-900">{item.title}</h4>
                <p className="text-xs text-gray-500 mt-0.5 leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Vision & Mission Cards */}
        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm flex gap-4 items-start">
            <div className="w-10 h-10 rounded-lg bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] shrink-0">
              <Eye className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-bold text-gray-900">Our Vision</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                To redefine Andhra Pradesh residential building standards, pioneering modern villas and duplex structures engineered to withstand local climate changes and generations of wear.
              </p>
            </div>
          </div>
          <div className="bg-white border border-gray-100 rounded-2xl p-8 shadow-sm flex gap-4 items-start">
            <div className="w-10 h-10 rounded-lg bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] shrink-0">
              <Target className="w-5 h-5" />
            </div>
            <div className="space-y-2">
              <h3 className="text-base font-bold text-gray-900">Our Mission</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                To build with complete budget transparency, apply certified high-performance construction materials, coordinate detailed craftsmanship, and guarantee structural warranty.
              </p>
            </div>
          </div>
        </section>

        {/* Counters statistics block */}
        <section className="grid grid-cols-1 sm:grid-cols-4 gap-6 bg-gray-50/50 p-8 rounded-3xl border border-gray-100">
          <StatCounter value={BUSINESS_CONFIG.stats[0].value} suffix={BUSINESS_CONFIG.stats[0].suffix} label={BUSINESS_CONFIG.stats[0].label} />
          <StatCounter value={BUSINESS_CONFIG.stats[1].value} suffix={BUSINESS_CONFIG.stats[1].suffix} label={BUSINESS_CONFIG.stats[1].label} />
          <StatCounter value={BUSINESS_CONFIG.stats[2].value} suffix={BUSINESS_CONFIG.stats[2].suffix} label={BUSINESS_CONFIG.stats[2].label} />
          <StatCounter value={BUSINESS_CONFIG.stats[3].value} suffix={BUSINESS_CONFIG.stats[3].suffix} label={BUSINESS_CONFIG.stats[3].label} />
        </section>

        {/* Why Choose Us Features Grid */}
        <section className="space-y-12">
          <div className="text-center space-y-3">
            <span className="text-[11px] tracking-[0.2em] font-bold text-[#C9A227] uppercase block">Our Standards</span>
            <h2 className="text-3xl font-normal text-gray-900 tracking-tight">Why Choose Varma Constructions</h2>
            <div className="w-12 h-1 bg-[#C9A227] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {features.map((feat, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-9 h-9 rounded-lg bg-[#C9A227]/10 flex items-center justify-center mb-4 text-[#C9A227]">
                  {feat.icon}
                </div>
                <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-1.5">{feat.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </section>

      </div>
    </motion.div>
  );
};
