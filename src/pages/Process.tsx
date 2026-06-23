import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Users, PenTool, DollarSign, FileText, HardHat, CheckCircle, Key, ArrowRight } from 'lucide-react';

interface Step {
  id: number;
  icon: React.ReactNode;
  title: string;
  subtitle: string;
  duration: string;
  description: string;
  deliverables: string[];
}

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.4 } }
};

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps: Step[] = [
    {
      id: 1,
      icon: <Users className="w-5 h-5 text-[#C9A227]" />,
      title: "Consultation",
      subtitle: "Initial Discussion",
      duration: "1 - 2 Weeks",
      description: "We discuss your vision, architectural preferences, layout requirements, site zoning laws, and budget targets to align our design goals.",
      deliverables: ["Client requirements brief", "Initial site feasibility review", "Zoning guide check", "Consultation summary"]
    },
    {
      id: 2,
      icon: <PenTool className="w-5 h-5 text-[#C9A227]" />,
      title: "Planning & Design",
      subtitle: "Concept Blueprints",
      duration: "4 - 6 Weeks",
      description: "Our architectural partners develop schematic floor plans, 3D exterior renderings, and finish schedules tailored to your design preferences.",
      deliverables: ["3D schematic renderings", "Floor plan options", "Finishes & materials palette", "Concept sign-off"]
    },
    {
      id: 3,
      icon: <DollarSign className="w-5 h-5 text-[#C9A227]" />,
      title: "Cost Estimation",
      subtitle: "Itemized Quote",
      duration: "2 - 3 Weeks",
      description: "We compile an itemized list of all construction phases, structural materials, finishes, and labor contracts with absolute budget transparency.",
      deliverables: ["Itemized cost sheets", "Subcontractor bids list", "Value engineering options", "Budget agreement draft"]
    },
    {
      id: 4,
      icon: <FileText className="w-5 h-5 text-[#C9A227]" />,
      title: "Approval & Doc",
      subtitle: "City Permits",
      duration: "4 - 8 Weeks",
      description: "We coordinate with city plan checks, environmental review boards, and local utilities to secure full building permits and formalize agreements.",
      deliverables: ["City building permit approval", "Environmental clearances", "Signed builder contracts", "Soil reports submit"]
    },
    {
      id: 5,
      icon: <HardHat className="w-5 h-5 text-[#C9A227]" />,
      title: "Construction",
      subtitle: "Structural Execution",
      duration: "24 - 40 Weeks",
      description: "Breaking ground, foundation concrete pouring, steel/timber framing assembly, utility rough-ins (plumbing/electrical), drywall, and custom joinery installation.",
      deliverables: ["Reinforced foundation pour", "Steel framing inspection", "Utilities rough-in clear", "Drywall & stone fitting"]
    },
    {
      id: 6,
      icon: <CheckCircle className="w-5 h-5 text-[#C9A227]" />,
      title: "Quality Inspection",
      subtitle: "Defect Testing",
      duration: "2 - 3 Weeks",
      description: "Comprehensive structural integrity audits, pressure testing for plumbing systems, HVAC efficiency testing, automation validation, and client walkthroughs.",
      deliverables: ["Third-party structural report", "Electrical safety validation", "Plumbing leak tests clear", "Detailed finish punch-list"]
    },
    {
      id: 7,
      icon: <Key className="w-5 h-5 text-[#C9A227]" />,
      title: "Handover",
      subtitle: "Owner Move-in",
      duration: "1 - 2 Weeks",
      description: "We deliver city occupancy certificates, hand over keys, provide digital mechanical manuals, transfer appliance warranties, and finalize support structures.",
      deliverables: ["City occupancy certificate", "Warranties & appliance sheets", "Owner portal credentials", "Property keys handover"]
    }
  ];

  const activeData = steps.find(s => s.id === activeStep) || steps[0];

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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1541888946425-d81bb19240f5?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-15" />
        <div className="relative z-10 max-w-4xl mx-auto px-5">
          <span className="text-[11px] tracking-[0.25em] font-bold text-[#b38b30] uppercase block mb-3">Construction Roadmap</span>
          <h1 className="text-3xl sm:text-5xl font-normal leading-tight tracking-tight">Our Delivery Process</h1>
          <p className="mt-4 text-xs sm:text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
            From initial site review to turning over the keys, see the exact steps we take to execute building quality.
          </p>
        </div>
      </section>

      {/* Timeline Section */}
      <div className="max-w-4xl mx-auto px-5 sm:px-8 py-16">
        
        {/* Timeline Steps Icons Row */}
        <div className="relative flex flex-col md:flex-row justify-between items-center gap-6 mb-12">
          {/* Horizontal Line connector (desktop only) */}
          <div className="absolute top-[21px] left-[5%] right-[5%] h-[2px] bg-gray-150 hidden md:block z-0" />
          {/* Active line fill */}
          <div 
            className="absolute top-[21px] left-[5%] h-[2px] bg-[#C9A227] hidden md:block z-0 transition-all duration-500" 
            style={{ width: `${((activeStep - 1) / (steps.length - 1)) * 90}%` }}
          />

          {steps.map((step) => (
            <button
              key={step.id}
              onClick={() => setActiveStep(step.id)}
              className="relative z-10 flex md:flex-col items-center gap-3 md:gap-2.5 text-left md:text-center w-full md:w-auto bg-white p-3 md:p-0 rounded-xl border border-gray-150 md:border-none focus:outline-none"
            >
              <div className={`w-11 h-11 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all duration-300 ${
                activeStep === step.id
                  ? 'border-[#C9A227] bg-[#C9A227]/5 text-[#C9A227] scale-110 shadow-md shadow-[#C9A227]/10'
                  : 'border-gray-200 bg-white text-gray-400 hover:border-gray-400'
              }`}>
                {step.id}
              </div>

              <div>
                <span className={`block text-xs font-bold transition-colors ${activeStep === step.id ? 'text-[#C9A227]' : 'text-gray-700'}`}>
                  {step.title}
                </span>
                <span className="block text-[9px] text-gray-400 font-light truncate md:max-w-[110px]">{step.subtitle}</span>
              </div>
            </button>
          ))}
        </div>

        {/* Step Detail Card Panel */}
        <div className="bg-white border border-gray-150 rounded-2xl p-6 sm:p-8 shadow-sm flex flex-col sm:flex-row gap-8 items-start">
          {/* Left Side Icon and Desc */}
          <div className="w-full sm:w-3/5 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-lg bg-[#C9A227]/10 flex items-center justify-center shrink-0">
                {activeData.icon}
              </div>
              <div>
                <h3 className="text-sm font-bold text-gray-900 leading-tight">Phase {activeData.id}: {activeData.title}</h3>
                <span className="text-[9px] text-gray-400 tracking-wider font-semibold block">{activeData.duration} estimated duration</span>
              </div>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed pt-2">
              {activeData.description}
            </p>
          </div>

          {/* Right Side deliverables List */}
          <div className="w-full sm:w-2/5 bg-gray-50 border border-gray-100 rounded-xl p-5">
            <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase block mb-3">Key Deliverables</span>
            <ul className="space-y-2">
              {activeData.deliverables.map((item, index) => (
                <li key={index} className="flex items-start gap-2 text-xs text-gray-700 font-medium">
                  <ArrowRight className="w-3.5 h-3.5 text-[#C9A227] mt-0.5 shrink-0" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>

      </div>
    </motion.div>
  );
};
