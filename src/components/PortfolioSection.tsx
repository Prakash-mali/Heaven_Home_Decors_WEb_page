import React, { useState } from 'react';
import { 
  ProjectCategory, 
  Project 
} from '../types';
import { PORTFOLIO_PROJECTS } from '../data/portfolioData';
import { 
  MapPin, 
  Clock, 
  Layers, 
  CheckCircle2, 
  Eye, 
  Sparkles, 
  X, 
  ArrowRight,
  ChevronLeft,
  ChevronRight,
  Maximize2
} from 'lucide-react';

interface PortfolioSectionProps {
  onSelectProjectForConsultation: (projectTitle: string) => void;
}

export const PortfolioSection: React.FC<PortfolioSectionProps> = ({ 
  onSelectProjectForConsultation 
}) => {
  const [selectedCategory, setSelectedCategory] = useState<ProjectCategory>('all');
  const [activeModalProject, setActiveModalProject] = useState<Project | null>(null);
  const [modalImageIndex, setModalImageIndex] = useState<number>(0);
  const [showBeforeAfterComparison, setShowBeforeAfterComparison] = useState<boolean>(false);
  const [sliderPosition, setSliderPosition] = useState<number>(50);
  const [lightboxImageUrl, setLightboxImageUrl] = useState<string | null>(null);

  const categories: { id: ProjectCategory; label: string; count: number }[] = [
    { id: 'all', label: 'All Projects', count: PORTFOLIO_PROJECTS.length },
    { id: 'living-room', label: 'Living & Media Units', count: PORTFOLIO_PROJECTS.filter(p => p.category === 'living-room').length },
    { id: 'kitchen', label: 'Modular Kitchens', count: PORTFOLIO_PROJECTS.filter(p => p.category === 'kitchen').length },
    { id: 'bedroom', label: 'Master Bedrooms', count: PORTFOLIO_PROJECTS.filter(p => p.category === 'bedroom').length },
    { id: 'false-ceiling', label: 'False Ceiling & Lighting', count: PORTFOLIO_PROJECTS.filter(p => p.category === 'false-ceiling').length },
    { id: 'wardrobe', label: 'Wardrobes & Storage', count: PORTFOLIO_PROJECTS.filter(p => p.category === 'wardrobe').length },
    { id: 'commercial', label: 'Commercial & Office', count: PORTFOLIO_PROJECTS.filter(p => p.category === 'commercial').length },
  ];

  const filteredProjects = selectedCategory === 'all'
    ? PORTFOLIO_PROJECTS
    : PORTFOLIO_PROJECTS.filter(p => p.category === selectedCategory);

  const openProjectModal = (project: Project) => {
    setActiveModalProject(project);
    setModalImageIndex(0);
    setShowBeforeAfterComparison(false);
  };

  const handleNextImage = () => {
    if (!activeModalProject) return;
    setModalImageIndex((prev) => (prev + 1) % activeModalProject.galleryImages.length);
  };

  const handlePrevImage = () => {
    if (!activeModalProject) return;
    setModalImageIndex((prev) => (prev - 1 + activeModalProject.galleryImages.length) % activeModalProject.galleryImages.length);
  };

  return (
    <section id="portfolio" className="py-16 sm:py-24 bg-[#F8F5F2] border-b border-[#E5E1DA] text-[#3E362E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-12">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#D9D1C7] text-[#5A524A] text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#8B7E74]" />
              <span>Selected Works — Vizianagaram</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#3E362E]">
              Our Signature <span className="text-[#8B7E74] italic">Portfolio</span>
            </h2>
            <p className="text-[#5A524A] text-sm sm:text-base leading-relaxed">
              Explore curated residential and commercial projects delivered across Sai Nagar, Thotapalem, Pedavemali, and greater Vizianagaram. Each home is backed by our 10-year warranty.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <div className="px-4 py-2 rounded-2xl bg-white/80 border border-[#E5E1DA] text-xs text-[#5A524A] shadow-sm">
              <span className="font-semibold text-[#3E362E]">100% Authentic</span> On-Site Photos & 3D Renderings
            </div>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-8 no-scrollbar scroll-smooth">
          {categories.map((cat) => {
            const isActive = selectedCategory === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`whitespace-nowrap px-4 py-2.5 rounded-full text-xs uppercase tracking-wider font-semibold transition-all flex items-center gap-2 shrink-0 ${
                  isActive
                    ? 'bg-[#3E362E] text-white shadow-sm'
                    : 'bg-white/80 hover:bg-white text-[#5A524A] hover:text-[#3E362E] border border-[#E5E1DA]'
                }`}
              >
                <span>{cat.label}</span>
                <span
                  className={`text-[10px] px-1.5 py-0.5 rounded-full font-mono ${
                    isActive ? 'bg-[#8B7E74] text-white' : 'bg-[#E5E1DA] text-[#5A524A]'
                  }`}
                >
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Projects Grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {filteredProjects.map((project) => (
            <div
              key={project.id}
              className="bg-white rounded-[32px] overflow-hidden border border-[#E5E1DA] shadow-sm flex flex-col group hover:border-[#8B7E74] transition-all duration-300 hover:shadow-md p-3"
            >
              {/* Image Box */}
              <div className="relative aspect-[4/3] overflow-hidden bg-[#E5E1DA] rounded-2xl">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  referrerPolicy="no-referrer"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#3E362E]/70 via-transparent to-transparent opacity-80" />

                {/* Category & Location Badge */}
                <div className="absolute top-3 left-3 flex flex-wrap gap-2">
                  <span className="px-3 py-1 rounded-full bg-white/90 backdrop-blur-sm border border-[#E5E1DA] text-[10px] font-bold text-[#3E362E] uppercase tracking-wider">
                    {project.categoryLabel}
                  </span>
                  {project.beforeImage && (
                    <span className="px-2.5 py-1 rounded-full bg-[#8B7E74] backdrop-blur-sm text-[10px] font-bold text-white uppercase tracking-wider">
                      Before & After
                    </span>
                  )}
                </div>

                <div className="absolute top-3 right-3">
                  <button
                    onClick={() => openProjectModal(project)}
                    className="p-2 rounded-full bg-white/90 hover:bg-[#3E362E] hover:text-white text-[#3E362E] backdrop-blur-sm transition-colors shadow-sm"
                    title="View Project Details"
                  >
                    <Maximize2 className="w-3.5 h-3.5" />
                  </button>
                </div>

                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between text-xs text-[#F8F5F2]">
                  <span className="flex items-center gap-1 font-medium">
                    <MapPin className="w-3.5 h-3.5 text-[#D9D1C7]" />
                    {project.location}
                  </span>
                  <span className="flex items-center gap-1 font-mono text-[#E5E1DA]">
                    <Clock className="w-3.5 h-3.5 text-[#E5E1DA]" />
                    {project.timeline}
                  </span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-4 flex-1 flex flex-col justify-between space-y-4 text-left">
                <div>
                  <h3 className="font-serif font-bold text-lg text-[#3E362E] group-hover:text-[#8B7E74] transition-colors line-clamp-1">
                    {project.title}
                  </h3>
                  <p className="text-xs text-[#5A524A] mt-1.5 line-clamp-2 leading-relaxed">
                    {project.description}
                  </p>
                </div>

                {/* Specs Snippet */}
                <div className="pt-3 border-t border-[#E5E1DA] grid grid-cols-2 gap-2 text-xs">
                  <div>
                    <span className="text-[#8B7E74] block text-[10px] uppercase font-bold tracking-wider">Scope Area</span>
                    <span className="font-medium text-[#3E362E]">{project.area}</span>
                  </div>
                  <div>
                    <span className="text-[#8B7E74] block text-[10px] uppercase font-bold tracking-wider">Estimated Budget</span>
                    <span className="font-semibold text-[#3E362E]">{project.budgetRange}</span>
                  </div>
                </div>

                {/* Card Action Buttons */}
                <div className="pt-2 flex items-center gap-2">
                  <button
                    onClick={() => openProjectModal(project)}
                    className="flex-1 py-2.5 px-3 rounded-full bg-[#F8F5F2] hover:bg-[#E5E1DA] text-[#3E362E] border border-[#D9D1C7] text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors"
                  >
                    <Eye className="w-3.5 h-3.5 text-[#8B7E74]" />
                    <span>Specs</span>
                  </button>

                  <button
                    onClick={() => onSelectProjectForConsultation(project.title)}
                    className="py-2.5 px-4 rounded-full bg-[#3E362E] hover:bg-[#8B7E74] text-white text-xs font-semibold uppercase tracking-wider flex items-center justify-center gap-1.5 transition-colors shadow-sm"
                    title="Request quote for this style"
                  >
                    <span>Quote</span>
                    <ArrowRight className="w-3 h-3 text-[#E5E1DA]" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Portfolio Callout */}
        <div className="mt-12 p-8 rounded-[32px] bg-white border border-[#E5E1DA] shadow-sm flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left">
          <div className="space-y-1">
            <h4 className="font-serif font-bold text-[#3E362E] text-lg flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-4 h-4 text-[#8B7E74]" />
              <span>Looking for a personalized design for your floor plan?</span>
            </h4>
            <p className="text-xs text-[#5A524A]">
              Bring your builder plan or house measurements to our studio in Sai Nagar, Vizianagaram for a free 3D design concept.
            </p>
          </div>
          <button
            onClick={() => onSelectProjectForConsultation('Custom Floor Plan Consultation')}
            className="whitespace-nowrap px-6 py-3 rounded-full bg-[#3E362E] hover:bg-[#8B7E74] text-white text-xs uppercase tracking-widest font-semibold transition-all shadow-sm"
          >
            Book Floor Plan Review
          </button>
        </div>
      </div>

      {/* Project Detail Modal */}
      {activeModalProject && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#3E362E]/70 backdrop-blur-sm overflow-y-auto">
          <div 
            className="bg-[#F8F5F2] border border-[#E5E1DA] rounded-[32px] max-w-4xl w-full max-h-[90vh] overflow-y-auto shadow-2xl animate-in zoom-in-95 duration-200 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Modal Header */}
            <div className="sticky top-0 z-10 bg-[#F8F5F2]/95 backdrop-blur-md border-b border-[#E5E1DA] p-5 sm:p-6 flex items-center justify-between">
              <div>
                <span className="text-[10px] font-bold text-[#8B7E74] uppercase tracking-widest">
                  {activeModalProject.categoryLabel}
                </span>
                <h3 className="text-xl sm:text-2xl font-serif font-bold text-[#3E362E] mt-0.5">
                  {activeModalProject.title}
                </h3>
              </div>
              <button
                onClick={() => setActiveModalProject(null)}
                className="p-2.5 rounded-full bg-white border border-[#E5E1DA] hover:bg-[#E5E1DA] text-[#3E362E] transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="p-5 sm:p-6 space-y-6">
              {/* Media Gallery / Before-After Slider */}
              <div className="space-y-3">
                {activeModalProject.beforeImage && (
                  <div className="flex items-center justify-between pb-2 border-b border-[#E5E1DA]">
                    <span className="text-xs text-[#5A524A] font-medium">Interactive Visual Mode:</span>
                    <div className="flex gap-2">
                      <button
                        onClick={() => setShowBeforeAfterComparison(false)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
                          !showBeforeAfterComparison ? 'bg-[#3E362E] text-white' : 'bg-white border border-[#E5E1DA] text-[#5A524A]'
                        }`}
                      >
                        Photo Gallery
                      </button>
                      <button
                        onClick={() => setShowBeforeAfterComparison(true)}
                        className={`px-3.5 py-1.5 rounded-full text-xs font-semibold uppercase tracking-wider transition-colors ${
                          showBeforeAfterComparison ? 'bg-[#3E362E] text-white' : 'bg-white border border-[#E5E1DA] text-[#5A524A]'
                        }`}
                      >
                        Before vs. After Slider
                      </button>
                    </div>
                  </div>
                )}

                {showBeforeAfterComparison && activeModalProject.beforeImage ? (
                  /* Before vs After Slider */
                  <div className="relative aspect-[16/9] rounded-2xl overflow-hidden select-none bg-[#E5E1DA] border border-[#E5E1DA]">
                    {/* After Image */}
                    <img
                      src={activeModalProject.afterImage || activeModalProject.image}
                      alt="Completed Project"
                      className="absolute inset-0 w-full h-full object-cover"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute top-3 right-3 px-3 py-1 rounded-full bg-[#3E362E] text-white text-xs uppercase tracking-wider font-bold">
                      After (Handover)
                    </div>

                    {/* Before Image with Clip Path */}
                    <div
                      className="absolute inset-0 overflow-hidden"
                      style={{ clipPath: `polygon(0 0, ${sliderPosition}% 0, ${sliderPosition}% 100%, 0 100%)` }}
                    >
                      <img
                        src={activeModalProject.beforeImage}
                        alt="Before Renovation"
                        className="absolute inset-0 w-full h-full object-cover"
                        referrerPolicy="no-referrer"
                      />
                      <div className="absolute top-3 left-3 px-3 py-1 rounded-full bg-white/90 text-[#3E362E] border border-[#E5E1DA] text-xs uppercase tracking-wider font-semibold">
                        Before (Site Condition)
                      </div>
                    </div>

                    {/* Slider Line & Handle */}
                    <div
                      className="absolute top-0 bottom-0 w-1 bg-white shadow-lg cursor-ew-resize z-10"
                      style={{ left: `${sliderPosition}%` }}
                    >
                      <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-[#3E362E] text-white flex items-center justify-center font-bold text-xs shadow-xl border-2 border-white">
                        ↔
                      </div>
                    </div>

                    {/* Invisible Range Slider */}
                    <input
                      type="range"
                      min="0"
                      max="100"
                      value={sliderPosition}
                      onChange={(e) => setSliderPosition(Number(e.target.value))}
                      className="absolute inset-0 opacity-0 cursor-ew-resize w-full h-full z-20"
                    />
                  </div>
                ) : (
                  /* Standard Image Gallery Carousel */
                  <div className="space-y-3">
                    <div className="relative aspect-[16/9] rounded-2xl overflow-hidden bg-[#E5E1DA] border border-[#E5E1DA]">
                      <img
                        src={activeModalProject.galleryImages[modalImageIndex] || activeModalProject.image}
                        alt={activeModalProject.title}
                        className="w-full h-full object-cover cursor-zoom-in"
                        onClick={() => setLightboxImageUrl(activeModalProject.galleryImages[modalImageIndex] || activeModalProject.image)}
                        referrerPolicy="no-referrer"
                      />

                      {/* Navigation Controls */}
                      {activeModalProject.galleryImages.length > 1 && (
                        <>
                          <button
                            onClick={handlePrevImage}
                            className="absolute left-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 hover:bg-white text-[#3E362E] backdrop-blur-sm transition-colors shadow-md"
                          >
                            <ChevronLeft className="w-4 h-4" />
                          </button>
                          <button
                            onClick={handleNextImage}
                            className="absolute right-3 top-1/2 -translate-y-1/2 p-2.5 rounded-full bg-white/90 hover:bg-white text-[#3E362E] backdrop-blur-sm transition-colors shadow-md"
                          >
                            <ChevronRight className="w-4 h-4" />
                          </button>
                        </>
                      )}

                      <div className="absolute bottom-3 right-3 px-3 py-1 rounded-full bg-[#3E362E]/80 backdrop-blur-sm text-xs font-mono text-white">
                        {modalImageIndex + 1} / {activeModalProject.galleryImages.length}
                      </div>
                    </div>

                    {/* Thumbnail Selector */}
                    {activeModalProject.galleryImages.length > 1 && (
                      <div className="flex gap-2 overflow-x-auto pb-1">
                        {activeModalProject.galleryImages.map((img, idx) => (
                          <button
                            key={idx}
                            onClick={() => setModalImageIndex(idx)}
                            className={`relative w-20 h-14 rounded-xl overflow-hidden shrink-0 border-2 transition-all ${
                              modalImageIndex === idx ? 'border-[#3E362E] scale-105 shadow-sm' : 'border-[#E5E1DA] opacity-60 hover:opacity-100'
                            }`}
                          >
                            <img src={img} alt="thumb" className="w-full h-full object-cover" referrerPolicy="no-referrer" />
                          </button>
                        ))}
                      </div>
                    )}
                  </div>
                )}
              </div>

              {/* Project Meta Bar */}
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 p-4 rounded-2xl bg-white border border-[#E5E1DA] text-xs">
                <div>
                  <span className="text-[#8B7E74] block uppercase font-bold tracking-wider text-[10px]">Location</span>
                  <span className="font-semibold text-[#3E362E] flex items-center gap-1 mt-0.5">
                    <MapPin className="w-3.5 h-3.5 text-[#8B7E74]" />
                    {activeModalProject.location}
                  </span>
                </div>
                <div>
                  <span className="text-[#8B7E74] block uppercase font-bold tracking-wider text-[10px]">Area</span>
                  <span className="font-semibold text-[#3E362E] mt-0.5 block">{activeModalProject.area}</span>
                </div>
                <div>
                  <span className="text-[#8B7E74] block uppercase font-bold tracking-wider text-[10px]">Execution Time</span>
                  <span className="font-semibold text-[#3E362E] mt-0.5 block">{activeModalProject.timeline}</span>
                </div>
                <div>
                  <span className="text-[#8B7E74] block uppercase font-bold tracking-wider text-[10px]">Budget Guide</span>
                  <span className="font-semibold text-[#3E362E] mt-0.5 block">{activeModalProject.budgetRange}</span>
                </div>
              </div>

              {/* Project Description */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-[#3E362E] uppercase tracking-widest">Concept & Overview</h4>
                <p className="text-sm text-[#5A524A] leading-relaxed">{activeModalProject.description}</p>
              </div>

              {/* Key Highlights Checklist */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-[#3E362E] uppercase tracking-widest">Execution Highlights</h4>
                <div className="grid sm:grid-cols-2 gap-2">
                  {activeModalProject.highlights.map((h, i) => (
                    <div key={i} className="flex items-start gap-2.5 p-3 rounded-2xl bg-white border border-[#E5E1DA] text-xs text-[#5A524A]">
                      <CheckCircle2 className="w-4 h-4 text-[#8B7E74] shrink-0 mt-0.5" />
                      <span>{h}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Material Specifications */}
              <div className="space-y-2">
                <h4 className="text-xs font-bold text-[#3E362E] uppercase tracking-widest flex items-center gap-2">
                  <Layers className="w-4 h-4 text-[#8B7E74]" />
                  <span>Material & Hardware Specifications</span>
                </h4>
                <div className="grid sm:grid-cols-2 gap-3 p-4 rounded-2xl bg-white border border-[#E5E1DA] text-xs">
                  <div>
                    <span className="text-[#8B7E74] font-semibold block text-[11px]">Woodwork Core:</span>
                    <span className="text-[#3E362E] font-medium">{activeModalProject.materialSpecs.woodwork}</span>
                  </div>
                  <div>
                    <span className="text-[#8B7E74] font-semibold block text-[11px]">Surface Finish:</span>
                    <span className="text-[#3E362E] font-medium">{activeModalProject.materialSpecs.finish}</span>
                  </div>
                  <div>
                    <span className="text-[#8B7E74] font-semibold block text-[11px]">Hardware & Channels:</span>
                    <span className="text-[#3E362E] font-medium">{activeModalProject.materialSpecs.hardware}</span>
                  </div>
                  <div>
                    <span className="text-[#8B7E74] font-semibold block text-[11px]">Lighting Architecture:</span>
                    <span className="text-[#3E362E] font-medium">{activeModalProject.materialSpecs.lighting}</span>
                  </div>
                </div>
              </div>

              {/* Modal Footer CTA */}
              <div className="pt-4 border-t border-[#E5E1DA] flex flex-col sm:flex-row items-center justify-between gap-3">
                <p className="text-xs text-[#5A524A] text-center sm:text-left">
                  Get a personalized quotation and free 3D design render for this style.
                </p>
                <div className="flex gap-3 w-full sm:w-auto">
                  <button
                    onClick={() => setActiveModalProject(null)}
                    className="flex-1 sm:flex-none px-5 py-2.5 rounded-full border border-[#D9D1C7] bg-white hover:bg-[#E5E1DA] text-[#3E362E] text-xs uppercase tracking-wider font-semibold"
                  >
                    Close
                  </button>
                  <button
                    onClick={() => {
                      const title = activeModalProject.title;
                      setActiveModalProject(null);
                      onSelectProjectForConsultation(title);
                    }}
                    className="flex-1 sm:flex-none px-6 py-2.5 rounded-full bg-[#3E362E] hover:bg-[#8B7E74] text-white text-xs uppercase tracking-widest font-semibold flex items-center justify-center gap-2 shadow-sm"
                  >
                    <span>Inquire for this Look</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {/* Lightbox Zoom Modal */}
      {lightboxImageUrl && (
        <div 
          className="fixed inset-0 z-50 bg-[#3E362E]/90 backdrop-blur-md flex items-center justify-center p-4"
          onClick={() => setLightboxImageUrl(null)}
        >
          <button
            onClick={() => setLightboxImageUrl(null)}
            className="absolute top-4 right-4 p-3 rounded-full bg-white text-[#3E362E] hover:bg-[#E5E1DA]"
          >
            <X className="w-5 h-5" />
          </button>
          <img
            src={lightboxImageUrl}
            alt="Enlarged View"
            className="max-w-full max-h-[90vh] object-contain rounded-2xl shadow-2xl"
            referrerPolicy="no-referrer"
          />
        </div>
      )}
    </section>
  );
};
