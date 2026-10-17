import React, { useState, useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import logo from "../../../assets/logo.png";
import cretaWhite from "../../../assets/vehicles/creta_white.jpg";
import api from "../../../services/api";
import {
  Share2,
  CheckCircle2,
  Copy,
  Check,
  Car,
  Palette,
  Calendar,
  Phone,
  ShieldCheck,
  ChevronRight,
  AlertCircle,
} from "lucide-react";
import { FaWhatsapp } from "react-icons/fa6";

export default function PublicVehicle() {
  const { qrToken } = useParams();
  const [copied, setCopied] = useState(false);
  const [loading, setLoading] = useState(Boolean(qrToken));
  const [error, setError] = useState(null);

  // Default fallback vehicle matching design
  const staticVehicle = {
    vehicleNumber: "BR05AB5678",
    vehicleModel: "Hyundai Creta",
    vehicleType: "Car (SUV)",
    color: "White",
    year: "2023",
    status: "Active",
    image: cretaWhite,
    phone: "+919876543210",
  };

  const [vehicle, setVehicle] = useState(qrToken ? null : staticVehicle);

  // Fetch live vehicle details when scanned with a qrToken
  useEffect(() => {
    if (!qrToken) {
      setVehicle(staticVehicle);
      setLoading(false);
      return;
    }

    setLoading(true);
    setError(null);

    api
      .get(`/public/vehicle/${qrToken}`)
      .then((res) => {
        if (res.data?.success && res.data?.data?.vehicle) {
          const v = res.data.data.vehicle;
          setVehicle({
            vehicleNumber: v.vehicleNumber || "N/A",
            vehicleModel: v.vehicleModel || "Vehicle",
            vehicleType: v.vehicleType ? v.vehicleType.toUpperCase() : "Vehicle",
            color: v.color || "Not Specified",
            year: v.createdAt
              ? new Date(v.createdAt).getFullYear().toString()
              : "2024",
            status: v.status === "active" ? "Active" : "Inactive",
            image: v.vehicleImage || cretaWhite,
            phone: v.owner?.phone || "",
            ownerName: v.owner?.name || "Owner",
          });
        } else {
          setError(res.data?.message || "Vehicle not found");
        }
      })
      .catch((err) => {
        console.error("Public vehicle fetch error:", err);
        const msg =
          err.response?.data?.message || "Invalid or inactive QR code.";
        setError(msg);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [qrToken]);

  const handleCopy = () => {
    if (!vehicle?.vehicleNumber) return;
    navigator.clipboard.writeText(vehicle.vehicleNumber);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const handleShare = () => {
    if (!vehicle) return;
    if (navigator.share) {
      navigator
        .share({
          title: `${vehicle.vehicleModel} - ${vehicle.vehicleNumber}`,
          text: `Vehicle details for ${vehicle.vehicleNumber} on VahanSetu`,
          url: window.location.href,
        })
        .catch(() => {});
    } else {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    }
  };

  // Loading Screen
  if (loading) {
    return (
      <div className="min-h-screen bg-[#070B14] text-white flex flex-col items-center justify-center p-4">
        <div className="flex flex-col items-center gap-4 text-center">
          <div className="relative">
            <div className="w-14 h-14 rounded-full border-4 border-white/10 border-t-[#FF5E00] animate-spin" />
          </div>
          <div>
            <h3 className="text-base font-bold text-white">VahanSetu</h3>
            <p className="text-xs text-slate-400 mt-1">
              Loading vehicle details...
            </p>
          </div>
        </div>
      </div>
    );
  }

  // Error Screen (Invalid / Inactive QR)
  if (error || !vehicle) {
    return (
      <div className="min-h-screen bg-[#070B14] text-white flex flex-col items-center justify-center p-4">
        <div className="w-full max-w-sm p-6 rounded-3xl bg-[#0C1424] border border-white/10 text-center space-y-4 shadow-2xl">
          <div className="w-14 h-14 rounded-2xl bg-red-500/15 border border-red-500/30 text-red-400 mx-auto flex items-center justify-center">
            <AlertCircle size={30} />
          </div>
          <div>
            <h2 className="text-lg font-bold text-white">QR Code Inactive</h2>
            <p className="text-xs text-slate-400 leading-relaxed mt-2">
              {error ||
                "This QR code is either invalid or has been deactivated by the owner."}
            </p>
          </div>
          <Link
            to="/"
            className="inline-block w-full py-3 rounded-xl bg-[#FF5E00] hover:bg-orange-600 text-white font-semibold text-xs tracking-wider uppercase transition-all shadow-lg shadow-orange-950/40"
          >
            Go to Home
          </Link>
        </div>
      </div>
    );
  }

  const cleanPhone = (vehicle.phone || "").replace(/[^0-9]/g, "");
  const waUrl = cleanPhone
    ? `https://wa.me/${cleanPhone}?text=${encodeURIComponent(
        `Hi, I am contacting you regarding your vehicle (${vehicle.vehicleNumber}) via VahanSetu.`
      )}`
    : "#";

  return (
    <div className="min-h-screen bg-[#070B14] text-white flex flex-col items-center justify-start py-4 px-3 sm:px-4 selection:bg-orange-500 selection:text-white">
      {/* Mobile-sized Card Container */}
      <div className="w-full max-w-md mx-auto space-y-4">
        {/* 1. Top Navbar / Header */}
        <header className="flex items-center justify-between py-1">
          {/* Logo & Tagline */}
          <Link to="/" className="flex items-center gap-2">
            <img
              src={logo}
              alt="VahanSetu Logo"
              className="h-9 sm:h-10 w-auto object-contain"
            />
          </Link>

          {/* Share Button */}
          <button
            type="button"
            onClick={handleShare}
            className="flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-[#131B2E] border border-white/10 text-white text-xs font-semibold hover:bg-white/15 active:scale-95 transition-all cursor-pointer shadow-sm"
          >
            <Share2 size={13} className="text-slate-300" />
            <span>Share</span>
          </button>
        </header>

        {/* 2. Hero Car Image Banner with Status & Carousel Dots */}
        <div className="relative w-full rounded-3xl overflow-hidden border border-white/10 bg-[#0C1424] shadow-2xl shadow-black/80 group">
          <img
            src={vehicle.image}
            alt={vehicle.vehicleModel}
            className="w-full h-64 sm:h-72 object-cover transition-transform duration-500 group-hover:scale-105"
            onError={(e) => {
              e.currentTarget.src = cretaWhite;
            }}
          />

          {/* Bottom Dark Gradient Fade */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#070B14] via-transparent to-transparent opacity-80 pointer-events-none" />

          {/* Top-Right Active Status Badge */}
          <div
            className={`absolute top-3.5 right-3.5 flex items-center gap-1.5 px-3 py-1 rounded-full backdrop-blur-md text-white text-xs font-bold shadow-lg border ${
              vehicle.status === "Active"
                ? "bg-emerald-600/95 border-emerald-400/20 shadow-emerald-950/40"
                : "bg-red-600/95 border-red-400/20 shadow-red-950/40"
            }`}
          >
            <CheckCircle2 size={13} className="text-white" />
            <span>{vehicle.status}</span>
          </div>

          {/* Bottom Carousel Indicator Dots */}
          <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex items-center gap-1.5">
            <span className="w-6 h-1.5 rounded-full bg-[#FF5E00] shadow-sm" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
            <span className="w-1.5 h-1.5 rounded-full bg-white/40" />
          </div>
        </div>

        {/* 3. Number Plate Badge with Copy Button */}
        <div className="flex items-center">
          <div className="inline-flex items-center gap-3 px-4 py-2 rounded-2xl bg-[#0C1424] border border-white/15 shadow-inner">
            <span className="text-xl sm:text-2xl font-black tracking-wider text-white font-mono">
              {vehicle.vehicleNumber}
            </span>
            <button
              type="button"
              onClick={handleCopy}
              className="p-1.5 rounded-xl bg-white/10 hover:bg-white/20 active:scale-90 text-slate-300 hover:text-white transition-all cursor-pointer"
              title="Copy Number Plate"
            >
              {copied ? (
                <Check size={16} className="text-emerald-400" />
              ) : (
                <Copy size={16} />
              )}
            </button>
          </div>
        </div>

        {/* 4. Vehicle Title, Subtitle and Brand Emblem */}
        <div className="flex items-center justify-between pt-1">
          <div>
            <h1 className="text-xl sm:text-2xl font-black text-white tracking-tight">
              {vehicle.vehicleModel}
            </h1>
            <p className="text-xs sm:text-sm text-slate-400 font-medium mt-0.5">
              {vehicle.vehicleType}
            </p>
          </div>

          {/* Stylized Brand Logo / Emblem */}
          <div className="flex flex-col items-center justify-center opacity-85 select-none pr-1">
            <svg
              className="w-11 h-6 text-slate-300 fill-current"
              viewBox="0 0 100 50"
            >
              <ellipse
                cx="50"
                cy="25"
                rx="42"
                ry="20"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
              />
              <path
                d="M38 14 C46 16, 54 16, 62 14 C65 24, 65 30, 62 36 C54 34, 46 34, 38 36 C35 30, 35 24, 38 14 Z"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
              />
              <line
                x1="38"
                y1="25"
                x2="62"
                y2="25"
                stroke="currentColor"
                strokeWidth="4"
              />
            </svg>
            <span className="text-[9px] font-black tracking-[0.25em] text-slate-400 uppercase mt-0.5">
              {vehicle.vehicleModel.split(" ")[0] || "VAHAN"}
            </span>
          </div>
        </div>

        {/* 5. Three Stat Cards (Type, Color, Model Year) */}
        <div className="grid grid-cols-3 gap-2.5">
          {/* Card 1: Type */}
          <div className="rounded-2xl bg-[#0C1424] border border-white/10 p-2.5 sm:p-3 flex items-center gap-2.5 shadow-sm">
            <div className="w-8 h-8 rounded-xl bg-orange-500/15 flex items-center justify-center text-[#FF5E00] shrink-0">
              <Car size={16} />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] text-slate-400 block leading-tight">
                Type
              </span>
              <span className="text-xs font-bold text-white block truncate mt-0.5">
                {vehicle.vehicleType}
              </span>
            </div>
          </div>

          {/* Card 2: Color */}
          <div className="rounded-2xl bg-[#0C1424] border border-white/10 p-2.5 sm:p-3 flex items-center gap-2.5 shadow-sm">
            <div className="w-8 h-8 rounded-xl bg-blue-500/15 flex items-center justify-center text-blue-400 shrink-0">
              <Palette size={16} />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] text-slate-400 block leading-tight">
                Color
              </span>
              <span className="text-xs font-bold text-white block truncate mt-0.5">
                {vehicle.color}
              </span>
            </div>
          </div>

          {/* Card 3: Model Year */}
          <div className="rounded-2xl bg-[#0C1424] border border-white/10 p-2.5 sm:p-3 flex items-center gap-2.5 shadow-sm">
            <div className="w-8 h-8 rounded-xl bg-purple-500/15 flex items-center justify-center text-purple-400 shrink-0">
              <Calendar size={16} />
            </div>
            <div className="min-w-0">
              <span className="text-[10px] text-slate-400 block leading-tight">
                Model Year
              </span>
              <span className="text-xs font-bold text-white block truncate mt-0.5">
                {vehicle.year}
              </span>
            </div>
          </div>
        </div>

        {/* 6. Action Contact Buttons */}
        <div className="space-y-3 pt-1">
          {/* Button 1: Call Owner */}
          {vehicle.phone ? (
            <a
              href={`tel:${vehicle.phone}`}
              className="w-full flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-emerald-600 to-green-500 hover:brightness-110 active:scale-[0.99] text-white shadow-lg shadow-emerald-950/40 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0 shadow-inner">
                  <Phone size={19} className="fill-current" />
                </div>
                <div className="text-left">
                  <span className="text-base font-bold text-white block leading-tight">
                    Call Owner
                  </span>
                  <span className="text-xs text-white/80 block mt-0.5">
                    Open phone app to call
                  </span>
                </div>
              </div>
              <ChevronRight
                size={20}
                className="text-white/80 group-hover:translate-x-1 transition-transform"
              />
            </a>
          ) : (
            <div className="w-full flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10 text-slate-400 opacity-60">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-slate-400 shrink-0">
                  <Phone size={19} />
                </div>
                <div className="text-left">
                  <span className="text-base font-bold text-slate-300 block leading-tight">
                    Call Owner
                  </span>
                  <span className="text-xs text-slate-500 block mt-0.5">
                    Phone not available
                  </span>
                </div>
              </div>
            </div>
          )}

          {/* Button 2: WhatsApp Owner */}
          {cleanPhone ? (
            <a
              href={waUrl}
              target="_blank"
              rel="noreferrer"
              className="w-full flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-gradient-to-r from-[#0066FF] to-[#0088FF] hover:brightness-110 active:scale-[0.99] text-white shadow-lg shadow-blue-950/40 transition-all cursor-pointer group"
            >
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center text-white shrink-0 shadow-inner">
                  <FaWhatsapp size={22} />
                </div>
                <div className="text-left">
                  <span className="text-base font-bold text-white block leading-tight">
                    WhatsApp Owner
                  </span>
                  <span className="text-xs text-white/80 block mt-0.5">
                    Send a message on WhatsApp
                  </span>
                </div>
              </div>
              <ChevronRight
                size={20}
                className="text-white/80 group-hover:translate-x-1 transition-transform"
              />
            </a>
          ) : (
            <div className="w-full flex items-center justify-between p-3.5 sm:p-4 rounded-2xl bg-white/5 border border-white/10 text-slate-400 opacity-60">
              <div className="flex items-center gap-3.5">
                <div className="w-10 h-10 rounded-xl bg-white/10 flex items-center justify-center text-slate-400 shrink-0">
                  <FaWhatsapp size={22} />
                </div>
                <div className="text-left">
                  <span className="text-base font-bold text-slate-300 block leading-tight">
                    WhatsApp Owner
                  </span>
                  <span className="text-xs text-slate-500 block mt-0.5">
                    WhatsApp not available
                  </span>
                </div>
              </div>
            </div>
          )}
        </div>

        {/* 7. Privacy Notice Card */}
        <div className="w-full flex items-center gap-3.5 p-3.5 rounded-2xl bg-[#091122] border border-blue-900/40 shadow-sm">
          <div className="w-10 h-10 rounded-2xl bg-blue-500/15 border border-blue-500/30 flex items-center justify-center text-blue-400 shrink-0">
            <ShieldCheck size={22} />
          </div>
          <div className="text-left">
            <span className="text-xs font-bold text-blue-200 block leading-tight">
              Owner's privacy is protected.
            </span>
            <span className="text-[11px] text-slate-400 block mt-0.5">
              Contact securely through the options above.
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
