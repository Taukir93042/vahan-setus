import React, { useState } from "react";
import { assets } from "../assets/assets";
import {
  UserCheck,
  Car,
  QrCode,
  ShieldCheck,
  Camera,
  Bell,
  PhoneCall,
  Sparkles,
  HelpCircle,
  ChevronDown,
} from "lucide-react";
import CtaBanner from "../components/CtaBanner";

// Steps Data for Vehicle Owners
const OWNER_STEPS = [
  {
    step: "01",
    title: "Quick Registration",
    subtitle: "Under 30 seconds setup",
    desc: "Create your free account using just your mobile number with a one-time secure OTP. No lengthy forms or complex paperwork.",
    badge: "Instant Setup",
    icon: UserCheck,
  },
  {
    step: "02",
    title: "Add Your Vehicles",
    subtitle: "Car, bike, auto or fleet",
    desc: "Register your vehicles and optionally assign secondary emergency contacts so alerts reach your family if you are unreachable.",
    badge: "Unlimited Rides",
    icon: Car,
  },
  {
    step: "03",
    title: "Get Your Custom QR",
    subtitle: "Digital or doorstep sticker",
    desc: "Download your high-resolution QR decal instantly for printing, or order a weatherproof, UV-resistant vinyl decal delivered to your door.",
    badge: "Weatherproof Decal",
    icon: QrCode,
  },
  {
    step: "04",
    title: "Affix & Stay Protected",
    subtitle: "24/7 privacy shield",
    desc: "Stick the QR code on your windshield or bumper. Any passerby can alert you in seconds, while your real number stays 100% hidden.",
    badge: "Zero Privacy Leaks",
    icon: ShieldCheck,
  },
];

// Steps Data for Passersby / Callers
const SCANNER_STEPS = [
  {
    step: "01",
    title: "Scan with Phone Camera",
    subtitle: "No app required",
    desc: "Simply open your smartphone's default camera app (iOS or Android) and point it at the vehicle's VahanSetu QR decal.",
    badge: "No App Install",
    icon: Camera,
  },
  {
    step: "02",
    title: "Select Alert Reason",
    subtitle: "One-tap preset notifications",
    desc: "A clean mobile screen opens instantly. Tap the issue: Wrong Parking, Vehicle Towing, Headlights On, or Emergency.",
    badge: "One-Tap Action",
    icon: Bell,
  },
  {
    step: "03",
    title: "Connect Privately",
    subtitle: "Masked audio call & SMS",
    desc: "The owner is alerted immediately via instant push/SMS or a masked virtual phone call. Neither person's private phone number is exposed.",
    badge: "Encrypted Bridge",
    icon: PhoneCall,
  },
];

// FAQs Data
const FAQS = [
  {
    q: "Does the person scanning my QR code need to install an app?",
    a: "No! Anyone can simply open their default smartphone camera on iPhone or Android, scan the QR code, and send an alert or make a call directly through their mobile web browser.",
  },
  {
    q: "Will my real mobile number be visible to strangers?",
    a: "Never. VahanSetu acts as a secure privacy shield. Calls and SMS notifications are routed through encrypted virtual masking, keeping your personal phone number and identity 100% confidential.",
  },
  {
    q: "What happens if I don't answer an emergency alert?",
    a: "During urgent alerts or towing notices, if the primary owner does not answer within 60 seconds, VahanSetu automatically routes the alert to your designated secondary emergency family contacts.",
  },
  {
    q: "Can I manage multiple vehicles under a single account?",
    a: "Yes! You can add multiple cars, bikes, scooters, or commercial vehicles to your account. Each vehicle receives its own unique QR code sticker.",
  },
  {
    q: "Is the physical QR sticker durable in Indian weather conditions?",
    a: "Yes. Our physical QR decals are manufactured with premium, automotive-grade vinyl coated with UV-resistant and waterproof laminate designed to withstand heavy rains, sun exposure, and car washes.",
  },
];

function HowItWork() {
  const [activeTab, setActiveTab] = useState("owner"); // 'owner' | 'scanner'
  const [openFaq, setOpenFaq] = useState(0);

  const stepsToDisplay = activeTab === "owner" ? OWNER_STEPS : SCANNER_STEPS;

  return (
    <div className="w-full bg-[#070A10] text-white">
      {/* 1. Cinematic Hero Banner */}
      <section className="relative w-full overflow-hidden py-8 sm:py-12 md:py-14 bg-[#070A10] border-b border-gray-800/80">
        {/* Cinematic Audi Car Background Image - Clean & Clearly Visible */}
        <div className="absolute inset-0 z-0">
          <img
            src={assets.hiw_hero_bg}
            alt="How VahanSetu Works Background"
            className="w-full h-full object-cover object-center"
          />
          {/* Lightened overlay so car is clearly visible with clean contrast */}
          <div className="absolute inset-0 bg-black/40" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#070A10]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 text-center flex flex-col items-center">
          {/* Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-950/70 border border-orange-500/50 text-[#FFA048] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3.5 sm:mb-4 shadow-md backdrop-blur-xs">
            <Sparkles size={14} className="text-[#FF5E00]" />
            <span>SMART VEHICLE SAFETY PLATFORM</span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-5 sm:mb-7 drop-shadow-md">
            How <span className="text-[#FF5E00]">VahanSetu</span> Works
          </h1>

          {/* Interactive Role Switcher Pill */}
          <div className="inline-flex p-1.5 rounded-full bg-[#0E131F]/85 backdrop-blur-md border border-white/15 shadow-2xl">
            <button
              onClick={() => setActiveTab("owner")}
              className={`flex items-center gap-2 px-5 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === "owner"
                  ? "bg-[#FF5E00] text-white shadow-lg shadow-orange-600/35"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <Car size={16} />
              <span>For Vehicle Owners</span>
            </button>
            <button
              onClick={() => setActiveTab("scanner")}
              className={`flex items-center gap-2 px-5 sm:px-6 py-2 rounded-full text-xs sm:text-sm font-semibold transition-all duration-200 cursor-pointer ${
                activeTab === "scanner"
                  ? "bg-[#FF5E00] text-white shadow-lg shadow-orange-600/35"
                  : "text-gray-300 hover:text-white"
              }`}
            >
              <Camera size={16} />
              <span>For Someone Scanning</span>
            </button>
          </div>
        </div>
      </section>

      {/* 2. Step-by-Step Cards Grid - PURE WHITE */}
      <section className="w-full bg-white text-gray-900 py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF3EB] border border-[#FFE2D1] text-[#FF5E00] text-xs font-bold uppercase tracking-wider mb-2.5 shadow-xs">
              <Sparkles size={13} className="text-[#FF5E00]" />
              <span>{activeTab === "owner" ? "Owner Walkthrough" : "Scanner Experience"}</span>
            </div>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-gray-900 mt-1">
              {activeTab === "owner"
                ? "Get Protected in 4 Simple Steps"
                : "Reach Any Owner in 3 Quick Steps"}
            </h2>
          </div>

          {/* Dynamic Steps Grid */}
          <div
            className={`grid gap-6 ${
              activeTab === "owner"
                ? "grid-cols-1 md:grid-cols-2 lg:grid-cols-4"
                : "grid-cols-1 md:grid-cols-3 max-w-5xl mx-auto"
            }`}
          >
            {stepsToDisplay.map((item) => {
              const Icon = item.icon;
              return (
                <div
                  key={item.step}
                  className="group relative rounded-3xl bg-white p-6 sm:p-7 border border-gray-100 hover:border-orange-300 hover:shadow-xl shadow-[0_4px_25px_rgba(0,0,0,0.06)] transition-all duration-300 flex flex-col justify-between text-left"
                >
                  <div>
                    {/* Top: Step Number Badge & Status Pill */}
                    <div className="flex items-center justify-between mb-5">
                      <span className="text-3xl font-black text-gray-200 tracking-tight group-hover:text-orange-300 transition-colors">
                        {item.step}
                      </span>
                      <span className="px-3 py-1 rounded-full text-xs font-semibold bg-[#FFF3EB] text-[#FF5E00] border border-[#FFE2D1]">
                        {item.badge}
                      </span>
                    </div>

                    {/* Icon */}
                    <div className="w-12 h-12 rounded-2xl bg-[#FFF2E9] border border-[#FFE2D1] flex items-center justify-center mb-4 text-[#FF5E00] shadow-xs group-hover:scale-105 transition-transform">
                      <Icon size={24} />
                    </div>

                    {/* Title & Subtitle */}
                    <h3 className="text-lg sm:text-xl font-bold text-gray-900 tracking-tight mb-1">
                      {item.title}
                    </h3>
                    <p className="text-xs font-semibold text-[#FF5E00] mb-3">
                      {item.subtitle}
                    </p>

                    {/* Description */}
                    <p className="text-sm text-gray-600 leading-relaxed">
                      {item.desc}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 3. Frequently Asked Questions - OFF WHITE */}
      <section className="w-full bg-[#F8FAFC] border-y border-slate-200/80 text-gray-900 py-12 sm:py-16">
        <div className="max-w-3xl mx-auto px-4 sm:px-8">
          <div className="text-center mb-10">
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#FFF3EB] border border-[#FFE2D1] text-[#FF5E00] text-xs font-bold uppercase tracking-wider mb-2.5 shadow-xs">
              <HelpCircle size={14} className="text-[#FF5E00]" />
              <span>Questions & Answers</span>
            </div>
            <h2 className="text-2xl sm:text-3xl font-bold text-gray-900">
              Frequently Asked Questions
            </h2>
          </div>

          <div className="space-y-3.5">
            {FAQS.map((faq, idx) => {
              const isOpen = openFaq === idx;
              return (
                <div
                  key={idx}
                  className="rounded-2xl border border-slate-200 bg-white shadow-xs overflow-hidden transition-all duration-200"
                >
                  <button
                    onClick={() => setOpenFaq(isOpen ? -1 : idx)}
                    className="w-full px-5 py-4 text-left flex items-center justify-between gap-4 cursor-pointer hover:bg-slate-50/80 transition-colors"
                  >
                    <span className="text-sm sm:text-base font-semibold text-gray-900">
                      {faq.q}
                    </span>
                    <ChevronDown
                      size={18}
                      className={`text-gray-400 flex-shrink-0 transition-transform duration-300 ${
                        isOpen ? "rotate-180 text-[#FF5E00]" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <div className="px-5 pb-4 text-xs sm:text-sm text-gray-600 leading-relaxed border-t border-slate-100 pt-3">
                      {faq.a}
                    </div>
                  )}
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <CtaBanner/>
    </div>
  );
}

export default HowItWork;