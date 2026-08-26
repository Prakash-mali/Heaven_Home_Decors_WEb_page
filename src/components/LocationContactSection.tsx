import React, { useState } from 'react';
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  Navigation, 
  ExternalLink, 
  MessageSquare, 
  ChevronDown, 
  ChevronUp, 
  Sparkles,
  ShieldCheck
} from 'lucide-react';
import { STUDIO_INFO } from '../data/testimonialsData';

export const LocationContactSection: React.FC = () => {
  const [openFaqIndex, setOpenFaqIndex] = useState<number | null>(0);

  const faqs = [
    {
      q: 'Do you charge for the initial 3D design consultation and site visit in Vizianagaram?',
      a: 'No! Our initial design consultation, site laser measurement, and baseline 3D layout review are 100% complimentary with zero obligation. You can visit our studio in Sai Nagar or schedule a visit to your home.'
    },
    {
      q: 'What is your guaranteed project handover timeline?',
      a: 'We offer a strict 45-Day Handover Guarantee for standard 2BHK and 3BHK residential interiors. Modular components are fabricated in precision factory units to prevent on-site delays and dust.'
    },
    {
      q: 'What material warranty do you provide?',
      a: 'All our modular kitchen and wardrobe core structures are built with CenturyPly or Action TESA BWP (IS:710) boiling waterproof marine grade boards with a 10-Year Warranty. Hardware from Blum and Hafele comes with manufacturer lifetime warranties.'
    },
    {
      q: 'Do you handle complete civil, electrical, false ceiling, and painting work?',
      a: 'Yes! Heaven Interior’s is a complete turnkey interior solutions firm. We manage electrical conduit routing, plumbing, Saint-Gobain Gyproc false ceilings, smart LED automation, wall panelling, and Asian Paints Royale finishes under a single contract.'
    },
    {
      q: 'Can we visit your studio to see actual laminate swatches and hardware finishes?',
      a: 'Absolutely. We invite you to our studio on Sai Nagar Rd, Thotapalem, Vizianagaram. We have display units, fluted glass samples, quartz slabs, suede/acrylic laminate catalogues, and mechanism demos.'
    }
  ];

  return (
    <section id="location" className="py-16 sm:py-24 bg-[#F8F5F2] text-[#3E362E] border-b border-[#E5E1DA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#D9D1C7] text-[#5A524A] text-xs font-semibold uppercase tracking-widest">
            <MapPin className="w-3.5 h-3.5 text-[#8B7E74]" />
            <span>Visit Our Studio</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#3E362E]">
            Studio Location & <span className="text-[#8B7E74] italic">Contact</span>
          </h2>
          <p className="text-[#5A524A] text-sm sm:text-base leading-relaxed">
            Conveniently located in Sai Nagar, Thotapalem, Vizianagaram. Step in for material consultations, sample textures, and live 3D project visualization.
          </p>
        </div>

        {/* Studio Info & Map Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-stretch mb-16">
          
          {/* Left Column: Contact & Studio Info (5 cols) */}
          <div className="lg:col-span-5 bg-white border border-[#E5E1DA] rounded-[32px] p-6 sm:p-8 flex flex-col justify-between space-y-6 shadow-sm text-left">
            <div className="space-y-6">
              <div>
                <span className="text-xs font-bold text-[#8B7E74] uppercase tracking-widest">
                  Official Studio
                </span>
                <h3 className="text-2xl font-serif font-bold text-[#3E362E] mt-1">
                  {STUDIO_INFO.name}
                </h3>
                <p className="text-xs text-[#5A524A] mt-1">
                  {STUDIO_INFO.tagline}
                </p>
              </div>

              {/* Contact Details List */}
              <div className="space-y-4 text-xs sm:text-sm">
                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#F8F5F2] border border-[#E5E1DA] flex items-center justify-center text-[#8B7E74] shrink-0">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[#8B7E74] font-bold text-[10px] block uppercase tracking-wider">Address</span>
                    <p className="text-[#3E362E] font-medium leading-relaxed">
                      {STUDIO_INFO.address}
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#F8F5F2] border border-[#E5E1DA] flex items-center justify-center text-[#8B7E74] shrink-0">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[#8B7E74] font-bold text-[10px] block uppercase tracking-wider">Studio Timings</span>
                    <p className="text-[#3E362E] font-medium">
                      Mon – Sat: 9:30 AM – 8:30 PM
                    </p>
                    <p className="text-[#5A524A] text-xs">
                      Sunday: 10:00 AM – 4:00 PM
                    </p>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#F8F5F2] border border-[#E5E1DA] flex items-center justify-center text-[#8B7E74] shrink-0">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[#8B7E74] font-bold text-[10px] block uppercase tracking-wider">Phone Support</span>
                    <a 
                      href={`tel:${STUDIO_INFO.phone}`} 
                      className="text-[#3E362E] hover:text-[#8B7E74] font-bold block text-sm transition-colors"
                    >
                      {STUDIO_INFO.phoneDisplay}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3.5">
                  <div className="w-9 h-9 rounded-full bg-[#F8F5F2] border border-[#E5E1DA] flex items-center justify-center text-[#8B7E74] shrink-0">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div className="space-y-0.5">
                    <span className="text-[#8B7E74] font-bold text-[10px] block uppercase tracking-wider">Email Inquiries</span>
                    <p className="text-[#3E362E] font-medium">
                      {STUDIO_INFO.email}
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Direct Google Maps Action Buttons */}
            <div className="pt-4 border-t border-[#E5E1DA] flex flex-col sm:flex-row gap-3">
              <a
                href={STUDIO_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 py-3.5 px-4 rounded-full bg-[#3E362E] hover:bg-[#8B7E74] text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <Navigation className="w-4 h-4 text-[#E5E1DA]" />
                <span>Get Driving Directions</span>
              </a>

              <a
                href={`https://wa.me/919441288765?text=Hello%20Heaven%20Interiors%2C%20I%20would%20like%20to%20visit%20your%20Sai%20Nagar%20studio.`}
                target="_blank"
                rel="noopener noreferrer"
                className="py-3.5 px-4 rounded-full bg-[#F8F5F2] hover:bg-[#E5E1DA] border border-[#D9D1C7] text-[#3E362E] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#8B7E74]" />
                <span>WhatsApp Us</span>
              </a>
            </div>
          </div>

          {/* Right Column: Interactive Map Frame & Landmark Card (7 cols) */}
          <div className="lg:col-span-7 bg-white border border-[#E5E1DA] rounded-[32px] overflow-hidden shadow-sm flex flex-col justify-between relative min-h-[380px]">
            {/* Embedded Google Map */}
            <div className="w-full h-[320px] sm:h-[400px] relative bg-[#F8F5F2]">
              <iframe
                title="Heaven Interior's Google Maps Location Vizianagaram"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3794.1378129061036!2d83.401123!3d18.115456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3a3be5005c486ba3%3A0x2026fb6e54292a10!2sHeaven%20Interior's!5e0!3m2!1sen!2sin!4v1710000000000!5m2!1sen!2sin"
                className="w-full h-full border-0 contrast-105 opacity-95 transition-all duration-300"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />

              {/* Floating Overlay Badge */}
              <div className="absolute top-4 left-4 bg-white/95 backdrop-blur-md border border-[#E5E1DA] px-4 py-2.5 rounded-2xl shadow-sm flex items-center gap-3">
                <div className="w-2.5 h-2.5 rounded-full bg-[#8B7E74] animate-pulse" />
                <div className="text-left">
                  <p className="text-xs font-serif font-bold text-[#3E362E]">Heaven Interior's Studio</p>
                  <p className="text-[10px] text-[#5A524A]">Sai Nagar Rd, Thotapalem, Vizianagaram</p>
                </div>
              </div>

              {/* Floating Open in Maps Button */}
              <a
                href={STUDIO_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="absolute bottom-4 right-4 bg-[#3E362E] hover:bg-[#8B7E74] text-white font-semibold px-4 py-2 rounded-full text-xs uppercase tracking-wider flex items-center gap-1.5 shadow-sm transition-colors"
              >
                <span>Open Google Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#E5E1DA]" />
              </a>
            </div>

            {/* Bottom Service Coverage Banner */}
            <div className="p-4 sm:p-5 bg-[#F8F5F2] border-t border-[#E5E1DA] flex flex-wrap items-center justify-between gap-3 text-left">
              <div className="space-y-0.5">
                <p className="text-xs font-bold text-[#3E362E]">Active Project Service Coverage Area:</p>
                <p className="text-[11px] text-[#5A524A]">
                  Sai Nagar, Thotapalem, Pedavemali, Cantonment, Collectorate Junction, Dharmapuri, Bobbili, Nellimarla & Greater Vizianagaram.
                </p>
              </div>
              <span className="text-xs px-3 py-1 rounded-full bg-white border border-[#D9D1C7] text-[#3E362E] font-semibold uppercase tracking-wider text-[10px]">
                Free Site Visits in VZM
              </span>
            </div>
          </div>

        </div>

        {/* Frequently Asked Questions Section */}
        <div className="max-w-4xl mx-auto space-y-6 text-left">
          <div className="text-center space-y-2 mb-8">
            <h3 className="text-2xl font-serif font-bold text-[#3E362E]">
              Frequently Asked Questions
            </h3>
            <p className="text-xs text-[#5A524A]">
              Everything you need to know about starting your interior journey with Heaven Interior's.
            </p>
          </div>

          <div className="space-y-3">
            {faqs.map((faq, idx) => {
              const isOpen = openFaqIndex === idx;
              return (
                <div
                  key={idx}
                  className="bg-white border border-[#E5E1DA] rounded-2xl overflow-hidden transition-colors shadow-sm"
                >
                  <button
                    onClick={() => setOpenFaqIndex(isOpen ? null : idx)}
                    className="w-full p-5 text-left flex items-center justify-between gap-4 text-sm sm:text-base font-serif font-bold text-[#3E362E] hover:text-[#8B7E74] transition-colors"
                  >
                    <span>{faq.q}</span>
                    {isOpen ? (
                      <ChevronUp className="w-5 h-5 text-[#8B7E74] shrink-0" />
                    ) : (
                      <ChevronDown className="w-5 h-5 text-[#8B7E74] shrink-0" />
                    )}
                  </button>

                  {isOpen && (
                    <div className="px-5 pb-5 text-xs sm:text-sm text-[#5A524A] leading-relaxed border-t border-[#E5E1DA] pt-3 animate-in fade-in duration-200">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
