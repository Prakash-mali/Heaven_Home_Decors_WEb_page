import React, { useState, useEffect } from 'react';
import { 
  Compass, 
  Phone, 
  MapPin, 
  Calendar, 
  Menu, 
  X, 
  Sparkles,
  ChevronRight
} from 'lucide-react';
import { STUDIO_INFO } from '../data/testimonialsData';

interface NavbarProps {
  onOpenBooking: () => void;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenBooking }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { label: 'Portfolio', href: '#portfolio' },
    { label: 'Services', href: '#services' },
    { label: 'How It Works', href: '#process' },
    { label: 'Cost Estimator', href: '#estimator' },
    { label: 'Testimonials', href: '#testimonials' },
    { label: 'Studio & Location', href: '#location' },
  ];

  return (
    <>
      {/* Top Notification / Contact Bar */}
      <div className="bg-[#E5E1DA]/60 text-[#5A524A] text-xs py-2 px-4 border-b border-[#D9D1C7] hidden sm:block">
        <div className="max-w-7xl mx-auto flex justify-between items-center">
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#3E362E] font-medium">
              <Sparkles className="w-3.5 h-3.5 text-[#8B7E74]" />
              <span>45-Day Handover Guarantee & 10-Year Warranty</span>
            </span>
            <span className="text-[#8B7E74]/40">•</span>
            <span className="flex items-center gap-1 text-[#5A524A]">
              <MapPin className="w-3.5 h-3.5 text-[#8B7E74]" />
              Sai Nagar Rd, Thotapalem, Vizianagaram
            </span>
          </div>
          <div className="flex items-center gap-5">
            <a 
              href={`tel:${STUDIO_INFO.phone}`} 
              className="flex items-center gap-1.5 hover:text-[#3E362E] transition-colors font-medium text-[#5A524A]"
            >
              <Phone className="w-3.5 h-3.5 text-[#8B7E74]" />
              <span>{STUDIO_INFO.phone}</span>
            </a>
            <span className="text-[#8B7E74]/40">•</span>
            <a 
              href={STUDIO_INFO.googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="hover:text-[#3E362E] text-[#8B7E74] transition-colors flex items-center gap-1 font-medium"
            >
              <span>5.0 ★ Google Rating</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Sticky Header */}
      <header
        className={`sticky top-0 z-40 transition-all duration-300 ${
          isScrolled
            ? 'bg-[#F8F5F2]/95 backdrop-blur-md border-b border-[#E5E1DA] shadow-sm py-3.5'
            : 'bg-[#F8F5F2]/80 backdrop-blur-sm border-b border-[#E5E1DA]/60 py-4'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-3 group">
            <div className="w-9 h-9 rounded-full bg-[#8B7E74] flex items-center justify-center text-white font-bold shadow-sm group-hover:scale-105 transition-transform">
              <Compass className="w-4 h-4 text-white" />
            </div>
            <div>
              <span className="text-xl sm:text-2xl font-serif tracking-tight text-[#3E362E] flex items-center gap-1.5">
                HEAVEN <span className="text-[#8B7E74] italic font-normal">INTERIOR'S</span>
              </span>
              <span className="block text-[9px] tracking-[0.2em] text-[#8B7E74] uppercase font-semibold">
                Vizianagaram • Studio & Execution
              </span>
            </div>
          </a>

          {/* Desktop Nav Items */}
          <nav className="hidden lg:flex items-center gap-8">
            {navLinks.map((link) => (
              <a
                key={link.label}
                href={link.href}
                className="text-xs uppercase tracking-widest font-medium text-[#5A524A] hover:text-[#3E362E] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>

          {/* Action CTA Buttons */}
          <div className="hidden sm:flex items-center gap-3">
            <a
              href={`tel:${STUDIO_INFO.phone}`}
              className="px-4 py-2 rounded-full border border-[#D9D1C7] bg-white/60 text-[#3E362E] hover:border-[#8B7E74] hover:bg-white text-xs uppercase tracking-wider font-semibold transition-all flex items-center gap-2"
            >
              <Phone className="w-3.5 h-3.5 text-[#8B7E74]" />
              <span>Call Us</span>
            </a>
            <button
              onClick={onOpenBooking}
              id="nav-book-consultation-btn"
              className="px-5 py-2.5 rounded-full bg-[#3E362E] hover:bg-[#8B7E74] text-white font-medium text-xs uppercase tracking-widest transition-all shadow-sm flex items-center gap-2 hover:scale-[1.02] active:scale-[0.98]"
            >
              <Calendar className="w-3.5 h-3.5 text-[#E5E1DA]" />
              <span>Book Consultation</span>
            </button>
          </div>

          {/* Mobile Menu Toggle */}
          <div className="flex sm:hidden items-center gap-2">
            <button
              onClick={onOpenBooking}
              className="px-3.5 py-1.5 rounded-full bg-[#3E362E] text-white text-xs uppercase tracking-wider font-semibold"
            >
              Consult
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-full text-[#3E362E] hover:bg-[#E5E1DA] transition-colors"
              aria-label="Toggle menu"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu */}
        {mobileMenuOpen && (
          <div className="lg:hidden bg-[#F8F5F2] border-b border-[#E5E1DA] px-5 pt-4 pb-6 space-y-4 animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="grid gap-2">
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className="px-3 py-2.5 rounded-xl text-[#3E362E] hover:bg-[#E5E1DA] text-xs uppercase tracking-wider font-medium flex items-center justify-between"
                >
                  <span>{link.label}</span>
                  <ChevronRight className="w-4 h-4 text-[#8B7E74]" />
                </a>
              ))}
            </div>

            <div className="pt-3 border-t border-[#E5E1DA] flex flex-col gap-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenBooking();
                }}
                className="w-full py-3 rounded-full bg-[#3E362E] text-white font-semibold text-xs uppercase tracking-widest flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#E5E1DA]" />
                <span>Book Free Design Consultation</span>
              </button>
              <div className="flex gap-2">
                <a
                  href={`tel:${STUDIO_INFO.phone}`}
                  className="flex-1 py-2.5 rounded-full border border-[#D9D1C7] bg-white text-[#3E362E] text-center text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-1.5"
                >
                  <Phone className="w-3.5 h-3.5 text-[#8B7E74]" />
                  Call Studio
                </a>
                <a
                  href={STUDIO_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex-1 py-2.5 rounded-full border border-[#D9D1C7] bg-white text-[#3E362E] text-center text-xs uppercase tracking-wider font-medium flex items-center justify-center gap-1.5"
                >
                  <MapPin className="w-3.5 h-3.5 text-[#8B7E74]" />
                  Google Maps
                </a>
              </div>
            </div>
          </div>
        )}
      </header>
    </>
  );
};
