import { useContext, useEffect, useRef, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  FaQrcode,
  FaArrowRightToBracket,
  FaBars,
  FaXmark,
  FaCircleUser,
  FaUser,
  FaArrowRightFromBracket,
  FaChevronUp,
  FaGauge,
} from "react-icons/fa6";
import logo from "../assets/logo.png";
import AuthModal from "./modals/AuthModal";
import { AuthContext } from "../context/AuthContext";
import { logoutUser } from "../services/authService";
function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const { pathname } = useLocation();
  const [authOpen, setAuthOpen] = useState(false);
  const { user, setUser ,loading} = useContext(AuthContext);
  const [profileOpen, setProfileOpen] = useState(false);
  const profileRef = useRef(null);

  const handleLogout = async () => {
    try {
      await logoutUser();
      setUser(null);
      setProfileOpen(false);
    } catch (error) {
      console.error("Logout failed:", error);
    }
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (profileRef.current && !profileRef.current.contains(event.target)) {
        setProfileOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <>
      <header className="relative w-full bg-[#000] border-b border-gray-800/80 sticky top-0 z-50">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 h-20 flex items-center justify-between">
          {/* Left: Brand Logo */}
          <Link to="/" className="flex items-center">
            <img
              src={logo}
              alt="VahanSetu Logo"
              className="h-10 sm:h-11 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Center: Navigation Links */}
          <nav className="hidden md:flex items-center gap-8 lg:gap-10">
            <Link
              to="/"
              className={`relative py-1 text-[15px] lg:text-base font-medium transition-colors ${
                pathname === "/"
                  ? "text-[#FF5E00]"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Home
              {pathname === "/" && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-5 h-[2.5px] bg-[#FF5E00] rounded-full" />
              )}
            </Link>

            <Link
              to="/how-it-works"
              className={`relative py-1 text-[15px] lg:text-base font-medium transition-colors ${
                pathname === "/how-it-works"
                  ? "text-[#FF5E00]"
                  : "text-white/90 hover:text-white"
              }`}
            >
              How It Works
              {pathname === "/how-it-works" && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-5 h-[2.5px] bg-[#FF5E00] rounded-full" />
              )}
            </Link>

            <Link
              to="/features"
              className={`relative py-1 text-[15px] lg:text-base font-medium transition-colors ${
                pathname === "/features"
                  ? "text-[#FF5E00]"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Features
              {pathname === "/features" && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-5 h-[2.5px] bg-[#FF5E00] rounded-full" />
              )}
            </Link>

            <Link
              to="/contact-us"
              className={`relative py-1 text-[15px] lg:text-base font-medium transition-colors ${
                pathname === "/contact-us"
                  ? "text-[#FF5E00]"
                  : "text-white/90 hover:text-white"
              }`}
            >
              Contact Us
              {pathname === "/contact-us" && (
                <span className="absolute -bottom-2 left-1/2 -translate-x-1/2 w-5 h-[2.5px] bg-[#FF5E00] rounded-full" />
              )}
            </Link>
          </nav>

          {/* Right: Action Buttons */}

          {/* Right: Action Buttons */}
          <div className="hidden md:flex items-center gap-4">
            {user ? (
              <div className="relative" ref={profileRef}>
                <button
                  onClick={() => setProfileOpen(!profileOpen)}
                  className="group flex items-center gap-2.5 rounded-full
    border border-[#FF6500]/60 bg-[#121722] px-3.5 py-1.5
    text-white transition-all duration-200
    hover:border-[#FF6500] hover:bg-[#1A2234]"
                  aria-label="User profile menu"
                >
                  <span
                    className="flex h-8 w-8 items-center justify-center
      rounded-full bg-orange-500/20 text-[#FF6500]
      ring-1 ring-orange-500/40 text-xs font-bold"
                  >
                    {user?.name ? user.name.charAt(0).toUpperCase() : <FaUser size={14} />}
                  </span>

                  <span className="text-sm font-semibold max-w-[120px] truncate text-gray-200 group-hover:text-white">
                    {user?.name || "User"}
                  </span>

                  <FaChevronUp
                    size={11}
                    className={`text-gray-400 transition-transform duration-200 ${
                      profileOpen ? "" : "rotate-180"
                    }`}
                  />
                </button>

                {profileOpen && (
                  <div
                    className="absolute right-0 top-full z-[100] mt-2
    w-64 overflow-hidden rounded-xl border border-gray-700/80
    bg-[#111722] text-white shadow-xl shadow-black/50"
                  >
                    {/* User Info */}
                    <div
                      className="border-b border-gray-700/70
    bg-gradient-to-br from-orange-500/10 to-transparent p-3"
                    >
                      <div className="flex items-center gap-2.5">
                        <div
                          className="flex h-9 w-9 shrink-0 items-center
        justify-center rounded-full border border-orange-500/50
        bg-orange-500/15 text-[#FF6500] font-bold text-sm"
                        >
                          {user?.name ? user.name.charAt(0).toUpperCase() : <FaUser size={16} />}
                        </div>

                        <div className="min-w-0">
                          <h3 className="truncate text-sm font-semibold text-white">
                            {user?.name || "User"}
                          </h3>
                          <p className="mt-0.5 truncate text-[11px] text-gray-400">
                            {user?.email || ""}
                          </p>
                        </div>
                      </div>
                    </div>

                    {/* Navigation Links */}
                    <div className="p-2 space-y-1">
                      <Link
                        to="/dashboard"
                        onClick={() => setProfileOpen(false)}
                        className="flex items-center gap-3 rounded-xl px-3 py-2.5
                        text-sm font-medium text-gray-300 transition-colors
                           hover:bg-white/5 hover:text-white"
                      >
                        <FaGauge className="text-[#FF5E00]" size={16} />
                        Dashboard
                      </Link>

                      

                      {/* Logout */}
                      <button
                        className="flex w-full items-center gap-3 rounded-xl
                             px-3 py-2.5 text-sm font-medium text-red-400
                           transition-colors hover:bg-red-500/10"
                        onClick={handleLogout}
                      >
                        <FaArrowRightFromBracket size={16} />
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            ) : (
              <button
                onClick={() => setAuthOpen(true)}
                className="flex h-11 items-center gap-2 rounded-full
      border border-[#262E3F] bg-[#121722] px-5
      text-sm font-semibold text-white shadow-sm
      transition-all hover:border-gray-500 hover:bg-[#1A2234]"
              >
                <FaArrowRightToBracket size={15} />
                Login
              </button>
            )}

            {/* Get Your QR */}
            <Link
              to="/get-qr"
              className="flex h-11 items-center gap-2 rounded-full
    bg-gradient-to-r from-[#FF5500] to-[#FF6B00] px-5
    text-sm font-semibold text-white shadow-lg shadow-orange-600/20
    transition-all duration-200 hover:brightness-110
    active:scale-95"
            >
              <FaQrcode size={16} />
              Get Your QR
            </Link>
          </div>

          {/* Mobile Hamburger Button */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className="md:hidden p-2 text-gray-300 hover:text-white rounded-lg focus:outline-none"
            aria-label="Toggle menu"
          >
            {mobileOpen ? (
              <FaXmark className="text-2xl text-gray-300" />
            ) : (
              <FaBars className="text-2xl text-gray-300" />
            )}
          </button>
        </div>

        {/* Mobile Menu Dropdown - Transparent glassmorphism overlay on top of banner */}
        {mobileOpen && (
          <div className="absolute top-full left-0 w-full md:hidden bg-black/60 backdrop-blur-xl border-b border-white/10 px-5 pt-3 pb-6 space-y-4 shadow-2xl z-50">
            <nav className="flex flex-col space-y-2">
              <Link
                to="/"
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  pathname === "/"
                    ? "text-[#FF5E00] bg-white/10"
                    : "text-gray-200 hover:text-white hover:bg-white/5"
                }`}
              >
                Home
              </Link>

              <Link
                to="/how-it-works"
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  pathname === "/how-it-works"
                    ? "text-[#FF5E00] bg-white/10"
                    : "text-gray-200 hover:text-white hover:bg-white/5"
                }`}
              >
                How It Works
              </Link>

              <Link
                to="/features"
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  pathname === "/features"
                    ? "text-[#FF5E00] bg-white/10"
                    : "text-gray-200 hover:text-white hover:bg-white/5"
                }`}
              >
                Features
              </Link>

              <Link
                to="/contact-us"
                onClick={() => setMobileOpen(false)}
                className={`px-4 py-2.5 rounded-lg text-base font-medium transition-colors ${
                  pathname === "/contact-us"
                    ? "text-[#FF5E00] bg-white/10"
                    : "text-gray-200 hover:text-white hover:bg-white/5"
                }`}
              >
                Contact Us
              </Link>
            </nav>

            <div className="flex flex-col sm:flex-row gap-3 pt-3 border-t border-white/10">
              {user ? (
                <>
                  <Link
                    to="/dashboard"
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-center gap-2 w-full h-11 text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/15 rounded-full hover:bg-white/20 transition-all"
                  >
                    <FaGauge className="text-base text-[#FF5E00]" />
                    <span>Dashboard ({user?.name?.split(" ")[0] || "User"})</span>
                  </Link>

                  <button
                    onClick={() => {
                      setMobileOpen(false);
                      handleLogout();
                    }}
                    className="flex items-center justify-center gap-2 w-full h-11 text-sm font-medium text-red-400 bg-red-500/10 border border-red-500/20 rounded-full hover:bg-red-500/20 transition-all"
                  >
                    <FaArrowRightFromBracket className="text-base" />
                    <span>Logout</span>
                  </button>
                </>
              ) : (
                <button
                  onClick={() => {
                    setMobileOpen(false);
                    setAuthOpen(true);
                  }}
                  className="flex items-center justify-center gap-2 w-full h-11 text-sm font-medium text-white bg-white/10 backdrop-blur-md border border-white/15 rounded-full hover:bg-white/20 transition-all"
                >
                  <FaArrowRightToBracket className="text-base text-white" />
                  <span>Login</span>
                </button>
              )}

              <Link
                to="/get-qr"
                onClick={() => setMobileOpen(false)}
                className="flex items-center justify-center gap-2 w-full h-11 text-sm font-semibold text-white bg-gradient-to-r from-[#FF5500] to-[#FF6B00] rounded-full shadow-md shadow-orange-600/25 hover:brightness-110 active:scale-95 transition-all"
              >
                <FaQrcode className="text-base text-white" />
                <span>Get Your QR</span>
              </Link>
            </div>
          </div>
        )}
      </header>
      <AuthModal isOpen={authOpen} onClose={() => setAuthOpen(false)} />
    </>
  );
}

export default Header;
