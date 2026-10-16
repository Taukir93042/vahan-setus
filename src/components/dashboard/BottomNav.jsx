import React from "react";
import { Link, useLocation } from "react-router-dom";
import { Home, Car, Plus, PhoneCall, User } from "lucide-react";

export default function BottomNav() {
  const { pathname } = useLocation();

  const isDashboard = pathname.startsWith("/dashboard");
  const homePath = isDashboard ? "/dashboard" : "/";
  const isHomeActive = pathname === "/" || pathname === "/dashboard";

  const navItems = [
    {
      label: "Home",
      path: homePath,
      icon: Home,
      isActive: isHomeActive,
    },
    {
      label: "Vehicles",
      path: "/dashboard/my-vehicles",
      icon: Car,
      isActive:
        pathname === "/dashboard/my-vehicles" ||
        pathname === "/dashboard/vehicles",
    },
    {
      label: "Add",
      path: "/dashboard/add-vehicle",
      icon: Plus,
      isCenter: true,
      isActive:
        pathname === "/dashboard/add-vehicle" ||
        pathname === "/dashboard/add-vehicles",
    },
    {
      label: "Requests",
      path: "/dashboard/contact-requests",
      icon: PhoneCall,
      isActive:
        pathname === "/dashboard/contact-requests" ||
        pathname === "/dashboard/requests",
    },
    {
      label: "Profile",
      path: "/dashboard/profile",
      icon: User,
      isActive: pathname === "/dashboard/profile",
    },
  ];

  return (
    <nav
      aria-label="Mobile Navigation"
      className="lg:hidden fixed bottom-0 left-0 right-0 z-40 bg-[#070A10]/95 backdrop-blur-xl border-t border-gray-800/80 px-3 py-2 shadow-2xl"
    >
      <div className="flex items-center justify-around max-w-lg mx-auto relative">
        {navItems.map((item) => {
          const Icon = item.icon;

          if (item.isCenter) {
            return (
              <Link
                key={item.label}
                to={item.path}
                className="relative -top-5 flex flex-col items-center group focus:outline-none"
                aria-label="Add Vehicle"
              >
                <div className="w-13 h-13 rounded-full bg-gradient-to-tr from-[#FF5E00] to-amber-500 hover:brightness-110 active:scale-95 text-white flex items-center justify-center shadow-lg shadow-orange-600/40 border-3 border-[#070A10] transition-all">
                  <Plus size={24} strokeWidth={2.5} />
                </div>
              </Link>
            );
          }

          return (
            <Link
              key={item.label}
              to={item.path}
              className={`flex flex-col items-center gap-1 py-1 px-2.5 rounded-xl transition-all ${
                item.isActive
                  ? "text-[#FF5E00]"
                  : "text-gray-400 hover:text-gray-200"
              }`}
            >
              <Icon size={20} strokeWidth={item.isActive ? 2.5 : 2} />
              <span
                className={`text-[11px] tracking-tight ${
                  item.isActive ? "font-bold text-[#FF5E00]" : "font-medium"
                }`}
              >
                {item.label}
              </span>
            </Link>
          );
        })}
      </div>
    </nav>
  );
}
