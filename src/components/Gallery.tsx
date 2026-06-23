import React, { useState } from 'react';
import { Minimize2, X, ChevronLeft, ChevronRight } from 'lucide-react';

const GALLERY_IMAGES = [
  {
    id: 1,
    url: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1200&q=80",
    category: "Exterior Views",
    title: "Cantilever Pool Deck, Palisades"
  },
  {
    id: 2,
    url: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=1200&q=80",
    category: "Exterior Views",
    title: "Teak Structural Framing, Malibu"
  },
  {
    id: 3,
    url: "https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&fit=crop&w=1200&q=80",
    category: "Interior Views",
    title: "Calacatta Bookmatched Marble Hall, Bel-Air"
  },
  {
    id: 4,
    url: "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=1200&q=80",
    category: "Interior Views",
    title: "Gourmet White Oak Kitchen, Beverly Hills"
  },
  {
    id: 5,
    url: "https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1200&q=80",
    category: "Construction Progress",
    title: "Rebar Mat & Structural Foundation Pouring"
  },
  {
    id: 6,
    url: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=1200&q=80",
    category: "Construction Progress",
    title: "Timber Post-and-Beam Joinery Framing"
  },
  {
    id: 7,
    url: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=1200&q=80",
    category: "Completed Projects",
    title: "Historic Tudor Remodel Frontage, SF"
  },
  {
    id: 8,
    url: "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=1200&q=80",
    category: "Completed Projects",
    title: "Modernist Cantilever Canopy Villa, Bel-Air"
  }
];

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
    <section id="gallery" className="max-w-6xl mx-auto px-5 sm:px-8 py-16 scroll-mt-20">
      
      {/* Section Header */}
      <div className="max-w-2xl mx-auto text-center mb-12">
        <span className="text-[11px] tracking-[0.2em] font-bold text-[#926f20] uppercase block mb-2">Visual Showcase</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-900 tracking-tight leading-tight">
          Visual Media Gallery
        </h2>
        <div className="w-12 h-1 bg-[#b38b30] mx-auto mt-4" />
      </div>

      {/* Category Tabs */}
      <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
        {categories.map((cat) => (
          <button
            key={cat}
            onClick={() => setSelectedCat(cat)}
            className={`px-4 py-2 rounded-full text-[13px] font-medium transition-all focus:outline-none ${
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
            className="group cursor-pointer aspect-square bg-gray-100 rounded-2xl overflow-hidden relative shadow-sm border border-gray-100/50 hover:shadow-lg transition-all duration-300"
          >
            <img 
              src={img.url} 
              alt={img.title} 
              className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
            />
            {/* Overlay cover */}
            <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-5 text-left text-white">
              <span className="text-[9px] tracking-wider uppercase font-bold text-[#b38b30]">
                {img.category}
              </span>
              <div>
                <h4 className="text-sm font-bold leading-tight mb-1">{img.title}</h4>
                <div className="flex items-center gap-1 text-[11px] text-gray-300">
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
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 animate-fade-in"
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
              className="max-w-full max-h-[75vh] object-contain rounded-lg border border-white/10"
            />
            {/* Title / Description */}
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

    </section>
  );
};
