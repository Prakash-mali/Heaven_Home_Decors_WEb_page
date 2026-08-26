import React from 'react';
import { 
  Sparkles, 
  Calendar, 
  ArrowRight, 
  ShieldCheck, 
  Clock, 
  Star, 
  Layers, 
  CheckCircle2, 
  Eye, 
  MapPin
} from 'lucide-react';
import heroImg from '../assets/images/heaven_interior_hero_1787742505565.jpg';
import { STUDIO_INFO } from '../data/testimonialsData';

interface HeroProps {
  onOpenBooking: () => void;
  onExplorePortfolio: () => void;
  onOpenEstimator: () => void;
}

export const Hero: React.FC<HeroProps> = ({ 
  onOpenBooking, 
  onExplorePortfolio,
  onOpenEstimator 
}) => {
  return (
    <section className="relative overflow-hidden bg-[#F8F5F2] text-[#3E362E] pt-10 pb-16 lg:pt-16 lg:pb-24 border-b border-[#E5E1DA]">
      {/* Subtle Background Organic Glows */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-[#D9D1C7]/30 blur-[120px] pointer-events-none rounded-full" />
      <div className="absolute top-0 right-0 w-[400px] h-[400px] bg-[#C7B7A3]/20 blur-[100px] pointer-events-none rounded-full" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid lg:grid-cols-12 gap-10 lg:gap-12 items-center">
          
          {/* Left Column: Heading & Value Proposition */}
          <div className="lg:col-span-7 space-y-6 text-left">
            {/* Location & Distinction Tag */}
            <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/80 border border-[#D9D1C7] text-[#5A524A] text-xs font-medium tracking-wide shadow-sm">
              <span className="w-2 h-2 rounded-full bg-[#8B7E74] animate-pulse" />
              <span className="text-xs uppercase tracking-widest text-[#3E362E] font-semibold">Vizianagaram Studio</span>
              <span className="text-[#8B7E74]/40">•</span>
              <span className="text-[#5A524A] flex items-center gap-1">
                <MapPin className="w-3 h-3 text-[#8B7E74]" />
                Sai Nagar Rd
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-serif text-[#3E362E] leading-tight">
                Curated Spaces <br className="hidden sm:inline" />
                <span className="italic text-[#8B7E74]">for intentional living.</span>
              </h1>
              <p className="text-[#5A524A] text-base sm:text-lg max-w-2xl font-normal leading-relaxed">
                Welcome to <strong className="text-[#3E362E] font-semibold">{STUDIO_INFO.name}</strong>. We craft bespoke residential & commercial interiors in Vizianagaram with personalized 3D design walkthroughs, precision modular carpentry, and guaranteed 45-day handover.
              </p>
            </div>

            {/* Key Value Badges */}
            <div className="grid grid-cols-2 sm:grid-cols-3 gap-3 pt-2">
              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/80 border border-[#E5E1DA] shadow-sm">
                <Clock className="w-4 h-4 text-[#8B7E74] shrink-0" />
                <div className="text-xs">
                  <p className="font-semibold text-[#3E362E]">45-Day Handover</p>
                  <p className="text-[#8B7E74] text-[11px]">Guaranteed timeline</p>
                </div>
              </div>

              <div className="flex items-center gap-2.5 p-3 rounded-2xl bg-white/80 border border-[#E5E1DA] shadow-sm">
                <ShieldCheck className="w-4 h-4 text-[#8B7E74] shrink-0" />
                <div className="text-xs">
                  <p className="font-semibold text-[#3E362E]">10-Year Warranty</p>
                  <p className="text-[#8B7E74] text-[11px]">BWP marine grade ply</p>
                </div>
              </div>

              <div className="col-span-2 sm:col-span-1 flex items-center gap-2.5 p-3 rounded-2xl bg-white/80 border border-[#E5E1DA] shadow-sm">
                <Layers className="w-4 h-4 text-[#8B7E74] shrink-0" />
                <div className="text-xs">
                  <p className="font-semibold text-[#3E362E]">Free 3D Design</p>
                  <p className="text-[#8B7E74] text-[11px]">Interactive walkthrough</p>
                </div>
              </div>
            </div>

            {/* Action CTAs */}
            <div className="flex flex-col sm:flex-row items-stretch sm:items-center gap-3.5 pt-3">
              <button
                onClick={onOpenBooking}
                id="hero-book-consultation-btn"
                className="px-7 py-3.5 rounded-full bg-[#3E362E] hover:bg-[#8B7E74] text-[#F8F5F2] font-semibold text-xs uppercase tracking-widest transition-all shadow-md flex items-center justify-center gap-2.5 hover:translate-y-[-1px]"
              >
                <Calendar className="w-4 h-4 text-[#E5E1DA]" />
                <span>Book Consultation</span>
              </button>

              <button
                onClick={onExplorePortfolio}
                id="hero-view-portfolio-btn"
                className="px-6 py-3.5 rounded-full bg-white/80 hover:bg-white border border-[#D9D1C7] text-[#3E362E] font-semibold text-xs uppercase tracking-widest transition-all flex items-center justify-center gap-2 shadow-sm"
              >
                <span>View Portfolio</span>
                <ArrowRight className="w-3.5 h-3.5 text-[#8B7E74]" />
              </button>
            </div>

            {/* Estimator Prompt Link */}
            <div className="pt-1 flex items-center gap-2 text-xs text-[#5A524A]">
              <Sparkles className="w-3.5 h-3.5 text-[#8B7E74]" />
              <span>Planning your budget?</span>
              <button 
                onClick={onOpenEstimator}
                className="text-[#3E362E] font-semibold underline decoration-[#8B7E74] hover:text-[#8B7E74] inline-flex items-center gap-1"
              >
                Calculate Instant 1/2/3 BHK Estimate &rarr;
              </button>
            </div>

            {/* Trust Badges Bar */}
            <div className="pt-4 border-t border-[#E5E1DA] flex flex-wrap items-center gap-y-3 gap-x-6 text-xs text-[#5A524A]">
              <div className="flex items-center gap-1 text-[#8B7E74] font-bold">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} className="w-3.5 h-3.5 fill-[#8B7E74] text-[#8B7E74]" />
                ))}
                <span className="text-[#3E362E] ml-1 font-semibold">5.0 ★ on Google Maps</span>
              </div>
              <span className="text-[#D9D1C7]">•</span>
              <span className="text-[#5A524A] font-medium">450+ Homes Delivered in AP</span>
              <span className="text-[#D9D1C7]">•</span>
              <span className="text-[#5A524A] font-medium">Zero Hidden Charges</span>
            </div>
          </div>

          {/* Right Column: Hero Visual Showcase */}
          <div className="lg:col-span-5 relative">
            <div className="relative rounded-[32px] overflow-hidden border border-[#E5E1DA] shadow-xl bg-[#E5E1DA] group p-3">
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src={heroImg}
                  alt="Heaven Interiors Luxury Living Room Showcase"
                  className="w-full h-[380px] sm:h-[460px] lg:h-[480px] object-cover transition-transform duration-700 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                
                {/* Subtle Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E362E]/80 via-transparent to-transparent pointer-events-none" />

                {/* Floating Badge: Recent Handover in Sai Nagar */}
                <div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md border border-[#E5E1DA] px-3.5 py-2 rounded-2xl shadow-sm">
                  <div className="flex items-center gap-2">
                    <div className="w-2 h-2 rounded-full bg-[#8B7E74] animate-ping" />
                    <div>
                      <p className="text-[11px] font-bold text-[#3E362E] uppercase tracking-wider">Recent Handover</p>
                      <p className="text-[10px] text-[#8B7E74]">Sai Nagar, Vizianagaram</p>
                    </div>
                  </div>
                </div>

                {/* Floating Badge: Google Rating Pill */}
                <a
                  href={STUDIO_INFO.googleMapsUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute top-4 right-4 bg-[#3E362E] hover:bg-[#8B7E74] text-white font-medium px-3.5 py-1.5 rounded-full text-xs flex items-center gap-1 shadow-md transition-all"
                >
                  <Star className="w-3 h-3 fill-amber-300 text-amber-300" />
                  <span>5.0 / 5.0</span>
                </a>

                {/* Bottom Card Summary */}
                <div className="absolute bottom-4 left-4 right-4 bg-white/95 backdrop-blur-md border border-[#E5E1DA] p-4 rounded-2xl space-y-2 shadow-lg text-left">
                  <div className="flex justify-between items-start">
                    <div>
                      <h3 className="font-serif font-bold text-sm text-[#3E362E]">Contemporary Living Suite</h3>
                      <p className="text-xs text-[#8B7E74] font-medium">Bespoke Wall Panelling & Cove Lighting</p>
                    </div>
                    <span className="text-[11px] px-2.5 py-0.5 rounded-full bg-[#F8F5F2] border border-[#E5E1DA] text-[#5A524A] font-medium">
                      38 Days Handover
                    </span>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-[#5A524A] pt-1.5 border-t border-[#E5E1DA]">
                    <span className="flex items-center gap-1 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8B7E74]" />
                      CenturyPly BWP 710 Marine Board
                    </span>
                    <button
                      onClick={onExplorePortfolio}
                      className="text-[#3E362E] hover:text-[#8B7E74] font-semibold flex items-center gap-1"
                    >
                      <Eye className="w-3.5 h-3.5" />
                      <span>Details</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Micro Accents */}
            <div className="mt-3 flex items-center justify-between text-[11px] text-[#8B7E74] px-2">
              <span>📍 Sai Nagar Rd, Thotapalem, Vizianagaram</span>
              <span className="text-[#3E362E] font-semibold">Free On-Site Measurements</span>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};
