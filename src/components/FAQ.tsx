import React, { useState } from 'react';
import { ChevronDown } from 'lucide-react';

const FAQ_ITEMS = [
  {
    question: "What geographical areas do you serve for custom builds?",
    answer: "We primarily serve Santa Monica, Malibu, Beverly Hills, Pacific Palisades, and surrounding coastal areas of Southern California. However, for specialized luxury villa builds, we are fully licensed to design and build anywhere in the state of California."
  },
  {
    question: "How do you ensure transparent cost estimation?",
    answer: "We provide fully itemized budget schedules based on detailed engineering designs. All subcontractor bids, materials purchases, and structural changes are logged directly inside our dashboard system with zero hidden margins."
  },
  {
    question: "How long does a typical custom villa build take?",
    answer: "A standard custom villa ranges from 12 to 18 months. This timeline depends on the scale, landscaping requirements, and foundation complexity (such as deep structural steel pilings on coastal slopes). We establish a rigid schedule before pouring concrete."
  },
  {
    question: "Do you handle city approvals and environmental permits?",
    answer: "Yes, we handle all parts of approvals and permits. This includes managing local zoning clearances, environmental impact studies for coastal builds, coastal commission reviews, structural plan checks, and final occupancy certificates."
  },
  {
    question: "What structural warranties do you offer on handovers?",
    answer: "We stand behind our craftsmanship. Every home we hand over includes a comprehensive 10-year structural warranty, a 5-year water-intrusion framing warranty, and a 2-year warranty on mechanical, electrical, and plumbing assemblies."
  }
];

export const FAQ: React.FC = () => {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const toggleFAQ = (index: number) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="max-w-4xl mx-auto px-5 sm:px-8 py-16 scroll-mt-20">
      
      {/* Section Header */}
      <div className="max-w-2xl mx-auto text-center mb-12">
        <span className="text-[11px] tracking-[0.2em] font-bold text-[#926f20] uppercase block mb-2">Support & FAQ</span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-900 tracking-tight leading-tight">
          Frequently Asked Questions
        </h2>
        <div className="w-12 h-1 bg-[#b38b30] mx-auto mt-4" />
      </div>

      {/* Accordion List */}
      <div className="space-y-4 text-left">
        {FAQ_ITEMS.map((faq, index) => {
          const isOpen = openIndex === index;
          return (
            <div 
              key={index}
              className="bg-white border border-gray-100 rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300"
            >
              {/* Question Click Header */}
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full px-6 py-5 flex items-center justify-between gap-4 font-semibold text-sm sm:text-base text-gray-900 focus:outline-none select-none text-left"
              >
                <span>{faq.question}</span>
                <span className={`w-8 h-8 rounded-full bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100 transition-transform duration-300 ${isOpen ? 'rotate-180 bg-[#926f20]/10 text-[#926f20]' : 'text-gray-500'}`}>
                  <ChevronDown className="w-4 h-4" />
                </span>
              </button>

              {/* Smooth Animated Height Answer */}
              <div 
                className={`grid transition-all duration-300 ease-in-out ${
                  isOpen ? 'grid-rows-[1fr] opacity-100 pb-5' : 'grid-rows-[0fr] opacity-0'
                }`}
              >
                <div className="overflow-hidden">
                  <div className="px-6 text-xs sm:text-sm text-gray-500 leading-relaxed border-t border-gray-50 pt-4">
                    {faq.answer}
                  </div>
                </div>
              </div>

            </div>
          );
        })}
      </div>

    </section>
  );
};
