import React, { useState } from "react";
import { assets, ALL_FEATURES, COMPARISON_ROWS } from "../assets/assets";
import {
  Zap,
  CheckCircle2,
  XCircle,
  Sparkles,
  SlidersHorizontal,
} from "lucide-react";
import CtaBanner from "../components/CtaBanner";

function Features() {
  const [activeTab, setActiveTab] = useState("all");

  const filteredFeatures =
    activeTab === "all"
      ? ALL_FEATURES
      : ALL_FEATURES.filter((f) => f.category === activeTab);

  return (
    <div className="w-full bg-[#070A10] text-white">
      {/* 1. Cinematic Hero Banner */}
      <section className="relative w-full overflow-hidden py-8 sm:py-12 md:py-14 bg-[#070A10] border-b border-gray-800/80">
        {/* Cinematic Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={assets.features_hero_bg}
            alt="VahanSetu Features Background"
            className="w-full h-full object-cover object-center"
          />
          {/* Lightened overlay for maximum clarity & image visibility */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#070A10]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 text-center flex flex-col items-center">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-950/70 border border-orange-500/50 text-[#FFA048] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3.5 sm:mb-4 shadow-md backdrop-blur-xs">
            <Sparkles size={14} className="text-[#FF5E00]" />
            <span>SMART VEHICLE CAPABILITIES</span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-3 sm:mb-4 drop-shadow-md">
            Features Designed for <span className="text-[#FF5E00]">Every Vehicle</span>
          </h1>

          {/* Quick Highlight Chips */}
          <div className="flex flex-wrap items-center justify-center gap-2 sm:gap-3 text-xs sm:text-[13px]">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0E131F]/80 backdrop-blur-md border border-white/10 text-gray-200">
              <CheckCircle2 size={14} className="text-emerald-400" />
              100% Number Masked
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0E131F]/80 backdrop-blur-md border border-white/10 text-gray-200">
              <CheckCircle2 size={14} className="text-emerald-400" />
              No App Needed to Scan
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0E131F]/80 backdrop-blur-md border border-white/10 text-gray-200">
              <CheckCircle2 size={14} className="text-emerald-400" />
              Instant Cloud Telephony
            </span>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-[#0E131F]/80 backdrop-blur-md border border-white/10 text-gray-200">
              <CheckCircle2 size={14} className="text-emerald-400" />
              All-Weather Decal
            </span>
          </div>
        </div>
      </section>

      {/* 2. Interactive Feature Grid with Filters - PURE WHITE */}
      <section className="w-full bg-white text-gray-900 py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-8 sm:mb-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF3EB] border border-[#FFE2D1] text-[#FF5E00] text-xs font-bold uppercase tracking-wider mb-2.5 shadow-xs">
              <SlidersHorizontal size={13} className="text-[#FF5E00]" />
              <span>Full Capabilities</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-1">
              Everything Your Vehicle Needs
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-500 leading-relaxed">
              Explore the innovative tools engineered to keep your vehicle reachable and your identity protected.
            </p>
          </div>

          {/* Category Filter Tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10 sm:mb-12">
            {[
              { id: "all", label: "All Features" },
              { id: "privacy", label: "Privacy & Calling" },
              { id: "alerts", label: "Smart Alerts" },
              { id: "hardware", label: "Hardware & QR" },
              { id: "management", label: "Multi-Vehicle" },
            ].map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 sm:px-5 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                  activeTab === tab.id
                    ? "bg-[#FF5E00] text-white shadow-md shadow-orange-600/25"
                    : "bg-gray-100 text-gray-600 hover:bg-gray-200 hover:text-gray-900"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Features Grid */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-6xl mx-auto">
            {filteredFeatures.map((feat) => {
              const Icon = feat.icon;
              return (
                <div
                  key={feat.id}
                  className="group relative rounded-3xl bg-white p-6 sm:p-7 border border-gray-100 hover:border-orange-300 hover:shadow-xl shadow-[0_4px_25px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between text-left"
                >
                  <div>
                    {/* Top: Icon + Badge */}
                    <div className="flex items-center justify-between mb-5">
                      <div className="w-12 h-12 rounded-2xl bg-[#FFF2E9] border border-[#FFE2D1] flex items-center justify-center text-[#FF5E00] shadow-xs group-hover:scale-105 transition-transform">
                        <Icon size={24} />
                      </div>
                      <span className="px-3 py-1 rounded-full text-[11px] font-semibold bg-[#FFF3EB] text-[#FF5E00] border border-[#FFE2D1]">
                        {feat.tag}
                      </span>
                    </div>

                    {/* Title */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight mb-2">
                      {feat.title}
                    </h3>

                    {/* Description */}
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mb-5">
                      {feat.desc}
                    </p>
                  </div>

                  {/* Highlights Bullet List */}
                  <div className="border-t border-gray-100 pt-4 space-y-2">
                    {feat.highlights.map((point, i) => (
                      <div key={i} className="flex items-start gap-2 text-xs text-gray-700">
                        <CheckCircle2
                          size={14}
                          className="text-[#FF5E00] flex-shrink-0 mt-0.5"
                        />
                        <span>{point}</span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Feature Comparison Table - OFF WHITE */}
      <section className="w-full bg-[#F8FAFC] border-y border-slate-200/80 text-gray-900 py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          {/* Section Header */}
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-12">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF3EB] border border-[#FFE2D1] text-[#FF5E00] text-xs font-bold uppercase tracking-wider mb-2.5 shadow-xs">
              <Zap size={13} className="text-[#FF5E00]" />
              <span>Smart Comparison</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-1">
              Why VahanSetu Outperforms Alternatives
            </h2>
            <p className="mt-2 text-xs sm:text-sm md:text-base text-gray-500 leading-relaxed">
              Compare VahanSetu with dangerous paper phone slips and bulky GPS trackers.
            </p>
          </div>

          {/* Comparison Table Container */}
          <div className="max-w-5xl mx-auto overflow-x-auto rounded-3xl border border-slate-200 bg-white shadow-sm">
            <table className="w-full text-left border-collapse min-w-[640px]">
              <thead>
                <tr className="border-b border-slate-200 bg-slate-50/80 text-xs sm:text-sm">
                  <th className="py-4 px-5 sm:px-6 font-bold text-gray-700">
                    Feature & Capability
                  </th>
                  <th className="py-4 px-5 sm:px-6 font-extrabold text-[#FF5E00] bg-orange-50/50">
                    <span className="inline-flex items-center gap-1.5">
                      <Sparkles size={14} />
                      VahanSetu QR
                    </span>
                  </th>
                  <th className="py-4 px-5 sm:px-6 font-semibold text-gray-500">
                    Dashboard Paper Slip
                  </th>
                  <th className="py-4 px-5 sm:px-6 font-semibold text-gray-500">
                    Traditional GPS
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-xs sm:text-sm">
                {COMPARISON_ROWS.map((row, idx) => (
                  <tr
                    key={idx}
                    className="hover:bg-slate-50/50 transition-colors"
                  >
                    <td className="py-3.5 px-5 sm:px-6 font-semibold text-gray-900">
                      {row.feature}
                    </td>
                    <td className="py-3.5 px-5 sm:px-6 font-bold text-[#FF5E00] bg-orange-50/30">
                      <div className="flex items-center gap-1.5">
                        <CheckCircle2 size={16} className="text-[#FF5E00] flex-shrink-0" />
                        <span>{row.vahanSetu}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-5 sm:px-6 text-gray-600">
                      <div className="flex items-center gap-1.5">
                        <XCircle size={15} className="text-rose-400 flex-shrink-0" />
                        <span>{row.paperSlip}</span>
                      </div>
                    </td>
                    <td className="py-3.5 px-5 sm:px-6 text-gray-500">
                      <div className="flex items-center gap-1.5">
                        <span className="text-gray-400">•</span>
                        <span>{row.gpsTracker}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA Banner */}
      <CtaBanner />
    </div>
  );
}

export default Features;