import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { 
  ArrowRight, ShieldCheck, Award, Sparkles, MessageSquare, 
  CalendarClock, Users, Search, HeartHandshake, DollarSign, 
  FileText, HardHat, Key, Star, Quote, ChevronLeft, ChevronRight,
  Smile, Home as HomeIcon, Shield, Clock, Calendar
} from 'lucide-react';
import type { Project } from '../types';
import { BUSINESS_CONFIG } from '../config';

interface HomeProps {
  projects: Project[];
}

const BACKGROUND_IMAGES = [
  "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80",
  "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1920&q=80"
];

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.4 } }
};

interface StatCardProps {
  value: number;
  suffix: string;
  label: string;
  icon: React.ReactNode;
}

const StatCounter: React.FC<StatCardProps> = ({ value, suffix, label, icon }) => {
  const [count, setCount] = useState(0);

  useEffect(() => {
    let start = 0;
    const duration = 1500;
    const increment = value / (duration / 16);
    const counter = setInterval(() => {
      start += increment;
      if (start >= value) {
        setCount(value);
        clearInterval(counter);
      } else {
        setCount(Math.ceil(start));
      }
    }, 16);
    return () => clearInterval(counter);
  }, [value]);

  return (
    <div className="flex-1 flex flex-col items-center justify-center py-4 text-center">
      <div className="mb-2 text-[#C9A227]">
        {icon}
      </div>
      <div className="text-3xl sm:text-4xl lg:text-[44px] font-extrabold text-[#C9A227] tracking-tight mb-1 font-sans">
        {count}{suffix}
      </div>
      <div className="text-[10px] sm:text-xs uppercase tracking-widest text-white/95 font-bold font-sans mt-0.5">
        {label}
      </div>
    </div>
  );
};

const TataTisconLogo: React.FC = () => (
  <svg viewBox="0 0 160 50" className="h-9 w-auto max-w-[90%] object-contain">
    <text x="50%" y="18" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="16" fill="#0F4C81" textAnchor="middle" letterSpacing="1">TATA</text>
    <text x="50%" y="36" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="16" fill="#0F4C81" textAnchor="middle" letterSpacing="1">TISCON</text>
    <rect x="35" y="41" width="90" height="3" fill="#E31E24" />
  </svg>
);

const UltraTechLogo: React.FC = () => (
  <svg viewBox="0 0 160 55" className="h-10 w-auto max-w-[90%] object-contain">
    <rect x="15" y="2" width="130" height="50" rx="6" fill="#FFCC00" />
    <text x="50%" y="22" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="14" fill="#000" textAnchor="middle" letterSpacing="-0.5">UltraTech</text>
    <text x="50%" y="34" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="9" fill="#000" textAnchor="middle" letterSpacing="2.5">CEMENT</text>
    <text x="50%" y="44" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="bold" fontSize="5.5" fill="#000" textAnchor="middle" opacity="0.8">The Engineer's Choice</text>
  </svg>
);

const AsianPaintsLogo: React.FC = () => (
  <svg viewBox="0 0 180 50" className="h-9 w-auto max-w-[90%] object-contain">
    <defs>
      <linearGradient id="apGrad" x1="0%" y1="0%" x2="100%" y2="0%">
        <stop offset="0%" stopColor="#9C27B0" />
        <stop offset="55%" stopColor="#E91E63" />
        <stop offset="100%" stopColor="#FF5722" />
      </linearGradient>
    </defs>
    <g transform="translate(10, 0)">
      <path 
        d="M12 25 C12 18, 18 12, 25 12 C32 12, 37 17, 37 25 C37 32, 31 38, 25 38 C17 38, 17 25, 23 20 C25 18, 30 18, 32 23 C33 26, 31 32, 25 32"
        fill="none"
        stroke="url(#apGrad)"
        strokeWidth="4"
        strokeLinecap="round"
      />
      <text x="44" y="31" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="bold" fontSize="19" fill="#E91E63" letterSpacing="-0.5">asian</text>
      <text x="91" y="31" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="normal" fontSize="19" fill="#FF5722" letterSpacing="-0.5">paints</text>
    </g>
  </svg>
);

const AshirvadLogo: React.FC = () => (
  <svg viewBox="0 0 160 50" className="h-9 w-auto max-w-[90%] object-contain">
    <g transform="translate(15, 0)">
      <rect x="0" y="4" width="130" height="26" rx="13" fill="none" stroke="#ED1C24" strokeWidth="2.5" />
      <rect x="3" y="7" width="124" height="20" rx="10" fill="#ED1C24" />
      <text x="65" y="21" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="12" fill="#fff" textAnchor="middle">ashirvad</text>
      <text x="65" y="43" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="10" fill="#000" textAnchor="middle" letterSpacing="4">PIPES</text>
    </g>
  </svg>
);

const SomanyLogo: React.FC = () => (
  <svg viewBox="0 0 160 50" className="h-9 w-auto max-w-[90%] object-contain">
    <g transform="translate(10, 0)">
      <text x="5" y="28" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="900" fontSize="20" fill="#E31E24" letterSpacing="0.5">SOMANY</text>
      <rect x="102" y="10" width="8" height="8" fill="#0072BC" />
      <rect x="112" y="10" width="3" height="3" fill="#E31E24" />
      <text x="5" y="40" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="bold" fontSize="7" fill="#E31E24" letterSpacing="1.2">TILES | BATHWARE</text>
    </g>
  </svg>
);

const KajariaLogo: React.FC = () => (
  <svg viewBox="0 0 160 50" className="h-9 w-auto max-w-[90%] object-contain">
    <g transform="translate(10, 0)">
      <text x="5" y="30" fontFamily="Georgia, Times New Roman, serif" fontWeight="bold" fontStyle="italic" fontSize="26" fill="#0F4C81" letterSpacing="-0.5">Kajaria</text>
      <text x="7" y="42" fontFamily="system-ui, -apple-system, sans-serif" fontWeight="bold" fontSize="5.5" fill="#7F7F7F" letterSpacing="0.8">INDIA'S NO.1 TILE COMPANY</text>
    </g>
  </svg>
);

export const Home: React.FC<HomeProps> = ({ projects }) => {
  const [bgIndex, setBgIndex] = useState(0);
  const [activeStep, setActiveStep] = useState(1);
  const [activeTestimonialIdx, setActiveTestimonialIdx] = useState(0);

  // Background slideshow logic
  useEffect(() => {
    const interval = setInterval(() => {
      setBgIndex((prev) => (prev + 1) % BACKGROUND_IMAGES.length);
    }, 6000);
    return () => clearInterval(interval);
  }, []);

  const featuredProjects = projects.slice(0, 3); // Get 3 projects for the masonry layout

  const partners = [
    {
      name: "Tata Tiscon",
      component: <TataTisconLogo />,
      type: "TMT Steel Bars"
    },
    {
      name: "UltraTech Cement",
      component: <UltraTechLogo />,
      type: "Premium Cement"
    },
    {
      name: "Asian Paints",
      component: <AsianPaintsLogo />,
      type: "Exterior Paints"
    },
    {
      name: "Ashirvad Pipes",
      component: <AshirvadLogo />,
      type: "CPVC Plumbing"
    },
    {
      name: "Somany Tiles",
      component: <SomanyLogo />,
      type: "Vitrified Tiles"
    },
    {
      name: "Kajaria Tiles",
      component: <KajariaLogo />,
      type: "Premium Ceramics"
    }
  ];

  const features = [
    {
      icon: <Sparkles className="w-5 h-5 text-[#C9A227]" />,
      title: "Premium Materials",
      desc: "Certified, high-strength reinforcement materials for long-lasting structural durability."
    },
    {
      icon: <MessageSquare className="w-5 h-5 text-[#C9A227]" />,
      title: "Complete Transparency",
      desc: "Review site curing logs, material invoices, and permits live with zero hidden clauses."
    },
    {
      icon: <CalendarClock className="w-5 h-5 text-[#C9A227]" />,
      title: "On-Time Delivery",
      desc: "Strict project milestones schedule tracking to deliver keys on or before target dates."
    },
    {
      icon: <Users className="w-5 h-5 text-[#C9A227]" />,
      title: "Skilled Workforce",
      desc: "Experienced builders, engineers, and supervisors executing verified site specifications."
    },
    {
      icon: <Search className="w-5 h-5 text-[#C9A227]" />,
      title: "Attention to Detail",
      desc: "Double-checked measurements to align seamless flush doors, trims, and geometric alignments."
    },
    {
      icon: <HeartHandshake className="w-5 h-5 text-[#C9A227]" />,
      title: "Structural Warranty",
      desc: "Comprehensive warranty coverage on structural frames with regular building checkups."
    }
  ];

  const processSteps = [
    {
      id: 1,
      icon: <Users className="w-5 h-5 text-[#C9A227]" />,
      title: "Consultation",
      subtitle: "Initial Discussion",
      duration: "1-2 Weeks",
      description: "We discuss your layout requests, floor plan requirements, site land elevation, and budget targets to align building roadmap goals.",
      deliverables: ["Requirements summary", "Feasibility review", "Zoning guide check"]
    },
    {
      id: 2,
      icon: <PenTool className="w-5 h-5 text-[#C9A227]" />, // fallback Lucide PenTool
      title: "Planning & Design",
      subtitle: "Concept Blueprints",
      duration: "4-6 Weeks",
      description: "Architectural partners design high-end duplex elevations, custom floor layouts, 3D renderings, and structural drafts based on Vastu.",
      deliverables: ["3D elevation drawings", "Floor plan layouts", "Finishes checklist"]
    },
    {
      id: 3,
      icon: <DollarSign className="w-5 h-5 text-[#C9A227]" />,
      title: "Budget & Estimation",
      subtitle: "Itemized Costing",
      duration: "2-3 Weeks",
      description: "We compile an exact, completely transparent list of structural materials, concrete shuttering fees, and plumbing contract quotes.",
      deliverables: ["Detailed quote sheets", "Material grade options", "Milestone budget sheet"]
    },
    {
      id: 4,
      icon: <FileText className="w-5 h-5 text-[#C9A227]" />,
      title: "Approvals & Doc",
      subtitle: "Zoning & RERA Permits",
      duration: "4-8 Weeks",
      description: "We handle municipal permit submissions, environmental safety clearances, and AP RERA registration documentation on your behalf.",
      deliverables: ["Building permit clearance", "RERA submission verification", "Signed builder agreement"]
    },
    {
      id: 5,
      icon: <HardHat className="w-5 h-5 text-[#C9A227]" />,
      title: "Construction",
      subtitle: "Structural Execution",
      duration: "24-40 Weeks",
      description: "Excavation, foundation concrete pours, steel pillar shutters, brickwork, utility channels, ceiling slabs, and interior plastering.",
      deliverables: ["Pillar reinforcement cage pour", "Utility conceal piping inspection", "Plaster finish checklist"]
    },
    {
      id: 6,
      icon: <ShieldCheck className="w-5 h-5 text-[#C9A227]" />,
      title: "Quality Inspection",
      subtitle: "Strength Audits",
      duration: "2-3 Weeks",
      description: "Conducting concrete curing cube compression tests, plumbing line leakage tests, electrical insulation tests, and finish punch-list sweeps.",
      deliverables: ["Cylinder test reports", "Plumbing pressure test clear", "Detailed finish validation"]
    },
    {
      id: 7,
      icon: <Key className="w-5 h-5 text-[#C9A227]" />,
      title: "Project Handover",
      subtitle: "Keys Handover",
      duration: "1-2 Weeks",
      description: "Handing over property keys, final occupancy certificates, appliance warranty cards, structural logs, and starting active client warranty.",
      deliverables: ["Occupancy certificates", "Keys & digital manuals pack", "Warranty setup documentation"]
    }
  ];

  const testimonials = [
    {
      name: "Mr. Ramesh Kumar",
      location: "Ongole, Andhra Pradesh",
      role: "Homeowner, Modern Duplex Residence",
      text: "Building our home in Ongole with Varma Constructions was an excellent experience. Their transparency is unmatched—we could track concrete supply schedules and curing dates directly from our dashboard. The premium woodwork and finishing are high-class.",
      rating: 5,
      clientImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
      houseImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Mr. Srinivas Rao",
      location: "Guntur, Andhra Pradesh",
      role: "Homeowner, Contemporary Family Home",
      text: "Highly impressed with Varma's structural and soil engineering standards. Building a multi-story residence in Guntur requires proper foundation design. Their project managers handled the permit processing and structural reinforcement checks seamlessly.",
      rating: 5,
      clientImg: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&fit=crop&w=150&h=150&q=80",
      houseImg: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80"
    },
    {
      name: "Mrs. Lakshmi Devi",
      location: "Vijayawada, Andhra Pradesh",
      role: "Homeowner, Premium Villa",
      text: "Varma Constructions completely transformed our vision into a luxury villa at Vijayawada. The design is modern and customized for our family, and they delivered exactly on schedule and within our agreed budget. The customer support is outstanding.",
      rating: 5,
      clientImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
      houseImg: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=600&q=80"
    }
  ];

  const trustCommitments = [
    { title: "Transparent Cost Estimates", desc: "No hidden charges, detailed breakdown of materials, logistics, and labor expenses." },
    { title: "Dedicated Site Supervision", desc: "Qualified onsite engineers supervising column shuttering, brick layering, and utilities placement." },
    { title: "Premium Quality Materials", desc: "Certified steel rebars, Grade-53 OPC cement, and top-tier plumbing and electrical wires." },
    { title: "On-Time Project Delivery", desc: "Rigid scheduling and milestone logs ensure handover on or before contract terms." },
    { title: "Structural Durability", desc: "Concrete foundation depth checks and earthquake-resistant designs built to last generations." },
    { title: "Personalized Customer Support", desc: "Dedicated managers to answer queries, process municipal paperwork, and coordinate design edits." }
  ];

  // Construction Process timeline helpers
  const activeStepData = processSteps.find(s => s.id === activeStep) || processSteps[0];
  const activeTestimonial = testimonials[activeTestimonialIdx];

  return (
    <motion.div 
      variants={pageVariants} 
      initial="initial" 
      animate="animate" 
      exit="exit"
      className="w-full text-left bg-[#F8F8F8] overflow-hidden"
    >
      {/* 1. Full-Screen Hero Section with Slideshow */}
      <section className="relative h-screen min-h-[700px] sm:min-h-[750px] lg:min-h-[820px] overflow-hidden flex flex-col justify-between w-full bg-[#0F172A]">
        {/* Slideshow background layers */}
        {BACKGROUND_IMAGES.map((url, idx) => (
          <div
            key={url}
            style={{ backgroundImage: `url("${url}")` }}
            className={`absolute inset-0 bg-cover bg-center z-0 transition-opacity duration-[1500ms] ease-in-out ${
              idx === bgIndex ? 'opacity-100 animate-kenburns' : 'opacity-0'
            }`}
          />
        ))}

        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/45 z-0 pointer-events-none" />

        {/* Hero content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 flex-1 flex flex-col justify-center text-left pt-24 pb-8">
          <div className="max-w-3xl space-y-6 sm:space-y-8">
            <div className="flex items-center gap-2 text-[#C9A227] animate-fade-up">
              <Shield className="w-4 h-4 text-[#C9A227]" />
              <span className="text-[11px] sm:text-xs font-bold tracking-[0.2em] uppercase">
                Custom Home Construction in Ongole &amp; Andhra Pradesh
              </span>
            </div>

            <h1 className="text-white font-sans font-normal leading-[1.15] tracking-tight text-3xl sm:text-5xl lg:text-6xl animate-fade-up [animation-delay:150ms]">
              Building Dream Homes <br />
              with <span className="text-[#C9A227] font-semibold">Quality, Trust &amp; Precision</span>
            </h1>

            <p className="text-gray-200 text-xs sm:text-sm lg:text-[15px] leading-relaxed max-w-[600px] animate-fade-up [animation-delay:250ms] font-light">
              Varma Constructions specializes in custom home construction, luxury villas, duplex houses, and turnkey residential projects across Ongole and Andhra Pradesh with complete transparency and quality craftsmanship.
            </p>

            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-4 animate-fade-up [animation-delay:350ms] w-full sm:w-auto">
              <Link
                to="/projects"
                className="bg-[#C9A227] hover:bg-[#b08e22] text-[#0F172A] text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-3.5 rounded-lg transition-all duration-300 hover:scale-[1.03] hover:shadow-[0_0_20px_rgba(201,162,39,0.4)] active:scale-95 flex items-center justify-center gap-2 w-full sm:w-auto"
              >
                <HomeIcon className="w-4 h-4" />
                <span>View Projects</span>
              </Link>
              <Link
                to="/contact"
                className="bg-transparent hover:bg-white/10 text-white border border-white/40 hover:border-white text-xs sm:text-sm font-bold uppercase tracking-wider px-8 py-3.5 rounded-lg transition-all duration-300 hover:scale-[1.03] active:scale-95 flex items-center justify-center gap-2 backdrop-blur-sm w-full sm:w-auto"
              >
                <Calendar className="w-4 h-4" />
                <span>Get Free Consultation</span>
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center animate-fade-up [animation-delay:450ms] pt-2">
              <div className="px-5 py-2 rounded-full border border-white/20 text-white text-xs font-medium flex items-center gap-2.5 bg-black/10 backdrop-blur-sm">
                <Shield className="w-4 h-4 text-[#C9A227] shrink-0" />
                <span>Structural Warranty</span>
              </div>
              <div className="px-5 py-2 rounded-full border border-white/20 text-white text-xs font-medium flex items-center gap-2.5 bg-black/10 backdrop-blur-sm">
                <Award className="w-4 h-4 text-[#C9A227] shrink-0" />
                <span>Quality Materials</span>
              </div>
              <div className="px-5 py-2 rounded-full border border-white/20 text-white text-xs font-medium flex items-center gap-2.5 bg-black/10 backdrop-blur-sm">
                <Clock className="w-4 h-4 text-[#C9A227] shrink-0" />
                <span>On-Time Delivery</span>
              </div>
            </div>
          </div>
        </div>

        {/* Stats band at the bottom of the hero */}
        <div className="bg-[#0F172A] w-full border-t border-white/10 py-8 z-10 relative">
          <div className="max-w-6xl mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row justify-between items-stretch gap-6 md:gap-0 md:divide-x md:divide-white/10 w-full">
            <StatCounter value={BUSINESS_CONFIG.stats[0].value} suffix={BUSINESS_CONFIG.stats[0].suffix} label={BUSINESS_CONFIG.stats[0].label} icon={<HomeIcon className="w-6 h-6 text-[#C9A227] mx-auto" />} />
            <StatCounter value={BUSINESS_CONFIG.stats[1].value} suffix={BUSINESS_CONFIG.stats[1].suffix} label={BUSINESS_CONFIG.stats[1].label} icon={<Award className="w-6 h-6 text-[#C9A227] mx-auto" />} />
            <StatCounter value={BUSINESS_CONFIG.stats[2].value} suffix={BUSINESS_CONFIG.stats[2].suffix} label={BUSINESS_CONFIG.stats[2].label} icon={<Smile className="w-6 h-6 text-[#C9A227] mx-auto" />} />
            <StatCounter value={BUSINESS_CONFIG.stats[3].value} suffix={BUSINESS_CONFIG.stats[3].suffix} label={BUSINESS_CONFIG.stats[3].label} icon={
              <svg className="w-6 h-6 text-[#C9A227] mx-auto fill-none stroke-current" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                <path strokeLinecap="round" strokeLinejoin="round" d="M3 22h18M6 22V2M6 5h12M18 5v4M12 5v17" />
              </svg>
            } />
          </div>
        </div>
      </section>

      {/* Main content */}
      <div className="relative z-20 bg-[#F8F8F8] pb-16 flex flex-col gap-0 w-full">

        {/* 2. Introduction Section (matches mockup layout) */}
        <section className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 py-16 sm:py-20 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center w-full">
          {/* Left: Text */}
          <div className="space-y-6">
            <span className="text-[11px] tracking-[0.2em] font-bold text-[#C9A227] uppercase block">Introduction</span>
            <h2 className="text-4xl sm:text-5xl font-extrabold text-[#0F172A] tracking-tight leading-[1.15]">
              Building Homes with<br />
              <span className="text-[#C9A227]">Quality, Trust &amp; Expertise</span>
            </h2>
            <div className="w-10 h-1 bg-[#C9A227]" />
            <p className="text-[#374151] text-sm sm:text-[15px] leading-relaxed font-light max-w-[480px]">
              We specialize in custom residential architecture, designing and executing luxury villas and modern duplexes. Collaborating with top structural engineers, we guarantee precision from core footing pours to cabinet joinery details in Ongole and across Andhra Pradesh.
            </p>
            <div className="flex flex-wrap gap-5 pt-1">
              <div className="flex gap-2.5 items-center">
                <ShieldCheck className="w-5 h-5 text-[#C9A227] shrink-0" />
                <span className="text-xs font-bold text-gray-800 uppercase tracking-wider">AP RERA Registered</span>
              </div>
              <div className="flex gap-2.5 items-center">
                <Award className="w-5 h-5 text-[#C9A227] shrink-0" />
                <span className="text-xs font-bold text-gray-800 uppercase tracking-wider">Structural Warranty Certified</span>
              </div>
            </div>
            <div className="pt-2">
              <Link 
                to="/about"
                className="inline-flex items-center gap-2 bg-[#0F172A] hover:bg-[#1e293b] text-white text-sm font-semibold px-7 py-3.5 rounded-full transition-all duration-300 hover:shadow-lg group"
              >
                <span>Read Our Full Story</span>
                <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
          {/* Right: Two overlapping images (elegant offset layout) */}
          <div className="relative w-full h-[320px] sm:h-[400px] lg:h-[440px]">
            {/* Background image (Exterior Villa) */}
            <div className="absolute top-0 left-0 w-[75%] h-[80%] rounded-2xl overflow-hidden shadow-md">
              <img 
                src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80" 
                alt="Premium residential exterior by Varma Constructions" 
                className="w-full h-full object-cover"
              />
            </div>
            {/* Foreground overlapping image (Interior) */}
            <div className="absolute bottom-0 right-0 w-[60%] h-[70%] rounded-2xl overflow-hidden shadow-xl border-4 border-[#F8F8F8]">
              <img 
                src="https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80" 
                alt="Premium residential interior by Varma Constructions" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </section>

        {/* Remaining sections container */}
        <div className="max-w-6xl mx-auto px-5 sm:px-8 lg:px-12 pb-16 pt-4 flex flex-col gap-28 sm:gap-36 w-full">

        {/* 3. Partners / Material Standard */}
        <section className="space-y-8 py-4 border-y border-gray-200/40">
          <div className="text-center space-y-2">
            <span className="text-[11px] tracking-[0.2em] font-bold text-[#C9A227] uppercase block">Material Standard</span>
            <h3 className="text-2xl font-bold text-[#0F172A] tracking-tight">Trusted Materials &amp; Construction Partners</h3>
            <p className="text-xs text-gray-500 max-w-lg mx-auto">
              We work with industry-leading brands to ensure lasting quality and durability.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4">
            {partners.map((partner, index) => (
              <div
                key={index}
                className="bg-white border border-gray-200 rounded-xl px-4 py-5 flex flex-col items-center justify-center gap-2.5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300 aspect-[3/2]"
              >
                {partner.component}
                <span className="text-[8px] uppercase tracking-wider text-gray-400 font-medium text-center">
                  {partner.type}
                </span>
              </div>
            ))}
          </div>
        </section>        {/* 5. Upgrade Featured Projects Layout: Masonry Grid */}
        <section className="space-y-12">
          <div className="text-center space-y-3">
            <span className="text-[11px] tracking-[0.2em] font-bold text-[#C9A227] uppercase block">— Selected Works —</span>
            <h2 className="text-3xl sm:text-4xl font-normal text-[#0F172A] tracking-tight leading-tight">Featured Residences</h2>
            <div className="flex items-center justify-center gap-1.5 mt-2">
              <div className="w-6 h-[2px] bg-[#C9A227]" />
              <div className="w-1.5 h-1.5 rounded-full bg-[#C9A227]" />
              <div className="w-6 h-[2px] bg-[#C9A227]" />
            </div>
            <p className="text-xs sm:text-sm text-gray-500 font-light mt-2 max-w-md mx-auto">
              Crafted with precision. Built with trust. Delivered with pride.
            </p>
          </div>

          {/* Masonry-style Layout (1 large + 2 small cards) */}
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch">
            {/* 1st card: Large featured card (spans 7 columns on large screens) */}
            {featuredProjects[0] && (
              <Link
                to={`/projects/${featuredProjects[0].id}`}
                className="lg:col-span-7 group bg-white border border-gray-150 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between"
              >
                <div className="aspect-[16/10] overflow-hidden bg-gray-100 relative w-full flex-1">
                  <img 
                    src={featuredProjects[0].imageUrl} 
                    alt={featuredProjects[0].title} 
                    className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-700"
                  />
                  {/* Badge: Featured Project */}
                  <div className="absolute top-4 left-4 bg-[#C9A227] text-[#0F172A] text-[10px] font-extrabold uppercase tracking-wider px-3 py-1.5 rounded-lg flex items-center gap-1 shadow-md z-10">
                    <Star className="w-3.5 h-3.5 fill-[#0F172A] text-[#0F172A]" />
                    <span>Featured Project</span>
                  </div>

                  {/* Dark overlay bar showing metrics */}
                  <div className="absolute bottom-0 left-0 right-0 bg-[#0F172A]/90 border-t border-white/10 px-6 py-4 flex justify-between items-center text-left">
                    <div className="flex items-center gap-2">
                      <div className="text-[#C9A227]">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <rect x="3" y="3" width="7" height="9" rx="1" />
                          <rect x="14" y="3" width="7" height="5" rx="1" />
                          <rect x="14" y="12" width="7" height="9" rx="1" />
                          <rect x="3" y="16" width="7" height="5" rx="1" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-gray-400 font-bold block leading-none mb-0.5">Plot Size</span>
                        <span className="text-xs font-bold text-white leading-tight">{featuredProjects[0].plotSize}</span>
                      </div>
                    </div>

                    <div className="w-[1px] h-8 bg-white/10" />

                    <div className="flex items-center gap-2">
                      <div className="text-[#C9A227]">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2zM4 21a1 1 0 011-1h14a1 1 0 011 1v1a1 1 0 01-1 1H5a1 1 0 01-1-1v-1z" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-gray-400 font-bold block leading-none mb-0.5">Built-up Area</span>
                        <span className="text-xs font-bold text-white leading-tight">{featuredProjects[0].builtUpArea}</span>
                      </div>
                    </div>

                    <div className="w-[1px] h-8 bg-white/10" />

                    <div className="flex items-center gap-2">
                      <div className="text-[#C9A227]">
                        <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                        </svg>
                      </div>
                      <div>
                        <span className="text-[9px] uppercase tracking-wider text-gray-400 font-bold block leading-none mb-0.5">Type</span>
                        <span className="text-xs font-bold text-white leading-tight">{featuredProjects[0].category.replace(/s$/, '')}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="p-6 text-left flex flex-col md:flex-row md:items-end justify-between gap-4">
                  <div className="space-y-1">
                    <span className="text-[10px] tracking-wider uppercase font-extrabold text-[#C9A227] block">
                      {featuredProjects[0].category}
                    </span>
                    <h3 className="text-lg sm:text-xl font-bold text-[#0F172A] group-hover:text-[#C9A227] transition-colors truncate">
                      {featuredProjects[0].title}
                    </h3>
                    <div className="flex items-center gap-1.5 text-xs text-gray-500 mt-1 font-light">
                      <svg className="w-3.5 h-3.5 text-[#C9A227] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                      <span>{featuredProjects[0].location}</span>
                    </div>
                  </div>

                  <div className="bg-[#C9A227] hover:bg-[#b08e22] text-[#0F172A] text-xs font-bold uppercase tracking-wider px-6 py-3 rounded-lg transition-all duration-300 hover:scale-[1.03] active:scale-95 flex items-center justify-center gap-1.5 shadow-sm group-hover:shadow-[0_0_15px_rgba(201,162,39,0.35)] shrink-0">
                    <span>View Project</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </Link>
            )}

            {/* Right Column: 2 smaller supporting cards (spans 5 columns on large screens) */}
            <div className="lg:col-span-5 flex flex-col gap-6 justify-between">
              {featuredProjects.slice(1, 3).map((project) => (
                <Link
                  key={project.id}
                  to={`/projects/${project.id}`}
                  className="group bg-white border border-gray-150 rounded-2xl overflow-hidden shadow-sm hover:shadow-lg transition-all duration-300 flex flex-col sm:flex-row items-stretch h-full"
                >
                  <div className="aspect-[4/3] sm:aspect-square sm:w-2/5 overflow-hidden bg-gray-100 relative shrink-0">
                    <img 
                      src={project.imageUrl} 
                      alt={project.title} 
                      className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-700"
                    />
                    <div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors" />
                  </div>
                  <div className="p-5 flex flex-col justify-between flex-1 text-left">
                    <div>
                      <span className="text-[9px] tracking-wider uppercase font-extrabold text-[#C9A227] block mb-1">
                        {project.category}
                      </span>
                      <h3 className="text-sm sm:text-base font-bold text-[#0F172A] group-hover:text-[#C9A227] transition-colors line-clamp-1">
                        {project.title}
                      </h3>
                      <div className="flex items-center gap-1 text-[10px] text-gray-500 mt-1 font-light">
                        <svg className="w-3.5 h-3.5 text-[#C9A227] shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                          <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <span className="truncate">{project.location}</span>
                      </div>
                    </div>

                    {/* Metrics row */}
                    <div className="border-t border-gray-100 my-3.5 pt-3 flex items-center justify-between gap-3">
                      {/* Plot Size */}
                      <div className="flex items-center gap-1.5">
                        <div className="text-[#C9A227] shrink-0">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <rect x="3" y="3" width="7" height="9" rx="1" />
                            <rect x="14" y="3" width="7" height="5" rx="1" />
                            <rect x="14" y="12" width="7" height="9" rx="1" />
                            <rect x="3" y="16" width="7" height="5" rx="1" />
                          </svg>
                        </div>
                        <div>
                          <span className="text-[8px] uppercase tracking-wider text-gray-400 font-bold block leading-none mb-0.5">Plot Size</span>
                          <span className="text-[10px] font-bold text-gray-800 leading-tight">{project.plotSize}</span>
                        </div>
                      </div>

                      {/* Divider */}
                      <div className="w-[1px] h-6 bg-gray-200" />

                      {/* Built-up Area */}
                      <div className="flex items-center gap-1.5">
                        <div className="text-[#C9A227] shrink-0">
                          <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M4 5a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1V5zM4 13a1 1 0 011-1h14a1 1 0 011 1v2a1 1 0 01-1 1H5a1 1 0 01-1-1v-2zM4 21a1 1 0 011-1h14a1 1 0 011 1v1a1 1 0 01-1 1H5a1 1 0 01-1-1v-1z" />
                          </svg>
                        </div>
                        <div>
                          <span className="text-[8px] uppercase tracking-wider text-gray-400 font-bold block leading-none mb-0.5">Built-up Area</span>
                          <span className="text-[10px] font-bold text-gray-800 leading-tight">{project.builtUpArea}</span>
                        </div>
                      </div>
                    </div>

                    <div className="inline-flex items-center gap-1.5 text-[10px] font-extrabold text-[#0F172A] group-hover:text-[#C9A227] uppercase tracking-widest transition-colors mt-0.5">
                      <span>View Details</span>
                      <ArrowRight className="w-3.5 h-3.5 transform group-hover:translate-x-0.5 transition-transform" />
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>

          <div className="text-center pt-4">
            <Link 
              to="/projects"
              className="inline-flex items-center gap-2 bg-transparent hover:bg-[#C9A227] hover:text-white border border-[#C9A227] text-[#C9A227] text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-lg transition-all duration-300 hover:scale-[1.03] active:scale-95 shadow-sm"
            >
              <span>View All Projects</span>
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* 6. Construction Process Timeline */}
        <section className="space-y-12 bg-white p-8 sm:p-12 rounded-3xl border border-gray-100 shadow-sm">
          <div className="text-center space-y-3">
            <span className="text-[11px] tracking-[0.2em] font-bold text-[#C9A227] uppercase block">Roadmap</span>
            <h2 className="text-3xl font-normal text-[#0F172A] tracking-tight">Our Construction Process</h2>
            <p className="text-xs text-gray-500 max-w-md mx-auto">
              Our 7-stage delivery pipeline guarantees RERA compliance, structural inspections, and on-time project handovers.
            </p>
            <div className="w-12 h-1 bg-[#C9A227] mx-auto" />
          </div>

          {/* Timeline navigation dots */}
          <div className="relative flex flex-col md:flex-row justify-between items-center gap-6 mb-8 pt-4">
            {/* desktop connector line */}
            <div className="absolute top-[20px] left-[5%] right-[5%] h-[2px] bg-gray-100 hidden md:block z-0" />
            {/* desktop active line fill */}
            <div 
              className="absolute top-[20px] left-[5%] h-[2px] bg-[#C9A227] hidden md:block z-0 transition-all duration-500" 
              style={{ width: `${((activeStep - 1) / (processSteps.length - 1)) * 90}%` }}
            />

            {processSteps.map((step) => (
              <button
                key={step.id}
                onClick={() => setActiveStep(step.id)}
                className="relative z-10 flex md:flex-col items-center gap-3.5 md:gap-2 text-left md:text-center w-full md:w-auto bg-[#FAFAFA] md:bg-transparent p-3 md:p-0 rounded-xl border border-gray-100 md:border-none focus:outline-none cursor-pointer"
              >
                <div className={`w-10 h-10 rounded-full border-2 flex items-center justify-center text-xs font-bold transition-all duration-300 ${
                  activeStep === step.id
                    ? 'border-[#C9A227] bg-[#C9A227]/5 text-[#C9A227] scale-110 shadow-md shadow-[#C9A227]/10'
                    : 'border-gray-200 bg-white text-gray-400 hover:border-gray-400'
                }`}>
                  {step.id}
                </div>
                <div>
                  <span className={`block text-xs font-bold transition-colors ${activeStep === step.id ? 'text-[#C9A227]' : 'text-[#0F172A]'}`}>
                    {step.title}
                  </span>
                  <span className="block text-[8px] tracking-wider uppercase text-gray-400 font-semibold md:max-w-[100px] truncate">{step.duration}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Active Step Panel */}
          <div className="bg-[#FAFAFA] border border-gray-100 rounded-2xl p-6 sm:p-8 flex flex-col md:flex-row gap-8 items-start">
            <div className="w-full md:w-3/5 space-y-4 text-left">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-lg bg-[#C9A227]/10 flex items-center justify-center shrink-0">
                  {activeStepData.icon}
                </div>
                <div>
                  <h3 className="text-sm font-bold text-[#0F172A] leading-tight">Phase {activeStepData.id}: {activeStepData.title}</h3>
                  <span className="text-[10px] text-gray-400 tracking-wider font-semibold block">{activeStepData.subtitle}</span>
                </div>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-1">
                {activeStepData.description}
              </p>
            </div>
            <div className="w-full md:w-2/5 bg-white border border-gray-150 rounded-xl p-5 text-left">
              <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase block mb-3">Key Deliverables</span>
              <ul className="space-y-2">
                {activeStepData.deliverables.map((item, index) => (
                  <li key={index} className="flex items-start gap-2.5 text-xs text-gray-700 font-medium">
                    <span className="text-[#C9A227] font-bold mt-0.5">&bull;</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </section>

        {/* 7. Why Choose Us Section */}
        <section className="space-y-12">
          <div className="text-center space-y-3">
            <span className="text-[11px] tracking-[0.2em] font-bold text-[#C9A227] uppercase block">Our Standards</span>
            <h2 className="text-3xl font-normal text-[#0F172A] tracking-tight">Why Choose Varma Constructions</h2>
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
                <h4 className="text-sm sm:text-base font-bold text-[#0F172A] mb-1.5">{feat.title}</h4>
                <p className="text-xs text-gray-500 leading-relaxed font-light">{feat.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 8. Testimonials Section */}
        <section className="space-y-12">
          <div className="text-center space-y-3">
            <span className="text-[11px] tracking-[0.2em] font-bold text-[#C9A227] uppercase block">Testimonials</span>
            <h2 className="text-3xl sm:text-4xl font-normal text-[#0F172A] tracking-tight leading-tight">What Our Clients Say</h2>
            <div className="w-12 h-1 bg-[#C9A227] mx-auto" />
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch bg-white border border-gray-100 rounded-3xl p-6 sm:p-10 relative">
            {/* Left Column: text details */}
            <div className="lg:col-span-7 flex flex-col justify-between space-y-8 text-left">
              <div className="space-y-6">
                <Quote className="w-8 h-8 text-[#C9A227]/25" />
                <p className="text-[#111827] text-sm sm:text-base leading-relaxed font-light italic">
                  "{activeTestimonial.text}"
                </p>
                <div className="flex gap-1">
                  {[...Array(activeTestimonial.rating)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#C9A227] text-[#C9A227]" />
                  ))}
                </div>
              </div>

              {/* Bio and Nav Controls */}
              <div className="flex items-center justify-between border-t border-gray-100 pt-6">
                <div className="flex items-center gap-4">
                  <img 
                    src={activeTestimonial.clientImg} 
                    alt={activeTestimonial.name} 
                    className="w-11 h-11 rounded-full object-cover ring-2 ring-gray-100"
                  />
                  <div>
                    <h4 className="text-sm font-bold text-[#0F172A] mb-0.5">{activeTestimonial.name}</h4>
                    <p className="text-[10px] text-gray-500 font-semibold tracking-wide uppercase">
                      {activeTestimonial.role} &bull; <span className="font-light tracking-normal normal-case">{activeTestimonial.location}</span>
                    </p>
                  </div>
                </div>

                <div className="flex gap-2">
                  <button 
                    onClick={() => setActiveTestimonialIdx((prev) => (prev === 0 ? testimonials.length - 1 : prev - 1))}
                    className="w-8 h-8 rounded-full border border-gray-200 hover:border-gray-400 text-gray-600 hover:text-gray-950 flex items-center justify-center transition-all cursor-pointer focus:outline-none"
                    aria-label="Previous Testimonial"
                  >
                    <ChevronLeft className="w-4 h-4" />
                  </button>
                  <button 
                    onClick={() => setActiveTestimonialIdx((prev) => (prev === testimonials.length - 1 ? 0 : prev + 1))}
                    className="w-8 h-8 rounded-full border border-gray-200 hover:border-gray-400 text-gray-600 hover:text-gray-950 flex items-center justify-center transition-all cursor-pointer focus:outline-none"
                    aria-label="Next Testimonial"
                  >
                    <ChevronRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            </div>

            {/* Right Column: Completed House Image next to review */}
            <div className="lg:col-span-5 relative min-h-[220px] rounded-2xl overflow-hidden shadow-md shrink-0">
              <img 
                src={activeTestimonial.houseImg} 
                alt="Client completed home build" 
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-black/15 flex flex-col justify-end p-4 text-left">
                <span className="text-[9px] font-bold text-white bg-[#C9A227] px-2.5 py-1 rounded-full uppercase tracking-wider w-fit mb-1.5">
                  Completed Work
                </span>
                <span className="text-white text-xs font-bold drop-shadow-sm">{activeTestimonial.role}</span>
              </div>
            </div>
          </div>
        </section>

        {/* 9. Trust & Commitment Section */}
        <section className="space-y-12">
          <div className="text-center space-y-3">
            <span className="text-[11px] tracking-[0.2em] font-bold text-[#C9A227] uppercase block">Our Guarantee</span>
            <h2 className="text-3xl font-normal text-[#0F172A] tracking-tight">Why Homeowners Trust Varma Constructions</h2>
            <div className="w-12 h-1 bg-[#C9A227] mx-auto" />
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 text-left">
            {trustCommitments.map((item, index) => (
              <div 
                key={index}
                className="bg-white border border-gray-150 rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-300"
              >
                <div className="flex items-center gap-2 mb-3">
                  <span className="text-[#C9A227] font-bold text-lg">✓</span>
                  <h4 className="text-sm sm:text-base font-bold text-[#0F172A]">{item.title}</h4>
                </div>
                <p className="text-xs text-gray-500 leading-relaxed font-light">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* 10. Final Contact CTA Card */}
        <section className="bg-[#0F172A] rounded-3xl p-8 sm:p-12 text-center text-white relative overflow-hidden shadow-xl border border-white/5">
          <div className="absolute top-0 right-0 w-64 h-64 bg-[#C9A227]/5 rounded-full blur-3xl" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-gray-800/20 rounded-full blur-3xl" />
          
          <div className="relative z-10 max-w-xl mx-auto space-y-6">
            <span className="text-[10px] tracking-[0.25em] font-bold text-[#C9A227] uppercase block">Start Your Journey</span>
            <h3 className="text-2xl sm:text-3xl lg:text-4xl font-normal tracking-tight">Ready to build your dream residence?</h3>
            <p className="text-xs sm:text-sm text-gray-400 leading-relaxed font-light">
              Schedule a comprehensive design, engineering, and zoning analysis consultation with our Ongole office today.
            </p>
            <div className="pt-2">
              <Link 
                to="/contact"
                className="bg-[#C9A227] hover:bg-[#b08e22] text-[#0F172A] text-xs font-bold uppercase tracking-wider px-8 py-3.5 rounded-full transition-all active:scale-95 shadow-lg inline-block cursor-pointer"
              >
                Get Free Consultation
              </Link>
            </div>
          </div>
        </section>

      </div> {/* end: Remaining sections container */}
      </div> {/* end: outer main container */}
    </motion.div>
  );
};

// Fallback PenTool component if not explicitly imported
const PenTool: React.FC<{ className?: string }> = ({ className }) => (
  <svg 
    className={className} 
    viewBox="0 0 24 24" 
    fill="none" 
    stroke="currentColor" 
    strokeWidth="2" 
    strokeLinecap="round" 
    strokeLinejoin="round"
  >
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4Z" />
  </svg>
);
