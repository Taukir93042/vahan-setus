import React from "react";
import { Link } from "react-router-dom";
import dashboardOrangeCar from "../../assets/dashboard_orange_car.jpg";
import cretaWhite from "../../assets/vehicles/creta_white.jpg";
import logo from "../../assets/logo.png";
import {
  ShieldCheck,
  Plus,
  Printer,
  Car,
  QrCode,
  PhoneCall,
  BarChart3,
  ArrowRight,
  Eye,
  Bell,
  MessageCircle,
} from "lucide-react";

export default function DashboardHome() {
  const user = {
    name: "Mohammad Kaif",
  };

  const activeVehicle = {
    model: "Hyundai Creta",
    colorYear: "White • 2024",
    plate: "DL 8C AX 1234",
    status: "Active",
    image: cretaWhite,
  };

  const stats = [
    {
      id: "active-qr",
      label: "Active QR",
      value: "2",
      tag: "Live Online",
      tagColor: "text-emerald-400",
      icon: QrCode,
      iconBg: "bg-emerald-500/10 text-emerald-400 border-emerald-500/20",
    },
    {
      id: "inquiries",
      label: "Contact Requests",
      value: "4",
      tag: "Calls Masked",
      tagColor: "text-rose-400",
      icon: PhoneCall,
      iconBg: "bg-rose-500/10 text-rose-400 border-rose-500/20",
    },
    {
      id: "scans",
      label: "Total Scans",
      value: "15",
      tag: "100% Encrypted",
      tagColor: "text-purple-400",
      icon: BarChart3,
      iconBg: "bg-purple-500/10 text-purple-400 border-purple-500/20",
    },
    {
      id: "notifications",
      label: "Notifications",
      value: "3",
      tag: "Alerts",
      tagColor: "text-[#FF5E00]",
      icon: Bell,
      iconBg: "bg-orange-500/10 text-[#FF5E00] border-orange-500/20",
    },
  ];

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6">
      {/* 1. Top Hero Welcome Banner */}
      <div className="relative rounded-3xl bg-[#090D17] border border-orange-500/30 p-6 sm:p-8 lg:p-9 overflow-hidden shadow-2xl shadow-orange-950/20">
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6 relative z-10">
          {/* Left Text & CTA Buttons */}
          <div className="max-w-xl">
            {/* Shield Active Badge */}
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-[#18110D] border border-orange-500/40 text-orange-400 text-[11px] sm:text-xs font-bold uppercase tracking-wider mb-3.5">
              <ShieldCheck size={14} className="text-[#FF5E00]" />
              <span>VahanSetu Shield Active</span>
            </div>

            {/* Welcome Heading & Greeting */}
            <div>
              <span className="text-xs sm:text-sm font-semibold text-gray-400 block mb-0.5">
                Good Morning 👋
              </span>
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-extrabold text-white tracking-tight">
                {user.name}
              </h1>
              <p className="text-xs sm:text-sm text-gray-400 mt-1 leading-relaxed">
                Stay connected. Drive worry-free.
              </p>
            </div>

            {/* Quick Stat Highlights */}
            <div className="mt-4 flex items-center gap-4">
              <div>
                <span className="text-xs text-gray-400 block font-medium">Your Vehicles</span>
                <span className="text-2xl sm:text-3xl font-extrabold text-white">2</span>
              </div>
              <div className="h-8 w-px bg-gray-800" />
              <div className="px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold">
                1 Active QR
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex flex-wrap items-center gap-3 sm:gap-4 mt-6">
              <Link
                to="/dashboard/add-vehicle"
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FF5E00] to-orange-600 hover:brightness-110 text-white font-bold text-xs sm:text-sm shadow-lg shadow-orange-600/30 active:scale-95 transition-all"
              >
                <Plus size={16} />
                <span>Add New Vehicle</span>
              </Link>

              <button
                onClick={() => window.print()}
                className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full bg-white/5 border border-orange-500/40 hover:bg-white/10 text-orange-400 font-semibold text-xs sm:text-sm cursor-pointer transition-all"
              >
                <Printer size={15} />
                <span>Print Active QR Sticker</span>
              </button>
            </div>
          </div>

          {/* Right Orange SUV Image */}
          <div className="w-full lg:w-96 flex-shrink-0 flex items-center justify-center lg:justify-end">
            <div className="relative w-full max-w-sm rounded-2xl overflow-hidden bg-gradient-to-b from-orange-500/5 to-transparent p-1">
              <img
                src={dashboardOrangeCar}
                alt="Protected Vehicle"
                className="w-full h-auto object-contain rounded-xl drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>

      {/* 2. 4 Stats Cards */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-3.5 sm:gap-4">
        {stats.map((stat) => {
          const Icon = stat.icon;
          return (
            <div
              key={stat.id}
              className="p-4 sm:p-5 rounded-2xl bg-[#090D17] border border-gray-800/80 hover:border-gray-700 transition-all shadow-sm flex flex-col justify-between"
            >
              {/* Card Top: Icon & Status Tag */}
              <div className="flex items-center justify-between">
                <div
                  className={`w-9 h-9 rounded-xl flex items-center justify-center border ${stat.iconBg}`}
                >
                  <Icon size={18} />
                </div>
                <span className={`text-[11px] font-semibold ${stat.tagColor}`}>
                  {stat.tag}
                </span>
              </div>

              {/* Card Bottom: Number & Label */}
              <div className="mt-4">
                <span className="text-2xl sm:text-3xl font-extrabold text-white block">
                  {stat.value}
                </span>
                <span className="text-xs text-gray-400 mt-1 block truncate">
                  {stat.label}
                </span>
              </div>
            </div>
          );
        })}
      </div>

      {/* 3. Lower Split Section: Left (My Vehicles & Recent Activity) + Right (Official Windshield QR) */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-6">
        {/* Left Column (8 cols on xl, 7 cols on lg) */}
        <div className="lg:col-span-7 xl:col-span-8 space-y-6">
          {/* 3A. My Vehicles Section */}
          <div className="space-y-3.5">
            <div className="flex items-center justify-between">
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                My Vehicles (1)
              </h2>
              <Link
                to="/dashboard/my-vehicles"
                className="text-xs sm:text-sm font-semibold text-[#FF5E00] hover:text-orange-400 flex items-center gap-1 transition-colors"
              >
                <span>Manage All</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* Vehicle Card */}
            <div className="rounded-2xl bg-[#090D17] border border-gray-800/80 p-4 sm:p-5 overflow-hidden shadow-sm">
              {/* Car Photo Banner */}
              <div className="w-full h-44 sm:h-56 rounded-xl overflow-hidden bg-black/60 relative">
                <img
                  src={activeVehicle.image}
                  alt={activeVehicle.model}
                  className="w-full h-full object-cover"
                />
              </div>

              {/* Vehicle Info Row */}
              <div className="mt-4 flex flex-col sm:flex-row sm:items-center justify-between gap-3">
                <div className="space-y-1">
                  <div className="flex items-center gap-2">
                    <span className="px-2.5 py-0.5 rounded-md bg-black/90 border border-gray-700 text-white font-extrabold text-xs tracking-wider">
                      {activeVehicle.plate}
                    </span>
                    <span className="px-2.5 py-0.5 rounded-full bg-emerald-500/20 border border-emerald-500/30 text-emerald-400 text-[11px] font-bold">
                      {activeVehicle.status}
                    </span>
                  </div>
                  <h3 className="text-base font-bold text-white pt-1">
                    {activeVehicle.model}
                  </h3>
                  <p className="text-xs text-gray-400">
                    {activeVehicle.colorYear}
                  </p>
                </div>

                {/* Card Action Buttons */}
                <div className="flex items-center gap-2 sm:gap-2.5 pt-2 sm:pt-0">
                  <Link
                    to="/dashboard/my-vehicles"
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl border border-orange-500/40 bg-[#161113] hover:bg-[#201518] text-[#FF5E00] text-xs font-semibold cursor-pointer transition-colors"
                  >
                    <QrCode size={14} />
                    <span>QR Sticker</span>
                  </Link>

                  <button
                    onClick={() => window.print()}
                    className="flex-1 sm:flex-none inline-flex items-center justify-center gap-1.5 px-4 py-2 rounded-xl border border-gray-800 bg-[#0E131F] hover:bg-gray-800 text-gray-300 text-xs font-semibold cursor-pointer transition-colors"
                  >
                    <Printer size={14} />
                    <span>Print</span>
                  </button>
                </div>
              </div>
            </div>
          </div>

          {/* 3B. Recent Activity Section */}
          <div className="space-y-3.5">
            <div className="flex items-center justify-between">
              <h2 className="text-base sm:text-lg font-bold text-white tracking-tight">
                Recent Activity
              </h2>
              <Link
                to="/dashboard/contact-requests"
                className="text-xs sm:text-sm font-semibold text-[#FF5E00] hover:text-orange-400 flex items-center gap-1 transition-colors"
              >
                <span>View All</span>
                <ArrowRight size={13} />
              </Link>
            </div>

            {/* Activity List */}
            <div className="space-y-2.5">
              {[
                {
                  id: 1,
                  title: "Vehicle scanned",
                  sub: "Hyundai Creta • 2 hours ago",
                  icon: Car,
                  iconBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
                },
                {
                  id: 2,
                  title: "Call request received",
                  sub: "BR05AB5678 • 5 hours ago",
                  icon: PhoneCall,
                  iconBg: "bg-orange-500/10 border-orange-500/30 text-[#FF5E00]",
                },
                {
                  id: 3,
                  title: "WhatsApp request",
                  sub: "BR05AB5678 • 1 day ago",
                  icon: MessageCircle,
                  iconBg: "bg-emerald-500/10 border-emerald-500/30 text-emerald-400",
                },
              ].map((item) => {
                const Icon = item.icon;
                return (
                  <div
                    key={item.id}
                    className="p-3.5 rounded-2xl bg-[#090D17] border border-gray-800/80 hover:border-gray-700 flex items-center justify-between gap-3 transition-all"
                  >
                    <div className="flex items-center gap-3">
                      <div
                        className={`w-10 h-10 rounded-xl flex items-center justify-center border flex-shrink-0 ${item.iconBg}`}
                      >
                        <Icon size={18} />
                      </div>
                      <div>
                        <h4 className="text-sm font-bold text-white">
                          {item.title}
                        </h4>
                        <p className="text-xs text-gray-400">{item.sub}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>

        {/* Right Column: Official Windshield QR Sticker Card (5 cols on lg/xl) */}
        <div className="lg:col-span-5 xl:col-span-4">
          <div className="rounded-3xl bg-[#090D17] border border-orange-500/30 p-5 sm:p-6 flex flex-col items-center shadow-xl shadow-orange-950/20">
            {/* Top Pill Tag */}
            <div className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-[#18110D] border border-orange-500/40 text-[#FF5E00] text-xs font-bold mb-5">
              <QrCode size={14} />
              <span>Official Windshield QR</span>
            </div>

            {/* Physical Sticker Card Preview (White card) */}
            <div className="bg-white text-black p-5 sm:p-6 rounded-2xl shadow-2xl w-full max-w-[280px] flex flex-col items-center select-none">
              {/* Brand Header */}
              <div className="flex items-center gap-2 mb-3">
                <img
                  src={logo}
                  alt="VahanSetu"
                  className="h-6 w-auto object-contain"
                />
              </div>

              {/* Crisp SVG QR Code */}
              <div className="w-48 h-48 bg-white p-2 flex items-center justify-center">
                <svg
                  viewBox="0 0 100 100"
                  className="w-full h-full text-black"
                  fill="currentColor"
                >
                  {/* Top Left Marker */}
                  <rect x="5" y="5" width="26" height="26" rx="4" fill="black" />
                  <rect x="9" y="9" width="18" height="18" rx="2" fill="white" />
                  <rect x="13" y="13" width="10" height="10" rx="1" fill="black" />

                  {/* Top Right Marker */}
                  <rect x="69" y="5" width="26" height="26" rx="4" fill="black" />
                  <rect x="73" y="9" width="18" height="18" rx="2" fill="white" />
                  <rect x="77" y="13" width="10" height="10" rx="1" fill="black" />

                  {/* Bottom Left Marker */}
                  <rect x="5" y="69" width="26" height="26" rx="4" fill="black" />
                  <rect x="9" y="73" width="18" height="18" rx="2" fill="white" />
                  <rect x="13" y="77" width="10" height="10" rx="1" fill="black" />

                  {/* Timing Patterns */}
                  <rect x="35" y="8" width="4" height="4" fill="black" />
                  <rect x="43" y="8" width="4" height="4" fill="black" />
                  <rect x="51" y="8" width="4" height="4" fill="black" />
                  <rect x="59" y="8" width="4" height="4" fill="black" />
                  <rect x="8" y="35" width="4" height="4" fill="black" />
                  <rect x="8" y="43" width="4" height="4" fill="black" />
                  <rect x="8" y="51" width="4" height="4" fill="black" />
                  <rect x="8" y="59" width="4" height="4" fill="black" />

                  {/* Data modules */}
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

              {/* Plate Number */}
              <div className="bg-black text-white font-extrabold text-xs px-3.5 py-1 rounded-md tracking-wider mt-2.5">
                {activeVehicle.plate}
              </div>

              {/* Scan Tagline */}
              <span className="text-[9px] font-bold text-gray-500 tracking-wider uppercase mt-1.5">
                SCAN TO CONTACT OWNER
              </span>
            </div>

            {/* Sticker Actions */}
            <div className="w-full mt-5 space-y-2.5">
              <button
                onClick={() => window.print()}
                className="w-full py-3 px-4 rounded-xl bg-gradient-to-r from-[#FF5E00] to-orange-600 hover:brightness-110 active:scale-98 text-white font-bold text-xs sm:text-sm shadow-lg shadow-orange-600/30 flex items-center justify-center gap-2 cursor-pointer transition-all"
              >
                <Printer size={16} />
                <span>Print Waterproof Sticker</span>
              </button>

              <button
                onClick={() => alert(`QR Sticker for ${activeVehicle.plate}`)}
                className="w-full py-2.5 px-4 rounded-xl bg-[#0E131F] border border-gray-800 hover:bg-gray-800/80 text-gray-300 hover:text-white text-xs font-semibold flex items-center justify-center gap-2 cursor-pointer transition-colors"
              >
                <Eye size={14} />
                <span>View High-Res QR</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
