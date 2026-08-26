import React from 'react';
import { 
  Home, 
  ChefHat, 
  Lightbulb, 
  Layers, 
  Tv, 
  Briefcase, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  Shield,
  Award,
  Zap,
  Hammer
} from 'lucide-react';
import { SERVICES_LIST, STUDIO_INFO } from '../data/testimonialsData';

interface ServicesSectionProps {
  onSelectService: (serviceName: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({ onSelectService }) => {
  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Home':
        return <Home className="w-6 h-6 text-[#8B7E74]" />;
      case 'ChefHat':
        return <ChefHat className="w-6 h-6 text-[#8B7E74]" />;
      case 'Lightbulb':
        return <Lightbulb className="w-6 h-6 text-[#8B7E74]" />;
      case 'Layers':
        return <Layers className="w-6 h-6 text-[#8B7E74]" />;
      case 'Tv':
        return <Tv className="w-6 h-6 text-[#8B7E74]" />;
      case 'Briefcase':
        return <Briefcase className="w-6 h-6 text-[#8B7E74]" />;
      default:
        return <Sparkles className="w-6 h-6 text-[#8B7E74]" />;
    }
  };

  const partnerBrands = [
    { name: 'CenturyPly', desc: 'Marine Grade Plywood' },
    { name: 'Blum Austria', desc: 'Soft-Close Hardware' },
    { name: 'Hafele Germany', desc: 'Architectural Fittings' },
    { name: 'Saint-Gobain', desc: 'Gyproc False Ceiling' },
    { name: 'Asian Paints', desc: 'Royale Luxury Emulsion' },
    { name: 'Philips & Wipro', desc: 'Cove & Smart Lighting' },
    { name: 'Kalinga Stone', desc: 'Engineered Quartz' },
    { name: 'Action TESA', desc: 'HDHMR Core Boards' }
  ];

  return (
    <section id="services" className="py-16 sm:py-24 bg-[#F8F5F2] text-[#3E362E] border-b border-[#E5E1DA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Title */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#D9D1C7] text-[#5A524A] text-xs font-semibold uppercase tracking-widest">
            <Hammer className="w-3.5 h-3.5 text-[#8B7E74]" />
            <span>End-to-End Craftsmanship</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#3E362E]">
            Our Interior Design <span className="text-[#8B7E74] italic">Services</span>
          </h2>
          <p className="text-[#5A524A] text-sm sm:text-base leading-relaxed">
            From single room transformations to full turnkey luxury residences in Vizianagaram, every project is executed with precision engineering, 3D visualization, and strict timeline adherence.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {SERVICES_LIST.map((srv) => (
            <div
              key={srv.id}
              className="bg-white border border-[#E5E1DA] rounded-[32px] p-6 sm:p-7 flex flex-col justify-between hover:border-[#8B7E74] transition-all duration-300 group shadow-sm hover:shadow-md text-left"
            >
              <div className="space-y-4">
                {/* Icon & Badge Header */}
                <div className="flex items-center justify-between">
                  <div className="w-12 h-12 rounded-2xl bg-[#F8F5F2] border border-[#E5E1DA] flex items-center justify-center group-hover:scale-105 transition-transform">
                    {getIcon(srv.iconName)}
                  </div>
                  <span className="text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-[#F8F5F2] text-[#3E362E] border border-[#E5E1DA]">
                    {srv.badge}
                  </span>
                </div>

                {/* Service Title & Description */}
                <div>
                  <h3 className="text-lg sm:text-xl font-serif font-bold text-[#3E362E] group-hover:text-[#8B7E74] transition-colors">
                    {srv.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-[#5A524A] mt-2 leading-relaxed">
                    {srv.description}
                  </p>
                </div>

                {/* Features Checklist */}
                <div className="space-y-2 pt-3 border-t border-[#E5E1DA]">
                  {srv.features.map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-[#5A524A]">
                      <CheckCircle2 className="w-3.5 h-3.5 text-[#8B7E74] shrink-0 mt-0.5" />
                      <span>{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Service Action Button */}
              <div className="pt-6 mt-6 border-t border-[#E5E1DA]">
                <button
                  onClick={() => onSelectService(srv.title)}
                  className="w-full py-2.5 px-4 rounded-full bg-[#F8F5F2] hover:bg-[#3E362E] hover:text-white text-[#3E362E] border border-[#D9D1C7] text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
                >
                  <span>Book Consultation for {srv.title.split(' ')[0]}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Brand & Material Partners Banner */}
        <div className="mt-16 p-6 sm:p-8 rounded-[32px] bg-white border border-[#E5E1DA] space-y-6 shadow-sm">
          <div className="text-center space-y-1">
            <h4 className="text-base font-serif font-bold text-[#3E362E] flex items-center justify-center gap-2">
              <Shield className="w-4 h-4 text-[#8B7E74]" />
              <span>Certified Premium Materials & Hardware Partners</span>
            </h4>
            <p className="text-xs text-[#5A524A]">
              We never compromise on foundation materials. All modular woodwork uses BWP marine grade ply with manufacturer authentic warranties.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
            {partnerBrands.map((b, i) => (
              <div key={i} className="p-3.5 rounded-2xl bg-[#F8F5F2] border border-[#E5E1DA] text-center space-y-1">
                <p className="font-bold text-xs sm:text-sm text-[#3E362E]">{b.name}</p>
                <p className="text-[11px] text-[#8B7E74]">{b.desc}</p>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
};
