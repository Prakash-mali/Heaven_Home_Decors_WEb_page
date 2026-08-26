import React, { useState, useMemo } from 'react';
import { 
  Calculator, 
  Check, 
  Sparkles, 
  ArrowRight, 
  ShieldAlert, 
  Info, 
  ChevronRight,
  Send,
  Sliders,
  DollarSign,
  HelpCircle
} from 'lucide-react';
import { STUDIO_INFO } from '../data/testimonialsData';

interface CostEstimatorProps {
  onProceedToBookingWithEstimate: (estimateSummary: string) => void;
}

export const CostEstimator: React.FC<CostEstimatorProps> = ({ 
  onProceedToBookingWithEstimate 
}) => {
  const [bhkType, setBhkType] = useState<'1bhk' | '2bhk' | '3bhk' | '4bhk' | 'kitchen-only' | 'living-only'>('2bhk');
  const [materialTier, setMaterialTier] = useState<'essential' | 'premium' | 'luxury'>('premium');
  
  // Custom scope checkboxes
  const [includeFalseCeiling, setIncludeFalseCeiling] = useState<boolean>(true);
  const [includeModularKitchen, setIncludeModularKitchen] = useState<boolean>(true);
  const [includeWardrobes, setIncludeWardrobes] = useState<boolean>(true);
  const [includeTvUnit, setIncludeTvUnit] = useState<boolean>(true);
  const [includeSmartLighting, setIncludeSmartLighting] = useState<boolean>(false);
  const [includeQuartzCountertop, setIncludeQuartzCountertop] = useState<boolean>(true);

  // Base pricing calculations based on BHK and material tier
  const pricingData = useMemo(() => {
    const baseRates: Record<string, { baseSqft: number; kitchenBase: number; livingBase: number; wardrobeCount: number }> = {
      '1bhk': { baseSqft: 650, kitchenBase: 120000, livingBase: 90000, wardrobeCount: 1 },
      '2bhk': { baseSqft: 1100, kitchenBase: 180000, livingBase: 140000, wardrobeCount: 2 },
      '3bhk': { baseSqft: 1650, kitchenBase: 240000, livingBase: 190000, wardrobeCount: 3 },
      '4bhk': { baseSqft: 2400, kitchenBase: 310000, livingBase: 250000, wardrobeCount: 4 },
      'kitchen-only': { baseSqft: 200, kitchenBase: 190000, livingBase: 0, wardrobeCount: 0 },
      'living-only': { baseSqft: 400, kitchenBase: 0, livingBase: 160000, wardrobeCount: 0 },
    };

    const multiplier: Record<string, number> = {
      'essential': 1.0,  // Standard commercial ply & basic laminate
      'premium': 1.35,   // CenturyPly BWP, Acrylic finish, Blum / Hafele hardware
      'luxury': 1.75,    // HDHMR, Smoked glass, Italian marble, Smart automation
    };

    const currentConfig = baseRates[bhkType];
    const tierMultiplier = multiplier[materialTier];

    let totalMin = 0;
    let totalMax = 0;

    // Kitchen component
    if (includeModularKitchen && currentConfig.kitchenBase > 0) {
      const kVal = currentConfig.kitchenBase * tierMultiplier;
      totalMin += kVal * 0.95;
      totalMax += kVal * 1.15;
    }

    // Living & TV unit component
    if (includeTvUnit && currentConfig.livingBase > 0) {
      const lVal = currentConfig.livingBase * tierMultiplier;
      totalMin += lVal * 0.9;
      totalMax += lVal * 1.15;
    }

    // Wardrobes component
    if (includeWardrobes && currentConfig.wardrobeCount > 0) {
      const wardrobeUnitCost = 85000 * tierMultiplier;
      const wVal = wardrobeUnitCost * currentConfig.wardrobeCount;
      totalMin += wVal * 0.9;
      totalMax += wVal * 1.15;
    }

    // False ceiling component (calculated per sqft)
    if (includeFalseCeiling) {
      const ceilingRatePerSqft = (materialTier === 'essential' ? 110 : materialTier === 'premium' ? 145 : 190);
      const cVal = currentConfig.baseSqft * 0.8 * ceilingRatePerSqft;
      totalMin += cVal;
      totalMax += cVal * 1.2;
    }

    // Addons
    if (includeSmartLighting) {
      const smartRate = 35000 * tierMultiplier;
      totalMin += smartRate;
      totalMax += smartRate * 1.3;
    }

    if (includeQuartzCountertop && includeModularKitchen) {
      const quartzRate = (materialTier === 'essential' ? 25000 : 45000);
      totalMin += quartzRate;
      totalMax += quartzRate * 1.2;
    }

    // Ensure minimum threshold for realism
    if (totalMin === 0) totalMin = 80000;
    if (totalMax === 0) totalMax = 120000;

    return {
      min: Math.round(totalMin / 5000) * 5000,
      max: Math.round(totalMax / 5000) * 5000,
      estTimeline: bhkType === '1bhk' ? '25 - 30 Days' : bhkType === '2bhk' ? '35 - 40 Days' : bhkType === '3bhk' ? '40 - 45 Days' : '45 - 55 Days',
    };
  }, [bhkType, materialTier, includeFalseCeiling, includeModularKitchen, includeWardrobes, includeTvUnit, includeSmartLighting, includeQuartzCountertop]);

  const formatRupees = (val: number) => {
    if (val >= 100000) {
      return `₹${(val / 100000).toFixed(2)} Lakhs`;
    }
    return `₹${val.toLocaleString('en-IN')}`;
  };

  const getEstimateSummaryText = () => {
    return `${bhkType.toUpperCase()} with ${materialTier.toUpperCase()} package (Estimate: ${formatRupees(pricingData.min)} - ${formatRupees(pricingData.max)})`;
  };

  const handleShareWhatsApp = () => {
    const text = encodeURIComponent(
      `Hello Heaven Interior's team! I used your website Cost Estimator for my home in Vizianagaram.\n\n` +
      `• Home Type: ${bhkType.toUpperCase()}\n` +
      `• Material Quality: ${materialTier.toUpperCase()}\n` +
      `• Estimated Range: ${formatRupees(pricingData.min)} - ${formatRupees(pricingData.max)}\n` +
      `• Scope: ${[
        includeModularKitchen ? 'Kitchen' : null,
        includeWardrobes ? 'Wardrobes' : null,
        includeFalseCeiling ? 'False Ceiling' : null,
        includeTvUnit ? 'TV Unit' : null,
        includeSmartLighting ? 'Smart Lighting' : null
      ].filter(Boolean).join(', ')}\n\n` +
      `I would like to book a free 3D design consultation.`
    );
    window.open(`https://wa.me/919441288765?text=${text}`, '_blank');
  };

  return (
    <section id="estimator" className="py-16 sm:py-24 bg-[#F8F5F2] text-[#3E362E] border-b border-[#E5E1DA] relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-white/80 border border-[#D9D1C7] text-[#5A524A] text-xs font-semibold uppercase tracking-widest">
            <Calculator className="w-3.5 h-3.5 text-[#8B7E74]" />
            <span>Transparent Ballpark Calculator</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-serif text-[#3E362E]">
            Interactive Interior <span className="text-[#8B7E74] italic">Cost Estimator</span>
          </h2>
          <p className="text-[#5A524A] text-sm sm:text-base leading-relaxed">
            Get an instant, itemized ballpark estimate for your home interior in Vizianagaram based on layout, material grades, and desired custom scopes.
          </p>
        </div>

        {/* Calculator Grid */}
        <div className="grid lg:grid-cols-12 gap-8 items-start">
          
          {/* Configuration Controls (Left 7 Cols) */}
          <div className="lg:col-span-7 bg-white border border-[#E5E1DA] rounded-[32px] p-6 sm:p-8 space-y-7 shadow-sm text-left">
            
            {/* 1. Property Layout Type */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-[#3E362E] uppercase tracking-wider flex items-center justify-between">
                <span>1. Select Home Configuration</span>
                <span className="text-[11px] text-[#8B7E74] font-normal">Vizianagaram Standard Layouts</span>
              </label>
              <div className="grid grid-cols-3 sm:grid-cols-6 gap-2">
                {[
                  { id: '1bhk', label: '1 BHK' },
                  { id: '2bhk', label: '2 BHK' },
                  { id: '3bhk', label: '3 BHK' },
                  { id: '4bhk', label: '4 BHK/Villa' },
                  { id: 'kitchen-only', label: 'Kitchen' },
                  { id: 'living-only', label: 'Living' },
                ].map((item) => (
                  <button
                    key={item.id}
                    onClick={() => setBhkType(item.id as any)}
                    className={`py-3 px-2 rounded-full text-xs font-semibold uppercase tracking-wider transition-all text-center ${
                      bhkType === item.id
                        ? 'bg-[#3E362E] text-white shadow-sm'
                        : 'bg-[#F8F5F2] hover:bg-[#E5E1DA] text-[#5A524A] hover:text-[#3E362E] border border-[#E5E1DA]'
                    }`}
                  >
                    {item.label}
                  </button>
                ))}
              </div>
            </div>

            {/* 2. Material & Hardware Quality Tier */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-[#3E362E] uppercase tracking-wider flex items-center justify-between">
                <span>2. Select Material & Finish Package</span>
                <span className="text-[11px] text-[#8B7E74]">All tiers include 10-Yr warranty</span>
              </label>
              <div className="grid sm:grid-cols-3 gap-3">
                {[
                  {
                    id: 'essential',
                    title: 'Essential',
                    ply: 'Commercial MR / IS:303 Ply',
                    finish: '0.8mm Matte Laminates',
                    fittings: 'Standard Soft-close hinges',
                    badge: 'Budget Friendly'
                  },
                  {
                    id: 'premium',
                    title: 'Premium',
                    ply: 'CenturyPly BWP IS:710 Marine',
                    finish: '1mm Anti-Scratch Acrylic / Suede',
                    fittings: 'Blum / Hafele Channels',
                    badge: 'Most Popular'
                  },
                  {
                    id: 'luxury',
                    title: 'Ultra Luxury',
                    ply: 'Action TESA HDHMR + Marine',
                    finish: 'Fluted Glass + Smoked Veneer + PU',
                    fittings: 'German Concealed Push-Open',
                    badge: 'Designer Suite'
                  },
                ].map((tier) => {
                  const isSelected = materialTier === tier.id;
                  return (
                    <div
                      key={tier.id}
                      onClick={() => setMaterialTier(tier.id as any)}
                      className={`p-4 rounded-2xl cursor-pointer border transition-all flex flex-col justify-between space-y-2 ${
                        isSelected
                          ? 'bg-[#F8F5F2] border-[#3E362E] shadow-sm'
                          : 'bg-white border-[#E5E1DA] hover:border-[#D9D1C7]'
                      }`}
                    >
                      <div className="flex justify-between items-start">
                        <span className="font-serif font-bold text-sm text-[#3E362E]">{tier.title}</span>
                        {isSelected && <span className="w-2.5 h-2.5 rounded-full bg-[#3E362E]" />}
                      </div>
                      <div className="text-[11px] space-y-1 text-[#5A524A]">
                        <p>🪵 {tier.ply}</p>
                        <p>✨ {tier.finish}</p>
                        <p>⚙️ {tier.fittings}</p>
                      </div>
                      <span className="text-[10px] font-bold text-[#8B7E74] uppercase tracking-wider pt-1">
                        {tier.badge}
                      </span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* 3. Include Specific Scopes */}
            <div className="space-y-3">
              <label className="text-xs font-bold text-[#3E362E] uppercase tracking-wider">
                3. Customize Inclusions & Add-ons
              </label>
              <div className="grid sm:grid-cols-2 gap-2.5">
                {[
                  {
                    label: 'Modular Kitchen (BWP Core + Tandem)',
                    checked: includeModularKitchen,
                    onChange: setIncludeModularKitchen,
                  },
                  {
                    label: 'Wardrobes & Lofts (Floor to ceiling)',
                    checked: includeWardrobes,
                    onChange: setIncludeWardrobes,
                  },
                  {
                    label: 'Saint-Gobain False Ceiling & Cove Lights',
                    checked: includeFalseCeiling,
                    onChange: setIncludeFalseCeiling,
                  },
                  {
                    label: 'Living TV Entertainment Media Unit',
                    checked: includeTvUnit,
                    onChange: setIncludeTvUnit,
                  },
                  {
                    label: 'Quartz Stone Waterfall Countertop',
                    checked: includeQuartzCountertop,
                    onChange: setIncludeQuartzCountertop,
                  },
                  {
                    label: 'Smart Tunable LED & Magnetic Tracks',
                    checked: includeSmartLighting,
                    onChange: setIncludeSmartLighting,
                  },
                ].map((item, idx) => (
                  <label
                    key={idx}
                    className="flex items-center gap-3 p-3.5 rounded-2xl bg-[#F8F5F2] border border-[#E5E1DA] cursor-pointer hover:border-[#D9D1C7] text-xs text-[#3E362E] transition-colors"
                  >
                    <input
                      type="checkbox"
                      checked={item.checked}
                      onChange={(e) => item.onChange(e.target.checked)}
                      className="w-4 h-4 rounded text-[#3E362E] accent-[#3E362E] focus:ring-0 focus:ring-offset-0 bg-white border-[#D9D1C7]"
                    />
                    <span className="font-medium">{item.label}</span>
                  </label>
                ))}
              </div>
            </div>

          </div>

          {/* Dynamic Estimate Summary Box (Right 5 Cols) */}
          <div className="lg:col-span-5 bg-white border border-[#E5E1DA] rounded-[32px] p-6 sm:p-8 space-y-6 shadow-sm sticky top-24 text-left">
            
            <div className="space-y-1">
              <div className="flex items-center gap-2 text-[#8B7E74] text-xs font-semibold uppercase tracking-widest">
                <Sparkles className="w-3.5 h-3.5" />
                <span>Estimated Investment Range</span>
              </div>
              <h3 className="text-xl font-serif font-bold text-[#3E362E]">
                Ballpark Summary
              </h3>
            </div>

            {/* Estimated Price Range Banner */}
            <div className="p-5 rounded-2xl bg-[#F8F5F2] border border-[#E5E1DA] space-y-1">
              <span className="text-xs text-[#8B7E74] uppercase font-bold tracking-wider">Estimated Turnkey Cost</span>
              <div className="text-2xl sm:text-3xl font-serif font-bold text-[#3E362E] tracking-tight">
                {formatRupees(pricingData.min)} – {formatRupees(pricingData.max)}
              </div>
              <p className="text-[11px] text-[#5A524A] pt-1">
                *Estimated for {bhkType.toUpperCase()} in Vizianagaram with {materialTier.toUpperCase()} grade.
              </p>
            </div>

            {/* Inclusions Breakdown Checklist */}
            <div className="space-y-2 text-xs">
              <p className="font-bold text-[#3E362E] uppercase tracking-wider text-[11px]">Included in this estimate:</p>
              <div className="space-y-2 text-[#5A524A]">
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#8B7E74]" />
                    <span>Free 3D Rendering & Site Consultation</span>
                  </span>
                  <span className="text-[#3E362E] font-semibold">Included</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#8B7E74]" />
                    <span>Execution Timeline</span>
                  </span>
                  <span className="text-[#3E362E] font-medium">{pricingData.estTimeline}</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#8B7E74]" />
                    <span>Warranty Coverage</span>
                  </span>
                  <span className="text-[#8B7E74] font-bold">10 Years</span>
                </div>
                <div className="flex items-center justify-between">
                  <span className="flex items-center gap-1.5">
                    <Check className="w-3.5 h-3.5 text-[#8B7E74]" />
                    <span>Delivery & Installation</span>
                  </span>
                  <span className="text-[#3E362E] font-semibold">Zero Extra</span>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="space-y-3 pt-2">
              <button
                onClick={() => onProceedToBookingWithEstimate(getEstimateSummaryText())}
                className="w-full py-3.5 px-4 rounded-full bg-[#3E362E] hover:bg-[#8B7E74] text-white font-semibold text-xs uppercase tracking-widest transition-all shadow-sm flex items-center justify-center gap-2"
              >
                <span>Book Consultation with Estimate</span>
                <ArrowRight className="w-4 h-4 text-[#E5E1DA]" />
              </button>

              <button
                onClick={handleShareWhatsApp}
                className="w-full py-3 px-4 rounded-full bg-[#F8F5F2] hover:bg-[#E5E1DA] border border-[#D9D1C7] text-[#3E362E] text-xs font-semibold uppercase tracking-wider transition-all flex items-center justify-center gap-2"
              >
                <Send className="w-3.5 h-3.5 text-[#8B7E74]" />
                <span>Send Estimate to WhatsApp (+91 94412 88765)</span>
              </button>
            </div>

            <p className="text-[10px] text-[#8B7E74] leading-tight">
              Note: Final customized quotes vary based on exact laser measurements, chosen stone thickness, and specific electrical fixtures discussed during the 3D design phase.
            </p>

          </div>

        </div>

      </div>
    </section>
  );
};
