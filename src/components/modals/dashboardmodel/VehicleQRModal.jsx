
import { QrCode, X, Printer } from "lucide-react";
import QRCode from "react-qr-code";

const VehicleQRModal = ({ vehicle, onClose }) => {
  if (!vehicle) return null;

  const qrUrl = `${window.location.origin}/v/${vehicle.qrToken}`;

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

        <div className="mx-auto my-6 w-fit rounded-xl bg-white p-4">
          <QRCode value={qrUrl} size={210} />
        </div>

        <p className="mb-5 font-bold tracking-wide text-white">
          {vehicle.vehicleNumber}
        </p>

        <button
          type="button"
          onClick={() => window.print()}
          className="w-full rounded-xl bg-[#FF5E00] px-4 py-3 font-semibold text-white hover:bg-orange-600"
        >
          <Printer size={18} className="mr-2 inline" />
          Print QR Sticker
        </button>
      </div>
    </div>
  );
};

export default VehicleQRModal;
