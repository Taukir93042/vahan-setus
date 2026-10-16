import { Link } from "react-router-dom";
import cretaWhite from "../../assets/vehicles/creta_white.jpg";
import pulsarBlack from "../../assets/vehicles/pulsar_black.jpg";
import {
  Plus,
  QrCode,
  Pencil,
  Trash2,
  PhoneCall,
  ShieldCheck,
} from "lucide-react";

const VEHICLES = [
  {
    id: 1,
    model: "Hyundai Creta SX (O)",
    type: "Car",
    color: "Polar White",
    year: "2024",
    plate: "DL 8C AX 1234",
    sosContact: "+91 98765 43210",
    status: "Active",
    image: cretaWhite,
  },
  {
    id: 2,
    model: "Bajaj Pulsar NS200",
    type: "Bike",
    color: "Glossy Black",
    year: "2023",
    plate: "BR 05 AB 5678",
    sosContact: "+91 98111 22334",
    status: "Active",
    image: pulsarBlack,
  },
];

export default function MyVehicle() {
  return (
    <div className="w-full max-w-7xl mx-auto space-y-6">
      {/* 1. Top Garage Banner */}
      <div className="rounded-3xl bg-[#0B101B] border border-orange-500/30 p-6 sm:p-7 shadow-xl shadow-orange-950/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-2">
            <ShieldCheck size={14} />
            <span>Vehicles Protected</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            My Vehicle Garage ({VEHICLES.length})
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            Manage all your protected cars, bikes, scooters, and autos with real-time QR privacy status.
          </p>
        </div>

        <Link
          to="/dashboard/add-vehicle"
          className="inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-full bg-gradient-to-r from-[#FF5E00] to-orange-600 hover:brightness-110 active:scale-95 text-white font-bold text-xs sm:text-sm shadow-lg shadow-orange-600/30 cursor-pointer transition-all self-start sm:self-auto flex-shrink-0"
        >
          <Plus size={16} />
          <span>Add New Vehicle</span>
        </Link>
      </div>

      {/* 2. Vehicles Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
        {VEHICLES.map((vehicle) => (
          <div
            key={vehicle.id}
            className="rounded-2xl bg-[#090D17] border border-gray-800/80 hover:border-gray-700 transition-all p-4 flex flex-col justify-between shadow-sm overflow-hidden"
          >
            <div>
              {/* Photo Header */}
              <div className="w-full h-48 sm:h-52 rounded-xl overflow-hidden bg-black/60 relative">
                <img
                  src={vehicle.image}
                  alt={vehicle.model}
                  className="w-full h-full object-cover"
                />

                {/* Top-Right Status Badge */}
                <span className="absolute top-3 right-3 px-3 py-0.5 rounded-full text-xs font-bold shadow-md bg-emerald-500 text-white">
                  {vehicle.status}
                </span>
              </div>

              {/* Details Section */}
              <div className="mt-4 space-y-1">
                <span className="inline-block px-3 py-1 rounded-md bg-black/90 border border-gray-700 text-white font-extrabold text-xs tracking-wider">
                  {vehicle.plate}
                </span>

                <h3 className="text-base sm:text-lg font-bold text-white pt-1">
                  {vehicle.model}
                </h3>

                <p className="text-xs text-gray-400">
                  {vehicle.type} • {vehicle.color} • {vehicle.year}
                </p>

                <div className="flex items-center gap-1.5 text-xs text-orange-400/90 pt-1">
                  <PhoneCall size={13} className="text-[#FF5E00]" />
                  <span>SOS Contact: {vehicle.sosContact}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="flex items-center gap-2 pt-5 mt-3 border-t border-gray-800/60">
              {/* QR Sticker */}
              <button
                type="button"
                className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border border-orange-500/40 bg-[#171113] hover:bg-[#201518] text-[#FF5E00] text-xs font-semibold cursor-pointer transition-colors"
              >
                <QrCode size={14} />
                <span>QR Sticker</span>
              </button>

              {/* Edit */}
              <Link
                to="/dashboard/add-vehicle"
                className="w-9 h-9 rounded-xl border border-blue-500/40 bg-blue-950/20 hover:bg-blue-900/30 text-blue-400 flex items-center justify-center cursor-pointer transition-colors"
                title="Edit Vehicle"
              >
                <Pencil size={15} />
              </Link>

              {/* Delete */}
              <button
                type="button"
                className="w-9 h-9 rounded-xl border border-rose-500/40 bg-rose-950/20 hover:bg-rose-900/30 text-rose-400 flex items-center justify-center cursor-pointer transition-colors"
                title="Delete Vehicle"
              >
                <Trash2 size={15} />
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
