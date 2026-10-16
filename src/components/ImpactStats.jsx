import React from "react";
import { assets } from "../assets/assets";

function ImpactStats() {
  const stats = [
    {
      id: 1,
      value: "10K+",
      title: "Happy Vehicle Owners",
      desc: "Across 40+ Indian cities",
      icon: (
        <svg
          className="w-6 h-6 text-[#FF5E00]"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          viewBox="0 0 24 24"
        >
          <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
          <circle cx="9" cy="7" r="4" />
          <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
          <path d="M16 3.13a4 4 0 0 1 0 7.75" />
        </svg>
      ),
    },
    {
      id: 2,
      value: "50K+",
      title: "QR Codes Generated",
      desc: "Over 120,000 scans completed",
      icon: (
        <svg
          className="w-6 h-6 text-[#FF5E00]"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
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
    },
    {
      id: 3,
      value: "4.9 ★",
      title: "User Satisfaction",
      desc: "Based on 4,200+ verified ratings",
      icon: (
        <svg
          className="w-6 h-6 text-[#FF5E00]"
          fill="currentColor"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" />
        </svg>
      ),
    },
  ];

  return (
    <section className="w-full bg-[#F8FAFC] py-8 sm:py-12 lg:py-14 overflow-hidden border-y border-slate-200/60">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8 items-stretch">
          {/* Left Column: Landscape Roads Graphic Card */}
          <div className="relative rounded-3xl overflow-hidden min-h-[340px] sm:min-h-[380px] flex flex-col justify-end p-6 sm:p-8 shadow-md">
            {/* Generated Road Landscape Image */}
            <img
              src={assets.safer_roads}
              alt="Together for Safer Roads"
              className="absolute inset-0 w-full h-full object-cover select-none"
            />

            {/* Dark Gradient Overlay for Readability */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/45 to-transparent" />

            {/* Content at Bottom-Left */}
            <div className="relative z-10">
              {/* Badge */}
              <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#3D2513]/80 border border-[#8C4A19]/50 text-[#FFA048] text-xs font-bold uppercase tracking-wider mb-3 backdrop-blur-md shadow-sm">
                <svg
                  className="w-3.5 h-3.5 text-[#FFA048]"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L9.5 9.5 2 12l7.5 2.5L12 22l2.5-7.5L22 12l-7.5-2.5z" />
                </svg>
                <span>Nationwide Movement</span>
              </div>

              {/* Title with stylish italic script touch */}
              <h3 className="text-3xl sm:text-4xl lg:text-[42px] font-bold text-white mb-2 italic tracking-wide font-serif">
                Together for Safer Roads
              </h3>

              {/* Subtitle */}
              <p className="text-sm sm:text-base text-gray-200/90 max-w-md leading-relaxed">
                Connecting over 50,000 vehicle owners with fellow drivers and
                emergency responders.
              </p>
            </div>
          </div>

          {/* Right Column: 3 Horizontal Stat Cards */}
          <div className="flex flex-col justify-between gap-4 sm:gap-5">
            {stats.map((stat) => (
              <div
                key={stat.id}
                className="bg-white border border-gray-100 rounded-2xl p-6 sm:p-7 shadow-[0_4px_20px_rgba(0,0,0,0.03)] hover:shadow-md transition-shadow duration-300 flex items-center gap-5 sm:gap-6 flex-1"
              >
                {/* Peach Icon Box */}
                <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-2xl bg-[#FFF2E9] flex items-center justify-center flex-shrink-0">
                  {stat.icon}
                </div>

                {/* Details */}
                <div className="flex-1">
                  <div className="text-2xl sm:text-3xl font-extrabold text-gray-900 tracking-tight">
                    {stat.value}
                  </div>
                  <div className="text-sm sm:text-base font-semibold text-gray-800 mt-0.5">
                    {stat.title}
                  </div>
                  <div className="text-xs sm:text-sm text-gray-500 mt-0.5">
                    {stat.desc}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ImpactStats;
