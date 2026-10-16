import React from "react";
import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets";

export default function CtaBanner() {
  const navigate = useNavigate();

  return (
    <section className="relative w-full overflow-hidden py-10 sm:py-12 md:py-14 bg-[#070A10]">
      {/* Background Cinematic Road Image */}
      <div className="absolute inset-0 z-0">
        <img
          src={assets.cta_bg}
          alt="Road Background"
          className="w-full h-full object-cover object-[center_50%]"
        />
        {/* Subtle gradient overlay: readable text on left, car and light trails crystal clear on right */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent" />
        <div className="absolute inset-0 bg-black/15" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 flex flex-col md:flex-row items-center justify-between gap-6 sm:gap-8 text-center md:text-left">
        {/* Left: Heading & Description */}
        <div className="max-w-2xl lg:max-w-3xl flex flex-col items-center md:items-start text-center md:text-left">
          <h2 className="text-2xl sm:text-3xl md:text-[34px] lg:text-4xl font-extrabold text-white tracking-tight leading-tight drop-shadow-md">
            Be Prepared.{" "}
            <span className="text-[#FF5E00]">Stay Connected.</span>
          </h2>
          <p className="mt-2 text-gray-100 text-sm sm:text-base md:text-[17px] font-normal leading-relaxed drop-shadow-sm">
            Get your VahanSetu QR today and make your vehicle reachable for a safer tomorrow.
          </p>
        </div>

        {/* Right: Contact Us Action Button */}
        <div className="flex-shrink-0 w-full sm:w-auto flex justify-center">
          <button
            onClick={() => navigate("/contact-us")}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 sm:px-8 py-3 sm:py-3.5 rounded-full bg-[#FF5E00] hover:bg-[#FF6E00] text-white font-semibold text-sm sm:text-base shadow-lg shadow-orange-600/35 transition-all duration-200 hover:scale-[1.02] active:scale-95 cursor-pointer whitespace-nowrap"
          >
            {/* Speech / Chat Bubble Icon */}
            <svg
              className="w-5 h-5 text-white"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              viewBox="0 0 24 24"
            >
              <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z" />
            </svg>
            <span>Contact Us</span>
          </button>
        </div>
      </div>
    </section>
  );
}
