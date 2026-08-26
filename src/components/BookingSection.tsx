import React, { useState, useEffect } from 'react';
import { 
  Calendar, 
  Clock, 
  MapPin, 
  User, 
  Phone, 
  Mail, 
  Home, 
  Sparkles, 
  CheckCircle2, 
  Send, 
  FileText, 
  CalendarPlus, 
  Share2, 
  MessageSquare,
  Building,
  DollarSign
} from 'lucide-react';
import { STUDIO_INFO } from '../data/testimonialsData';
import { BookingSubmission } from '../types';

interface BookingSectionProps {
  prefilledScopeOrProject?: string;
  onClearPrefilled?: () => void;
}

export const BookingSection: React.FC<BookingSectionProps> = ({ 
  prefilledScopeOrProject,
  onClearPrefilled 
}) => {
  // Form state
  const [fullName, setFullName] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [email, setEmail] = useState('');
  const [propertyType, setPropertyType] = useState('2bhk');
  const [selectedScopes, setSelectedScopes] = useState<string[]>([
    'Modular Kitchen',
    'False Ceiling & Lighting'
  ]);
  const [consultationMode, setConsultationMode] = useState<'studio' | 'site' | 'online'>('studio');
  const [preferredDate, setPreferredDate] = useState('');
  const [timeSlot, setTimeSlot] = useState('morning');
  const [budgetRange, setBudgetRange] = useState('₹6L - ₹12L');
  const [addressOrLandmark, setAddressOrLandmark] = useState('');
  const [notes, setNotes] = useState('');
  const [enableWhatsApp, setEnableWhatsApp] = useState(true);

  // Submission state
  const [confirmedBooking, setConfirmedBooking] = useState<BookingSubmission | null>(null);

  // Set default minimum date to tomorrow
  const minDateString = new Date(Date.now() + 86400000).toISOString().split('T')[0];

  useEffect(() => {
    if (prefilledScopeOrProject) {
      setNotes((prev) => 
        prev ? `${prev} | Interested in: ${prefilledScopeOrProject}` : `Inquiry for design: ${prefilledScopeOrProject}`
      );
      if (!preferredDate) {
        setPreferredDate(minDateString);
      }
    }
  }, [prefilledScopeOrProject, minDateString]);

  const toggleScope = (scope: string) => {
    setSelectedScopes((prev) =>
      prev.includes(scope) ? prev.filter((s) => s !== scope) : [...prev, scope]
    );
  };

  const handleFormSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName.trim() || !phoneNumber.trim()) return;

    const submission: BookingSubmission = {
      id: `HVN-${Math.floor(1000 + Math.random() * 9000)}`,
      fullName,
      phoneNumber,
      email,
      propertyType,
      projectScope: selectedScopes,
      preferredLocation: consultationMode,
      preferredDate: preferredDate || minDateString,
      preferredTimeSlot: timeSlot === 'morning' ? '10:30 AM – 1:00 PM' : timeSlot === 'afternoon' ? '2:30 PM – 5:00 PM' : '5:30 PM – 8:00 PM',
      budgetRange,
      addressOrLandmark,
      notes,
      enableWhatsAppUpdates: enableWhatsApp,
      submittedAt: new Date().toLocaleDateString('en-IN')
    };

    setConfirmedBooking(submission);
    if (onClearPrefilled) onClearPrefilled();
  };

  const handleDownloadIcs = () => {
    if (!confirmedBooking) return;
    const dateStr = confirmedBooking.preferredDate.replace(/-/g, '');
    const icsContent = [
      'BEGIN:VCALENDAR',
      'VERSION:2.0',
      'PRODID:-//Heaven Interiors Vizianagaram//Consultation//EN',
      'BEGIN:VEVENT',
      `SUMMARY:Interior Design Consultation with Heaven Interior's`,
      `DESCRIPTION:Design consultation for ${confirmedBooking.propertyType.toUpperCase()} | Booking Ref: ${confirmedBooking.id}`,
      `LOCATION:${confirmedBooking.preferredLocation === 'studio' ? STUDIO_INFO.address : confirmedBooking.addressOrLandmark || 'Client Site in Vizianagaram'}`,
      `DTSTART:${dateStr}T103000Z`,
      `DTEND:${dateStr}T120000Z`,
      'STATUS:CONFIRMED',
      'END:VEVENT',
      'END:VCALENDAR'
    ].join('\n');

    const blob = new Blob([icsContent], { type: 'text/calendar;charset=utf-8' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.setAttribute('download', `Heaven-Interiors-Consultation-${confirmedBooking.id}.ics`);
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handleSendToWhatsApp = () => {
    if (!confirmedBooking) return;
    const msg = encodeURIComponent(
      `*New Interior Design Consultation Request*\n` +
      `• *Booking ID*: ${confirmedBooking.id}\n` +
      `• *Name*: ${confirmedBooking.fullName}\n` +
      `• *Phone*: ${confirmedBooking.phoneNumber}\n` +
      `• *Property*: ${confirmedBooking.propertyType.toUpperCase()}\n` +
      `• *Mode*: ${confirmedBooking.preferredLocation === 'studio' ? 'Sai Nagar Studio Visit' : confirmedBooking.preferredLocation === 'site' ? 'Free On-Site Visit' : 'Online Video Call'}\n` +
      `• *Preferred Date*: ${confirmedBooking.preferredDate} (${confirmedBooking.preferredTimeSlot})\n` +
      `• *Scope*: ${confirmedBooking.projectScope.join(', ')}\n` +
      `• *Budget Range*: ${confirmedBooking.budgetRange}\n` +
      `• *Address / Landmark*: ${confirmedBooking.addressOrLandmark || 'Vizianagaram'}\n` +
      `• *Notes*: ${confirmedBooking.notes || 'None'}`
    );
    window.open(`https://wa.me/919441288765?text=${msg}`, '_blank');
  };

  return (
    <section id="booking" className="py-16 sm:py-24 bg-[#F8F5F2] text-[#3E362E] border-b border-[#E5E1DA] relative">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#D9D1C7] text-[#5A524A] text-xs font-semibold uppercase tracking-widest">
            <Calendar className="w-3.5 h-3.5 text-[#8B7E74]" />
            <span>Zero Obligation • 100% Free</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#3E362E]">
            Book Your Free <span className="text-[#8B7E74] italic">Design Consultation</span>
          </h2>
          <p className="text-[#5A524A] text-sm sm:text-base leading-relaxed">
            Meet our senior interior architects at our Sai Nagar studio in Vizianagaram or schedule a free site laser measurement for your home.
          </p>
        </div>

        {/* Form or Confirmation Card */}
        {confirmedBooking ? (
          /* Confirmation Ticket Card */
          <div className="bg-white border-2 border-[#8B7E74] rounded-[32px] p-6 sm:p-10 shadow-md space-y-8 text-left animate-in zoom-in-95 duration-300">
            <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-6 border-b border-[#E5E1DA]">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 rounded-full bg-[#F8F5F2] border border-[#E5E1DA] text-[#8B7E74] flex items-center justify-center font-bold shadow-sm">
                  <CheckCircle2 className="w-7 h-7" />
                </div>
                <div>
                  <h3 className="text-xl font-serif font-bold text-[#3E362E]">Consultation Booked Successfully!</h3>
                  <p className="text-xs text-[#5A524A]">Reference Token: <span className="text-[#8B7E74] font-mono font-bold">{confirmedBooking.id}</span></p>
                </div>
              </div>

              <div className="px-4 py-2 rounded-full bg-[#F8F5F2] border border-[#E5E1DA] text-xs font-mono text-[#3E362E] flex items-center gap-2">
                <Clock className="w-3.5 h-3.5 text-[#8B7E74]" />
                <span>Confirmed for {confirmedBooking.preferredDate}</span>
              </div>
            </div>

            {/* Summary Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 text-xs">
              <div className="p-4 rounded-2xl bg-[#F8F5F2] border border-[#E5E1DA]">
                <span className="text-[#8B7E74] font-bold block uppercase tracking-wider text-[10px]">Client Details</span>
                <p className="font-bold text-[#3E362E] mt-1 text-sm">{confirmedBooking.fullName}</p>
                <p className="text-[#5A524A]">{confirmedBooking.phoneNumber}</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8F5F2] border border-[#E5E1DA]">
                <span className="text-[#8B7E74] font-bold block uppercase tracking-wider text-[10px]">Consultation Mode</span>
                <p className="font-bold text-[#3E362E] mt-1 capitalize text-sm">
                  {confirmedBooking.preferredLocation === 'studio' ? 'Sai Nagar Studio Visit' : confirmedBooking.preferredLocation === 'site' ? 'Free On-Site Laser Measurement' : 'Online Video Call'}
                </p>
                <p className="text-[#5A524A]">{confirmedBooking.preferredTimeSlot}</p>
              </div>

              <div className="p-4 rounded-2xl bg-[#F8F5F2] border border-[#E5E1DA]">
                <span className="text-[#8B7E74] font-bold block uppercase tracking-wider text-[10px]">Property & Budget</span>
                <p className="font-bold text-[#3E362E] mt-1 uppercase text-sm">{confirmedBooking.propertyType}</p>
                <p className="text-[#5A524A]">{confirmedBooking.budgetRange}</p>
              </div>
            </div>

            {/* Studio Directions Highlight */}
            <div className="p-5 rounded-2xl bg-[#F8F5F2] border border-[#E5E1DA] flex items-start gap-3">
              <MapPin className="w-5 h-5 text-[#8B7E74] shrink-0 mt-0.5" />
              <div className="text-xs space-y-1">
                <p className="font-serif font-bold text-[#3E362E] text-sm">Studio Location: Heaven Interior's</p>
                <p className="text-[#5A524A]">{STUDIO_INFO.address}</p>
                <p className="text-[#8B7E74] pt-0.5">Our designers will prepare customized 3D samples and material boards prior to your arrival.</p>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 pt-2">
              <button
                onClick={handleSendToWhatsApp}
                className="flex-1 min-w-[200px] py-3.5 px-5 rounded-full bg-[#3E362E] hover:bg-[#8B7E74] text-white font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 shadow-sm transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-[#E5E1DA]" />
                <span>Confirm Instantly on WhatsApp (+91 94412 88765)</span>
              </button>

              <button
                onClick={handleDownloadIcs}
                className="py-3.5 px-5 rounded-full bg-[#F8F5F2] hover:bg-[#E5E1DA] text-[#3E362E] font-semibold text-xs uppercase tracking-wider flex items-center justify-center gap-2 border border-[#D9D1C7] transition-colors"
              >
                <CalendarPlus className="w-4 h-4 text-[#8B7E74]" />
                <span>Add to Calendar (.ics)</span>
              </button>

              <button
                onClick={() => setConfirmedBooking(null)}
                className="py-3.5 px-5 rounded-full bg-white hover:bg-[#F8F5F2] text-[#5A524A] hover:text-[#3E362E] text-xs font-semibold uppercase tracking-wider border border-[#E5E1DA] transition-colors"
              >
                Book Another Slot
              </button>
            </div>
          </div>
        ) : (
          /* Consultation Booking Form */
          <form 
            onSubmit={handleFormSubmit}
            className="bg-white border border-[#E5E1DA] rounded-[32px] p-6 sm:p-10 shadow-sm space-y-8 text-left"
          >
            {/* 1. Select Consultation Mode */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-[#3E362E] uppercase tracking-wider block">
                1. How would you like to meet?
              </label>
              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  {
                    id: 'studio',
                    title: 'Visit Sai Nagar Studio',
                    subtitle: 'Touch material samples & view 3D on screen',
                    badge: 'Recommended'
                  },
                  {
                    id: 'site',
                    title: 'Free On-Site Visit',
                    subtitle: 'Our engineer visits your property in VZM',
                    badge: 'Free Laser Survey'
                  },
                  {
                    id: 'online',
                    title: 'Online Video Call',
                    subtitle: 'Review initial concepts on Google Meet / Zoom',
                    badge: 'Instant'
                  }
                ].map((mode) => (
                  <div
                    key={mode.id}
                    onClick={() => setConsultationMode(mode.id as any)}
                    className={`p-4 rounded-2xl cursor-pointer border transition-all flex flex-col justify-between space-y-2 ${
                      consultationMode === mode.id
                        ? 'bg-[#F8F5F2] border-[#3E362E] shadow-sm'
                        : 'bg-white border-[#E5E1DA] hover:border-[#D9D1C7]'
                    }`}
                  >
                    <div className="flex justify-between items-start">
                      <span className="font-serif font-bold text-xs sm:text-sm text-[#3E362E]">{mode.title}</span>
                      <span className="text-[9px] px-2 py-0.5 rounded-full bg-[#E5E1DA] text-[#3E362E] font-bold uppercase tracking-wider">
                        {mode.badge}
                      </span>
                    </div>
                    <p className="text-[11px] text-[#5A524A]">{mode.subtitle}</p>
                  </div>
                ))}
              </div>
            </div>

            {/* 2. Property Type & Scope Checklist */}
            <div className="space-y-4">
              <div className="space-y-2">
                <label className="text-xs font-bold text-[#3E362E] uppercase tracking-wider block">
                  2. Property Configuration
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-5 gap-2">
                  {[
                    { id: '1bhk', label: '1 BHK' },
                    { id: '2bhk', label: '2 BHK' },
                    { id: '3bhk', label: '3 BHK' },
                    { id: '4bhk', label: '4 BHK / Villa' },
                    { id: 'commercial', label: 'Commercial' },
                  ].map((p) => (
                    <button
                      key={p.id}
                      type="button"
                      onClick={() => setPropertyType(p.id)}
                      className={`py-2.5 px-3 rounded-full text-xs font-semibold uppercase tracking-wider transition-all text-center ${
                        propertyType === p.id
                          ? 'bg-[#3E362E] text-white shadow-sm'
                          : 'bg-[#F8F5F2] border border-[#E5E1DA] text-[#5A524A] hover:bg-[#E5E1DA] hover:text-[#3E362E]'
                      }`}
                    >
                      {p.label}
                    </button>
                  ))}
                </div>
              </div>

              <div className="space-y-2">
                <label className="text-xs font-bold text-[#3E362E] uppercase tracking-wider block">
                  Design Scope Required
                </label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                  {[
                    'Full Turnkey Interior',
                    'Modular Kitchen',
                    'False Ceiling & Lighting',
                    'Living Room TV Unit & Paneling',
                    'Master Bedroom & Wardrobes',
                    'Kids / Guest Bedroom Wardrobes',
                    'Bathroom Vanities',
                    'Painting & Wallpaper'
                  ].map((sc) => {
                    const isChecked = selectedScopes.includes(sc);
                    return (
                      <button
                        key={sc}
                        type="button"
                        onClick={() => toggleScope(sc)}
                        className={`p-3 rounded-2xl border text-left text-xs font-medium transition-all flex items-center justify-between ${
                          isChecked
                            ? 'bg-[#F8F5F2] border-[#3E362E] text-[#3E362E]'
                            : 'bg-white border-[#E5E1DA] text-[#5A524A] hover:border-[#D9D1C7]'
                        }`}
                      >
                        <span>{sc}</span>
                        {isChecked && <CheckCircle2 className="w-3.5 h-3.5 text-[#8B7E74]" />}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* 3. Date, Time Slot & Budget */}
            <div className="grid sm:grid-cols-3 gap-4">
              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#3E362E] uppercase tracking-wider block">
                  Preferred Date *
                </label>
                <input
                  type="date"
                  required
                  min={minDateString}
                  value={preferredDate}
                  onChange={(e) => setPreferredDate(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-2xl bg-[#F8F5F2] border border-[#E5E1DA] text-xs text-[#3E362E] focus:border-[#3E362E] focus:bg-white focus:outline-none"
                />
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#3E362E] uppercase tracking-wider block">
                  Time Slot
                </label>
                <select
                  value={timeSlot}
                  onChange={(e) => setTimeSlot(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-2xl bg-[#F8F5F2] border border-[#E5E1DA] text-xs text-[#3E362E] focus:border-[#3E362E] focus:bg-white focus:outline-none"
                >
                  <option value="morning">Morning (10:30 AM – 1:00 PM)</option>
                  <option value="afternoon">Afternoon (2:30 PM – 5:00 PM)</option>
                  <option value="evening">Evening (5:30 PM – 8:00 PM)</option>
                </select>
              </div>

              <div className="space-y-1.5">
                <label className="text-xs font-bold text-[#3E362E] uppercase tracking-wider block">
                  Approx Budget Range
                </label>
                <select
                  value={budgetRange}
                  onChange={(e) => setBudgetRange(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-2xl bg-[#F8F5F2] border border-[#E5E1DA] text-xs text-[#3E362E] focus:border-[#3E362E] focus:bg-white focus:outline-none"
                >
                  <option value="₹3L - ₹6L">₹3 Lakhs – ₹6 Lakhs</option>
                  <option value="₹6L - ₹12L">₹6 Lakhs – ₹12 Lakhs</option>
                  <option value="₹12L - ₹20L">₹12 Lakhs – ₹20 Lakhs</option>
                  <option value="₹20L+">₹20 Lakhs+ (Luxury Suite)</option>
                  <option value="Flexible / Need guidance">Flexible / Need Guidance</option>
                </select>
              </div>
            </div>

            {/* 4. Contact Details */}
            <div className="space-y-3 pt-2 border-t border-[#E5E1DA]">
              <label className="text-xs font-bold text-[#3E362E] uppercase tracking-wider block">
                3. Your Contact Information
              </label>
              
              <div className="grid sm:grid-cols-2 gap-4">
                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#5A524A]">Full Name *</label>
                  <div className="relative">
                    <User className="w-4 h-4 text-[#8B7E74] absolute left-3.5 top-3" />
                    <input
                      type="text"
                      required
                      placeholder="e.g. Ramesh Kumar"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full pl-10 pr-3 py-2.5 rounded-2xl bg-[#F8F5F2] border border-[#E5E1DA] text-xs text-[#3E362E] focus:border-[#3E362E] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#5A524A]">Phone / WhatsApp Number *</label>
                  <div className="relative">
                    <Phone className="w-4 h-4 text-[#8B7E74] absolute left-3.5 top-3" />
                    <input
                      type="tel"
                      required
                      placeholder="e.g. 94412 88765"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                      className="w-full pl-10 pr-3 py-2.5 rounded-2xl bg-[#F8F5F2] border border-[#E5E1DA] text-xs text-[#3E362E] focus:border-[#3E362E] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#5A524A]">Email Address (Optional)</label>
                  <div className="relative">
                    <Mail className="w-4 h-4 text-[#8B7E74] absolute left-3.5 top-3" />
                    <input
                      type="email"
                      placeholder="name@example.com"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-10 pr-3 py-2.5 rounded-2xl bg-[#F8F5F2] border border-[#E5E1DA] text-xs text-[#3E362E] focus:border-[#3E362E] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>

                <div className="space-y-1">
                  <label className="text-xs font-semibold text-[#5A524A]">Property Address / Landmark in VZM</label>
                  <div className="relative">
                    <MapPin className="w-4 h-4 text-[#8B7E74] absolute left-3.5 top-3" />
                    <input
                      type="text"
                      placeholder="e.g. Sai Nagar, Near SBI Bank, Vizianagaram"
                      value={addressOrLandmark}
                      onChange={(e) => setAddressOrLandmark(e.target.value)}
                      className="w-full pl-10 pr-3 py-2.5 rounded-2xl bg-[#F8F5F2] border border-[#E5E1DA] text-xs text-[#3E362E] focus:border-[#3E362E] focus:bg-white focus:outline-none"
                    />
                  </div>
                </div>
              </div>

              <div className="space-y-1 pt-1">
                <label className="text-xs font-semibold text-[#5A524A]">Notes / Specific Style Preferences</label>
                <textarea
                  rows={2}
                  placeholder="Mention any specific color theme, quartz preference, timeline urgency, or builder floor plan details..."
                  value={notes}
                  onChange={(e) => setNotes(e.target.value)}
                  className="w-full px-3.5 py-2.5 rounded-2xl bg-[#F8F5F2] border border-[#E5E1DA] text-xs text-[#3E362E] focus:border-[#3E362E] focus:bg-white focus:outline-none resize-none"
                />
              </div>

              {/* WhatsApp Updates Checkbox */}
              <label className="flex items-center gap-2 text-xs text-[#5A524A] cursor-pointer pt-1">
                <input
                  type="checkbox"
                  checked={enableWhatsApp}
                  onChange={(e) => setEnableWhatsApp(e.target.checked)}
                  className="w-4 h-4 rounded text-[#3E362E] accent-[#3E362E] bg-white border-[#D9D1C7]"
                />
                <span>Send booking confirmation & 3D floor plan review updates via WhatsApp</span>
              </label>
            </div>

            {/* Submit Button */}
            <div className="pt-4 border-t border-[#E5E1DA] flex flex-col sm:flex-row items-center justify-between gap-4">
              <div className="text-xs text-[#5A524A] text-center sm:text-left">
                <span className="text-[#3E362E] font-bold">100% Free Consultation</span> • No Advance Payment Required
              </div>

              <button
                type="submit"
                id="submit-consultation-form-btn"
                className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-[#3E362E] hover:bg-[#8B7E74] text-white font-semibold text-xs uppercase tracking-widest transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <Calendar className="w-4 h-4 text-[#E5E1DA]" />
                <span>Confirm Free Design Consultation</span>
              </button>
            </div>

          </form>
        )}

      </div>
    </section>
  );
};
