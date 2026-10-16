import React, { useState } from "react";
import { Link } from "react-router-dom";
import {
  PhoneCall,
  MessageCircle,
  AlertTriangle,
  Clock,
  ShieldCheck,
  CheckCircle2,
  Filter,
  ArrowLeft,
  ChevronRight,
} from "lucide-react";

export default function ContactRequests() {
  const [filter, setFilter] = useState("all");

  const [requests, setRequests] = useState([
    {
      id: 1,
      type: "scan",
      vehicle: "Hyundai Creta",
      plate: "DL 8C AX 1234",
      reason: "Vehicle QR Code Scanned",
      details: "Scanner opened contact prompt near Cyber City",
      timestamp: "2 hours ago",
      maskedCaller: "Proxy Link Opened",
      status: "Active",
      isUrgent: false,
    },
    {
      id: 2,
      type: "call",
      vehicle: "Hyundai Creta",
      plate: "BR 05 AB 5678",
      reason: "Wrong Parking Alert",
      details: "Driver notified vehicle is blocking entrance gate",
      timestamp: "5 hours ago",
      maskedCaller: "+91 98*** **321",
      status: "Resolved",
      isUrgent: true,
    },
    {
      id: 3,
      type: "whatsapp",
      vehicle: "BMW 3 Series",
      plate: "BR 05 AB 5678",
      reason: "Headlights Left On",
      details: "Passerby sent quick preset alert via encrypted WhatsApp relay",
      timestamp: "1 day ago",
      maskedCaller: "+91 91*** **874",
      status: "Resolved",
      isUrgent: false,
    },
    {
      id: 4,
      type: "call",
      vehicle: "Hyundai Creta",
      plate: "DL 8C AX 1234",
      reason: "Emergency SOS Check",
      details: "Two-way masked voice call routed successfully",
      timestamp: "3 days ago",
      maskedCaller: "+91 70*** **112",
      status: "Resolved",
      isUrgent: false,
    },
  ]);

  const filteredRequests = requests.filter((r) => {
    if (filter === "calls") return r.type === "call";
    if (filter === "whatsapp") return r.type === "whatsapp";
    if (filter === "urgent") return r.isUrgent;
    return true;
  });

  const handleResolve = (id) => {
    setRequests((prev) =>
      prev.map((r) => (r.id === id ? { ...r, status: "Resolved" } : r))
    );
  };

  return (
    <div className="w-full max-w-6xl mx-auto space-y-6">
      {/* Top Banner */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-2">
        <div>
          <div className="flex items-center gap-2 mb-1">
            <Link
              to="/dashboard"
              className="inline-flex items-center gap-1.5 text-xs text-gray-400 hover:text-white transition-colors"
            >
              <ArrowLeft size={14} />
              <span>Back to Dashboard</span>
            </Link>
          </div>
          <h1 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight flex items-center gap-2.5">
            <PhoneCall className="text-[#FF5E00]" size={26} />
            <span>Contact Requests & Activity</span>
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            All inquiries and calls made to your vehicle QR stickers with 100% masked privacy.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold self-start sm:self-center">
          <ShieldCheck size={16} />
          <span>Real-time Voice & SMS Proxy Active</span>
        </div>
      </div>

      {/* Filter Tabs */}
      <div className="flex flex-wrap items-center gap-2 border-b border-gray-800 pb-3">
        <div className="flex items-center gap-1.5 text-xs text-gray-400 mr-2">
          <Filter size={14} />
          <span>Filter:</span>
        </div>
        {[
          { id: "all", label: "All Requests" },
          { id: "calls", label: "Masked Calls" },
          { id: "whatsapp", label: "WhatsApp Alerts" },
          { id: "urgent", label: "Priority / Urgent" },
        ].map((tab) => (
          <button
            key={tab.id}
            onClick={() => setFilter(tab.id)}
            className={`px-3.5 py-1.5 rounded-xl text-xs font-semibold cursor-pointer transition-all ${
              filter === tab.id
                ? "bg-[#FF5E00] text-white shadow-md shadow-orange-600/30"
                : "bg-[#090D17] text-gray-400 hover:text-white border border-gray-800"
            }`}
          >
            {tab.label}
          </button>
        ))}
      </div>

      {/* Requests List */}
      <div className="space-y-3.5">
        {filteredRequests.length === 0 ? (
          <div className="rounded-2xl bg-[#090D17] border border-gray-800 p-10 text-center text-gray-400 text-sm">
            No contact requests found under this filter.
          </div>
        ) : (
          filteredRequests.map((req) => (
            <div
              key={req.id}
              className="rounded-2xl bg-[#090D17] border border-gray-800/80 hover:border-gray-700 p-4 sm:p-5 flex flex-col md:flex-row md:items-center justify-between gap-4 transition-all shadow-sm"
            >
              {/* Left Details */}
              <div className="flex items-start gap-3.5 min-w-0">
                <div
                  className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 border ${
                    req.type === "call"
                      ? "bg-rose-500/10 border-rose-500/30 text-rose-400"
                      : req.type === "whatsapp"
                      ? "bg-emerald-500/10 border-emerald-500/30 text-emerald-400"
                      : "bg-blue-500/10 border-blue-500/30 text-blue-400"
                  }`}
                >
                  {req.type === "call" ? (
                    <PhoneCall size={18} />
                  ) : req.type === "whatsapp" ? (
                    <MessageCircle size={18} />
                  ) : (
                    <ShieldCheck size={18} />
                  )}
                </div>

                <div className="min-w-0 space-y-1">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="font-bold text-white text-sm sm:text-base">
                      {req.reason}
                    </span>
                    <span className="px-2 py-0.5 rounded bg-black/80 border border-gray-700 text-gray-300 font-extrabold text-[11px] tracking-wide">
                      {req.plate}
                    </span>
                    {req.isUrgent && (
                      <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full bg-rose-500/20 text-rose-400 text-[10px] font-bold">
                        <AlertTriangle size={11} /> Urgent
                      </span>
                    )}
                  </div>

                  <p className="text-xs sm:text-sm text-gray-400 leading-relaxed">
                    {req.details}
                  </p>

                  <div className="flex flex-wrap items-center gap-3 text-xs text-gray-500 pt-1">
                    <span className="flex items-center gap-1">
                      <Clock size={12} />
                      {req.timestamp}
                    </span>
                    <span>•</span>
                    <span className="text-gray-400">
                      Masked Contact:{" "}
                      <strong className="text-gray-200">{req.maskedCaller}</strong>
                    </span>
                  </div>
                </div>
              </div>

              {/* Right Action Buttons */}
              <div className="flex items-center gap-2 self-end md:self-center flex-shrink-0">
                {req.status === "Active" ? (
                  <button
                    onClick={() => handleResolve(req.id)}
                    className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-xl bg-emerald-500/15 border border-emerald-500/30 text-emerald-400 text-xs font-semibold hover:bg-emerald-500/25 cursor-pointer transition-all"
                  >
                    <CheckCircle2 size={14} />
                    <span>Mark Resolved</span>
                  </button>
                ) : (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full bg-white/5 text-gray-400 text-xs font-medium">
                    <CheckCircle2 size={13} className="text-emerald-400" />
                    Resolved
                  </span>
                )}

                <Link
                  to="/dashboard/profile"
                  className="p-2 rounded-xl text-gray-400 hover:text-white hover:bg-white/5 transition-colors"
                  aria-label="View security settings"
                >
                  <ChevronRight size={16} />
                </Link>
              </div>
            </div>
          ))
        )}
      </div>
    </div>
  );
}
