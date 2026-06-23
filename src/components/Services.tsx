import React from 'react';
import { Home, Hammer, Palette, ArrowRight } from 'lucide-react';

interface ServicesProps {
  setSelectedCategory: (cat: string) => void;
}

export const Services: React.FC<ServicesProps> = ({ setSelectedCategory }) => {
  const servicesList = [
    {
      icon: <Home className="w-6 h-6 text-[#926f20]" />,
      title: "Custom Luxury Homes",
      desc: "Turn your architectural vision into reality. We manage everything from excavation and concrete foundation work to structural steel framing and final hand-overs.",
      details: ["Architectural Collaboration", "Structural Engineering", "Foundation & Framing", "Sustainable Integration"],
      portfolioCategory: "Luxury Homes"
    },
    {
      icon: <Hammer className="w-6 h-6 text-[#926f20]" />,
      title: "Modern Duplex Construction",
      desc: "High-end multi-occupancy residences designed with structural symmetry, acoustic insulation cores, and functional architectural layouts.",
      details: ["Symmetrical Space Planning", "Acoustic Partition Cores", "Layout & Elevation Design", "Complete Utility Overhauls"],
      portfolioCategory: "Duplex Houses"
    },
    {
      icon: <Palette className="w-6 h-6 text-[#926f20]" />,
      title: "Architectural Villas",
      desc: "Breathe life into estate designs with premium cantilevered decks, custom timber joinery, floor-to-ceiling glass, and luxurious landscape pooling.",
      details: ["Cantilevered Pool Engineering", "Walnut Joinery & Marble", "Bespoke Exterior Glazing", "Curated Landscape Design"],
      portfolioCategory: "Villas"
    }
  ];

  return (
    <section id="services" className="max-w-6xl mx-auto px-5 sm:px-8 py-8 text-center scroll-mt-20">
      <div className="max-w-2xl mx-auto mb-16">
        <span className="text-[11px] tracking-[0.2em] font-bold text-[#926f20] uppercase block mb-2">Capabilities</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-900 tracking-tight leading-tight">
          Crafting Spaces of Precision and Beauty
        </h2>
        <div className="w-12 h-1 bg-[#b38b30] mx-auto mt-4" />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {servicesList.map((service, index) => (
          <div 
            key={index}
            className="group relative bg-white border border-gray-100 rounded-2xl p-8 text-left shadow-sm hover:shadow-xl hover:border-[#b38b30]/30 transition-all duration-300 flex flex-col justify-between"
          >
            <div>
              {/* Icon Container */}
              <div className="w-12 h-12 rounded-xl bg-[#926f20]/10 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
                {service.icon}
              </div>

              {/* Title & Desc */}
              <h3 className="text-xl font-bold text-gray-900 mb-3">{service.title}</h3>
              <p className="text-sm text-gray-600 leading-relaxed mb-6">{service.desc}</p>

              {/* Details List */}
              <ul className="space-y-2 mb-8">
                {service.details.map((detail, dIdx) => (
                  <li key={dIdx} className="flex items-center gap-2 text-[13px] text-gray-700">
                    <span className="w-1.5 h-1.5 rounded-full bg-[#b38b30]" />
                    <span>{detail}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Action */}
            <button 
              onClick={() => {
                setSelectedCategory(service.portfolioCategory);
                const el = document.getElementById('portfolio');
                if (el) {
                  el.scrollIntoView({ behavior: 'smooth' });
                }
              }}
              className="inline-flex items-center gap-1.5 text-[13px] font-semibold text-[#926f20] group-hover:text-[#b38b30] hover:translate-x-0.5 transition-all text-left focus:outline-none"
            >
              <span>View past work</span>
              <ArrowRight className="w-4 h-4 transform group-hover:translate-x-1 transition-transform" />
            </button>
          </div>
        ))}
      </div>
    </section>
  );
};
