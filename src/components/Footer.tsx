import React from 'react';
import { 
  Compass, 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  ExternalLink, 
  Heart,
  Star,
  ShieldCheck
} from 'lucide-react';
import { STUDIO_INFO } from '../data/testimonialsData';

export const Footer: React.FC = () => {
  return (
    <footer className="bg-[#3E362E] text-[#D9D1C7] border-t border-[#5A524A]/30 pt-16 pb-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Main 4-Column Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-10 pb-12 border-b border-[#5A524A]/40 text-left">
          
          {/* Col 1: Brand & Bio (4 cols) */}
          <div className="lg:col-span-4 space-y-4">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-full bg-[#8B7E74] flex items-center justify-center text-white font-bold shadow-sm">
                <Compass className="w-5 h-5 text-white" />
              </div>
              <div>
                <span className="text-xl font-serif font-bold tracking-tight text-white flex items-center gap-1.5">
                  HEAVEN <span className="text-[#C7B7A3] italic font-serif">INTERIOR'S</span>
                </span>
                <span className="block text-[10px] tracking-widest text-[#D9D1C7]/70 uppercase font-medium">
                  Vizianagaram • Studio & Execution
                </span>
              </div>
            </div>

            <p className="text-xs text-[#D9D1C7]/80 leading-relaxed">
              Vizianagaram’s trusted interior architecture studio specializing in modular kitchens, false ceilings, luxury master bedrooms, and turnkey residential spaces with a 10-Year Warranty.
            </p>

            <div className="pt-2 flex items-center gap-3">
              <a
                href={STUDIO_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#5A524A]/40 border border-[#8B7E74]/40 text-[#E5E1DA] text-xs font-medium hover:bg-[#5A524A]/70 transition-colors"
              >
                <Star className="w-3.5 h-3.5 fill-[#E5E1DA] text-[#E5E1DA]" />
                <span>5.0 Rating on Google Maps</span>
              </a>
            </div>
          </div>

          {/* Col 2: Quick Links (2 cols) */}
          <div className="lg:col-span-2 space-y-3">
            <h4 className="text-xs font-serif font-bold text-white uppercase tracking-widest">
              Quick Links
            </h4>
            <ul className="space-y-2 text-xs text-[#D9D1C7]/80">
              <li>
                <a href="#portfolio" className="hover:text-white transition-colors">Design Portfolio</a>
              </li>
              <li>
                <a href="#services" className="hover:text-white transition-colors">Our Services</a>
              </li>
              <li>
                <a href="#process" className="hover:text-white transition-colors">How It Works</a>
              </li>
              <li>
                <a href="#estimator" className="hover:text-white transition-colors">Cost Estimator</a>
              </li>
              <li>
                <a href="#testimonials" className="hover:text-white transition-colors">Client Reviews</a>
              </li>
              <li>
                <a href="#location" className="hover:text-white transition-colors">Studio & Map</a>
              </li>
            </ul>
          </div>

          {/* Col 3: Services (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-serif font-bold text-white uppercase tracking-widest">
              Core Services
            </h4>
            <ul className="space-y-2 text-xs text-[#D9D1C7]/80">
              <li>Modular Kitchen (Blum & Hafele)</li>
              <li>Gyproc False Ceilings & Lighting</li>
              <li>Fluted Glass & Suede Wardrobes</li>
              <li>Italian Marble TV Entertainment Units</li>
              <li>Master Bedroom Sanctuary Suites</li>
              <li>Commercial & Executive Offices</li>
            </ul>
          </div>

          {/* Col 4: Studio Contact (3 cols) */}
          <div className="lg:col-span-3 space-y-3">
            <h4 className="text-xs font-serif font-bold text-white uppercase tracking-widest">
              Studio Address
            </h4>
            <div className="space-y-2.5 text-xs text-[#D9D1C7]/80">
              <p className="flex items-start gap-2">
                <MapPin className="w-4 h-4 text-[#C7B7A3] shrink-0 mt-0.5" />
                <span>{STUDIO_INFO.address}</span>
              </p>
              <p className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-[#C7B7A3] shrink-0" />
                <a href={`tel:${STUDIO_INFO.phone}`} className="hover:text-white transition-colors">
                  {STUDIO_INFO.phone}
                </a>
              </p>
              <p className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-[#C7B7A3] shrink-0" />
                <span>{STUDIO_INFO.email}</span>
              </p>
              <p className="flex items-center gap-2">
                <Clock className="w-4 h-4 text-[#C7B7A3] shrink-0" />
                <span>9:30 AM – 8:30 PM (Mon-Sat)</span>
              </p>
            </div>
          </div>

        </div>

        {/* Bottom Copyright & Trust Bar */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs text-[#D9D1C7]/60">
          <p>© {new Date().getFullYear()} {STUDIO_INFO.name}. All Rights Reserved. Sai Nagar Rd, Vizianagaram, AP 535003.</p>
          <div className="flex items-center gap-4">
            <span className="flex items-center gap-1.5 text-[#D9D1C7]/80">
              <ShieldCheck className="w-3.5 h-3.5 text-[#C7B7A3]" />
              10-Year Warranty Guaranteed
            </span>
            <span>•</span>
            <a 
              href={STUDIO_INFO.googleMapsUrl} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="text-[#E5E1DA] hover:underline flex items-center gap-1"
            >
              <span>View on Google Maps</span>
              <ExternalLink className="w-3 h-3" />
            </a>
          </div>
        </div>

      </div>
    </footer>
  );
};
