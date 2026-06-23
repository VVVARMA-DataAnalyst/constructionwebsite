import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Minimize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

const GALLERY_IMAGES = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    category: "Exterior Views",
    title: "Modern Duplex Exterior, Mangamuru Road, Ongole"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    category: "Exterior Views",
    title: "Luxury Villa Frontage, Vijayawada, AP"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
    category: "Interior Views",
    title: "Premium Living Room Finish, Ongole Villa"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    category: "Interior Views",
    title: "Modular Kitchen Layout, Guntur Family Home"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
    category: "Construction Progress",
    title: "Rebar Mat & Foundation Pouring, Ongole Site"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    category: "Construction Progress",
    title: "Column Shuttering & Brickwork, Nellore Project"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    category: "Completed Projects",
    title: "Premium Villa Handover, Vijayawada, AP"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&fit=crop&w=1200&q=80",
    category: "Completed Projects",
    title: "Contemporary Duplex Residence, Ongole, AP"
  }
];

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.4 } }
};

export const Gallery: React.FC = () => {
  const [selectedCat, setSelectedCat] = useState('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const categories = ['All', 'Exterior Views', 'Interior Views', 'Construction Progress', 'Completed Projects'];

  const filteredImages = selectedCat === 'All' 
    ? GALLERY_IMAGES 
    : GALLERY_IMAGES.filter(img => img.category === selectedCat);

  const handlePrev = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const newIdx = lightboxIndex === 0 ? filteredImages.length - 1 : lightboxIndex - 1;
    setLightboxIndex(newIdx);
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex === null) return;
    const newIdx = lightboxIndex === filteredImages.length - 1 ? 0 : lightboxIndex + 1;
    setLightboxIndex(newIdx);
  };

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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-15" />
        <div className="relative z-10 max-w-4xl mx-auto px-5">
          <span className="text-[11px] tracking-[0.25em] font-bold text-[#b38b30] uppercase block mb-3">Architectural Media</span>
          <h1 className="text-3xl sm:text-5xl font-normal leading-tight tracking-tight">Our Gallery</h1>
          <p className="mt-4 text-xs sm:text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
            Take a visual tour of our completed villas, custom interiors, and live construction sites.
          </p>
        </div>
      </section>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16">
        
        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCat(cat)}
              className={`px-4 py-2 rounded-full text-[13px] font-semibold transition-all focus:outline-none ${
                selectedCat === cat
                  ? 'bg-gray-900 text-white shadow-sm'
                  : 'bg-white text-gray-600 hover:text-gray-900 border border-gray-200/80'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Grid of Images */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredImages.map((img, index) => (
            <div
              key={img.id}
              onClick={() => setLightboxIndex(index)}
              className="group cursor-pointer aspect-square bg-gray-100 rounded-2xl overflow-hidden relative shadow-sm border border-gray-150/50 hover:shadow-lg transition-all duration-300 animate-fade-in"
            >
              <img 
                src={img.url} 
                alt={img.title} 
                className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
              />
              <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-white">
                <span className="text-[9px] tracking-wider uppercase font-bold text-[#b38b30]">
                  {img.category}
                </span>
                <div>
                  <h4 className="text-sm font-bold leading-tight mb-1">{img.title}</h4>
                  <div className="flex items-center gap-1 text-[10px] text-gray-300 font-medium">
                    <Minimize2 className="w-3.5 h-3.5" />
                    <span>Click to view larger</span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Lightbox Overlay */}
        {lightboxIndex !== null && (
          <div 
            onClick={() => setLightboxIndex(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 animate-fade-in"
          >
            {/* Close button */}
            <button
              onClick={() => setLightboxIndex(null)}
              className="absolute top-6 right-6 w-10 h-10 rounded-full bg-white/10 hover:bg-white/20 border border-white/10 text-white flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Close Lightbox"
            >
              <X className="w-5 h-5" />
            </button>

            {/* Nav prev */}
            <button
              onClick={handlePrev}
              className="absolute left-4 w-12 h-12 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white flex items-center justify-center transition-all active:scale-95 focus:outline-none"
              aria-label="Previous Slide"
            >
              <ChevronLeft className="w-6 h-6" />
            </button>

            {/* Slide Frame */}
            <div className="relative max-w-4xl max-h-[80vh] flex flex-col items-center">
              <img 
                src={filteredImages[lightboxIndex].url} 
                alt={filteredImages[lightboxIndex].title} 
                className="max-w-full max-h-[75vh] object-contain rounded-lg border border-white/10 animate-fade-in"
              />
              <div className="mt-4 text-center text-white">
                <span className="text-[10px] tracking-wider uppercase font-bold text-[#b38b30] block mb-0.5">
                  {filteredImages[lightboxIndex].category}
                </span>
                <h4 className="text-sm font-semibold">{filteredImages[lightboxIndex].title}</h4>
              </div>
            </div>

            {/* Nav next */}
            <button
              onClick={handleNext}
              className="absolute right-4 w-12 h-12 rounded-full bg-white/5 hover:bg-white/15 border border-white/10 text-white flex items-center justify-center transition-all active:scale-95 focus:outline-none"
              aria-label="Next Slide"
            >
              <ChevronRight className="w-6 h-6" />
            </button>
          </div>
        )}

      </div>
    </motion.div>
  );
};
