import React, { useContext, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import {
  User,
  ShieldCheck,
  Phone,
  Mail,
  Lock,
  ArrowLeft,
  CheckCircle2,
} from "lucide-react";
import { AuthContext } from "../../context/AuthContext";

export default function Profile() {
  const { user } = useContext(AuthContext);
  const [profile, setProfile] = useState({
    name: user?.name || "Mohammad Kaif",
    email: user?.email || "kaif@gmail.com",
    phone: user?.phone || "+91 98765 43210",
    emergencyContact: "+91 91234 56789",
  });

  useEffect(() => {
    if (user) {
      setProfile((prev) => ({
        ...prev,
        name: user.name || prev.name,
        email: user.email || prev.email,
        phone: user.phone || prev.phone,
      }));
    }
  }, [user]);

  const [saved, setSaved] = useState(false);

  const handleSave = (e) => {
    e.preventDefault();
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="w-full max-w-4xl mx-auto space-y-6">
      {/* Top Header */}
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
            <User className="text-[#FF5E00]" size={26} />
            <span>Profile & Security</span>
          </h1>
          <p className="text-xs sm:text-sm text-gray-400 mt-1">
            Manage your account details, privacy proxy preferences, and emergency fallback contacts.
          </p>
        </div>

        <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 text-xs font-bold self-start sm:self-center">
          <ShieldCheck size={16} />
          <span>256-bit AES Masking Active</span>
        </div>
      </div>

      {saved && (
        <div className="p-4 rounded-2xl bg-emerald-500/10 border border-emerald-500/30 text-emerald-400 flex items-center gap-2.5 text-sm font-semibold">
          <CheckCircle2 size={18} />
          <span>Profile changes and privacy preferences saved successfully!</span>
        </div>
      )}

      {/* Profile Form Card */}
      <form onSubmit={handleSave} className="space-y-6">
        <div className="rounded-3xl bg-[#090D17] border border-gray-800/80 p-6 sm:p-7 space-y-6 shadow-xl">
          <h2 className="text-base sm:text-lg font-bold text-white flex items-center gap-2 border-b border-gray-800 pb-3">
            <User size={18} className="text-[#FF5E00]" />
            <span>Personal Information</span>
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5">
            {/* Full Name */}
            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                Full Name
              </label>
              <div className="relative">
                <input
                  type="text"
                  value={profile.name}
                  onChange={(e) =>
                    setProfile({ ...profile, name: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-[#070A10] border border-gray-800 focus:border-[#FF5E00] focus:outline-none text-white text-sm"
                  required
                />
              </div>
            </div>

            {/* Email Address */}
            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                Email Address
              </label>
              <div className="relative">
                <input
                  type="email"
                  value={profile.email}
                  onChange={(e) =>
                    setProfile({ ...profile, email: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-[#070A10] border border-gray-800 focus:border-[#FF5E00] focus:outline-none text-white text-sm"
                  required
                />
                <Mail
                  size={16}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500"
                />
              </div>
            </div>

            {/* Registered Phone */}
            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                Primary Phone Number (Masked from public)
              </label>
              <div className="relative">
                <input
                  type="tel"
                  value={profile.phone}
                  onChange={(e) =>
                    setProfile({ ...profile, phone: e.target.value })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-[#070A10] border border-gray-800 focus:border-[#FF5E00] focus:outline-none text-white text-sm"
                  required
                />
                <Phone
                  size={16}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-gray-500"
                />
              </div>
            </div>

            {/* Emergency Secondary Phone */}
            <div>
              <label className="block text-xs font-bold text-gray-300 uppercase tracking-wider mb-2">
                Emergency Secondary Contact (60s rollover)
              </label>
              <div className="relative">
                <input
                  type="tel"
                  value={profile.emergencyContact}
                  onChange={(e) =>
                    setProfile({
                      ...profile,
                      emergencyContact: e.target.value,
                    })
                  }
                  className="w-full px-4 py-3 rounded-xl bg-[#070A10] border border-gray-800 focus:border-[#FF5E00] focus:outline-none text-white text-sm"
                  placeholder="+91 90000 00000"
                />
                <Lock
                  size={16}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-emerald-400"
                />
              </div>
            </div>
          </div>
        </div>

        
      </form>
    </div>
  );
}
