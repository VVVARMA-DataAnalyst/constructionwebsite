import React from 'react';
import { useParams, Link, Navigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin, Minimize2, Calendar, HardHat, ArrowLeft, ShieldCheck, CheckSquare } from 'lucide-react';
import type { Project } from '../types';

interface ProjectDetailProps {
  projects: Project[];
}

const pageVariants = {
  initial: { opacity: 0, scale: 0.98 },
  animate: { opacity: 1, scale: 1, transition: { duration: 0.5 } },
  exit: { opacity: 0, scale: 0.98, transition: { duration: 0.3 } }
};

export const ProjectDetail: React.FC<ProjectDetailProps> = ({ projects }) => {
  const { projectId } = useParams<{ projectId: string }>();

  // Find project by ID
  const project = projects.find((p) => p.id.toString() === projectId);

  if (!project) {
    return <Navigate to="/projects" replace />;
  }

  // Fallback defaults for optional properties
  const builtUp = project.builtUpArea || project.plotSize || "N/A";
  const featuresList = project.features || [
    "Vastu-compliant architectural planning",
    "Independent underground water sump",
    "Concealed copper wiring with safety systems",
    "Spacious balconies with glass railings"
  ];
  const highlightsList = project.highlights || [
    "Reinforced earthquake-resistant footings",
    "Premium cement block masonry",
    "Rigid water-proofing treatment checks"
  ];
  const galleryList = project.gallery || [project.imageUrl];

  return (
    <motion.div 
      variants={pageVariants} 
      initial="initial" 
      animate="animate" 
      exit="exit"
      className="w-full text-left bg-[#FAFAFA] pt-20"
    >
      {/* Project Banner Hero */}
      <section className="relative h-[55vh] min-h-[350px] w-full overflow-hidden shrink-0 bg-[#0F172A]">
        <img
          src={project.imageUrl}
          alt={project.title}
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/35 to-transparent" />
        
        {/* Title overlay */}
        <div className="absolute bottom-10 left-6 sm:left-12 right-6 text-white max-w-4xl mx-auto">
          <Link
            to="/projects"
            className="inline-flex items-center gap-1.5 text-xs text-gray-300 hover:text-[#C9A227] mb-4 bg-white/10 backdrop-blur-sm px-4 py-2.5 rounded-full border border-white/10 transition-all active:scale-95 cursor-pointer font-bold uppercase tracking-wider"
          >
            <ArrowLeft className="w-3.5 h-3.5" />
            <span>Back to Projects</span>
          </Link>
          <span className="text-xs sm:text-sm tracking-widest uppercase font-bold text-[#C9A227] block mb-1">
            {project.category}
          </span>
          <h1 className="text-2xl sm:text-4xl lg:text-5xl font-sans font-normal leading-tight tracking-tight">
            {project.title}
          </h1>
        </div>
      </section>

      {/* Details Container */}
      <div className="max-w-4xl mx-auto px-5 sm:px-8 py-16 space-y-12">
        
        {/* Project Overview */}
        <div className="space-y-4 text-left">
          <span className="text-[11px] tracking-[0.2em] font-bold text-[#C9A227] uppercase block">Project Overview</span>
          <p className="text-base sm:text-lg text-gray-700 leading-relaxed font-light">
            {project.description}
          </p>
        </div>

        {/* Dynamic Grid Specifications */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 border-y border-gray-150 py-8 text-xs text-left">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] shrink-0">
              <MapPin className="w-5 h-5" />
            </div>
            <div>
              <span className="text-gray-400 block font-semibold tracking-wider text-[9px] uppercase">LOCATION</span>
              <span className="text-sm font-bold text-gray-800">{project.location}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] shrink-0">
              <Minimize2 className="w-5 h-5" />
            </div>
            <div>
              <span className="text-gray-400 block font-semibold tracking-wider text-[9px] uppercase">PLOT AREA</span>
              <span className="text-sm font-bold text-gray-800">{project.plotSize}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] shrink-0">
              <Minimize2 className="w-5 h-5 rotate-90" />
            </div>
            <div>
              <span className="text-gray-400 block font-semibold tracking-wider text-[9px] uppercase">BUILT-UP AREA</span>
              <span className="text-sm font-bold text-gray-800">{builtUp}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] shrink-0">
              <HardHat className="w-5 h-5" />
            </div>
            <div>
              <span className="text-gray-400 block font-semibold tracking-wider text-[9px] uppercase">PROJECT TYPE</span>
              <span className="text-sm font-bold text-gray-800">{project.category}</span>
            </div>
          </div>
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-lg bg-[#C9A227]/10 flex items-center justify-center text-[#C9A227] shrink-0">
              <Calendar className="w-5 h-5" />
            </div>
            <div>
              <span className="text-gray-400 block font-semibold tracking-wider text-[9px] uppercase">CONSTRUCTION PERIOD</span>
              <span className="text-sm font-bold text-gray-800">{project.constructionPeriod}</span>
            </div>
          </div>
        </div>

        {/* 1. Materials Used */}
        <div className="space-y-4 text-left">
          <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
            Featured Construction Materials
          </h4>
          <div className="flex flex-wrap gap-2.5">
            {project.materials.map((material, mIdx) => (
              <span
                key={mIdx}
                className="bg-white text-xs font-semibold text-gray-700 px-4 py-2.5 rounded-xl border border-gray-200/80 shadow-sm"
              >
                {material}
              </span>
            ))}
          </div>
        </div>

        {/* 2. Project Features Checklist */}
        <div className="space-y-4 text-left">
          <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
            Custom Home Features
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {featuresList.map((feature, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-700 font-medium">
                <CheckSquare className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                <span>{feature}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 3. Construction Highlights Checklist */}
        <div className="space-y-4 text-left">
          <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest">
            Construction & Engineering Highlights
          </h4>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-3">
            {highlightsList.map((highlight, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-xs text-gray-700 font-medium">
                <ShieldCheck className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
                <span>{highlight}</span>
              </li>
            ))}
          </ul>
        </div>

        {/* 4. Project Gallery Grid */}
        <div className="space-y-4 text-left">
          <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-widest mb-2">
            Completed Construction Gallery
          </h4>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {galleryList.map((imgUrl, idx) => (
              <div key={idx} className="aspect-[4/3] rounded-xl overflow-hidden shadow-sm hover:shadow-md border border-gray-150 transition-shadow">
                <img 
                  src={imgUrl} 
                  alt={`${project.title} gallery item ${idx + 1}`} 
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>

        {/* 5. Upgrade Inquiry CTA Section linking to Contact page */}
        <div className="bg-[#0F172A] rounded-2xl p-8 flex flex-col sm:flex-row items-center justify-between gap-6 mt-12 text-left shadow-lg text-white border border-white/5">
          <div className="space-y-1.5 flex-1">
            <h4 className="font-bold text-white text-lg">Interested in a Similar Home?</h4>
            <p className="text-xs text-gray-300 max-w-md leading-relaxed font-light">
              We offer full architectural customization and structural engineering estimates for projects similar to {project.title} in Ongole and surrounding areas.
            </p>
          </div>
          <Link
            to="/contact"
            className="bg-[#C9A227] hover:bg-[#b08e22] text-[#0F172A] text-xs font-bold uppercase tracking-widest px-6 py-3.5 rounded-full transition-all hover:scale-103 active:scale-95 shrink-0 text-center cursor-pointer"
          >
            Get Free Consultation
          </Link>
        </div>

      </div>
    </motion.div>
  );
};
