import React, { useState } from 'react';
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

export const Process: React.FC = () => {
  const [activeStep, setActiveStep] = useState(1);

  const steps: Step[] = [
    {
      id: 1,
      icon: <Users className="w-5 h-5 text-[#926f20]" />,
      title: "Consultation",
      subtitle: "Initial Discussion",
      duration: "1 - 2 Weeks",
      description: "We discuss your vision, architectural preferences, layout requirements, site zoning laws, and budget targets to align our design goals.",
      deliverables: ["Client requirements brief", "Initial site feasibility review", "Zoning guide check", "Consultation summary"]
    },
    {
      id: 2,
      icon: <PenTool className="w-5 h-5 text-[#926f20]" />,
      title: "Planning & Design",
      subtitle: "Concept Blueprints",
      duration: "4 - 6 Weeks",
      description: "Our architectural partners develop schematic floor plans, 3D exterior renderings, and finish schedules tailored to your design preferences.",
      deliverables: ["3D schematic renderings", "Floor plan options", "Finishes & materials palette", "Concept sign-off"]
    },
    {
      id: 3,
      icon: <DollarSign className="w-5 h-5 text-[#926f20]" />,
      title: "Cost Estimation",
      subtitle: "Itemized Quote",
      duration: "2 - 3 Weeks",
      description: "We compile an itemized list of all construction phases, structural materials, finishes, and labor contracts with absolute budget transparency.",
      deliverables: ["Itemized cost sheets", "Subcontractor bids list", "Value engineering options", "Budget agreement draft"]
    },
    {
      id: 4,
      icon: <FileText className="w-5 h-5 text-[#926f20]" />,
      title: "Approval & Doc",
      subtitle: "City Permits",
      duration: "4 - 8 Weeks",
      description: "We coordinate with city plan checks, environmental review boards, and local utilities to secure full building permits and formalize agreements.",
      deliverables: ["City building permit approval", "Environmental clearances", "Signed builder contracts", "Soil reports submit"]
    },
    {
      id: 5,
      icon: <HardHat className="w-5 h-5 text-[#926f20]" />,
      title: "Construction",
      subtitle: "Structural Execution",
      duration: "24 - 40 Weeks",
      description: "Breaking ground, foundation concrete pouring, steel/timber framing assembly, utility rough-ins (plumbing/electrical), drywall, and custom joinery installation.",
      deliverables: ["Reinforced foundation pour", "Steel framing inspection", "Utilities rough-in clear", "Drywall & stone fitting"]
    },
    {
      id: 6,
      icon: <CheckCircle className="w-5 h-5 text-[#926f20]" />,
      title: "Quality Inspection",
      subtitle: "Defect Testing",
      duration: "2 - 3 Weeks",
      description: "Comprehensive structural integrity audits, pressure testing for plumbing systems, HVAC efficiency testing, automation validation, and client walkthroughs.",
      deliverables: ["Third-party structural report", "Electrical safety validation", "Plumbing leak tests clear", "Detailed finish punch-list"]
    },
    {
      id: 7,
      icon: <Key className="w-5 h-5 text-[#926f20]" />,
      title: "Handover",
      subtitle: "Owner Move-in",
      duration: "1 - 2 Weeks",
      description: "We deliver city occupancy certificates, hand over keys, provide digital mechanical manuals, transfer appliance warranties, and finalize support structures.",
      deliverables: ["City occupancy certificate", "Warranties & appliance sheets", "Owner portal credentials", "Property keys handover"]
    }
  ];

  const activeData = steps.find(s => s.id === activeStep) || steps[0];

  return (
    <section id="process" className="max-w-4xl mx-auto px-5 sm:px-8 py-8 scroll-mt-20">
      {/* Header */}
      <div className="max-w-2xl mx-auto text-center mb-12">
        <span className="text-[11px] tracking-[0.2em] font-bold text-[#926f20] uppercase block mb-2">Our Process</span>
        <h2 className="text-3xl sm:text-4xl font-normal text-gray-900 tracking-tight leading-tight">
          How We Build Your Vision
        </h2>
        <div className="w-12 h-1 bg-[#b38b30] mx-auto mt-4" />
      </div>

      {/* Timeline Steps Icons Row */}
      <div className="relative flex flex-col md:flex-row justify-between items-center gap-6 mb-10">
        
        {/* Horizontal Line connector (desktop only) */}
        <div className="absolute top-[21px] left-[5%] right-[5%] h-[2px] bg-gray-100 hidden md:block z-0" />
        {/* Active line fill */}
        <div 
          className="absolute top-[21px] left-[5%] h-[2px] bg-[#b38b30] hidden md:block z-0 transition-all duration-500" 
          style={{ width: `${((activeStep - 1) / (steps.length - 1)) * 90}%` }}
        />

        {steps.map((step) => (
          <button
            key={step.id}
            onClick={() => setActiveStep(step.id)}
            className="relative z-10 flex md:flex-col items-center gap-3 md:gap-2.5 text-left md:text-center w-full md:w-auto bg-white p-3 md:p-0 rounded-xl border border-gray-100 md:border-none focus:outline-none"
          >
            {/* Number circle badge */}
            <div className={`w-11 h-11 rounded-full border-2 flex items-center justify-center text-sm font-bold transition-all duration-300 ${
              activeStep === step.id
                ? 'border-[#b38b30] bg-[#926f20]/5 text-[#926f20] scale-110 shadow-md shadow-[#926f20]/5'
                : 'border-gray-200 bg-white text-gray-400 hover:border-gray-400'
            }`}>
              {step.id}
            </div>

            {/* Label texts */}
            <div>
              <span className={`block text-xs font-bold transition-colors ${activeStep === step.id ? 'text-[#926f20]' : 'text-gray-700'}`}>
                {step.title}
              </span>
              <span className="block text-[10px] text-gray-400 font-light truncate md:max-w-[120px]">{step.subtitle}</span>
            </div>
          </button>
        ))}
      </div>

      {/* Step Detail Card Panel */}
      <div className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 shadow-sm text-left flex flex-col sm:flex-row gap-8 items-start animate-fade-in">
        
        {/* Left Side Icon and Desc */}
        <div className="w-full sm:w-3/5 space-y-4">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 rounded-lg bg-[#926f20]/10 flex items-center justify-center">
              {activeData.icon}
            </div>
            <div>
              <h3 className="text-base font-bold text-gray-900 leading-tight">Phase {activeData.id}: {activeData.title}</h3>
              <span className="text-[10px] text-gray-400 tracking-wider font-semibold block">{activeData.duration} estimated duration</span>
            </div>
          </div>
          <p className="text-sm text-gray-600 leading-relaxed pt-2">
            {activeData.description}
          </p>
        </div>

        {/* Right Side deliverables List */}
        <div className="w-full sm:w-2/5 bg-gray-50 border border-gray-100 rounded-xl p-5">
          <span className="text-[10px] font-bold text-gray-400 tracking-wider uppercase block mb-3">Key Deliverables</span>
          <ul className="space-y-2">
            {activeData.deliverables.map((item, index) => (
              <li key={index} className="flex items-start gap-2 text-xs text-gray-700 font-medium">
                <ArrowRight className="w-3.5 h-3.5 text-[#926f20] mt-0.5 shrink-0" />
                <span>{item}</span>
              </li>
            ))}
          </ul>
        </div>

      </div>
    </section>
  );
};
