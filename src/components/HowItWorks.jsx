import React from "react";
import { steps } from "../assets/assets";

const STEP_ICONS = {
  user: (
    <svg
      className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
      <circle cx="12" cy="7" r="4" />
    </svg>
  ),
  vehicle: (
    <svg
      className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M19 17h2c.6 0 1-.4 1-1v-3c0-.9-.7-1.7-1.5-1.9C18.7 10.6 16 10 16 10s-1.3-1.4-2.2-2.3c-.5-.4-1.1-.7-1.8-.7H5c-.6 0-1.1.4-1.4.9l-1.4 2.9C2.1 11.1 2 11.5 2 12v4c0 .6.4 1 1 1h2" />
      <circle cx="7" cy="17" r="2" />
      <path d="M9 17h6" />
      <circle cx="17" cy="17" r="2" />
    </svg>
  ),
  qr: (
    <svg
      className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <rect x="3" y="3" width="7" height="7" rx="1.5" />
      <rect x="14" y="3" width="7" height="7" rx="1.5" />
      <rect x="3" y="14" width="7" height="7" rx="1.5" />
      <path d="M14 14h3v3h-3z" fill="currentColor" stroke="none" />
      <path d="M18 18h3v3h-3z" fill="currentColor" stroke="none" />
      <path d="M18 14h3v2h-3z" fill="currentColor" stroke="none" />
      <path d="M14 18h2v3h-2z" fill="currentColor" stroke="none" />
    </svg>
  ),
  pointer: (
    <svg
      className="w-5 h-5 sm:w-6 sm:h-6 text-gray-800"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      viewBox="0 0 24 24"
    >
      <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z" />
      <path d="M13 3l1 2" />
      <path d="M3 13l2 1" />
      <path d="M7 7l1 1" />
    </svg>
  ),
};

function HowItWorks() {
  return (
    <section className="w-full bg-white py-10 sm:py-12 lg:py-14 text-center overflow-hidden">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Pill Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF3EB] border border-[#FFE2D1] mb-3 shadow-xs">
          <svg
            className="w-3.5 h-3.5 text-[#FF5E00]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5z" />
          </svg>
          <span className="text-[#FF5E00] text-[11px] font-bold tracking-wider uppercase">
            Simple 4–Step Process
          </span>
        </div>

        {/* Section Heading */}
        <h2 className="text-2xl sm:text-3xl md:text-[38px] font-extrabold text-gray-900 tracking-tight mb-8 sm:mb-10">
          How <span className="text-[#FF5E00]">VahanSetu</span> Works
        </h2>

        {/* Steps Grid: 2 items per row on mobile (grid-cols-2), 4 on desktop (lg:grid-cols-4) */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-4 gap-y-8 sm:gap-x-8 sm:gap-y-10 lg:gap-6 max-w-5xl mx-auto">
          {steps.map((step, index) => (
            <div key={step.number} className="relative flex flex-col items-center text-center">
              {/* Peach Circle with Number Badge */}
              <div className="relative w-14 h-14 sm:w-16 sm:h-16 lg:w-18 lg:h-18 rounded-full bg-[#FFF2E9] flex items-center justify-center transition-transform hover:scale-105 duration-200">
                {/* Step Number Badge */}
                <span className="absolute -top-1 -left-1 w-5 h-5 rounded-full bg-[#FF5E00] text-white text-[11px] font-bold flex items-center justify-center shadow-sm">
                  {step.number}
                </span>
                {/* Icon */}
                {STEP_ICONS[step.iconName] || null}
              </div>

              {/* Step Title */}
              <h3 className="text-sm sm:text-base lg:text-lg font-bold text-gray-900 mt-2.5 sm:mt-3 mb-1">
                {step.title}
              </h3>

              {/* Step Description */}
              <p className="text-xs sm:text-[13px] text-gray-500 leading-relaxed max-w-[160px] sm:max-w-[190px] mx-auto">
                {step.description}
              </p>

              {/* Connecting Arrow between steps (Desktop only) */}
              {index < steps.length - 1 && (
                <div className="hidden lg:flex absolute -right-3 top-9 -translate-y-1/2 text-gray-400 pointer-events-none">
                  <svg
                    className="w-4 h-4 text-gray-400"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    viewBox="0 0 24 24"
                  >
                    <path d="M5 12h14M12 5l7 7-7 7" />
                  </svg>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default HowItWorks;
