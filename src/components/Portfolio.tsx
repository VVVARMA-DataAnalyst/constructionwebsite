import React, { useState } from 'react';
import { Search, X, MapPin, Minimize2, Calendar, HardHat } from 'lucide-react';
import type { Project } from '../types';

interface PortfolioProps {
  projects: Project[];
  selectedCategory: string;
  setSelectedCategory: (cat: string) => void;
}

export const Portfolio: React.FC<PortfolioProps> = ({ projects, selectedCategory, setSelectedCategory }) => {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeProject, setActiveProject] = useState<Project | null>(null);

  const categories = ['All', 'Luxury Homes', 'Duplex Houses', 'Villas', 'Ongoing Projects'];

  // Filter projects by both Category Tab and Search Query input
  const filteredProjects = projects.filter(project => {
    const matchesCategory = selectedCategory === 'All' || project.category === selectedCategory;
    const matchesSearch = project.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          project.location.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          project.materials.some(m => m.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="portfolio" className="max-w-6xl mx-auto px-5 sm:px-8 py-8 scroll-mt-20">
      {/* Section Header */}
      <div className="max-w-2xl mx-auto text-center mb-12">
        <span className="text-[11px] tracking-[0.2em] font-bold text-[#926f20] uppercase block mb-2">Our Work</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-900 tracking-tight leading-tight">
          Portfolio of Architectures
        </h2>
        <div className="w-12 h-1 bg-[#b38b30] mx-auto mt-4" />
      </div>

      {/* Filters & Search Control Bar */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-8">
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all focus:outline-none ${
                selectedCategory === cat
                  ? 'bg-gray-900 text-white shadow-sm'
                  : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Search Input */}
        <div className="relative w-full sm:w-64">
          <input
            type="text"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            placeholder="Search location, materials..."
            className="w-full pl-9 pr-4 py-2 rounded-full border border-gray-200 bg-white text-[13px] text-gray-900 placeholder-gray-400 outline-none focus:border-gray-400 focus:ring-1 focus:ring-gray-400 transition-all duration-300"
          />
          <Search className="absolute left-3.5 top-2.5 w-4 h-4 text-gray-400" />
        </div>
      </div>

      {/* Projects Grid */}
      {filteredProjects.length > 0 ? (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              onClick={() => setActiveProject(project)}
              className="group cursor-pointer bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 text-left"
            >
              {/* Image Frame */}
              <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 relative">
                <img
                  src={project.imageUrl}
                  alt={project.title}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                />
                <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                  <span className="bg-white/90 backdrop-blur-sm text-gray-900 text-[11px] font-semibold px-4 py-2 rounded-full shadow flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                    <Minimize2 className="w-3.5 h-3.5" />
                    <span>View Project Specifications</span>
                  </span>
                </div>
              </div>

              {/* Text Meta Info */}
              <div className="p-5">
                <div className="flex items-center gap-1.5 text-[#926f20] text-[11px] font-bold tracking-wider uppercase mb-1">
                  <span>{project.category}</span>
                </div>
                <h3 className="text-base font-bold text-gray-900 leading-tight mb-2 group-hover:text-[#b38b30] transition-colors">
                  {project.title}
                </h3>
                <div className="flex items-center gap-1 text-[12px] text-gray-500">
                  <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                  <span className="truncate">{project.location}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-gray-200">
          <p className="text-gray-500 text-sm">No projects matching your search criteria were found.</p>
        </div>
      )}

      {/* Project Spec Detail Modal Overlay */}
      {activeProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/60 backdrop-blur-sm animate-fade-in">
          {/* Modal Container Card */}
          <div className="relative w-full max-w-2xl bg-white rounded-2xl shadow-2xl overflow-hidden border border-gray-100 flex flex-col max-h-[90vh] animate-fade-up">
            
            {/* Modal Image Header */}
            <div className="relative h-60 sm:h-72 w-full overflow-hidden shrink-0 bg-gray-100">
              <img
                src={activeProject.imageUrl}
                alt={activeProject.title}
                className="w-full h-full object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/65 via-black/20 to-transparent" />
              
              {/* Close Button */}
              <button
                onClick={() => setActiveProject(null)}
                className="absolute top-4 right-4 w-8 h-8 rounded-full bg-black/50 hover:bg-black/75 text-white flex items-center justify-center transition-colors focus:outline-none"
                aria-label="Close modal"
              >
                <X className="w-4 h-4" />
              </button>

              {/* Title Overlay */}
              <div className="absolute bottom-4 left-6 text-white text-left">
                <span className="text-[10px] tracking-wider uppercase font-bold text-[#b38b30] block mb-1">
                  {activeProject.category}
                </span>
                <h3 className="text-xl sm:text-2xl font-bold leading-tight">
                  {activeProject.title}
                </h3>
              </div>
            </div>

            {/* Modal Content Scroll Area */}
            <div className="p-6 overflow-y-auto space-y-5 text-left text-sm text-gray-700">
              
              {/* Description paragraph */}
              <p className="leading-relaxed text-gray-600">
                {activeProject.description}
              </p>

              {/* Dynamic Grid Specifications */}
              <div className="grid grid-cols-2 gap-4 border-y border-gray-100 py-4 text-xs">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-gray-50 flex items-center justify-center text-gray-500 shrink-0">
                    <MapPin className="w-4 h-4 text-[#926f20]" />
                  </div>
                  <div>
                    <span className="text-gray-400 block font-light">LOCATION</span>
                    <span className="font-semibold text-gray-800">{activeProject.location}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-gray-50 flex items-center justify-center text-gray-500 shrink-0">
                    <Minimize2 className="w-4 h-4 text-[#926f20]" />
                  </div>
                  <div>
                    <span className="text-gray-400 block font-light">PLOT SIZE</span>
                    <span className="font-semibold text-gray-800">{activeProject.plotSize}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-gray-50 flex items-center justify-center text-gray-500 shrink-0">
                    <HardHat className="w-4 h-4 text-[#926f20]" />
                  </div>
                  <div>
                    <span className="text-gray-400 block font-light">PROJECT CATEGORY</span>
                    <span className="font-semibold text-gray-800">{activeProject.category}</span>
                  </div>
                </div>
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded bg-gray-50 flex items-center justify-center text-gray-500 shrink-0">
                    <Calendar className="w-4 h-4 text-[#926f20]" />
                  </div>
                  <div>
                    <span className="text-gray-400 block font-light">CONSTRUCTION PERIOD</span>
                    <span className="font-semibold text-gray-800">{activeProject.constructionPeriod}</span>
                  </div>
                </div>
              </div>

              {/* Highlight Materials Tag Pill list */}
              <div>
                <h4 className="text-[11px] font-bold text-gray-400 uppercase tracking-wider mb-2">
                  Featured Construction Materials
                </h4>
                <div className="flex flex-wrap gap-1.5">
                  {activeProject.materials.map((material, mIdx) => (
                    <span
                      key={mIdx}
                      className="bg-gray-50 text-[11px] font-semibold text-gray-700 px-3 py-1.5 rounded-md border border-gray-200/50"
                    >
                      {material}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Bottom Actions */}
            <div className="px-6 py-4 bg-gray-50 border-t border-gray-100 flex items-center justify-end gap-2.5 shrink-0">
              <button
                onClick={() => setActiveProject(null)}
                className="text-xs font-semibold text-gray-500 hover:text-gray-800 px-4 py-2"
              >
                Close Spec Sheet
              </button>
              <a
                href="#contact"
                onClick={() => setActiveProject(null)}
                className="bg-gray-900 hover:bg-gray-800 text-white text-xs font-medium px-5 py-2 rounded-full transition-colors flex items-center gap-1.5"
              >
                <span>Request Similar Build</span>
              </a>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
