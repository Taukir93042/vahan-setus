import { useContext } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import {
  LayoutGrid,
  Car,
  Plus,
  PhoneCall,
  UserRound,
  Globe,
  ExternalLink,
  ChevronRight,
  LogOut,
} from "lucide-react";
import { AuthContext } from "../../context/AuthContext";
import { logoutUser } from "../../services/authService";

export default function Sidebar() {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const { logout,user } = useContext(AuthContext);

  const handleLogout = async () => {
    try {
      await logout();
      navigate("/");
    } catch (error) {
      navigate("/");
      console.error("Sidebar logout failed:", error);
    }
  };

  const isMatch = (path) =>
    pathname === path ||
    (path === "/dashboard/add-vehicle" && pathname === "/dashboard/add-vehicles");

  const getLinkClass = (path) =>
    `group mb-1.5 flex items-center justify-between rounded-2xl border px-3.5 py-3 text-sm font-medium transition-all duration-200 ${
      isMatch(path)
        ? "border-orange-500/50 bg-[#19110D] text-white font-bold shadow-sm shadow-orange-950/40"
        : "border-transparent text-slate-400 hover:bg-white/[0.04] hover:text-white"
    }`;

  const getIconClass = (path) =>
    `transition-colors duration-200 ${
      isMatch(path) ? "text-[#FF5E00]" : "text-slate-400 group-hover:text-slate-200"
    }`;

  return (
    <aside className="hidden lg:flex sticky top-20 h-[calc(100vh-5rem)] w-72 flex-shrink-0 flex-col justify-between border-r border-white/10 bg-[#070A11] p-4 text-white overflow-y-auto no-scrollbar">
      <div>
        {/* 1. MAIN MENU */}
        <h3 className="mb-2 mt-5 px-3 text-[11px] font-bold tracking-widest text-slate-500 uppercase">
          MAIN MENU
        </h3>

        <Link to="/dashboard" className={getLinkClass("/dashboard")}>
          <div className="flex items-center gap-3">
            <LayoutGrid size={19} className={getIconClass("/dashboard")} />
            <span>Dashboard</span>
          </div>
          {pathname === "/dashboard" && (
            <span className="w-2 h-2 rounded-full bg-[#FF5E00] shadow-[0_0_8px_#ff5e00]" />
          )}
        </Link>

        <Link to="/dashboard/add-vehicle" className={getLinkClass("/dashboard/add-vehicle")}>
          <div className="flex items-center gap-3">
            <Plus size={19} className={getIconClass("/dashboard/add-vehicle")} />
            <span>Add Vehicle</span>
          </div>
          {isMatch("/dashboard/add-vehicle") && (
            <span className="w-2 h-2 rounded-full bg-[#FF5E00] shadow-[0_0_8px_#ff5e00]" />
          )}
        </Link>

        <Link to="/dashboard/my-vehicles" className={getLinkClass("/dashboard/my-vehicles")}>
          <div className="flex items-center gap-3">
            <Car size={19} className={getIconClass("/dashboard/my-vehicles")} />
            <span>My Vehicles</span>
          </div>
          {pathname === "/dashboard/my-vehicles" && (
            <span className="w-2 h-2 rounded-full bg-[#FF5E00] shadow-[0_0_8px_#ff5e00]" />
          )}
        </Link>

        {/* 2. ACTIVITY & ALERTS */}
        <h3 className="mb-2 mt-5 px-3 text-[11px] font-bold tracking-widest text-slate-500 uppercase">
          ACTIVITY & ALERTS
        </h3>

        <Link to="/dashboard/contact-requests" className={getLinkClass("/dashboard/contact-requests")}>
          <div className="flex items-center gap-3">
            <PhoneCall size={19} className={getIconClass("/dashboard/contact-requests")} />
            <span>Contact Requests</span>
          </div>
          {pathname === "/dashboard/contact-requests" && (
            <span className="w-2 h-2 rounded-full bg-[#FF5E00] shadow-[0_0_8px_#ff5e00]" />
          )}
        </Link>

        {/* 3. ACCOUNT */}
        <h3 className="mb-2 mt-5 px-3 text-[11px] font-bold tracking-widest text-slate-500 uppercase">
          ACCOUNT
        </h3>

        <Link to="/dashboard/profile" className={getLinkClass("/dashboard/profile")}>
          <div className="flex items-center gap-3">
            <UserRound size={19} className={getIconClass("/dashboard/profile")} />
            <span>Profile & Security</span>
          </div>
          {pathname === "/dashboard/profile" && (
            <span className="w-2 h-2 rounded-full bg-[#FF5E00] shadow-[0_0_8px_#ff5e00]" />
          )}
        </Link>
      </div>

      {/* Footer Area: User Card + Action Row */}
      <div className="mt-4 border-t border-white/10 pt-4 flex flex-col gap-2.5">
        {/* User Profile Card */}
        <Link
          to="/dashboard/profile"
          className="group flex items-center justify-between rounded-2xl border border-white/10 bg-[#0C111C] p-3 transition-all duration-200 hover:border-white/20 hover:bg-[#101726]"
        >
          <div className="flex items-center gap-3 min-w-0">
            <div className="relative flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-gradient-to-tr from-[#FF5E00] to-amber-500 p-0.5">
              <img
                src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&auto=format&fit=crop&q=80"
                alt="Minhaj"
                className="h-full w-full rounded-full object-cover"
              />
              <span className="absolute bottom-0 right-0 h-2.5 w-2.5 rounded-full border-2 border-[#0C111C] bg-emerald-400" />
            </div>

            <div className="min-w-0 text-left">
              <p className="truncate text-sm font-bold text-white transition-colors group-hover:text-[#FF5E00]">
                {user?.name || "User"}
              </p>
              <p className="truncate text-xs text-slate-400">{user?.email || ""}</p>
            </div>
          </div>

          <ChevronRight
            size={16}
            className="flex-shrink-0 text-slate-500 transition-transform group-hover:translate-x-0.5 group-hover:text-white"
          />
        </Link>

        {/* Action Row: Main Website + Sign Out */}
        <div className="flex items-center gap-2">
          <Link
            to="/"
            className="flex flex-1 items-center justify-center gap-2 rounded-xl border border-white/10 bg-[#0C111C] py-2.5 px-3 text-xs font-semibold text-slate-300 transition-all duration-200 hover:border-white/20 hover:bg-white/[0.06] hover:text-white active:scale-[0.98]"
          >
            <Globe size={15} className="text-slate-400" />
            <span>Main Website</span>
            <ExternalLink size={12} className="text-slate-500" />
          </Link>

          <button
            type="button"
            onClick={handleLogout}
            className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-xl border border-rose-500/20 bg-rose-950/20 text-rose-400 transition-all duration-200 hover:border-rose-500/40 hover:bg-rose-950/40 hover:text-rose-300 cursor-pointer active:scale-95"
            aria-label="Sign Out"
            title="Sign Out"
          >
            <LogOut size={16} />
          </button>
        </div>
      </div>
    </aside>
  );
}
