import React from "react";
import { Link } from "react-router-dom";
import {
  FaFacebookF,
  FaInstagram,
  FaXTwitter,
  FaYoutube,
  FaLinkedinIn,
} from "react-icons/fa6";
import logo from "../assets/logo.png";

export default function Footer() {
  return (
    <footer className="w-full bg-[#05080E] border-t border-gray-800/80 text-white overflow-hidden pb-20 lg:pb-0">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-8 lg:px-12 py-6 sm:py-8">
        {/* Top Row: Logo, Nav Links, Social Media Icons */}
        <div className="flex flex-col lg:flex-row items-center justify-between gap-5 sm:gap-6">
          {/* Left: Brand Logo */}
          <Link to="/" className="flex items-center flex-shrink-0">
            <img
              src={logo}
              alt="VahanSetu Logo"
              className="h-10 sm:h-11 md:h-12 w-auto object-contain"
            />
          </Link>

          {/* Center: Navigation Links + Install App Button */}
          <nav className="flex flex-wrap items-center justify-center gap-6 sm:gap-8 text-sm sm:text-[15px] font-medium text-gray-300">
            <Link
              to="/"
              className="hover:text-[#FF5E00] transition-colors"
            >
              Home
            </Link>
            <Link
              to="/how-it-works"
              className="hover:text-[#FF5E00] transition-colors"
            >
              How It Works
            </Link>
            <Link
              to="/features"
              className="hover:text-[#FF5E00] transition-colors"
            >
              Features
            </Link>
            <Link
              to="/contact-us"
              className="hover:text-[#FF5E00] transition-colors"
            >
              Contact
            </Link>

        
            
          </nav>

          {/* Right: Social Media Icon Circles */}
          <div className="flex items-center gap-3">
            <a
              href="https://facebook.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Facebook"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/10 flex items-center justify-center text-gray-400 hover:text-white transition-all text-sm"
            >
              <FaFacebookF />
            </a>
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Instagram"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/10 flex items-center justify-center text-gray-400 hover:text-white transition-all text-sm"
            >
              <FaInstagram />
            </a>
            <a
              href="https://x.com"
              target="_blank"
              rel="noreferrer"
              aria-label="Twitter X"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/10 flex items-center justify-center text-gray-400 hover:text-white transition-all text-sm"
            >
              <FaXTwitter />
            </a>
            <a
              href="https://youtube.com"
              target="_blank"
              rel="noreferrer"
              aria-label="YouTube"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/10 flex items-center justify-center text-gray-400 hover:text-white transition-all text-sm"
            >
              <FaYoutube />
            </a>
            <a
              href="https://linkedin.com"
              target="_blank"
              rel="noreferrer"
              aria-label="LinkedIn"
              className="w-9 h-9 rounded-full bg-white/5 border border-white/10 hover:border-orange-500/50 hover:bg-orange-500/10 flex items-center justify-center text-gray-400 hover:text-white transition-all text-sm"
            >
              <FaLinkedinIn />
            </a>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800/80 my-5 sm:my-6" />

        {/* Bottom Row: Copyright & Tagline */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-2.5 text-xs sm:text-sm text-gray-500">
          {/* Copyright */}
          <div>© 2026 VahanSetu. All rights reserved.</div>

          {/* Right: Tagline */}
          <div className="text-gray-400 font-medium">
            Driving a safer tomorrow.
          </div>
        </div>
      </div>
    </footer>
  );
}
