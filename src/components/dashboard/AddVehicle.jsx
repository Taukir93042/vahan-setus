import { useState, useRef, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../assets/logo.png";
import cretaWhite from "../../assets/vehicles/creta_white.jpg";
import {
  Car,
  ArrowLeft,
  QrCode,
  Sparkles,
  Hash,
  Palette,
  EyeOff,
  ChevronRight,
  Layers,
  Image as ImageIcon,
  X,
  AlertCircle,
} from "lucide-react";
import { createVehicle } from "../../services/vehicleService";

export default function AddVehicle() {
  const navigate = useNavigate();

  const [imagePreview, setImagePreview] = useState(cretaWhite);
  const [vehicleImage, setVehicleImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  const [formData, setFormData] = useState({
    vehicleNumber: "",
    vehicleType: "car",
    vehicleModel: "",
    color: "",
  });

  const fileInputRef = useRef(null);

  const handleImageChange = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;

    if (!file.type.startsWith("image/")) {
      setError("Please select a valid image.");
      e.target.value = "";
      return;
    }

    if (file.size > 1 * 1024 * 1024) {
      setError("Image size should be less than 1MB.");
      e.target.value = "";
      return;
    }

    setError("");
    setVehicleImage(file);

    const previewUrl = URL.createObjectURL(file);
    setImagePreview((oldPreview) => {
      if (oldPreview && oldPreview !== cretaWhite) {
        URL.revokeObjectURL(oldPreview);
      }
      return previewUrl;
    });
  };

  useEffect(() => {
    return () => {
      if (imagePreview && imagePreview !== cretaWhite) {
        URL.revokeObjectURL(imagePreview);
      }
    };
  }, [imagePreview]);

  // Image remove
  const handleRemoveImage = () => {
    if (imagePreview && imagePreview !== cretaWhite) {
      URL.revokeObjectURL(imagePreview);
    }

    setImagePreview(null);
    setVehicleImage(null);

    if (fileInputRef.current) {
      fileInputRef.current.value = "";
    }
  };

  // Form inputs handle karna
  const handleChange = (e) => {
    const { name, value } = e.target;

    setFormData((prev) => ({
      ...prev,
      [name]: name === "vehicleNumber" ? value.toUpperCase() : value,
    }));
    if (error) setError("");
  };

  const convertToBase64 = (file) => {
    return new Promise((resolve, reject) => {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = () => resolve(reader.result);
      reader.onerror = (err) => reject(err);
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");

    if (!formData.vehicleNumber.trim() || !formData.vehicleModel.trim()) {
      setError("Vehicle number aur model required hain.");
      return;
    }

    try {
      setLoading(true);

      let imageBase64 = null;
      if (vehicleImage) {
        imageBase64 = await convertToBase64(vehicleImage);
      }

      const payload = {
        vehicleNumber: formData.vehicleNumber.trim(),
        vehicleType: formData.vehicleType,
        vehicleModel: formData.vehicleModel.trim(),
        color: formData.color.trim() || undefined,
        vehicleImage: imageBase64 || undefined,
      };

      const response = await createVehicle(payload);

      if (response?.success) {
        navigate("/dashboard/my-vehicles");
      }
    } catch (err) {
      setError(
        err.response?.data?.message || "Failed to add vehicle. Please try again."
      );
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="w-full max-w-7xl mx-auto space-y-6 pb-12">
      {/* 1. Header Bar with Breadcrumb and Title */}
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
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Vehicle Details Card */}
            <div className="rounded-3xl border border-white/10 bg-[#090D17] p-5 sm:p-6 shadow-xl space-y-5">
              <div>
                <h3 className="text-base font-bold text-white">Vehicle Details</h3>
                <p className="text-xs text-slate-400 mt-0.5">
                  Enter your vehicle specifications to generate a VahanSetu QR decal.
                </p>
              </div>

              {/* Error message */}
              {error && (
                <div className="flex items-center gap-2 p-3 rounded-xl bg-red-500/10 border border-red-500/20 text-red-400 text-xs font-semibold">
                  <AlertCircle size={16} className="shrink-0" />
                  <span>{error}</span>
                </div>
              )}

              {/* 1. vehicleNumber */}
              <div>
                <label className="text-xs font-semibold text-slate-300 mb-1.5 flex items-center justify-between">
                  <span>Vehicle Number Plate (vehicleNumber)</span>
                  <span className="text-[11px] text-rose-400 font-bold">*Required</span>
                </label>
                <div className="relative">
                  <Hash
                    size={17}
                    className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                  />
                  <input
                    type="text"
                    name="vehicleNumber"
                    value={formData.vehicleNumber}
                    onChange={handleChange}
                    placeholder="e.g. DL 8C AX 1234"
                    required
                    className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0C111C] border border-white/10 text-sm font-bold tracking-wider uppercase text-white placeholder-slate-500 transition-all focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500/50"
                  />
                </div>
              </div>

              {/* Row: vehicleType & vehicleModel */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* 2. vehicleType */}
                <div>
                  <label className="text-xs font-semibold text-slate-300 mb-1.5 flex items-center justify-between">
                    <span>Vehicle Type (vehicleType)</span>
                    <span className="text-[11px] text-rose-400 font-bold">*Required</span>
                  </label>
                  <div className="relative">
                    <Layers
                      size={17}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none"
                    />
                    <select
                      name="vehicleType"
                      value={formData.vehicleType}
                      onChange={handleChange}
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0C111C] border border-white/10 text-sm text-white transition-all focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500/50 cursor-pointer"
                    >
                      <option value="car" className="bg-[#0C111C] text-white">Car / SUV</option>
                      <option value="bike" className="bg-[#0C111C] text-white">Motorcycle / Bike</option>
                      <option value="scooter" className="bg-[#0C111C] text-white">Scooter / EV</option>
                      <option value="auto" className="bg-[#0C111C] text-white">Auto Rickshaw</option>
                      <option value="commercial" className="bg-[#0C111C] text-white">Commercial Vehicle</option>
                      <option value="other" className="bg-[#0C111C] text-white">Other</option>
                    </select>
                  </div>
                </div>

                {/* 3. vehicleModel */}
                <div>
                  <label className="text-xs font-semibold text-slate-300 mb-1.5 flex items-center justify-between">
                    <span>Vehicle Model (vehicleModel)</span>
                    <span className="text-[11px] text-rose-400 font-bold">*Required</span>
                  </label>
                  <div className="relative">
                    <Car
                      size={17}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="text"
                      name="vehicleModel"
                      value={formData.vehicleModel}
                      onChange={handleChange}
                      placeholder="e.g. Hyundai Creta, Honda City"
                      required
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0C111C] border border-white/10 text-sm text-white placeholder-slate-500 transition-all focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500/50"
                    />
                  </div>
                </div>
              </div>

              {/* Row: color & vehicleImage */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {/* 4. color */}
                <div>
                  <label className="text-xs font-semibold text-slate-300 mb-1.5 flex items-center justify-between">
                    <span>Vehicle Color (color)</span>
                    <span className="text-[11px] text-slate-500 font-normal">Optional</span>
                  </label>
                  <div className="relative">
                    <Palette
                      size={17}
                      className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400"
                    />
                    <input
                      type="text"
                      name="color"
                      value={formData.color}
                      onChange={handleChange}
                      placeholder="e.g. Polar White, Matt Black"
                      className="w-full pl-10 pr-4 py-3 rounded-xl bg-[#0C111C] border border-white/10 text-sm text-white placeholder-slate-500 transition-all focus:border-orange-500 focus:outline-none focus:ring-1 focus:ring-orange-500/50"
                    />
                  </div>
                </div>

                {/* 5. vehicleImage File Upload */}
                <div>
                  <label className="text-xs font-semibold text-slate-300 mb-1.5 flex items-center justify-between">
                    <span>Vehicle Image (vehicleImage)</span>
                    <span className="text-[11px] text-slate-500 font-normal">Optional</span>
                  </label>
                  <div className="relative">
                    <input
                      ref={fileInputRef}
                      type="file"
                      name="vehicleImage"
                      accept="image/*"
                      onChange={handleImageChange}
                      className="w-full text-xs text-slate-400 file:mr-3 file:py-2.5 file:px-4 file:rounded-xl file:border-0 file:text-xs file:font-bold file:bg-[#FF5E00]/15 file:text-[#FF5E00] hover:file:bg-[#FF5E00]/25 file:cursor-pointer cursor-pointer rounded-xl bg-[#0C111C] border border-white/10 p-1.5 focus:border-orange-500 focus:outline-none transition-all"
                    />
                  </div>
                </div>
              </div>

              {/* Car Image Preview */}
              {imagePreview && (
                <div className="relative overflow-hidden rounded-2xl border border-white/10 bg-[#0C111C] p-3.5 shadow-xl transition-all">
                  <div className="flex items-center justify-between mb-2.5 px-0.5">
                    <span className="text-xs font-bold text-white flex items-center gap-2">
                      <ImageIcon size={15} className="text-[#FF5E00]" />
                      Car Image Preview
                    </span>
                    <button
                      type="button"
                      onClick={handleRemoveImage}
                      className="text-[11px] font-semibold text-red-400 hover:text-red-300 flex items-center gap-1 transition-colors px-2 py-0.5 rounded-md hover:bg-red-500/10 cursor-pointer"
                    >
                      <X size={13} />
                      Remove
                    </button>
                  </div>
                  <div className="relative h-48 sm:h-56 w-full overflow-hidden rounded-xl bg-black/40 border border-white/5 group">
                    <img
                      src={imagePreview}
                      alt="Car Preview"
                      className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent pointer-events-none" />
                    <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                      <span className="px-3 py-1 rounded-lg bg-black/70 backdrop-blur-md text-xs font-semibold text-white border border-white/15">
                        {formData.vehicleModel || "Hyundai Creta SX (O)"}
                      </span>
                      <span className="px-2.5 py-1 rounded-lg bg-orange-500/20 backdrop-blur-md text-[11px] font-bold text-[#FF5E00] border border-orange-500/30">
                        Car Photo
                      </span>
                    </div>
                  </div>
                </div>
              )}
            </div>

            {/* Form Actions */}
            <div className="flex items-center justify-end gap-3 pt-2">
              <Link
                to="/dashboard/my-vehicles"
                className="px-6 py-3 rounded-xl border border-white/10 bg-[#0C111C] text-slate-300 hover:text-white hover:bg-white/[0.06] text-xs sm:text-sm font-semibold transition-all active:scale-95"
              >
                Cancel
              </Link>

              <button
                type="submit"
                disabled={loading}
                className="inline-flex items-center gap-2 px-7 py-3 rounded-xl bg-gradient-to-r from-[#FF5E00] to-orange-600 hover:brightness-110 active:scale-95 text-white font-bold text-xs sm:text-sm shadow-lg shadow-orange-600/30 cursor-pointer transition-all disabled:opacity-60 disabled:cursor-not-allowed"
              >
                <Sparkles size={16} />
                <span>{loading ? "Saving Vehicle..." : "Save & Generate QR Sticker"}</span>
              </button>
            </div>
          </form>
        </div>

        {/* Right Column: Live Sticker Preview (5 Cols) */}
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
                  {formData.vehicleNumber || "DL 8C AX 1234"}
                </span>
              </div>

              {/* Vehicle Model & Subtext */}
              <p className="mt-2 text-xs font-bold text-slate-800 text-center truncate max-w-[220px]">
                {formData.vehicleModel || "Hyundai Creta SX (O)"}
              </p>

              <p className="text-[9px] font-bold text-slate-500 uppercase tracking-widest mt-0.5">
                {(formData.vehicleType || "car").toUpperCase()} • {formData.color || "Polar White"}
              </p>
            </div>

            {/* Sticker Specifications */}
            <div className="w-full mt-6 space-y-2.5 text-xs">
              <div className="flex items-center justify-between text-slate-400 py-1.5 border-b border-white/5">
                <span>Sticker Size</span>
                <span className="font-semibold text-white">3.5" x 3.5" Standard</span>
              </div>
              <div className="flex items-center justify-between text-slate-400 py-1.5 border-b border-white/5">
                <span>Vehicle Type</span>
                <span className="font-semibold text-white uppercase">{formData.vehicleType || "car"}</span>
              </div>
              <div className="flex items-center justify-between text-slate-400 py-1.5 border-b border-white/5">
                <span>Masking Protocol</span>
                <span className="font-semibold text-emerald-400 flex items-center gap-1">
                  <EyeOff size={13} />
                  <span>Caller Proxy Active</span>
                </span>
              </div>
            </div>

            {/* Right Column: Car Photo Mini Card */}
            {imagePreview && (
              <div className="w-full mt-5 rounded-2xl border border-white/10 bg-[#0C111C] p-3 shadow-lg">
                <div className="flex items-center gap-2 text-xs font-bold text-slate-300 mb-2">
                  <ImageIcon size={14} className="text-[#FF5E00]" />
                  <span>Car Photo Preview</span>
                </div>
                <div className="relative h-32 w-full rounded-xl overflow-hidden border border-white/5">
                  <img
                    src={imagePreview}
                    alt="Car preview"
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
