import React, { useState, useRef, useEffect, useCallback } from "react";
import { testimonialsData } from "../assets/assets";

// Reusable 5-Star Rating Icon
const StarIcon = () => (
  <svg className="w-4 h-4 fill-current text-[#F59E0B]" viewBox="0 0 20 20">
    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
  </svg>
);

// Reusable Carousel Navigation Arrow
const NavArrow = ({ direction = "left", onClick, label }) => (
  <button
    onClick={onClick}
    className="w-9 h-9 sm:w-10 sm:h-10 rounded-full border border-gray-200 bg-white hover:bg-gray-50 active:scale-95 flex items-center justify-center text-gray-600 shadow-xs transition-all cursor-pointer"
    aria-label={label}
  >
    <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d={direction === "left" ? "M15.75 19.5L8.25 12l7.5-7.5" : "M8.25 4.5l7.5 7.5-7.5 7.5"}
      />
    </svg>
  </button>
);

// Reusable Carousel Controls (Arrow + Dots)
function CarouselControls({ isMobile, total, current, onPrev, onNext, onDotClick }) {
  return (
    <div className={`${isMobile ? "flex md:hidden" : "hidden md:flex"} items-center justify-center gap-4 mt-6 sm:mt-10`}>
      <NavArrow direction="left" onClick={onPrev} label="Previous testimonial" />
      <div className="flex items-center gap-2">
        {[...Array(total)].map((_, idx) => (
          <button
            key={idx}
            onClick={() => onDotClick(idx)}
            className={`transition-all duration-300 rounded-full h-2 cursor-pointer ${
              current === idx ? "w-6 bg-[#FF5E00]" : "w-2 bg-gray-300 hover:bg-gray-400"
            }`}
            aria-label={`Go to slide ${idx + 1}`}
          />
        ))}
      </div>
      <NavArrow direction="right" onClick={onNext} label="Next testimonial" />
    </div>
  );
}

// Testimonial Card Component
function TestimonialCard({ item }) {
  return (
    <div className="bg-white border border-gray-100 rounded-3xl p-5 sm:p-8 shadow-[0_4px_25px_rgba(0,0,0,0.05)] hover:shadow-lg transition-all duration-300 flex flex-col justify-between h-full text-left">
      <div>
        {/* Top: Quote Icon & 5 Stars */}
        <div className="flex items-center justify-between mb-3.5 sm:mb-5">
          <div className="w-9 h-9 rounded-xl bg-[#FFF2E9] flex items-center justify-center text-[#FF5E00]">
            <svg className="w-4 h-4 fill-current" viewBox="0 0 24 24">
              <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-2.638 3.995-4.849h-4v-11h9.983zm14.017 0v7.391c0 5.704-3.748 9.57-9 10.609l-.996-2.151c2.433-.917 3.996-2.638 3.996-4.849h-3.983v-11h9.983z" />
            </svg>
          </div>
          <div className="flex items-center gap-1">
            {[...Array(item.rating)].map((_, i) => (
              <StarIcon key={i} />
            ))}
          </div>
        </div>

        {/* Review Quote */}
        <p className="text-gray-700 text-sm sm:text-[15px] leading-relaxed mb-6">
          "{item.quote}"
        </p>
      </div>

      {/* Author Details with Verified Badge */}
      <div className="flex items-center gap-3.5 pt-4 border-t border-gray-100">
        <div className={`w-11 h-11 rounded-full ${item.avatarBg} text-white font-bold text-sm flex items-center justify-center flex-shrink-0 shadow-xs`}>
          {item.initials}
        </div>
        <div>
          <div className="flex items-center gap-1.5 font-bold text-gray-900 text-sm sm:text-base">
            <span>{item.name}</span>
            <svg className="w-4 h-4 text-[#10B981]" fill="currentColor" viewBox="0 0 20 20">
              <path
                fillRule="evenodd"
                d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                clipRule="evenodd"
              />
            </svg>
          </div>
          <div className="text-xs sm:text-[13px] text-gray-500 mt-0.5">
            {item.role} • <span className="text-[#FF5E00] font-semibold">{item.vehicle}</span>
          </div>
        </div>
      </div>
    </div>
  );
}

function Testimonials() {
  // Desktop pagination state
  const [desktopPage, setDesktopPage] = useState(0);
  const desktopTotalPages = Math.ceil(testimonialsData.length / 2);

  // Mobile horizontal scroll carousel state
  const mobileScrollRef = useRef(null);
  const [mobileIndex, setMobileIndex] = useState(0);

  // Hover & Touch pause handling
  const [isPaused, setIsPaused] = useState(false);
  const resumeTimeoutRef = useRef(null);

  const handleTouchStart = () => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    setIsPaused(true);
  };

  const handleTouchEnd = () => {
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => setIsPaused(false), 3000);
  };

  // Helper to find closest active card in scroll container
  const getClosestIndex = (container) => {
    const cards = container.children;
    let closest = 0, minDiff = Infinity;
    for (let i = 0; i < cards.length; i++) {
      const diff = Math.abs(cards[i].offsetLeft - container.offsetLeft - container.scrollLeft);
      if (diff < minDiff) {
        minDiff = diff;
        closest = i;
      }
    }
    return closest;
  };

  const scrollToMobileIndex = useCallback((index) => {
    const container = mobileScrollRef.current;
    if (container && container.children[index]) {
      const targetPos = container.children[index].offsetLeft - container.offsetLeft;
      container.scrollTo({ left: targetPos, behavior: "smooth" });
      setMobileIndex(index);
    }
  }, []);

  // Continuous Auto-Scroll (every 3.5s)
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      if (window.innerWidth < 768) {
        if (mobileScrollRef.current) {
          const next = (getClosestIndex(mobileScrollRef.current) + 1) % testimonialsData.length;
          scrollToMobileIndex(next);
        }
      } else {
        setDesktopPage((prev) => (prev + 1) % desktopTotalPages);
      }
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused, desktopTotalPages, scrollToMobileIndex]);

  useEffect(() => {
    return () => {
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, []);

  const handleMobileScroll = () => {
    if (mobileScrollRef.current) {
      setMobileIndex(getClosestIndex(mobileScrollRef.current));
    }
  };

  const handleMobilePrev = () => {
    const prev = mobileIndex === 0 ? testimonialsData.length - 1 : mobileIndex - 1;
    scrollToMobileIndex(prev);
  };

  const handleMobileNext = () => {
    const next = (mobileIndex + 1) % testimonialsData.length;
    scrollToMobileIndex(next);
  };

  const handleDesktopPrev = () => {
    setDesktopPage((prev) => (prev === 0 ? desktopTotalPages - 1 : prev - 1));
  };

  const handleDesktopNext = () => {
    setDesktopPage((prev) => (prev === desktopTotalPages - 1 ? 0 : prev + 1));
  };

  const currentDesktopCards = testimonialsData.slice(desktopPage * 2, desktopPage * 2 + 2);

  return (
    <section
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={handleTouchStart}
      onTouchEnd={handleTouchEnd}
      className="w-full bg-white py-8 sm:py-14 lg:py-20 text-center overflow-hidden"
    >
      <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
        {/* Top Pill Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF3EB] border border-[#FFE2D1] mb-2 sm:mb-3 shadow-xs">
          <svg className="w-3.5 h-3.5 text-[#FF5E00]" fill="currentColor" viewBox="0 0 24 24">
            <path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5z" />
          </svg>
          <span className="text-[#FF5E00] text-xs font-bold tracking-wider uppercase">
            Real User Experiences
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-2xl sm:text-4xl md:text-[44px] font-bold text-gray-900 tracking-tight mb-6 sm:mb-12">
          What Our <span className="text-[#FF5E00]">Users Say</span>
        </h2>

        {/* Mobile View: 1 card per view with swipe/scroll */}
        <div
          ref={mobileScrollRef}
          onScroll={handleMobileScroll}
          className="flex md:hidden overflow-x-auto snap-x snap-mandatory scroll-smooth touch-pan-x [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden gap-4 py-2 px-1"
        >
          {testimonialsData.map((item) => (
            <div key={item.id} className="w-full flex-shrink-0 snap-center">
              <TestimonialCard item={item} />
            </div>
          ))}
        </div>

        {/* Desktop View: 2 cards per view */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 lg:gap-8 max-w-6xl mx-auto text-left">
          {currentDesktopCards.map((item) => (
            <TestimonialCard key={item.id} item={item} />
          ))}
        </div>

        {/* Mobile Navigation Controls */}
        <CarouselControls
          isMobile
          total={testimonialsData.length}
          current={mobileIndex}
          onPrev={handleMobilePrev}
          onNext={handleMobileNext}
          onDotClick={scrollToMobileIndex}
        />

        {/* Desktop Navigation Controls */}
        <CarouselControls
          isMobile={false}
          total={desktopTotalPages}
          current={desktopPage}
          onPrev={handleDesktopPrev}
          onNext={handleDesktopNext}
          onDotClick={setDesktopPage}
        />
      </div>
    </section>
  );
}

export default Testimonials;
