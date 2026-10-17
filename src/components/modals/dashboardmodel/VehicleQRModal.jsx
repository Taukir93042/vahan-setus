import { useEffect, useState } from "react";
import { QrCode, X, Printer, Loader2 } from "lucide-react";
import QRCode from "react-qr-code";
import api from "../../../services/api";

const VehicleQRModal = ({ vehicle, onClose }) => {
  const [token, setToken] = useState(vehicle?.qrToken || vehicle?.qr?.qrToken || "");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (!vehicle) return;
    const existingToken = vehicle.qrToken || vehicle.qr?.qrToken;
    if (existingToken) {
      setToken(existingToken);
      return;
    }

    // Fallback: If qrToken is missing in the list, fetch fresh details
    const vId = vehicle._id || vehicle.id;
    if (vId) {
      setLoading(true);
      api
        .get(`/vehicles/${vId}`)
        .then((res) => {
          if (res.data?.success && res.data?.data?.vehicle?.qrToken) {
            setToken(res.data.data.vehicle.qrToken);
          }
        })
        .catch((err) => {
          console.error("Failed to fetch vehicle QR token:", err);
        })
        .finally(() => {
          setLoading(false);
        });
    }
  }, [vehicle]);

  if (!vehicle) return null;

  const qrUrl = token ? `${window.location.origin}/v/${token}` : "";

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-black/75 p-4"
      onClick={onClose}
    >
      <div
        className="relative w-full max-w-sm rounded-2xl border border-orange-500/50 bg-[#0B0F19] p-6 text-center shadow-2xl"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          type="button"
          onClick={onClose}
          className="absolute right-4 top-4 text-gray-400 hover:text-white"
        >
          <X size={22} />
        </button>

        <QrCode
          size={30}
          className="mx-auto mb-3 text-orange-500"
        />

        <h2 className="text-xl font-bold text-white">
          Vehicle QR Code
        </h2>

        <p className="mt-2 text-sm text-gray-400">
          Scan to contact the vehicle owner
        </p>

        <div className="mx-auto my-6 w-fit rounded-xl bg-white p-4 min-h-[242px] min-w-[242px] flex items-center justify-center">
          {loading ? (
            <div className="flex flex-col items-center gap-2 text-slate-700">
              <Loader2 size={28} className="animate-spin text-orange-500" />
              <span className="text-xs font-semibold">Generating QR...</span>
            </div>
          ) : qrUrl ? (
            <QRCode value={qrUrl} size={210} />
          ) : (
            <p className="text-xs text-red-500 font-medium">QR Token Not Found</p>
          )}
        </div>

        <p className="mb-5 font-bold tracking-wide text-white font-mono">
          {vehicle.vehicleNumber}
        </p>

        <button
          type="button"
          onClick={() => window.print()}
          disabled={!token}
          className="w-full rounded-xl bg-[#FF5E00] px-4 py-3 font-semibold text-white hover:bg-orange-600 disabled:opacity-50 cursor-pointer"
        >
          <Printer size={18} className="mr-2 inline" />
          Print QR Sticker
        </button>
      </div>
    </div>
  );
};

export default VehicleQRModal;
