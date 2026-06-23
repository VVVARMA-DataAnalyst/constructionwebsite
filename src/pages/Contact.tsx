import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Send, CheckCircle2, Phone, Mail, Clock, MessageSquare, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config';

const pageVariants = {
  initial: { opacity: 0, y: 15 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  exit: { opacity: 0, y: -15, transition: { duration: 0.4 } }
};

export const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [projectType, setProjectType] = useState('Villas');
  const [plotSize, setPlotSize] = useState('');
  const [message, setMessage] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (name.trim() && email.trim()) {
      setSubmitted(true);
    }
  };

  const handleReset = () => {
    setName('');
    setEmail('');
    setProjectType('Villas');
    setPlotSize('');
    setMessage('');
    setSubmitted(false);
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
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&w=1920&q=80')] bg-cover bg-center opacity-15" />
        <div className="relative z-10 max-w-4xl mx-auto px-5">
          <span className="text-[11px] tracking-[0.25em] font-bold text-[#b38b30] uppercase block mb-3">Connect With Us</span>
          <h1 className="text-3xl sm:text-5xl font-normal leading-tight tracking-tight">Contact Varma Constructions</h1>
          <p className="mt-4 text-xs sm:text-sm text-gray-400 max-w-xl mx-auto leading-relaxed">
            Inquire about custom building, renovations, scheduling a site visit, or checking local zoning guidelines.
          </p>
        </div>
      </section>

      {/* Main Form container */}
      <div className="max-w-6xl mx-auto px-5 sm:px-8 py-16 space-y-12">
        <div className="bg-white border border-gray-150 rounded-3xl overflow-hidden shadow-sm flex flex-col lg:flex-row items-stretch justify-between">
          
          {/* Left Side Contact Cards Info */}
          <div className="w-full lg:w-2/5 bg-gray-900 text-white p-8 text-left flex flex-col justify-between space-y-8">
            <div>
              <h3 className="text-lg font-bold text-white mb-2">Varma Constructions Office</h3>
              <p className="text-xs text-gray-400 leading-relaxed mb-6">
                Contact our engineering desk directly or submit an inquiry to schedule an architectural and zoning evaluation.
              </p>

              <div className="space-y-4">
                <div className="flex gap-3 items-start text-xs">
                  <Phone className="w-4 h-4 text-[#C9A227] shrink-0" />
                  <div>
                    <span className="text-gray-400 block font-light">TELEPHONE</span>
                    <span className="font-semibold text-gray-200">
                      {BUSINESS_CONFIG.phone !== "[ENTER_PHONE_NUMBER]" ? BUSINESS_CONFIG.phone : "Phone Placeholder"}
                    </span>
                  </div>
                </div>
                <div className="flex gap-3 items-start text-xs">
                  <Mail className="w-4 h-4 text-[#C9A227] shrink-0" />
                  <div>
                    <span className="text-gray-400 block font-light">EMAIL ADDRESS</span>
                    <span className="font-semibold text-gray-200">
                      {BUSINESS_CONFIG.email !== "[ENTER_EMAIL_ADDRESS]" ? BUSINESS_CONFIG.email : "email@placeholder.com"}
                    </span>
                  </div>
                </div>
                <div className="flex gap-3 items-start text-xs">
                  <MapPin className="w-4 h-4 text-[#C9A227] shrink-0" />
                  <div>
                    <span className="text-gray-400 block font-light">OFFICE ADDRESS</span>
                    <span className="font-semibold text-gray-200">
                      {BUSINESS_CONFIG.address !== "[ENTER_OFFICE_ADDRESS]" ? BUSINESS_CONFIG.address : "Office Address Placeholder"}
                    </span>
                  </div>
                </div>
                <div className="flex gap-3 items-start text-xs">
                  <Clock className="w-4 h-4 text-[#C9A227] shrink-0" />
                  <div>
                    <span className="text-gray-400 block font-light">OFFICE HOURS</span>
                    <span className="font-semibold text-gray-200">Mon - Sat: 9:00 AM - 6:00 PM IST</span>
                  </div>
                </div>
              </div>

              {/* Quick Contact Buttons */}
              <div className="flex flex-col gap-3 pt-6 border-t border-white/10 mt-6">
                <a 
                  href={BUSINESS_CONFIG.whatsappNumber !== "[ENTER_WHATSAPP_NUMBER]" ? `https://wa.me/${BUSINESS_CONFIG.whatsappNumber}` : `https://wa.me/919440255225`} 
                  target="_blank" 
                  rel="noopener noreferrer"
                  className="bg-[#25D366] hover:bg-[#20ba5a] text-white text-xs font-semibold px-5 py-2.5 rounded-full flex items-center justify-center gap-2 transition-colors active:scale-95 shadow-sm"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chat on WhatsApp</span>
                </a>
                <a 
                  href={BUSINESS_CONFIG.phone !== "[ENTER_PHONE_NUMBER]" ? `tel:${BUSINESS_CONFIG.phone}` : `tel:+919440255225`}
                  className="bg-white/10 hover:bg-white/15 border border-white/20 text-white text-xs font-semibold px-5 py-2.5 rounded-full flex items-center justify-center gap-2 transition-colors active:scale-95 shadow-sm"
                >
                  <Phone className="w-4 h-4" />
                  <span>Call Main Office</span>
                </a>
              </div>

            </div>

            <div className="border-t border-white/10 pt-6 text-[10px] text-gray-500 leading-normal">
              Varma Constructions & Co. is a registered residential construction firm in Andhra Pradesh. AP RERA Registration: {BUSINESS_CONFIG.reraLicense !== "[ENTER_RERA_REGISTRATION]" ? BUSINESS_CONFIG.reraLicense : "RERA Placeholder"}.
            </div>
          </div>

          {/* Right Side Form Panel */}
          <div className="w-full lg:w-3/5 p-8 text-left">
            {!submitted ? (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Name */}
                  <div className="space-y-2">
                    <label htmlFor="name-input" className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider">Your Name</label>
                    <input
                      id="name-input"
                      type="text"
                      required
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      placeholder="John Doe"
                      className="w-full px-4 py-2 border border-gray-250 rounded-lg text-sm text-gray-900 bg-white placeholder-gray-400 focus:border-gray-400 outline-none focus:ring-1 focus:ring-gray-400 transition-all duration-300"
                    />
                  </div>
                  {/* Email */}
                  <div className="space-y-2">
                    <label htmlFor="email-input" className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider">Email Address</label>
                    <input
                      id="email-input"
                      type="email"
                      required
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      placeholder="john@example.com"
                      className="w-full px-4 py-2 border border-gray-250 rounded-lg text-sm text-gray-900 bg-white placeholder-gray-400 focus:border-gray-400 outline-none focus:ring-1 focus:ring-gray-400 transition-all duration-300"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  {/* Project Type */}
                  <div className="space-y-2">
                    <label htmlFor="project-select" className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider">Project Category</label>
                    <select
                      id="project-select"
                      value={projectType}
                      onChange={(e) => setProjectType(e.target.value)}
                      className="w-full px-4 py-2 border border-gray-250 rounded-lg text-sm text-gray-900 bg-white focus:border-gray-400 outline-none focus:ring-1 focus:ring-gray-400 transition-all duration-300 cursor-pointer"
                    >
                      <option value="Villas">Villas</option>
                      <option value="Luxury Homes">Luxury Homes</option>
                      <option value="Duplex Houses">Duplex Houses</option>
                      <option value="Ongoing Projects">Ongoing Projects</option>
                    </select>
                  </div>
                  {/* Plot size */}
                  <div className="space-y-2">
                    <label htmlFor="area-input" className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider">Plot Size (est. sq ft)</label>
                    <input
                      id="area-input"
                      type="text"
                      value={plotSize}
                      onChange={(e) => setPlotSize(e.target.value)}
                      placeholder="e.g. 5,000 sq ft"
                      className="w-full px-4 py-2 border border-gray-250 rounded-lg text-sm text-gray-900 bg-white placeholder-gray-400 focus:border-gray-400 outline-none focus:ring-1 focus:ring-gray-400 transition-all duration-300"
                    />
                  </div>
                </div>

                {/* Message */}
                <div className="space-y-2">
                  <label htmlFor="msg-textarea" className="block text-[11px] font-bold text-gray-400 uppercase tracking-wider">Project Scope / Details</label>
                  <textarea
                    id="msg-textarea"
                    rows={4}
                    value={message}
                    onChange={(e) => setMessage(e.target.value)}
                    placeholder="Describe your design goals, desired location, special materials, or structural constraints..."
                    className="w-full px-4 py-2 border border-gray-250 rounded-lg text-sm text-gray-900 bg-white placeholder-gray-400 focus:border-gray-400 outline-none focus:ring-1 focus:ring-gray-400 transition-all duration-300 resize-y"
                  />
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="bg-gray-900 hover:bg-gray-800 text-white text-xs font-semibold px-6 py-2.5 rounded-full transition-colors flex items-center justify-center gap-1.5 focus:outline-none"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Submit Consultation Request</span>
                </button>
              </form>
            ) : (
              /* Submission success card */
              <div className="h-full flex flex-col justify-center items-center text-center p-6 space-y-4 animate-fade-up">
                <CheckCircle2 className="w-12 h-12 text-[#28c840]" />
                <h3 className="text-xl font-bold text-gray-900">Request Received, {name}!</h3>
                <p className="text-sm text-gray-600 leading-relaxed max-w-sm">
                  Our architectural and structural engineering team will review your project parameters for **{projectType}** ({plotSize ? `${plotSize}` : 'unspecified plot size'}) and contact you at **{email}** within 24 business hours.
                </p>
                <button
                  onClick={handleReset}
                  className="text-xs font-semibold text-[#926f20] hover:text-[#b38b30] focus:outline-none pt-2"
                >
                  Send Another Inquiry
                </button>
              </div>
            )}
          </div>

        </div>

        {/* Embedded Map Section */}
        <div className="rounded-3xl overflow-hidden shadow-sm border border-gray-150 w-full relative h-[400px]">
          <iframe 
            title="Varma Constructions Office Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3829.8398492067756!2d80.03362141517726!3d15.502844858066597!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a4b0114092b77a7%3A0x95c73fbdf3f84f04!2sMangamuru%20Rd%2C%20Ongole%2C%20Andhra%20Pradesh!5e0!3m2!1sen!2sin!4v1716942000000!5m2!1sen!2sin"
            className="absolute inset-0 w-full h-full border-0 grayscale opacity-85 hover:grayscale-0 transition-all duration-500"
            allowFullScreen
            loading="lazy"
          />
        </div>
      </div>
    </motion.div>
  );
};
