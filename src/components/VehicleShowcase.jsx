import React from "react";
import { vehicles } from "../assets/assets";

function VehicleShowcase() {
  // Duplicate vehicles array to ensure a seamless infinite scrolling loop
  const displayVehicles = [...vehicles, ...vehicles, ...vehicles];

  return (
    <section className="w-full bg-white py-10 sm:py-12 lg:py-14 overflow-hidden text-center">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        {/* Top Pill Badge */}
        <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF3EB] border border-[#FFE2D1] mb-2.5 shadow-xs">
          <svg
            className="w-3.5 h-3.5 text-[#FF5E00]"
            fill="currentColor"
            viewBox="0 0 24 24"
          >
            <path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5z" />
          </svg>
          <span className="text-[#FF5E00] text-[11px] font-bold tracking-wider uppercase">
            Universal Compatibility
          </span>
        </div>

        {/* Section Heading (Reduced Size) */}
        <h2 className="text-2xl sm:text-3xl md:text-[36px] font-extrabold text-gray-900 tracking-tight mb-8 sm:mb-10">
          One QR. All Vehicles.
        </h2>
      </div>

      {/* Smooth Horizontal Scrolling Vehicle Strip */}
      <div className="relative w-full overflow-hidden">
        {/* Left & Right subtle edge fade */}
        <div className="absolute left-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-12 sm:w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />

        <div className="animate-marquee flex items-center gap-8 sm:gap-14 py-2">
          {displayVehicles.map((vehicle, idx) => (
            <div
              key={`${vehicle.id}-${idx}`}
              className="flex-shrink-0 w-48 sm:w-60 md:w-72 h-36 sm:h-44 md:h-48 flex items-center justify-center p-2 group transition-transform duration-300 hover:scale-105"
            >
              <img
                src={vehicle.img}
                alt={vehicle.name}
                className="max-h-full max-w-full object-contain select-none"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default VehicleShowcase;
