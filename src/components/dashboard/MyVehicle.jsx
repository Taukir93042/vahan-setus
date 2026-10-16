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
import { useContext, useEffect } from "react";
import { getMyVehicles } from "../../services/vehicleService";
import { useState } from "react";
import { AuthContext } from "../../context/AuthContext";
import VehicleQRModal from "../modals/dashboardmodel/VehicleQRModal";



 

export default function MyVehicle() {

  const [selectedVehicle, setSelectedVehicle] = useState(null);
 
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");
  const { user,vehicles, setVehicles } = useContext(AuthContext);

  const getImageUrl = (img) => {
    if (!img) return cretaWhite;
    if (img.startsWith("http://") || img.startsWith("https://") || img.startsWith("data:")) {
      return img;
    }
    const backendUrl = (import.meta.env.VITE_API_URL || "http://localhost:5000/api").replace(/\/api\/?$/, "");
    return `${backendUrl}${img.startsWith("/") ? "" : "/"}${img}`;
  };

  useEffect(() => {
    const fetchVehicles = async () => {
      try {
        const response = await getMyVehicles();

        if (response.success) {
          setVehicles(response.data.vehicles || []);
          console.log(response.data.vehicles);
          
        } else {
          setError(response.message || "Vehicles load nahi hui.");
        }
      } catch (error) {
        setError(
          error.response?.data?.message || "Vehicles load karne mein error aaya."
        );
      } finally {
        setLoading(false);
      }
    };

    fetchVehicles();
  }, []);

  return (
    <>
    
  
    <div className="w-full max-w-7xl mx-auto space-y-6">
      {/* 1. Top Garage Banner */}
      <div className="rounded-3xl bg-[#0B101B] border border-orange-500/30 p-6 sm:p-7 shadow-xl shadow-orange-950/20 flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-semibold mb-2">
            <ShieldCheck size={14} />
            <span>Vehicles Protected</span>
          </div>
          <h1 className="text-xl sm:text-2xl font-bold text-white tracking-tight">
            My Vehicle Garage ({vehicles.length})
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            Manage all your protected cars, bikes, scooters, and autos with
            real-time QR privacy status.
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
        {vehicles.map((vehicle) => (
          <div
            key={vehicle._id || vehicle.id}
            className="rounded-2xl bg-[#090D17] border border-gray-800/80 hover:border-gray-700 transition-all p-4 flex flex-col justify-between shadow-sm overflow-hidden"
          >
            <div>
              {/* Photo Header */}
              <div className="w-full h-48 sm:h-52 rounded-xl overflow-hidden bg-black/60 relative">
                <img
                  src={getImageUrl(vehicle.vehicleImage)}
                  alt={vehicle.vehicleModel || "Vehicle"}
                  className="w-full h-full object-cover"
                />

                {/* Top-Right Status Badge */}
                <span className="absolute top-3 right-3 px-3 py-0.5 rounded-full text-xs font-bold shadow-md bg-emerald-500 text-white">
                  {vehicle.status || "Active"}
                </span>
              </div>

              {/* Details Section */}
              <div className="mt-4 space-y-1">
                <span className="inline-block px-3 py-1 rounded-md bg-black/90 border border-gray-700 text-white font-extrabold text-xs tracking-wider">
                  {vehicle.vehicleNumber}
                </span>

                <h3 className="text-base sm:text-lg font-bold text-white pt-1">
                  {vehicle.vehicleModel}
                </h3>

                <p className="text-xs text-gray-400 capitalize">
                  {vehicle.vehicleType} {vehicle.color ? `• ${vehicle.color}` : ""}
                </p>

                <div className="flex items-center gap-1.5 text-xs text-orange-400/90 pt-1">
                  <PhoneCall size={13} className="text-[#FF5E00]" />
                  <span>SOS Contact: {user?.phone || "Not set"}</span>
                </div>
              </div>
            </div>

            {/* Action Buttons Row */}
            <div className="flex items-center gap-2 pt-5 mt-3 border-t border-gray-800/60">
              {/* View Qr */}
              <button
  type="button"
  onClick={() => setSelectedVehicle(vehicle)}
  className="flex-1 inline-flex items-center justify-center gap-1.5 py-2 px-3 rounded-xl border border-orange-500/40 bg-[#171113] hover:bg-[#201518] text-[#FF5E00] text-xs font-semibold cursor-pointer transition-colors"
>
  <QrCode size={14} />
  <span>View QR</span>
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


<VehicleQRModal
  vehicle={selectedVehicle}
  onClose={() => setSelectedVehicle(null)}
/>
      </>
    
  );
}
