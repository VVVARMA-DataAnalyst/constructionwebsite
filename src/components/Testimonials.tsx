import React, { useState } from 'react';
import { Star, Quote, ChevronLeft, ChevronRight, Play, X } from 'lucide-react';

const TESTIMONIALS_DATA = [
  {
    id: 1,
    name: "Mark & Sarah Jenkins",
    role: "Homeowners, CareNest Villa",
    location: "Pacific Palisades, CA",
    text: "Building CareNest Villa with Varma Constructions was an absolute dream. Their transparent management tool kept us updated on structural curing dates, material checks, and progress photos daily. The woodwork and Fleetwood glass lines are flawless.",
    rating: 5,
    clientImg: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&fit=crop&w=150&h=150&q=80",
    houseImg: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    id: 2,
    name: "Arthur Pendelton",
    role: "Founder, coastal estate",
    location: "Malibu, CA",
    text: "I was highly impressed by Varma's deep engineering expertise. Designing a beachfront home on shifting sands requires serious structural knowledge. Their team anchored the foundation walls with deep pile foundations flawlessly.",
    rating: 5,
    clientImg: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&h=150&q=80",
    houseImg: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  },
  {
    id: 3,
    name: "Elena Rostova",
    role: "Owner, Atherton Craftsman",
    location: "Atherton, CA",
    text: "Their attention to matching historical redwood framing while updating our insulation to high-efficiency ratings was superb. They completely remodeled our kitchen with Sub-Zero and Wolf suites on time and within budget.",
    rating: 5,
    clientImg: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&h=150&q=80",
    houseImg: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=600&q=80",
    videoUrl: "https://www.w3schools.com/html/mov_bbb.mp4"
  }
];

export const Testimonials: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  const activeTestimonial = TESTIMONIALS_DATA[currentIndex];

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev === 0 ? TESTIMONIALS_DATA.length - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev === TESTIMONIALS_DATA.length - 1 ? 0 : prev + 1));
  };

  return (
    <section id="testimonials" className="max-w-6xl mx-auto px-5 sm:px-8 py-16 scroll-mt-20">
      
      {/* Section Header */}
      <div className="max-w-2xl mx-auto text-center mb-16">
        <span className="text-[11px] tracking-[0.2em] font-bold text-[#926f20] uppercase block mb-2">Testimonials</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-900 tracking-tight leading-tight">
          What Our Clients Say
        </h2>
        <div className="w-12 h-1 bg-[#b38b30] mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center bg-white border border-gray-100 rounded-3xl overflow-hidden shadow-sm p-6 sm:p-10 relative">
        
        {/* Left Side: Testimonial details & slides */}
        <div className="lg:col-span-7 flex flex-col justify-between h-full space-y-8 text-left">
          
          <div className="space-y-6">
            {/* Quote Icon */}
            <Quote className="w-8 h-8 text-[#b38b30]/20" />
            
            {/* Review text */}
            <p className="text-gray-700 text-sm sm:text-base leading-relaxed font-light italic">
              "{activeTestimonial.text}"
            </p>

            {/* Ratings */}
            <div className="flex gap-1">
              {[...Array(activeTestimonial.rating)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-[#b38b30] text-[#b38b30]" />
              ))}
            </div>
          </div>

          {/* Client Bio Profile */}
          <div className="flex items-center justify-between border-t border-gray-100 pt-6">
            <div className="flex items-center gap-4">
              <img 
                src={activeTestimonial.clientImg} 
                alt={activeTestimonial.name} 
                className="w-12 h-12 rounded-full object-cover ring-2 ring-gray-150"
              />
              <div>
                <h4 className="text-sm font-bold text-gray-900 leading-none mb-1">
                  {activeTestimonial.name}
                </h4>
                <p className="text-xs text-gray-500 font-medium">
                  {activeTestimonial.role} &bull; <span className="font-light">{activeTestimonial.location}</span>
                </p>
              </div>
            </div>

            {/* Slide control arrows */}
            <div className="flex gap-2">
              <button 
                onClick={handlePrev}
                className="w-8 h-8 rounded-full border border-gray-200 hover:border-gray-400 text-gray-600 hover:text-gray-900 flex items-center justify-center transition-all active:scale-95 focus:outline-none"
                aria-label="Previous Testimonial"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <button 
                onClick={handleNext}
                className="w-8 h-8 rounded-full border border-gray-200 hover:border-gray-400 text-gray-600 hover:text-gray-900 flex items-center justify-center transition-all active:scale-95 focus:outline-none"
                aria-label="Next Testimonial"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>

        </div>

        {/* Right Side: Built House View + Video Testimonial Play Button */}
        <div className="lg:col-span-5 relative h-64 sm:h-80 lg:h-full min-h-[250px] w-full rounded-2xl overflow-hidden group">
          <img 
            src={activeTestimonial.houseImg} 
            alt="Client's completed luxury home" 
            className="w-full h-full object-cover transform group-hover:scale-102 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-black/35 group-hover:bg-black/45 transition-colors flex flex-col justify-between p-6" />

          {/* Video Testimonial Title card */}
          <div className="absolute top-4 left-4 right-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-3 flex justify-between items-center z-10 text-white text-left">
            <div>
              <span className="text-[9px] tracking-wider uppercase font-bold text-[#b38b30] block mb-0.5">Video Review</span>
              <span className="text-xs font-semibold block leading-tight truncate max-w-[200px]">Client Interview</span>
            </div>
            <button
              onClick={() => setIsVideoModalOpen(true)}
              className="w-8 h-8 rounded-full bg-white text-gray-900 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform shadow-lg focus:outline-none"
              aria-label="Play Video Interview"
            >
              <Play className="w-3.5 h-3.5 fill-gray-900 ml-0.5" />
            </button>
          </div>
          
          <div className="absolute bottom-4 left-4 right-4 text-white text-left z-10">
            <span className="text-[10px] tracking-wider uppercase font-bold block text-gray-300">COMPLETED WORK</span>
            <span className="text-sm font-semibold">{activeTestimonial.role}</span>
          </div>
        </div>

      </div>

      {/* Video Modal Overlay */}
      {isVideoModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-sm">
          <div className="relative w-full max-w-3xl bg-black rounded-2xl overflow-hidden border border-white/15 aspect-video shadow-2xl">
            <button
              onClick={() => setIsVideoModalOpen(false)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-black/60 hover:bg-black/85 text-white flex items-center justify-center transition-colors focus:outline-none"
              aria-label="Close video"
            >
              <X className="w-4 h-4" />
            </button>
            <video
              src={activeTestimonial.videoUrl}
              className="w-full h-full object-cover"
              controls
              autoPlay
            />
          </div>
        </div>
      )}

    </section>
  );
};
