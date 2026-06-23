import React from 'react';
import { Link } from 'react-router-dom';
import { Logo } from './Logo';
import { Phone, Mail, MapPin } from 'lucide-react';
import { BUSINESS_CONFIG } from '../config';

export const Footer: React.FC = () => {
  const showPhone = BUSINESS_CONFIG.phone !== "[ENTER_PHONE_NUMBER]" ? BUSINESS_CONFIG.phone : "Phone Number Placeholder";
  const showAddress = BUSINESS_CONFIG.address !== "[ENTER_OFFICE_ADDRESS]" ? BUSINESS_CONFIG.address : "Office Address Placeholder";
  const showEmail = BUSINESS_CONFIG.email !== "[ENTER_EMAIL_ADDRESS]" ? BUSINESS_CONFIG.email : "email@placeholder.com";
  const showRera = BUSINESS_CONFIG.reraLicense !== "[ENTER_RERA_REGISTRATION]" ? BUSINESS_CONFIG.reraLicense : "RERA Registration Placeholder";

  return (
    <footer className="bg-[#0F172A] border-t border-gray-800 text-gray-400 py-16 px-5 sm:px-8 mt-16 text-left relative z-20">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 sm:gap-10">
        
        {/* Left branding */}
        <div className="space-y-5">
          <Link to="/" className="flex items-center gap-2.5 text-white font-bold text-lg tracking-tight select-none">
            <Logo className="w-6 h-6 text-[#C9A227]" />
            <span className="font-sans font-bold">{BUSINESS_CONFIG.name}</span>
          </Link>
          <p className="text-xs text-gray-455 leading-relaxed max-w-xs">
            Specializing in custom luxury villas, duplex homes, and turnkey residential projects in Ongole and Andhra Pradesh with structural warranty and complete transparency.
          </p>
          {/* Social media links */}
          <div className="flex items-center gap-3.5 pt-2">
            <a 
              href="https://instagram.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-colors animate-none"
              aria-label="Instagram"
            >
              <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5"></line>
              </svg>
            </a>
            <a 
              href="https://facebook.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-colors animate-none"
              aria-label="Facebook"
            >
              <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
              </svg>
            </a>
            <a 
              href="https://youtube.com" 
              target="_blank" 
              rel="noopener noreferrer" 
              className="w-8 h-8 rounded-full bg-white/5 hover:bg-white/10 text-gray-400 hover:text-white flex items-center justify-center transition-colors animate-none"
              aria-label="YouTube"
            >
              <svg className="w-4 h-4 fill-none stroke-current" strokeWidth="2" viewBox="0 0 24 24" strokeLinecap="round" strokeLinejoin="round">
                <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z"></path>
                <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02"></polygon>
              </svg>
            </a>
          </div>
        </div>

        {/* Links Column */}
        <div>
          <h4 className="text-[11px] font-bold tracking-widest text-white uppercase mb-4">Navigations</h4>
          <ul className="space-y-3 text-xs">
            <li><Link to="/about" className="hover:text-white transition-colors">About Us</Link></li>
            <li><Link to="/projects" className="hover:text-white transition-colors">Projects Portfolio</Link></li>
            <li><Link to="/process" className="hover:text-white transition-colors">Construction Process</Link></li>
            <li><Link to="/gallery" className="hover:text-white transition-colors">Media Gallery</Link></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Contact Office</Link></li>
          </ul>
        </div>

        {/* Quality & Process */}
        <div>
          <h4 className="text-[11px] font-bold tracking-widest text-white uppercase mb-4">Quality & License</h4>
          <ul className="space-y-3 text-xs">
            <li><span className="text-gray-500">AP RERA: {showRera}</span></li>
            <li><span className="text-gray-500">Registered Residential Contractor</span></li>
            <li><span className="text-gray-500">Ongole & Andhra Pradesh Builder</span></li>
            <li><Link to="/contact" className="hover:text-white transition-colors">Request Estimation Quote</Link></li>
          </ul>
        </div>

        {/* Right Contacts */}
        <div className="space-y-4 text-xs">
          <h4 className="text-[11px] font-bold tracking-widest text-white uppercase mb-4">Office Location</h4>
          <div className="flex gap-2.5 items-start">
            <MapPin className="w-4 h-4 text-[#C9A227] shrink-0 mt-0.5" />
            <span className="leading-relaxed text-gray-300">{showAddress}</span>
          </div>
          <div className="flex gap-2.5 items-center">
            <Phone className="w-4 h-4 text-[#C9A227] shrink-0" />
            <span className="text-gray-300">{showPhone}</span>
          </div>
          <div className="flex gap-2.5 items-center">
            <Mail className="w-4 h-4 text-[#C9A227] shrink-0" />
            <span className="text-gray-300">{showEmail}</span>
          </div>
        </div>

      </div>

      <div className="max-w-6xl mx-auto border-t border-gray-800/80 mt-12 pt-6 flex flex-col sm:flex-row justify-between items-center gap-4 text-[10px] text-gray-500">
        <div>
          &copy; {new Date().getFullYear()} Varma Constructions. All rights reserved.
        </div>
        <div className="flex gap-4">
          <Link to="/" className="hover:text-gray-300">Privacy Policy</Link>
          <Link to="/" className="hover:text-gray-300">Terms of Service</Link>
          <span className="text-gray-600">AP Construction Standards</span>
        </div>
      </div>
    </footer>
  );
};
