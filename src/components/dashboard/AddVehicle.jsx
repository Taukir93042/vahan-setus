import { Link } from "react-router-dom";
import logo from "../../assets/logo.png";
import {
  Car,
  Bike,
  Truck,
  ArrowLeft,
  QrCode,
  Sparkles,
  Hash,
  Palette,
  Calendar,
  EyeOff,
  Check,
  ChevronRight,
} from "lucide-react";

const VEHICLE_TYPES = [
  { id: "Car", label: "Car / SUV", desc: "Sedans, hatchbacks, SUVs", icon: Car, isDefault: true },
  { id: "Bike", label: "Motorcycle", desc: "Bikes & sports models", icon: Bike },
  { id: "Scooter", label: "Scooter / EV", desc: "Activa, Ather, Ola EV", icon: Bike },
  { id: "Auto", label: "Commercial", desc: "Auto, pickup, trucks", icon: Truck },
];

export default function AddVehicle() {
  return (
    <div className="w-full max-w-7xl mx-auto space-y-6 pb-12">
      {/* 1. Header Bar with Breadcrumb and Security Status */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2 border-b border-white/10">
        <div className="flex items-center gap-3">
          <Link
            to="/dashboard/my-vehicles"
            className="flex h-10 w-10 items-center justify-center rounded-xl border border-white/10 bg-[#0C111C] text-slate-300 transition-all hover:border-white/20 hover:bg-white/10 hover:text-white active:scale-95"
            title="Back to Garage"
          >
            <ArrowLeft size={18} />
          </Link>
          <div>
            <div className="flex items-center gap-2 text-xs font-semibold text-slate-400">
              <Link to="/dashboard" className="hover:text-white transition-colors">
                Dashboard
              </Link>
              <ChevronRight size={12} className="text-slate-600" />
              <Link to="/dashboard/my-vehicles" className="hover:text-white transition-colors">
                Garage
              </Link>
              <ChevronRight size={12} className="text-slate-600" />
              <span className="text-[#FF5E00]">Add Vehicle</span>
            </div>
            <h1 className="text-xl sm:text-2xl font-extrabold text-white tracking-tight mt-0.5">
              Register New Vehicle
            </h1>
          </div>
        </div>

         
      </div>

      {/* Two-Column Registration Form + Static Live Preview Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
        {/* Left Column: Form Details (7 Cols) */}
        <div className="lg:col-span-7 space-y-6">
          <form className="space-y-6">
            {/* Step 1: Vehicle Category */}
            <div className="rounded-3xl border border-white/10 bg-[#090D17] p-5 sm:p-6 shadow-xl">
              <div className="flex items-center justify-between mb-4">
                <div>
                  <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF5E00]">
                    Step 1
                  </span>
                  <h3 className="text-base font-bold text-white">Select Vehicle Category</h3>
                </div>
                <span className="text-xs text-slate-400">Choose type for sticker sizing</span>
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                {VEHICLE_TYPES.map((type) => {
                  const Icon = type.icon;
                  const isSelected = type.isDefault;
                  return (
                    <button
                      type="button"
                      key={type.id}
                      className={`relative p-3.5 rounded-2xl border text-left flex flex-col justify-between transition-all duration-200 cursor-pointer ${
                        isSelected
                          ? "border-orange-500/70 bg-[#1A120E] text-white shadow-md shadow-orange-950/40"
                          : "border-white/10 bg-[#0C111C] text-slate-400 hover:border-white/20 hover:bg-white/[0.04] hover:text-white"
                      }`}
                    >
                      {isSelected && (
                        <span className="absolute top-2.5 right-2.5 h-4 w-4 rounded-full bg-[#FF5E00] flex items-center justify-center text-white">
                          <Check size={11} strokeWidth={3} />
                        </span>
                      )}
                      <Icon
                        size={24}
                        className={`mb-2 transition-colors ${
                          isSelected ? "text-[#FF5E00]" : "text-slate-400"
                        }`}
                      />
                      <div>
                        <p className="text-xs font-bold text-white leading-tight">{type.label}</p>
                        <p className="text-[10px] text-slate-500 leading-tight mt-0.5 truncate">
                          {type.desc}
                        </p>
                      </div>
                    </button>
                  );
                })}
              </div>
            </div>

            {/* Step 2: Vehicle Identification */}
            <div className="rounded-3xl border border-white/10 bg-[#090D17] p-5 sm:p-6 shadow-xl space-y-4">
              <div>
                <span className="text-[11px] font-bold uppercase tracking-wider text-[#FF5E00]">
                  Step 2
                </span>
                <h3 className="text-base font-bold text-white">Vehicle Identification</h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Enter vehicle make, plate number, and appearance details.
                </p>
              </div>

              {/* Make & Model */}
              <div>
                <label className="text-xs font-semibold text-slate-300 mb-1.5 flex items-center justify-between">
                  <span>Vehicle Make & Model</span>
                  <span className="text-[11px] text-rose-400 font-bold">*Required</span>
                </label>
                <div className="relative">
                  <Car
                    size={17}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type="text"
                    defaultValue="Hyundai Creta SX (O)"
                    placeholder="e.g. Hyundai Creta, BMW 3 Series, Tata Nexon"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0C111C] border border-white/10 text-sm text-white placeholder-slate-500 transition-all focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500/50"
                  />
                </div>
              </div>

              {/* Plate & Year Row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* License Plate */}
                <div>
                  <label className="text-xs font-semibold text-slate-300 mb-1.5 flex items-center justify-between">
                    <span>Vehicle Number Plate</span>
                    <span className="text-[11px] text-rose-400 font-bold">*Required</span>
                  </label>
                  <div className="relative">
                    <Hash
                      size={17}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="text"
                      defaultValue="DL 8C AX 1234"
                      placeholder="e.g. DL 8C AX 1234"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0C111C] border border-white/10 text-sm font-bold tracking-wider uppercase text-white placeholder-slate-500 transition-all focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500/50"
                    />
                  </div>
                </div>

                {/* Color & Finish */}
                <div>
                  <label className="text-xs font-semibold text-slate-300 mb-1.5 block">
                    Vehicle Color
                  </label>
                  <div className="relative">
                    <Palette
                      size={17}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="text"
                      defaultValue="Polar White"
                      placeholder="e.g. Polar White, Matt Black"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0C111C] border border-white/10 text-sm text-white placeholder-slate-500 transition-all focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500/50"
                    />
                  </div>
                </div>
              </div>

              {/* Year Select */}
              <div>
                <label className="text-xs font-semibold text-slate-300 mb-1.5 block">
                  Manufacturing Year
                </label>
                <div className="relative">
                  <Calendar
                    size={17}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                  />
                  <select
                    defaultValue="2024"
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0C111C] border border-white/10 text-sm text-white transition-all focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500/50 cursor-pointer"
                  >
                    {["2026", "2025", "2024", "2023", "2022", "2021", "2020", "2019", "2018", "Older"].map(
                      (yr) => (
                        <option key={yr} value={yr} className="bg-[#0C111C] text-white">
                          {yr} Model
                        </option>
                      )
                    )}
                  </select>
                </div>
              </div>
            </div>

            {/* Form Actions */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <Link
                to="/dashboard/my-vehicles"
                className="px-6 py-3 rounded-xl border border-white/10 bg-[#0C111C] text-slate-300 hover:text-white hover:bg-white/[0.06] text-xs sm:text-sm font-semibold transition-all active:scale-95"
              >
                Cancel
              </Link>

              <Link
                to="/dashboard/my-vehicles"
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-[#FF5E00] to-orange-600 hover:brightness-110 active:scale-95 text-white font-bold text-xs sm:text-sm shadow-lg shadow-orange-600/30 cursor-pointer transition-all"
              >
                <Sparkles size={16} />
                <span>Save & Generate QR Sticker</span>
              </Link>
            </div>
          </form>
        </div>

        {/* Right Column: Static Sticker Preview (5 Cols) */}
        <div className="lg:col-span-5 space-y-6 lg:sticky lg:top-24">
          <div className="rounded-3xl border border-orange-500/30 bg-[#090D17] p-5 sm:p-6 shadow-2xl shadow-orange-950/20 flex flex-col items-center">
            {/* Header Label */}
            <div className="w-full flex items-center justify-between pb-4 border-b border-white/10 mb-5">
              <div className="flex items-center gap-2">
                <QrCode size={18} className="text-[#FF5E00]" />
                <span className="text-xs font-bold text-white uppercase tracking-wider">
                  Live Sticker Preview
                </span>
              </div>
              <span className="text-[11px] font-semibold text-emerald-400 bg-emerald-500/10 border border-emerald-500/30 px-2.5 py-0.5 rounded-full">
                Active Mockup
              </span>
            </div>

            {/* The Actual Windshield Sticker Graphic */}
            <div className="relative w-full max-w-[280px] bg-white text-black p-5 sm:p-6 rounded-3xl shadow-2xl border-4 border-slate-200 select-none flex flex-col items-center">
              {/* VahanSetu Brand Logo */}
              <div className="flex items-center gap-2 mb-2">
                <img src={logo} alt="VahanSetu Logo" className="h-6 w-auto object-contain" />
              </div>

              <div className="text-[9px] font-extrabold tracking-widest text-slate-500 uppercase mb-2">
                VahanSetu Smart Shield
              </div>

              {/* SVG QR Code */}
              <div className="w-44 h-44 bg-white p-2 rounded-xl border border-slate-200 flex items-center justify-center shadow-inner">
                <svg viewBox="0 0 100 100" className="w-full h-full text-black" fill="currentColor">
                  <rect x="5" y="5" width="26" height="26" rx="4" fill="black" />
                  <rect x="9" y="9" width="18" height="18" rx="2" fill="white" />
                  <rect x="13" y="13" width="10" height="10" rx="1" fill="black" />

                  <rect x="69" y="5" width="26" height="26" rx="4" fill="black" />
                  <rect x="73" y="9" width="18" height="18" rx="2" fill="white" />
                  <rect x="77" y="13" width="10" height="10" rx="1" fill="black" />

                  <rect x="5" y="69" width="26" height="26" rx="4" fill="black" />
                  <rect x="9" y="73" width="18" height="18" rx="2" fill="white" />
                  <rect x="13" y="77" width="10" height="10" rx="1" fill="black" />

                  <rect x="35" y="8" width="4" height="4" fill="black" />
                  <rect x="43" y="8" width="4" height="4" fill="black" />
                  <rect x="51" y="8" width="4" height="4" fill="black" />
                  <rect x="59" y="8" width="4" height="4" fill="black" />
                  <rect x="8" y="35" width="4" height="4" fill="black" />
                  <rect x="8" y="43" width="4" height="4" fill="black" />
                  <rect x="8" y="51" width="4" height="4" fill="black" />
                  <rect x="8" y="59" width="4" height="4" fill="black" />
                  <rect x="35" y="20" width="8" height="8" fill="black" />
                  <rect x="47" y="20" width="8" height="4" fill="black" />
                  <rect x="59" y="20" width="6" height="8" fill="black" />
                  <rect x="20" y="35" width="6" height="6" fill="black" />
                  <rect x="32" y="35" width="10" height="6" fill="black" />
                  <rect x="48" y="35" width="6" height="12" fill="black" />
                  <rect x="60" y="35" width="12" height="6" fill="black" />
                  <rect x="78" y="35" width="8" height="8" fill="black" />
                  <rect x="20" y="47" width="12" height="6" fill="black" />
                  <rect x="36" y="47" width="6" height="6" fill="black" />
                  <rect x="60" y="47" width="8" height="6" fill="black" />
                  <rect x="74" y="47" width="6" height="12" fill="black" />
                  <rect x="86" y="47" width="6" height="6" fill="black" />
                  <rect x="20" y="59" width="8" height="6" fill="black" />
                  <rect x="34" y="59" width="8" height="8" fill="black" />
                  <rect x="48" y="59" width="14" height="6" fill="black" />
                  <rect x="68" y="59" width="6" height="8" fill="black" />
                  <rect x="35" y="73" width="8" height="8" fill="black" />
                  <rect x="49" y="73" width="6" height="6" fill="black" />
                  <rect x="61" y="73" width="10" height="6" fill="black" />
                  <rect x="77" y="73" width="14" height="8" fill="black" />
                  <rect x="35" y="87" width="12" height="6" fill="black" />
                  <rect x="53" y="87" width="8" height="6" fill="black" />
                  <rect x="67" y="87" width="12" height="6" fill="black" />
                  <rect x="85" y="87" width="6" height="6" fill="black" />
                </svg>
              </div>

              {/* IND License Plate Replica Badge */}
              <div className="mt-3.5 inline-flex items-center overflow-hidden rounded-md border-2 border-slate-900 bg-white shadow-sm font-mono">
                <div className="bg-[#003399] px-1.5 py-1 flex flex-col items-center justify-center text-white">
                  <span className="text-[7px] font-bold leading-none">IND</span>
                </div>
                <span className="px-3 py-1 font-extrabold text-xs tracking-wider text-black">
                  DL 8C AX 1234
                </span>
              </div>

              {/* Vehicle Model & Subtext */}
              <p className="mt-2 text-xs font-bold text-slate-800 text-center truncate max-w-[220px]">
                Hyundai Creta SX (O)
              </p>

              <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">
                Scan to reach owner securely
              </p>
            </div>

            {/* Sticker Specifications */}
            <div className="w-full mt-6 space-y-2.5 text-xs">
              <div className="flex items-center justify-between text-slate-400 py-1.5 border-b border-white/5">
                <span>Sticker Size</span>
                <span className="font-semibold text-white">3.5" x 3.5" Standard</span>
              </div>
              <div className="flex items-center justify-between text-slate-400 py-1.5 border-b border-white/5">
                <span>Material Spec</span>
                <span className="font-semibold text-white">Waterproof UV Vinyl</span>
              </div>
              <div className="flex items-center justify-between text-slate-400 py-1.5 border-b border-white/5">
                <span>Masking Protocol</span>
                <span className="font-semibold text-emerald-400 flex items-center gap-1">
                  <EyeOff size={13} />
                  <span>Caller Proxy Active</span>
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
