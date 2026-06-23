import React from 'react';
import { 
  Sparkles, 
  MessageSquare, 
  CalendarClock, 
  Users, 
  Search, 
  HeartHandshake 
} from 'lucide-react';

export const WhyChooseUs: React.FC = () => {
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
    <section id="why-choose-us" className="bg-gray-50/50 py-20 border-y border-gray-100 relative z-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-8">
        
        {/* Section Header */}
        <div className="max-w-2xl mx-auto text-center mb-16">
          <span className="text-[11px] tracking-[0.2em] font-bold text-[#926f20] uppercase block mb-2">Our Standards</span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-normal text-gray-900 tracking-tight leading-tight">
            Why Choose Varma Constructions
          </h2>
          <div className="w-12 h-1 bg-[#b38b30] mx-auto mt-4" />
        </div>

        {/* Features Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feat, index) => (
            <div 
              key={index}
              className="bg-white border border-gray-100 rounded-2xl p-8 text-left shadow-sm hover:shadow-lg hover:border-[#b38b30]/25 transition-all duration-300 transform hover:-translate-y-0.5"
            >
              {/* Icon Circle */}
              <div className="w-10 h-10 rounded-xl bg-[#926f20]/10 flex items-center justify-center mb-6 shrink-0">
                {feat.icon}
              </div>

              {/* Title & Desc */}
              <h3 className="text-base font-bold text-gray-900 mb-2.5">
                {feat.title}
              </h3>
              <p className="text-xs text-gray-500 leading-relaxed">
                {feat.desc}
              </p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
