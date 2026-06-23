import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X, Phone } from 'lucide-react';
import { Logo } from './Logo';
import { BUSINESS_CONFIG } from '../config';

export const Navbar: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => location.pathname === path;

  // Solid white navbar with a clean bottom border as seen in the mockup
  const navContainerClass = "fixed top-0 left-0 w-full z-50 flex items-center justify-between px-6 sm:px-8 lg:px-12 h-20 bg-white border-b border-gray-200/80 shadow-sm";

  const linkClass = (path: string) => {
    const active = isActive(path);
    return `relative text-[12px] sm:text-[13px] font-bold tracking-[0.15em] uppercase transition-colors duration-200 cursor-pointer py-1.5 ${
      active
        ? 'text-[#C9A227]'
        : 'text-gray-800 hover:text-[#C9A227]'
    }`;
  };

  return (
    <nav className={navContainerClass}>
      {/* Logo on the left with title & subtitle as seen in mockup */}
      <Link 
        to="/" 
        className="flex items-center gap-3 select-none cursor-pointer text-[#0F172A]"
      >
        <Logo className="w-7 h-7 sm:w-8 h-8 text-[#C9A227]" />
        <div className="flex flex-col text-left">
          <span className="font-sans font-extrabold text-base sm:text-lg leading-tight tracking-tight text-[#0F172A]">
            {BUSINESS_CONFIG.name}
          </span>
          <span className="text-[9px] sm:text-[10px] text-gray-400 font-semibold tracking-wide mt-0.5">
            Building Quality. Building Trust.
          </span>
        </div>
      </Link>

      {/* Desktop Links: Uppercase and centered with active gold underlines */}
      <div className="hidden md:flex items-center gap-8 lg:gap-10">
        <Link to="/" className={linkClass('/')}>
          Home
          {isActive('/') && (
            <span className="absolute left-0 right-0 bottom-[-8px] h-[3px] bg-[#C9A227] rounded-full" />
          )}
        </Link>
        <Link to="/about" className={linkClass('/about')}>
          About Us
          {isActive('/about') && (
            <span className="absolute left-0 right-0 bottom-[-8px] h-[3px] bg-[#C9A227] rounded-full" />
          )}
        </Link>
        <Link to="/projects" className={linkClass('/projects')}>
          Projects
          {isActive('/projects') && (
            <span className="absolute left-0 right-0 bottom-[-8px] h-[3px] bg-[#C9A227] rounded-full" />
          )}
        </Link>
        <Link to="/process" className={linkClass('/process')}>
          Process
          {isActive('/process') && (
            <span className="absolute left-0 right-0 bottom-[-8px] h-[3px] bg-[#C9A227] rounded-full" />
          )}
        </Link>
        <Link to="/gallery" className={linkClass('/gallery')}>
          Gallery
          {isActive('/gallery') && (
            <span className="absolute left-0 right-0 bottom-[-8px] h-[3px] bg-[#C9A227] rounded-full" />
          )}
        </Link>
      </div>

      {/* Contact Button on the right: solid dark blue with phone icon, capitalized, hover scale */}
      <div className="flex items-center gap-4">
        <Link 
          to="/contact" 
          className="bg-[#0F172A] hover:bg-[#1E293B] text-white text-xs font-bold px-6 py-3 rounded-lg transition-all duration-300 hover:scale-[1.03] active:scale-95 cursor-pointer flex items-center gap-2 shadow-md uppercase tracking-wider"
        >
          <Phone className="w-3.5 h-3.5 fill-white text-white" />
          <span>Contact</span>
        </Link>
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="md:hidden w-9 h-9 rounded-full flex items-center justify-center transition-colors focus:outline-none cursor-pointer text-gray-900 hover:bg-gray-100"
          aria-label="Toggle menu"
        >
          {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
        </button>
      </div>

      {/* Mobile Dropdown Menu overlay */}
      {mobileMenuOpen && (
        <div className="absolute left-4 right-4 top-full mt-2 rounded-2xl bg-white ring-1 ring-black/5 px-6 py-4 shadow-xl z-50 flex flex-col gap-1 max-h-[85vh] overflow-y-auto">
          <Link 
            to="/" 
            onClick={() => setMobileMenuOpen(false)}
            className={`text-xs uppercase tracking-wider font-bold py-3.5 border-b border-gray-100 transition-colors text-left ${
              isActive('/') ? 'text-[#C9A227]' : 'text-gray-700 hover:text-gray-900'
            }`}
          >
            Home
          </Link>
          <Link 
            to="/about" 
            onClick={() => setMobileMenuOpen(false)}
            className={`text-xs uppercase tracking-wider font-bold py-3.5 border-b border-gray-100 transition-colors text-left ${
              isActive('/about') ? 'text-[#C9A227]' : 'text-gray-700 hover:text-gray-900'
            }`}
          >
            About Us
          </Link>
          <Link 
            to="/projects" 
            onClick={() => setMobileMenuOpen(false)}
            className={`text-xs uppercase tracking-wider font-bold py-3.5 border-b border-gray-100 transition-colors text-left ${
              isActive('/projects') ? 'text-[#C9A227]' : 'text-gray-700 hover:text-gray-900'
            }`}
          >
            Projects
          </Link>
          <Link 
            to="/process" 
            onClick={() => setMobileMenuOpen(false)}
            className={`text-xs uppercase tracking-wider font-bold py-3.5 border-b border-gray-100 transition-colors text-left ${
              isActive('/process') ? 'text-[#C9A227]' : 'text-gray-700 hover:text-gray-900'
            }`}
          >
            Process
          </Link>
          <Link 
            to="/gallery" 
            onClick={() => setMobileMenuOpen(false)}
            className={`text-xs uppercase tracking-wider font-bold py-3.5 last:border-b-0 transition-colors text-left ${
              isActive('/gallery') ? 'text-[#C9A227]' : 'text-gray-700 hover:text-gray-900'
            }`}
          >
            Gallery
          </Link>
        </div>
      )}
    </nav>
  );
};
