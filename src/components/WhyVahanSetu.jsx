import React, { useState, useRef, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { 
  ParkingSquare, 
  Lightbulb, 
  AlertTriangle, 
  Car, 
  Lock, 
  Smartphone, 
  ArrowRight, 
  Sparkles,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';
 
const ICON_MAP = {
  ParkingSquare,
  Lightbulb,
  AlertTriangle,
  Car,
  Lock,
  Smartphone,
};

const whyFeatures = [
  {
    id: 1,
    iconName: 'ParkingSquare',
    tag: 'Parking Alert',
    title: 'Wrong Parking Notifications',
    desc: 'Get notified immediately if your vehicle is blocking someone or parked in a restricted spot, without exposing your phone number.',
  },
  {
    id: 2,
    iconName: 'Lightbulb',
    tag: 'Vehicle Safety',
    title: 'Headlight & Window Alerts',
    desc: 'Helpful passersby can alert you in seconds if you left your car headlights on or windows open.',
  },
  {
    id: 3,
    iconName: 'AlertTriangle',
    tag: 'Emergency Notice',
    title: 'Emergency & Towing Alerts',
    desc: 'Receive urgent notices for accidents, vehicle towing, or break-in attempts with instant alerts.',
  },
  {
    id: 4,
    iconName: 'Car',
    tag: 'Multi-Vehicle',
    title: 'Works for Every Vehicle',
    desc: 'Whether you drive a car, ride a bike, scooter, or manage a commercial fleet, one account covers all.',
  },
  {
    id: 5,
    iconName: 'Lock',
    tag: '100% Private',
    title: 'Masked Privacy Bridge',
    desc: 'Your real phone number and identity stay completely shielded. Callers connect securely through masked routing.',
  },
  {
    id: 6,
    iconName: 'Smartphone',
    tag: 'Zero Friction',
    title: 'No App Required to Scan',
    desc: 'Anyone can simply scan your vehicle QR code with their default smartphone camera—no app download required.',
  },
];

function FeatureCard({ feat }) {
  const IconComp = ICON_MAP[feat.iconName] || Car;
  return (
    <div className="group p-5 sm:p-7 rounded-2xl bg-[#0E131F]/90 border border-gray-800/80 hover:border-orange-500/40 hover:bg-[#121826] transition-all duration-300 shadow-lg hover:shadow-orange-600/10 flex flex-col justify-between h-full text-left">
      <div>
        {/* Icon + Tag Header */}
        <div className="flex items-center justify-between mb-3.5 sm:mb-5">
          <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-orange-500/10 border border-orange-500/20 text-[#FF5E00] flex items-center justify-center group-hover:scale-105 group-hover:bg-orange-500/20 transition-all duration-300">
            <IconComp size={24} className="sm:hidden" />
            <IconComp size={28} className="hidden sm:block" />
          </div>
          <span className="px-3 py-1 rounded-full text-xs font-medium text-gray-300 bg-gray-800/60 border border-gray-700/60">
            {feat.tag}
          </span>
        </div>

        {/* Title */}
        <h3 className="text-lg sm:text-xl font-bold text-white mb-2 sm:mb-2.5">
          {feat.title}
        </h3>

        {/* Description */}
        <p className="text-sm text-gray-400 leading-relaxed">
          {feat.desc}
        </p>
      </div>
    </div>
  );
}

export default function WhyVahanSetu({ onOpenRegister }) {
  // Mobile horizontal scroll carousel state
  const mobileScrollRef = useRef(null);

  // Pause auto-scroll on hover or touch
  const [isPaused, setIsPaused] = useState(false);
  const resumeTimeoutRef = useRef(null);

  const handleTouchStart = () => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    setIsPaused(true);
  };

  const handleTouchEnd = () => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      setIsPaused(false);
    }, 3000);
  };

  // Auto-scroll on mobile screen (every 3.5s)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      const isMobile = window.innerWidth < 768;
      if (!isMobile) return;

      if (mobileScrollRef.current) {
        const container = mobileScrollRef.current;
        const cards = container.children;
        const total = cards.length;
        if (total > 0) {
          const scrollLeft = container.scrollLeft;
          let currentIdx = 0;
          let minDiff = Infinity;
          for (let i = 0; i < total; i++) {
            const diff = Math.abs(
              cards[i].offsetLeft - container.offsetLeft - scrollLeft
            );
            if (diff < minDiff) {
              minDiff = diff;
              currentIdx = i;
            }
          }
          const nextIdx = (currentIdx + 1) % total;
          const targetPos = cards[nextIdx].offsetLeft - container.offsetLeft;
          container.scrollTo({
            left: targetPos,
            behavior: "smooth",
          });
        }
      }
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused]);

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  const handleMobilePrev = () => {
    if (mobileScrollRef.current) {
      const container = mobileScrollRef.current;
      const cards = container.children;
      const total = cards.length;
      if (total > 0) {
        const scrollLeft = container.scrollLeft;
        let currentIdx = 0;
        let minDiff = Infinity;
        for (let i = 0; i < total; i++) {
          const diff = Math.abs(
            cards[i].offsetLeft - container.offsetLeft - scrollLeft
          );
          if (diff < minDiff) {
            minDiff = diff;
            currentIdx = i;
          }
        }
        const prevIdx = currentIdx === 0 ? total - 1 : currentIdx - 1;
        const targetPos = cards[prevIdx].offsetLeft - container.offsetLeft;
        container.scrollTo({
          left: targetPos,
          behavior: "smooth",
        });
      }
    }
  };

  const handleMobileNext = () => {
    if (mobileScrollRef.current) {
      const container = mobileScrollRef.current;
      const cards = container.children;
      const total = cards.length;
      if (total > 0) {
        const scrollLeft = container.scrollLeft;
        let currentIdx = 0;
        let minDiff = Infinity;
        for (let i = 0; i < total; i++) {
          const diff = Math.abs(
            cards[i].offsetLeft - container.offsetLeft - scrollLeft
          );
          if (diff < minDiff) {
            minDiff = diff;
            currentIdx = i;
          }
        }
        const nextIdx = (currentIdx + 1) % total;
        const targetPos = cards[nextIdx].offsetLeft - container.offsetLeft;
        container.scrollTo({
          left: targetPos,
          behavior: "smooth",
        });
      }
    }
  };

  return (
    <section
      id="features"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="relative py-6 sm:py-8 md:py-10 lg:py-12 bg-[#070A10] text-white overflow-hidden"
    >
      {/* Background ambient glow meshes */}
      <div className="absolute -top-40 -left-40 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12 relative z-10">
        {/* Centered Section Header: Eyebrow + Heading */}
        <div className="text-center max-w-2xl mx-auto">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-orange-950/40 border border-orange-500/30 text-[#FFA048] text-xs font-semibold uppercase tracking-wider mb-2 sm:mb-2.5 shadow-sm">
            <Sparkles size={14} className="text-[#FF5E00]" />
            <span>DESIGNED FOR EVERY RIDE</span>
          </div>

          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold tracking-tight text-white">
            Why <span className="text-[#FF5E00]">VahanSetu</span>?
          </h2>
        </div>

        {/* Mobile View: 1 card shown at a time with left/right navigation arrows */}
        <div className="relative md:hidden mt-4 sm:mt-5">
          {/* Left Arrow Button */}
          <button
            onClick={handleMobilePrev}
            className="absolute -left-2 sm:left-1 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#0E131F]/90 backdrop-blur-md border border-orange-500/30 text-white hover:text-[#FF5E00] hover:border-orange-500 active:scale-95 shadow-xl flex items-center justify-center transition-all cursor-pointer"
            aria-label="Previous feature"
          >
            <ChevronLeft size={20} />
          </button>

          {/* Cards Scroll Container */}
          <div
            ref={mobileScrollRef}
            className="flex overflow-x-auto snap-x snap-mandatory scroll-smooth touch-pan-x [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden gap-4 py-2 px-1"
          >
            {whyFeatures.map((feat) => (
              <div
                key={feat.id}
                className="w-full flex-shrink-0 snap-center"
              >
                <FeatureCard feat={feat} />
              </div>
            ))}
          </div>

          {/* Right Arrow Button */}
          <button
            onClick={handleMobileNext}
            className="absolute -right-2 sm:right-1 top-1/2 -translate-y-1/2 z-20 w-9 h-9 rounded-full bg-[#0E131F]/90 backdrop-blur-md border border-orange-500/30 text-white hover:text-[#FF5E00] hover:border-orange-500 active:scale-95 shadow-xl flex items-center justify-center transition-all cursor-pointer"
            aria-label="Next feature"
          >
            <ChevronRight size={20} />
          </button>
        </div>

        {/* Desktop View: 6 Feature Cards in 3 Columns x 2 Rows */}
        <div className="hidden md:grid md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto mt-7 sm:mt-9">
          {whyFeatures.map((feat) => (
            <FeatureCard key={feat.id} feat={feat} />
          ))}
        </div>

        {/* Centered CTA Button below cards - hidden on mobile, visible on desktop */}
        <div className="hidden md:block text-center mt-7 sm:mt-9">
          {onOpenRegister ? (
            <button
              onClick={onOpenRegister}
              className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-[#FF5500] to-[#FF6B00] rounded-full hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-orange-600/25"
            >
              <span>Get Started Now</span>
              <ArrowRight size={18} />
            </button>
          ) : (
            <Link
              to="/get-qr"
              className="inline-flex items-center gap-2 px-8 py-3.5 text-base font-semibold text-white bg-gradient-to-r from-[#FF5500] to-[#FF6B00] rounded-full hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-orange-600/25"
            >
              <span>Get Started Now</span>
              <ArrowRight size={18} />
            </Link>
          )}
        </div>
      </div>
    </section>
  );
}
