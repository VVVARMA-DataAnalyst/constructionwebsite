import { useState, useEffect } from 'react';
import { BrowserRouter, useLocation } from 'react-router-dom';
import { Settings } from 'lucide-react';
import { Navbar } from './components/Navbar';
import { AppRouter } from './Router';
import { Footer } from './components/Footer';
import { AdminPanel } from './components/AdminPanel';
import type { Project } from './types';
import { BUSINESS_CONFIG } from './config';

const INITIAL_PROJECTS: Project[] = [
  {
    id: 1,
    title: "Modern Duplex Residence",
    category: "Duplex Houses",
    location: "Ongole, Andhra Pradesh",
    imageUrl: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
    plotSize: "3,500 sq ft",
    builtUpArea: "4,800 sq ft",
    constructionPeriod: "14 Months",
    description: "A premium modern double-occupancy residential home built with high-grade columns, brick masonry, and modular kitchen layouts. Perfect for extended families seeking independent living spaces under one roof.",
    materials: [
      "Tata Tiscon reinforcement columns",
      "UltraTech premium cement",
      "Somany vitrified floor tiles",
      "Ashirvad CPVC sanitary piping",
      "Asian Paints interior emulsify coats"
    ],
    features: [
      "Dual independent sumps for municipal water storage",
      "Dedicated three-phase electrical connections for both units",
      "Spacious covered balconies with laminated safety glass railings",
      "Strict Vastu-compliant architecture design and entry planning",
      "Independent utility lines and billing panels"
    ],
    highlights: [
      "Reinforced earthquake-resistant concrete footing structure",
      "Premium exterior weathering coat for heat insulation",
      "Premium solid concrete block construction for acoustic partitioning"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 2,
    title: "Luxury Villa",
    category: "Villas",
    location: "Mangamuru Road, Ongole, AP",
    imageUrl: "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
    plotSize: "5,000 sq ft",
    builtUpArea: "6,200 sq ft",
    constructionPeriod: "18 Months",
    description: "An architecturally elegant residential villa featuring customized landscaping, smart layouts, and durable concrete shuttering. Built with expansive layouts to provide a luxury private sanctuary.",
    materials: [
      "Vizag Steel high-strength reinforcement bars",
      "Birla Super Grade-A cement",
      "Teak wood frames and panels",
      "Kajaria glazed tiles",
      "Finolex concealed copper wiring"
    ],
    features: [
      "Custom landscaped garden with native plants and waterfall",
      "Integrated solar water heating grids with backup battery storage",
      "Main entry doors crafted from hand-polished teak wood",
      "Central HVAC conditioning structural duct channels ready",
      "Dedicated rainwater collection recharge shaft"
    ],
    highlights: [
      "Deep-pile concrete foundation columns",
      "High-performance thermal insulation roof tiles",
      "Polished Italian marble tile finishings across main living rooms"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1600596542815-ffad4c1539a9?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600210492493-0946911123ea?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 3,
    title: "Contemporary Family Home",
    category: "Luxury Homes",
    location: "Guntur, Andhra Pradesh",
    imageUrl: "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
    plotSize: "4,000 sq ft",
    builtUpArea: "5,100 sq ft",
    constructionPeriod: "16 Months",
    description: "A custom single-family home structured for optimal space ventilation, premium plumbing fittings, and high-performance paint facades. Blends modern lines with cozy family-oriented spaces.",
    materials: [
      "Tata Tiscon reinforcement bars",
      "UltraTech concrete mix",
      "Asian Paints Weathercoat facade coat",
      "Ashirvad plumbing lines",
      "Somany vitrified slab tiles"
    ],
    features: [
      "Groundwater recharge pit and harvesting shafts",
      "Cross-ventilation layout to minimize AC load",
      "Fully modular custom kitchen layouts with chimney vents",
      "Independent watchman quarters at structural gate",
      "Automatic overhead tank level controllers"
    ],
    highlights: [
      "Custom engineered floor slab concrete pours",
      "Concealed digital automation cabling pipelines ready",
      "Double-brick cavity exterior walls for solar heat block"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1613490493576-7fde63acd811?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&fit=crop&w=800&q=80"
    ]
  },
  {
    id: 4,
    title: "Premium Villa Project",
    category: "Villas",
    location: "Vijayawada, Andhra Pradesh",
    imageUrl: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
    plotSize: "6,000 sq ft",
    builtUpArea: "7,500 sq ft",
    constructionPeriod: "20 Months",
    description: "A signature residential estate built with custom sandstone facades, rainwater harvesting storage tanks, and solid concrete pillars. Engineered for modern sustainable luxury.",
    materials: [
      "Tata Tiscon reinforcement",
      "UltraTech cement",
      "Dholpur sandstone façade slabs",
      "Ashirvad piping systems",
      "Kajaria premium ceramics"
    ],
    features: [
      "Double height ceiling main lobby and courtyard",
      "Custom landscape planning with perimeter privacy tree lines",
      "High-capacity sewage collection and drainage lines",
      "Terrace garden deck with waterproofing concrete checks",
      "Dedicated multi-car modular parking bays"
    ],
    highlights: [
      "Cantilevered slab concrete balcony outlines",
      "Multi-stage cement waterproofing treatment checks",
      "Polished high-grade granite floor slabs"
    ],
    gallery: [
      "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?auto=format&fit=crop&w=800&q=80"
    ]
  }
];

function ScrollToTop() {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return null;
}

function App() {
  const [projects, setProjects] = useState<Project[]>(INITIAL_PROJECTS);
  const [isAdminOpen, setIsAdminOpen] = useState(false);

  const handleAddProject = (newProject: Project) => {
    setProjects((prev) => [newProject, ...prev]);
  };

  const whatsappNum = BUSINESS_CONFIG.whatsappNumber !== "[ENTER_WHATSAPP_NUMBER]" 
    ? BUSINESS_CONFIG.whatsappNumber 
    : "919440255225";

  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="bg-[#FAFAFA] min-h-screen text-[#111827] flex flex-col justify-between scroll-smooth relative">
        
        <div>
          {/* Header */}
          <Navbar />
          
          {/* Routed Content */}
          <main className="w-full">
            <AppRouter projects={projects} />
          </main>
        </div>

        {/* Footer */}
        <Footer />

        {/* Repositioned Settings Trigger to Bottom-Left (Rounded square box matching mockup) */}
        <button
          onClick={() => setIsAdminOpen(true)}
          className="fixed bottom-6 left-6 z-40 w-11 h-11 rounded-lg bg-[#0F172A] hover:bg-gray-800 text-white flex items-center justify-center transition-all hover:scale-105 active:scale-95 shadow-xl border border-white/10 outline-none focus:outline-none cursor-pointer"
          title="Open Admin Portal"
          aria-label="Open Admin Portal"
        >
          <Settings className="w-5 h-5" />
        </button>

        {/* Global Floating WhatsApp Contact Action Button (Bottom-Right, always-open text layout matching mockup) */}
        <a
          href={`https://wa.me/${whatsappNum}`}
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-6 right-6 z-40 bg-[#25D366] hover:bg-[#20ba5a] text-white px-5 py-3 rounded-lg shadow-2xl hover:scale-105 active:scale-95 transition-all flex items-center gap-2.5 cursor-pointer font-sans"
          title="Chat on WhatsApp"
        >
          <svg className="w-5 h-5 fill-white" viewBox="0 0 24 24">
            <path d="M12.012 2c-5.506 0-9.988 4.478-9.988 9.984 0 1.761.46 3.475 1.332 4.988L2 22l5.188-1.362a9.928 9.928 0 004.82 1.238c5.512 0 9.994-4.478 9.994-9.984C22.008 6.478 17.524 2 12.012 2zm5.733 14.184c-.244.688-1.218 1.256-1.681 1.331-.418.069-.969.112-2.775-.625-2.306-.944-3.788-3.288-3.906-3.444-.112-.156-.95-1.256-.95-2.4 0-1.144.6-1.706.812-1.938.212-.231.469-.294.625-.294.156 0 .312.006.45.012.144.006.338-.056.525.388.194.469.662 1.606.72 1.719.056.113.094.25.018.4-.075.15-.162.25-.281.388-.112.131-.244.294-.35.4-.119.119-.244.25-.106.481.138.231.613.987 1.313 1.606.894.794 1.644 1.044 1.881 1.163.238.119.375.1.512-.056.138-.156.6-1.006.756-1.35.156-.344.312-.288.525-.206.213.081 1.35.638 1.581.75.231.112.388.169.444.269.056.094.056.544-.188 1.231z"/>
          </svg>
          <span className="text-xs font-bold uppercase tracking-wider whitespace-nowrap">
            Chat on WhatsApp
          </span>
        </a>

        {/* Admin portal */}
        <AdminPanel 
          isOpen={isAdminOpen} 
          onClose={() => setIsAdminOpen(false)} 
          onAddProject={handleAddProject} 
        />
      </div>
    </BrowserRouter>
  );
}

export default App;
