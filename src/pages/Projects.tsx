import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { motion } from 'framer-motion';
import { MapPin } from 'lucide-react';
import type { Project } from '../types';

interface ProjectsProps {
  projects: Project[];
}

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.4 } }
};

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const location = useLocation();
  const [selectedCategory, setSelectedCategory] = useState('All');


  useEffect(() => {
    if (location.state && location.state.category) {
      setSelectedCategory(location.state.category);
    }
  }, [location.state]);

  const categories = ['All', 'Luxury Homes', 'Duplex Houses', 'Villas', 'Ongoing Projects'];

  // Filter projects by Category Tab
  const filteredProjects = projects.filter(project => {
    return selectedCategory === 'All' || project.category === selectedCategory;
  });

  return (
    <motion.div 
      variants={pageVariants} 
      initial="initial" 
      animate="animate" 
      exit="exit"
      className="w-full text-left bg-[#f9f9fb] pt-20"
    >
      {/* Page Header */}
      <section className="bg-gray-900 py-16 sm:py-24 text-center text-white relative z-10">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-15" />
        <div className="relative z-10 max-w-4xl mx-auto px-5">
          <span className="text-[11px] tracking-[0.25em] font-bold text-[#b38b30] uppercase block mb-3">Portfolio of Work</span>
          <h1 className="text-3xl sm:text-5xl font-normal leading-tight tracking-tight">Our Completed & Active Projects</h1>
          <p className="mt-4 text-xs sm:text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
            Browse our masonry project showcase, custom-engineered and finished to withstand generations.
          </p>
        </div>
      </section>

      {/* Gallery Section */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        
        {/* Filters Control Bar */}
        <div className="flex justify-center mb-10">
          {/* Category Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(cat)}
                className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all focus:outline-none ${
                  selectedCategory === cat
                    ? 'bg-gray-900 text-white shadow-sm'
                    : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200/80'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Projects Grid */}
        {filteredProjects.length > 0 ? (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredProjects.map((project) => (
              <Link
                key={project.id}
                to={`/projects/${project.id}`}
                className="group cursor-pointer bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 block text-left"
              >
                {/* Image Frame */}
                <div className="aspect-[4/3] w-full overflow-hidden bg-gray-100 relative">
                  <img
                    src={project.imageUrl}
                    alt={project.title}
                    className="w-full h-full object-cover transform group-hover:scale-103 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                    <span className="bg-white/95 backdrop-blur-sm text-gray-900 text-[11px] font-semibold px-4 py-2 rounded-full shadow flex items-center gap-1.5 transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
                      <span>View Specifications Page</span>
                    </span>
                  </div>
                </div>

                {/* Text Meta Info */}
                <div className="p-5">
                  <div className="flex items-center gap-1.5 text-[#926f20] text-[10px] font-bold tracking-wider uppercase mb-1">
                    <span>{project.category}</span>
                  </div>
                  <h3 className="text-base font-bold text-gray-900 leading-tight mb-2 group-hover:text-[#b38b30] transition-colors truncate">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-1 text-[12px] text-gray-500">
                    <MapPin className="w-3.5 h-3.5 text-gray-400 shrink-0" />
                    <span className="truncate">{project.location}</span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        ) : (
          <div className="text-center py-16 bg-white rounded-2xl border border-dashed border-gray-200">
            <p className="text-gray-500 text-sm">No projects matching your search criteria were found.</p>
          </div>
        )}

      </div>
    </motion.div>
  );
};
