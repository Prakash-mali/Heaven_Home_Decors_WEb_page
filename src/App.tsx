import React, { useState } from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { PortfolioSection } from './components/PortfolioSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { CostEstimator } from './components/CostEstimator';
import { TestimonialsSection } from './components/TestimonialsSection';
import { BookingSection } from './components/BookingSection';
import { LocationContactSection } from './components/LocationContactSection';
import { Footer } from './components/Footer';
import { 
  Phone, 
  MessageSquare, 
  MapPin, 
  Calendar, 
  Sparkles,
  ArrowUp
} from 'lucide-react';
import { STUDIO_INFO } from './data/testimonialsData';

export default function App() {
  const [prefilledBookingTopic, setPrefilledBookingTopic] = useState<string>('');
  const [showScrollTop, setShowScrollTop] = useState(false);

  React.useEffect(() => {
    const handleScroll = () => {
      setShowScrollTop(window.scrollY > 400);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToBooking = (topic?: string) => {
    if (topic) {
      setPrefilledBookingTopic(topic);
    }
    const bookingElem = document.getElementById('booking');
    if (bookingElem) {
      bookingElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToPortfolio = () => {
    const portElem = document.getElementById('portfolio');
    if (portElem) {
      portElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToEstimator = () => {
    const estElem = document.getElementById('estimator');
    if (estElem) {
      estElem.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <div className="min-h-screen bg-[#F8F5F2] text-[#3E362E] font-sans selection:bg-[#C7B7A3] selection:text-[#3E362E]">
      {/* Top Navigation */}
      <Navbar onOpenBooking={() => scrollToBooking()} />

      {/* Main Page Flow */}
      <main>
        {/* 1. Hero Section */}
        <Hero
          onOpenBooking={() => scrollToBooking()}
          onExplorePortfolio={scrollToPortfolio}
          onOpenEstimator={scrollToEstimator}
        />

        {/* 2. Portfolio Showcase with Categories & Before/After */}
        <PortfolioSection
          onSelectProjectForConsultation={(title) => scrollToBooking(`Inquiry for portfolio design: ${title}`)}
        />

        {/* 3. Specialized Services & Materials */}
        <ServicesSection
          onSelectService={(serviceTitle) => scrollToBooking(`Inquiry for service: ${serviceTitle}`)}
        />

        {/* 4. 4-Step Structured Execution Process */}
        <ProcessSection onOpenBooking={() => scrollToBooking()} />

        {/* 5. Interactive Cost & Budget Estimator */}
        <CostEstimator
          onProceedToBookingWithEstimate={(estimateSummary) => scrollToBooking(estimateSummary)}
        />

        {/* 6. Client Testimonials & Google Maps Rating */}
        <TestimonialsSection />

        {/* 7. Consultation Booking Form */}
        <BookingSection
          prefilledScopeOrProject={prefilledBookingTopic}
          onClearPrefilled={() => setPrefilledBookingTopic('')}
        />

        {/* 8. Studio Location & Google Maps Section */}
        <LocationContactSection />
      </main>

      {/* Footer */}
      <Footer />

      {/* Floating Action Buttons */}
      <div className="fixed bottom-5 right-5 z-40 flex flex-col gap-2.5 items-end">
        {/* WhatsApp Quick Chat */}
        <a
          href={`https://wa.me/919441288765?text=Hello%20Heaven%20Interior's%20team%2C%20I%20would%20like%20to%20inquire%20about%20interior%20design%20services%20in%20Vizianagaram.`}
          target="_blank"
          rel="noopener noreferrer"
          className="w-12 h-12 rounded-full bg-[#3E362E] hover:bg-[#8B7E74] text-[#F8F5F2] flex items-center justify-center shadow-2xl transition-all duration-300 hover:scale-110 group border border-[#E5E1DA]/40"
          title="Chat on WhatsApp"
        >
          <MessageSquare className="w-5 h-5 text-[#E5E1DA]" />
        </a>

        {/* Quick Call Button on Mobile */}
        <a
          href={`tel:${STUDIO_INFO.phone}`}
          className="sm:hidden w-12 h-12 rounded-full bg-[#8B7E74] hover:bg-[#3E362E] text-white flex items-center justify-center shadow-2xl transition-transform hover:scale-110 border border-[#E5E1DA]/30"
          title="Call Studio"
        >
          <Phone className="w-5 h-5" />
        </a>

        {/* Scroll To Top Button */}
        {showScrollTop && (
          <button
            onClick={scrollToTop}
            className="w-10 h-10 rounded-full bg-white/80 backdrop-blur-md border border-[#E5E1DA] text-[#5A524A] hover:text-[#3E362E] hover:bg-white flex items-center justify-center shadow-lg transition-all"
            title="Scroll to top"
          >
            <ArrowUp className="w-4 h-4" />
          </button>
        )}
      </div>

    </div>
  );
}
