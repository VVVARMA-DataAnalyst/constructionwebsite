import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { ArrowRight, ShieldCheck, Award, Sparkles, MessageSquare, CalendarClock, Users, Search, HeartHandshake } from 'lucide-react';
import type { Project } from '../types';
import { Testimonials } from '../components/Testimonials';
import { BeforeAfter } from '../components/BeforeAfter';

interface HomeProps {
  projects: Project[];
}

const BACKGROUND_IMAGES = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1920&q=80"
];

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.4 } }
};

export const Home: React.FC<HomeProps> = ({ projects }) => {
  const [bgIndex, setBgIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, []);

  const featuredProjects = projects.slice(0, 3);
  const grassUrl = "https://res.cloudinary.com/dy5er7kv5/image/upload/q_auto/f_auto/v1781191264/grass_eam204.png";

  const features = [
    {
      icon: <Sparkles className="w-5 h-5 text-[#926f20]" />,
      title: "Premium Quality Materials",
      desc: "We build exclusively with certified luxury materials, from structural steel cores to Grade-A oak wood panels and Italian Calacatta marble."
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-[#926f20]" />,
      title: "Transparent Communication",
      desc: "Track timelines, check building permits, and review quality inspection reports directly through our owner dashboard with zero hidden terms."
    },
    {
      icon: <CalendarClock className="w-5 h-5 text-[#926f20]" />,
      title: "On-Time Delivery",
      desc: "Our project managers execute rigid critical-path scheduling, ensuring structural milestones are delivered on or before contract terms."
    },
    {
      icon: <Users className="w-5 h-5 text-[#926f20]" />,
      title: "Skilled Workforce",
      desc: "Every carpenter, welder, brickmason, and field supervisor on our sites is a fully licensed professional with a proven safety record."
    },
    {
      icon: <Search className="w-5 h-5 text-[#926f20]" />,
      title: "Attention to Detail",
      desc: "From exact tile layout planning to flush doors and seamless geometric trims, we measure twice to execute flawless architectural lines."
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#926f20]" />,
      title: "Customer Satisfaction",
      desc: "We stand behind our builds with an extensive warranty on all elements, providing regular checkups long after structural handover."
    }
  ];

  return (
    <motion.div 
      variants={pageVariants} 
      initial="initial" 
      animate="animate" 
      exit="exit"
      className="w-full text-left bg-[#f9f9fb] overflow-hidden"
    >
      {/* Premium Hero Section */}
      <section className="relative min-h-[90svh] overflow-hidden flex flex-col justify-center items-center text-center w-full bg-gray-150">
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

        {/* Centered Content Area */}
        <div className="relative z-10 px-4 max-w-3xl mx-auto pt-16">
          <h1 className="text-gray-900 font-normal leading-[1.05] tracking-tight text-[38px] min-[400px]:text-[42px] sm:text-5xl lg:text-6xl xl:text-[72px]">
            <span className="block">Building Homes That</span>
            <span className="block text-[#926f20] font-medium">Last Generations</span>
          </h1>

          <p className="mt-6 text-gray-800 text-sm sm:text-base lg:text-lg leading-relaxed max-w-xl mx-auto font-medium">
            Varma Constructions delivers custom-built residential spaces engineered with certified materials, absolute financial transparency, and dedicated master craftsmanship.
          </p>

          <div className="mt-8">
            <Link
              to="/contact"
              className="bg-gray-900 text-white hover:bg-gray-800 text-[13px] sm:text-sm font-semibold px-6 sm:px-8 py-3.5 rounded-full transition-all active:scale-95 shadow-md inline-block cursor-pointer"
            >
              Get Free Consultation
            </Link>
          </div>
        </div>

        {/* Bottom Grass Overlay */}
        <img 
          src={grassUrl} 
          alt="" 
          className="pointer-events-none absolute bottom-0 left-0 z-10 w-full select-none object-cover" 
        />
      </section>

      {/* Main Container */}
      <div className="relative z-20 bg-[#f9f9fb] pt-12 pb-12 flex flex-col gap-24 sm:gap-32 max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Company Introduction Brief */}
        <section className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          <div className="lg:col-span-7 space-y-6">
            <span className="text-[11px] tracking-[0.2em] font-bold text-[#926f20] uppercase block">Introduction</span>
            <h2 className="text-3xl sm:text-4xl font-normal text-gray-900 tracking-tight leading-tight">
              Designing and Engineering Legacies
            </h2>
            <div className="w-12 h-1 bg-[#b38b30]" />
            <p className="text-gray-600 text-sm leading-relaxed">
              We specialize in custom residential architecture, designing and executing luxury villas and modern duplexes. Collaborating with top structural engineers, we guarantee precision from core footing pours to cabinet joinery details.
            </p>
            <div className="flex gap-4 pt-2">
              <div className="flex gap-2.5 items-center">
                <ShieldCheck className="w-5 h-5 text-[#926f20]" />
                <span className="text-xs font-bold text-gray-800 uppercase">Licensed CA Builder</span>
              </div>
              <div className="flex gap-2.5 items-center">
                <Award className="w-5 h-5 text-[#926f20]" />
                <span className="text-xs font-bold text-gray-800 uppercase">10-Yr Structural Warranty</span>
              </div>
            </div>
            <div className="pt-4">
              <Link 
                to="/about"
                className="inline-flex items-center gap-2 text-sm font-semibold text-[#926f20] hover:text-[#b38b30] transition-colors"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
          </div>
          <div className="lg:col-span-5 relative aspect-square rounded-2xl overflow-hidden shadow-sm">
            <img 
              src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=600&q=80" 
              alt="Varma Constructions design detail" 
              className="w-full h-full object-cover"
            />
          </div>
        </section>

        {/* Why Choose Us Features Grid */}
        <section className="space-y-12 bg-gray-50/50 p-8 sm:p-12 rounded-3xl border border-gray-150/50">
          <div className="text-center space-y-3">
            <span className="text-[11px] tracking-[0.2em] font-bold text-[#926f20] uppercase block">Our Standards</span>
            <h2 className="text-3xl font-normal text-gray-900 tracking-tight">Why Choose Varma Constructions</h2>
            <div className="w-12 h-1 bg-[#b38b30] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {features.map((feat, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:shadow-md transition-shadow"
              >
                <div className="w-9 h-9 rounded-lg bg-[#926f20]/10 flex items-center justify-center mb-4 text-[#926f20]">
                  {feat.icon}
                </div>
                <h4 className="text-sm sm:text-base font-bold text-gray-900 mb-1.5">{feat.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed">{feat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Featured Projects Preview Grid */}
        <section className="space-y-12">
          <div className="text-center space-y-3">
            <span className="text-[11px] tracking-[0.2em] font-bold text-[#926f20] uppercase block">Selected Works</span>
            <h2 className="text-3xl sm:text-4xl font-normal text-gray-900 tracking-tight leading-tight">Featured Residences</h2>
            <div className="w-12 h-1 bg-[#b38b30] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {featuredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1"
              >
                <div className="aspect-[4/3] overflow-hidden bg-gray-100 relative">
                  <img 
                    src={project.imageUrl} 
                    alt={project.title} 
                    className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity" />
                </div>
                <div className="p-5">
                  <span className="text-[10px] tracking-wider uppercase font-bold text-[#926f20] block mb-1">
                    {project.category}
                  </span>
                  <h3 className="text-base font-bold text-gray-900 group-hover:text-[#b38b30] transition-colors truncate">
                    {project.title}
                  </h3>
                  <p className="text-xs text-gray-500 mt-1 truncate">{project.location}</p>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center pt-4">
            <Link 
              to="/projects"
              className="inline-flex items-center gap-2 bg-gray-900 text-white hover:bg-gray-800 text-xs font-semibold px-6 py-3 rounded-full transition-all active:scale-95 shadow-sm"
            >
              <span>Explore All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* Swipe Before-and-After Remodeling Slider Preview */}
        <section className="space-y-12">
          <div className="text-center space-y-3">
            <span className="text-[11px] tracking-[0.2em] font-bold text-[#926f20] uppercase block">Visual Showcase</span>
            <h2 className="text-3xl font-normal text-gray-900 tracking-tight">Renovation Transformations</h2>
            <div className="w-12 h-1 bg-[#b38b30] mx-auto" />
          </div>
          <BeforeAfter />
        </section>

        {/* Testimonials Slider Preview */}
        <Testimonials />

        {/* Strong Final CTA Card Section */}
        <section className="bg-gray-900 rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-xl border border-white/5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#b38b30]/10 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-800/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-xl mx-auto space-y-6">
            <span className="text-[10px] tracking-[0.25em] font-bold text-[#b38b30] uppercase block">Start Your Journey</span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight">Ready to build your dream residence?</h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
              Schedule a comprehensive design, engineering, and zoning analysis consultation with our Santa Monica office today.
            </p>
            <div className="pt-2">
              <Link 
                to="/contact"
                className="bg-[#b38b30] hover:bg-[#926f20] text-white text-xs font-semibold px-8 py-3.5 rounded-full transition-all active:scale-95 shadow-lg inline-block"
              >
                Inquire Consultation
              </Link>
            </div>
          </div>
        </section>

      </div>
    </motion.div>
  );
};
