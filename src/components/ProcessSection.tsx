import React from 'react';
import { 
  MessagesSquare, 
  Layers, 
  Cog, 
  KeyRound, 
  CheckCircle2, 
  Sparkles, 
  ArrowRight,
  ShieldCheck,
  Clock
} from 'lucide-react';

interface ProcessSectionProps {
  onOpenBooking: () => void;
}

export const ProcessSection: React.FC<ProcessSectionProps> = ({ onOpenBooking }) => {
  const steps = [
    {
      number: '01',
      title: 'Free Consultation & Laser Measurement',
      desc: 'Meet our designers at our Sai Nagar studio or schedule a free site visit in Vizianagaram. We capture precise laser measurements and discuss your style preferences, budget, and functional needs.',
      badge: 'Day 1 - 3',
      icon: MessagesSquare
    },
    {
      number: '02',
      title: '3D Walkthrough & Material Curation',
      desc: 'Review realistic 3D designs of your living room, modular kitchen, and bedrooms. Touch & feel actual laminate swatches, quartz samples, and hardware mechanisms before finalizing.',
      badge: 'Day 4 - 10',
      icon: Layers
    },
    {
      number: '03',
      title: 'Factory-Grade Fabrication & Civil Work',
      desc: 'Precision modular woodwork is fabricated with zero on-site dust. Parallel civil, plumbing, electrical, and Gyproc false ceiling works are executed under dedicated project supervision.',
      badge: 'Day 11 - 38',
      icon: Cog
    },
    {
      number: '04',
      title: 'Deep Clean & 45-Day Key Handover',
      desc: '150-point quality audit, deep cleaning, and formal handover with your 10-Year Warranty certificate and post-handover support guide.',
      badge: 'Day 45',
      icon: KeyRound
    }
  ];

  return (
    <section id="process" className="py-16 sm:py-24 bg-[#F8F5F2] border-b border-[#E5E1DA] text-[#3E362E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#D9D1C7] text-[#5A524A] text-xs font-semibold uppercase tracking-widest">
            <Clock className="w-3.5 h-3.5 text-[#8B7E74]" />
            <span>Structured & Predictable</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#3E362E]">
            How We Transform Your Home in <span className="text-[#8B7E74] italic">4 Steps</span>
          </h2>
          <p className="text-[#5A524A] text-sm sm:text-base leading-relaxed">
            No endless delays or unexpected costs. Our structured project management workflow guarantees a seamless, stress-free interior journey.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 relative">
          {steps.map((st) => {
            const Icon = st.icon;
            return (
              <div
                key={st.number}
                className="bg-white border border-[#E5E1DA] rounded-[32px] p-6 relative flex flex-col justify-between hover:border-[#8B7E74] transition-all duration-300 shadow-sm hover:shadow-md group text-left"
              >
                {/* Step Number Watermark */}
                <span className="absolute top-4 right-5 text-4xl font-serif font-black text-[#E5E1DA] group-hover:text-[#D9D1C7] transition-colors select-none">
                  {st.number}
                </span>

                <div className="space-y-4">
                  {/* Icon & Timeline Badge */}
                  <div className="flex items-center gap-3">
                    <div className="w-11 h-11 rounded-2xl bg-[#F8F5F2] border border-[#E5E1DA] flex items-center justify-center text-[#8B7E74] group-hover:scale-105 transition-transform">
                      <Icon className="w-5 h-5" />
                    </div>
                    <span className="text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full bg-[#F8F5F2] border border-[#E5E1DA] text-[#5A524A]">
                      {st.badge}
                    </span>
                  </div>

                  {/* Title & Description */}
                  <h3 className="font-serif font-bold text-base text-[#3E362E] group-hover:text-[#8B7E74] transition-colors">
                    {st.title}
                  </h3>
                  <p className="text-xs text-[#5A524A] leading-relaxed">
                    {st.desc}
                  </p>
                </div>

                {/* Micro Progress Marker */}
                <div className="pt-4 mt-4 border-t border-[#E5E1DA] flex items-center gap-1.5 text-[11px] text-[#8B7E74] font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-[#8B7E74]" />
                  <span>Milestone Verified</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Trust Highlight Box */}
        <div className="mt-12 p-6 sm:p-8 rounded-[32px] bg-white border border-[#E5E1DA] shadow-sm flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 rounded-2xl bg-[#3E362E] flex items-center justify-center text-white font-bold shrink-0 shadow-sm">
              <ShieldCheck className="w-6 h-6 text-[#E5E1DA]" />
            </div>
            <div className="text-left space-y-1">
              <h4 className="font-serif font-bold text-base text-[#3E362E]">
                Peace of Mind Guarantee
              </h4>
              <p className="text-xs text-[#5A524A]">
                Weekly photographic site updates on WhatsApp, transparent escrow payment milestones, and zero contractor escalation.
              </p>
            </div>
          </div>

          <button
            onClick={onOpenBooking}
            className="whitespace-nowrap px-6 py-3 rounded-full bg-[#3E362E] hover:bg-[#8B7E74] text-white font-semibold text-xs uppercase tracking-widest flex items-center gap-2 shadow-sm transition-all"
          >
            <span>Book Free Consultation</span>
            <ArrowRight className="w-3.5 h-3.5 text-[#E5E1DA]" />
          </button>
        </div>

      </div>
    </section>
  );
};
