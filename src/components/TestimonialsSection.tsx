import React, { useState } from 'react';
import { 
  Star, 
  MapPin, 
  CheckCircle2, 
  Sparkles, 
  MessageSquarePlus, 
  X, 
  ExternalLink,
  Quote
} from 'lucide-react';
import { CLIENT_TESTIMONIALS, STUDIO_INFO } from '../data/testimonialsData';
import { Testimonial } from '../types';

export const TestimonialsSection: React.FC = () => {
  const [testimonials, setTestimonials] = useState<Testimonial[]>(CLIENT_TESTIMONIALS);
  const [filterRating, setFilterRating] = useState<number | 'all'>('all');
  const [isModalOpen, setIsModalOpen] = useState(false);
  
  // Review submission state
  const [newAuthor, setNewAuthor] = useState('');
  const [newLocation, setNewLocation] = useState('');
  const [newProject, setNewProject] = useState('');
  const [newRating, setNewRating] = useState(5);
  const [newComment, setNewComment] = useState('');
  const [submittedSuccess, setSubmittedSuccess] = useState(false);

  const filteredTestimonials = filterRating === 'all'
    ? testimonials
    : testimonials.filter(t => t.rating === filterRating);

  const handleSubmitReview = (e: React.FormEvent) => {
    e.preventDefault();
    if (!newAuthor.trim() || !newComment.trim()) return;

    const newEntry: Testimonial = {
      id: `t-${Date.now()}`,
      name: newAuthor,
      location: newLocation.trim() || 'Vizianagaram, AP',
      projectType: newProject.trim() || 'Residential Interior Design',
      rating: newRating,
      date: 'Just now',
      comment: newComment,
      avatarBg: 'bg-amber-700 text-amber-100',
      verified: true
    };

    setTestimonials([newEntry, ...testimonials]);
    setSubmittedSuccess(true);
    setTimeout(() => {
      setSubmittedSuccess(false);
      setIsModalOpen(false);
      setNewAuthor('');
      setNewLocation('');
      setNewProject('');
      setNewComment('');
    }, 1800);
  };

  return (
    <section id="testimonials" className="py-16 sm:py-24 bg-[#F8F5F2] border-b border-[#E5E1DA] text-[#3E362E] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header with Google Maps Rating Card */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 mb-12">
          <div className="space-y-3 max-w-2xl text-left">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#D9D1C7] text-[#5A524A] text-xs font-semibold uppercase tracking-widest">
              <Sparkles className="w-3.5 h-3.5 text-[#8B7E74]" />
              <span>Real Homeowners in Vizianagaram</span>
            </div>
            <h2 className="text-3xl sm:text-4xl font-serif text-[#3E362E]">
              Client Stories & <span className="text-[#8B7E74] italic">Testimonials</span>
            </h2>
            <p className="text-[#5A524A] text-sm sm:text-base leading-relaxed">
              Read how homeowners in Sai Nagar, Thotapalem, Pedavemali, and greater Vizianagaram experienced our 45-day turnaround, 3D design accuracy, and transparent pricing.
            </p>
          </div>

          {/* Google Review Badge Box */}
          <div className="bg-white border border-[#E5E1DA] rounded-[32px] p-5 shadow-sm flex items-center gap-5 shrink-0">
            <div className="space-y-1 text-left">
              <div className="flex items-center gap-1.5">
                <span className="text-2xl font-serif font-bold text-[#3E362E]">5.0</span>
                <div className="flex text-[#8B7E74]">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="w-4 h-4 fill-[#8B7E74] text-[#8B7E74]" />
                  ))}
                </div>
              </div>
              <p className="text-xs font-bold text-[#3E362E]">Google Maps Verified Reviews</p>
              <p className="text-[11px] text-[#5A524A]">Heaven Interior's, Sai Nagar Rd</p>
            </div>

            <div className="flex flex-col gap-2">
              <a
                href={STUDIO_INFO.googleMapsUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 rounded-full bg-[#3E362E] hover:bg-[#8B7E74] text-white text-xs uppercase tracking-wider font-semibold transition-colors flex items-center gap-1.5 whitespace-nowrap shadow-sm"
              >
                <span>View on Maps</span>
                <ExternalLink className="w-3.5 h-3.5 text-[#E5E1DA]" />
              </a>
              <button
                onClick={() => setIsModalOpen(true)}
                className="px-4 py-2 rounded-full bg-[#F8F5F2] hover:bg-[#E5E1DA] border border-[#D9D1C7] text-[#3E362E] text-xs font-semibold uppercase tracking-wider flex items-center gap-1.5 whitespace-nowrap transition-colors"
              >
                <MessageSquarePlus className="w-3.5 h-3.5 text-[#8B7E74]" />
                <span>Write a Review</span>
              </button>
            </div>
          </div>
        </div>

        {/* Testimonials Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTestimonials.map((t) => (
            <div
              key={t.id}
              className="bg-white border border-[#E5E1DA] rounded-[32px] p-6 flex flex-col justify-between space-y-4 hover:border-[#8B7E74] transition-all duration-300 shadow-sm hover:shadow-md group text-left"
            >
              <div className="space-y-3">
                {/* Rating & Verified Badge */}
                <div className="flex items-center justify-between">
                  <div className="flex text-[#8B7E74]">
                    {[...Array(t.rating)].map((_, i) => (
                      <Star key={i} className="w-4 h-4 fill-[#8B7E74] text-[#8B7E74]" />
                    ))}
                  </div>
                  {t.verified && (
                    <span className="flex items-center gap-1 text-[10px] font-bold text-[#8B7E74] bg-[#F8F5F2] border border-[#E5E1DA] px-2.5 py-1 rounded-full uppercase tracking-wider">
                      <CheckCircle2 className="w-3 h-3 text-[#8B7E74]" />
                      Verified Client
                    </span>
                  )}
                </div>

                {/* Project Tag */}
                <div className="text-xs font-serif font-bold text-[#3E362E] line-clamp-1">
                  {t.projectType}
                </div>

                {/* Comment Text with Quote Icon */}
                <div className="relative">
                  <Quote className="w-5 h-5 text-[#E5E1DA] absolute -top-1 -left-1 pointer-events-none" />
                  <p className="text-xs sm:text-sm text-[#5A524A] leading-relaxed pl-3 relative z-10 italic">
                    "{t.comment}"
                  </p>
                </div>
              </div>

              {/* Author Footer */}
              <div className="pt-4 border-t border-[#E5E1DA] flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-9 h-9 rounded-full bg-[#E5E1DA] text-[#3E362E] flex items-center justify-center font-bold text-xs shrink-0">
                    {t.name.charAt(0)}
                  </div>
                  <div>
                    <h4 className="text-xs font-bold text-[#3E362E]">{t.name}</h4>
                    <p className="text-[11px] text-[#8B7E74] flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-[#8B7E74]" />
                      {t.location}
                    </p>
                  </div>
                </div>
                <span className="text-[10px] font-mono text-[#8B7E74]">{t.date}</span>
              </div>
            </div>
          ))}
        </div>

      </div>

      {/* Review Submission Modal */}
      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-[#3E362E]/70 backdrop-blur-sm">
          <div 
            className="bg-[#F8F5F2] border border-[#E5E1DA] rounded-[32px] max-w-lg w-full p-6 sm:p-8 space-y-5 shadow-2xl animate-in zoom-in-95 duration-200 text-left"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-between border-b border-[#E5E1DA] pb-3">
              <div>
                <h3 className="text-xl font-serif font-bold text-[#3E362E]">Share Your Experience</h3>
                <p className="text-xs text-[#5A524A]">Review Heaven Interior's in Vizianagaram</p>
              </div>
              <button
                onClick={() => setIsModalOpen(false)}
                className="p-2 rounded-full bg-white border border-[#E5E1DA] text-[#3E362E] hover:bg-[#E5E1DA]"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            {submittedSuccess ? (
              <div className="py-8 text-center space-y-2">
                <div className="w-12 h-12 rounded-full bg-white border border-[#E5E1DA] text-[#8B7E74] flex items-center justify-center mx-auto shadow-sm">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h4 className="font-serif font-bold text-[#3E362E] text-lg">Thank you for your feedback!</h4>
                <p className="text-xs text-[#5A524A]">Your testimonial has been added successfully.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmitReview} className="space-y-4">
                {/* Rating selection */}
                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#3E362E]">Your Rating</label>
                  <div className="flex items-center gap-2">
                    {[1, 2, 3, 4, 5].map((star) => (
                      <button
                        type="button"
                        key={star}
                        onClick={() => setNewRating(star)}
                        className="p-1 text-[#8B7E74] hover:scale-110 transition-transform"
                      >
                        <Star className={`w-6 h-6 ${newRating >= star ? 'fill-[#8B7E74]' : 'text-[#D9D1C7]'}`} />
                      </button>
                    ))}
                    <span className="text-xs font-bold text-[#3E362E] ml-2">{newRating} Stars</span>
                  </div>
                </div>

                <div className="grid grid-cols-2 gap-3">
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#3E362E]">Your Name *</label>
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Reddy"
                      value={newAuthor}
                      onChange={(e) => setNewAuthor(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-2xl bg-white border border-[#E5E1DA] text-xs text-[#3E362E] focus:border-[#3E362E] focus:outline-none shadow-sm"
                    />
                  </div>
                  <div className="space-y-1">
                    <label className="text-xs font-bold uppercase tracking-wider text-[#3E362E]">Location in VZM</label>
                    <input
                      type="text"
                      placeholder="e.g. Sai Nagar, VZM"
                      value={newLocation}
                      onChange={(e) => setNewLocation(e.target.value)}
                      className="w-full px-3.5 py-2.5 rounded-2xl bg-white border border-[#E5E1DA] text-xs text-[#3E362E] focus:border-[#3E362E] focus:outline-none shadow-sm"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#3E362E]">Project / Scope</label>
                  <input
                    type="text"
                    placeholder="e.g. 3BHK Modular Kitchen & False Ceiling"
                    value={newProject}
                    onChange={(e) => setNewProject(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-2xl bg-white border border-[#E5E1DA] text-xs text-[#3E362E] focus:border-[#3E362E] focus:outline-none shadow-sm"
                  />
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-bold uppercase tracking-wider text-[#3E362E]">Your Review / Experience *</label>
                  <textarea
                    required
                    rows={4}
                    placeholder="Describe the design quality, woodwork finishing, timelines, and service experience..."
                    value={newComment}
                    onChange={(e) => setNewComment(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-2xl bg-white border border-[#E5E1DA] text-xs text-[#3E362E] focus:border-[#3E362E] focus:outline-none resize-none shadow-sm"
                  />
                </div>

                <div className="flex justify-end gap-3 pt-2">
                  <button
                    type="button"
                    onClick={() => setIsModalOpen(false)}
                    className="px-5 py-2.5 rounded-full border border-[#D9D1C7] bg-white text-[#3E362E] text-xs font-semibold uppercase tracking-wider hover:bg-[#E5E1DA]"
                  >
                    Cancel
                  </button>
                  <button
                    type="submit"
                    className="px-6 py-2.5 rounded-full bg-[#3E362E] hover:bg-[#8B7E74] text-white text-xs font-semibold uppercase tracking-widest transition-all shadow-sm"
                  >
                    Post Testimonial
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
