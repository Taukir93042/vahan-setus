import { Link } from "react-router-dom";
import { assets } from "../assets/assets";

function HomeBanner() {
  return (
    <section className="relative w-full min-h-[360px] sm:min-h-[420px] lg:min-h-[480px] flex items-center bg-[#070A10] overflow-hidden">
      {/* Background Image Container */}
      <div className="absolute inset-0 z-0">
        <img
          src={assets.heroImg}
          alt="Vehicle QR Scan"
          className="w-full h-full object-cover object-[78%_center] lg:object-right"
        />

        {/* Gradient Overlays: Deep dark on the left for crisp text, fading smoothly into the car & phone on the right */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#070A10] via-[#070A10]/90 lg:via-[#070A10]/75 to-transparent" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#070A10] via-transparent to-transparent" />
      </div>

      {/* Main Content */}
      <div className="relative z-10 max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-6 sm:py-10 lg:py-12 w-full">
        <div className="max-w-2xl xl:max-w-3xl text-center sm:text-left flex flex-col items-center sm:items-start mx-auto sm:mx-0">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border border-orange-500/30 bg-[#16120e]/70 backdrop-blur-md mb-3 sm:mb-4 shadow-sm">
            <span className="w-2 h-2 rounded-full bg-[#FF5E00] shadow-[0_0_8px_#FF5E00]" />
            <span className="text-[#FFA048] text-xs font-semibold tracking-wider uppercase">
              Stay Connected. Drive Worry-Free.
            </span>
          </div>

          {/* Headline: Strictly 2 lines */}
          <h1 className="text-[21px] min-[375px]:text-[23px] min-[410px]:text-2xl sm:text-3xl md:text-[38px] lg:text-[42px] font-extrabold tracking-tight text-white leading-[1.2] text-center sm:text-left">
            <span className="block whitespace-nowrap">
              Your Vehicle Speaks for You
            </span>
            <span className="block text-[#FF5E00] whitespace-nowrap mt-1 sm:mt-1.5">
              When You're Not Around.
            </span>
          </h1>

          {/* Subtitle Paragraph: Strictly 2 lines */}
          <p className="mt-2.5 sm:mt-3 text-gray-300 text-[13px] min-[375px]:text-sm sm:text-[15px] md:text-base leading-relaxed max-w-lg text-center sm:text-left">
            <span className="block sm:inline">
              Get instant parking alerts &amp; emergency notices{" "}
            </span>
            <span className="block sm:inline">
              for your vehicle —{" "}
              <span className="font-semibold text-white">
                100% private with masked calls.
              </span>
            </span>
          </p>

          {/* Action Buttons */}
          <div className="mt-4 sm:mt-6 flex flex-wrap items-center justify-center sm:justify-start gap-3.5 w-full sm:w-auto">
            {/* Primary Button (Full-width centered on mobile, auto on desktop) */}
            <Link
              to="/get-qr"
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-7 py-3.5 text-[15px] sm:text-base font-semibold text-white bg-gradient-to-r from-[#FF5500] to-[#FF6B00] rounded-full hover:brightness-110 active:scale-95 transition-all shadow-lg shadow-orange-600/35"
            >
              <span>Get Your QR Code</span>
              <svg
                className="w-4 h-4 text-white"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </Link>

            {/* Secondary Button - Hidden on mobile screens, visible on sm and up */}
            <Link
              to="/contact-us"
              className="hidden sm:inline-flex items-center justify-center px-6 py-3 text-sm sm:text-[15px] font-medium text-white bg-[#131722]/85 border border-[#2B3548] rounded-full hover:bg-[#1C2333] hover:border-gray-500 transition-all shadow-sm"
            >
              Contact Us
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HomeBanner;
