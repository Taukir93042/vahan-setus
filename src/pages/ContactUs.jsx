import React, { useState } from "react";
import { assets } from "../assets/assets";
import {
  Phone,
  Mail,
  MapPin,
  MessageCircle,
  Clock,
  Sparkles,
  Send,
  CheckCircle2,
  ShieldCheck,
} from "lucide-react";
import CtaBanner from "../components/CtaBanner";

// Contact Details Cards
const CONTACT_CHANNELS = [
  {
    id: 1,
    icon: Phone,
    title: "Call Our Helpdesk",
    desc: "Speak directly with our vehicle support experts.",
    value: "+91 98765 43210",
    action: "tel:+919876543210",
    badge: "Mon - Sat (9 AM - 8 PM)",
  },
  {
    id: 2,
    icon: Mail,
    title: "Email Support",
    desc: "For general queries, refunds, or feedback.",
    value: "support@vahansetu.com",
    action: "mailto:support@vahansetu.com",
    badge: "Reply within 2 hours",
  },
  {
    id: 3,
    icon: MessageCircle,
    title: "WhatsApp Chat",
    desc: "Quick messaging for fast order updates.",
    value: "+91 98765 43210",
    action: "https://wa.me/919876543210",
    badge: "Instant Chat",
  },
  {
    id: 4,
    icon: MapPin,
    title: "Headquarters",
    desc: "VahanSetu Technologies Pvt. Ltd.",
    value: "Cyber City, Tower B, Gurugram, India",
    action: "#",
    badge: "Corporate Office",
  },
];

function ContactUs() {
  const [formData, setFormData] = useState({
    name: "",
    phone: "",
    email: "",
    topic: "General Inquiry",
    message: "",
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.phone) return;
    setSubmitted(true);
  };

  const handleReset = () => {
    setFormData({
      name: "",
      phone: "",
      email: "",
      topic: "General Inquiry",
      message: "",
    });
    setSubmitted(false);
  };

  return (
    <div className="w-full bg-[#070A10] text-white">
      {/* 1. Cinematic Hero Banner */}
      <section className="relative w-full overflow-hidden py-8 sm:py-12 md:py-14 bg-[#070A10] border-b border-gray-800/80">
        {/* Background Image */}
        <div className="absolute inset-0 z-0">
          <img
            src={assets.contact_hero_bg}
            alt="Contact VahanSetu Support Background"
            className="w-full h-full object-cover object-center"
          />
          {/* Lightened overlay for image visibility & contrast */}
          <div className="absolute inset-0 bg-black/45" />
          <div className="absolute inset-0 bg-gradient-to-b from-black/40 via-transparent to-[#070A10]" />
        </div>

        {/* Hero Content */}
        <div className="relative z-10 max-w-[1440px] mx-auto px-4 sm:px-8 text-center flex flex-col items-center">
          {/* Top Pill Badge */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-orange-950/70 border border-orange-500/50 text-[#FFA048] text-[11px] sm:text-xs font-semibold uppercase tracking-wider mb-3.5 sm:mb-4 shadow-md backdrop-blur-xs">
            <Sparkles size={14} className="text-[#FF5E00]" />
            <span>24/7 VEHICLE ASSISTANCE • WE'RE HERE TO HELP</span>
          </div>

          {/* Heading */}
          <h1 className="text-2xl sm:text-4xl md:text-5xl font-extrabold tracking-tight text-white leading-tight mb-3 sm:mb-4 drop-shadow-md">
            Get in Touch with <span className="text-[#FF5E00]">VahanSetu</span>
          </h1>

    
        </div>
      </section>

      {/* 2. Main Contact Section: Info Cards + Form - PURE WHITE */}
      <section className="w-full bg-white text-gray-900 py-12 sm:py-16 lg:py-20">
        <div className="max-w-[1440px] mx-auto px-4 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 max-w-6xl mx-auto items-start">
            {/* Left 5 Columns: Contact Channels */}
            <div className="lg:col-span-5 space-y-6 text-left">
              <div>
                <span className="text-xs font-bold text-[#FF5E00] uppercase tracking-wider">
                  Direct Assistance
                </span>
                <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 mt-1">
                  We'd Love to Hear From You
                </h2>
                <p className="text-xs sm:text-sm text-gray-600 mt-2 leading-relaxed">
                  Choose your preferred communication channel or submit the form. Our support engineers reply promptly within standard working hours.
                </p>
              </div>

              {/* Channels List */}
              <div className="space-y-3.5">
                {CONTACT_CHANNELS.map((item) => {
                  const Icon = item.icon;
                  return (
                    <a
                      key={item.id}
                      href={item.action}
                      target={item.action.startsWith("http") ? "_blank" : undefined}
                      rel="noopener noreferrer"
                      className="group flex items-start gap-4 p-4 rounded-2xl border border-gray-100 hover:border-orange-300 hover:shadow-md bg-white transition-all duration-200"
                    >
                      <div className="w-11 h-11 rounded-xl bg-[#FFF2E9] border border-[#FFE2D1] text-[#FF5E00] flex items-center justify-center flex-shrink-0 group-hover:scale-105 transition-transform">
                        <Icon size={20} />
                      </div>
                      <div className="flex-1 min-w-0">
                        <div className="flex items-center justify-between gap-2">
                          <h3 className="text-sm font-bold text-gray-900">
                            {item.title}
                          </h3>
                          <span className="text-[10px] font-semibold text-[#FF5E00] bg-[#FFF3EB] px-2 py-0.5 rounded-full border border-[#FFE2D1] whitespace-nowrap">
                            {item.badge}
                          </span>
                        </div>
                        <p className="text-xs text-gray-500 mt-0.5 truncate">
                          {item.desc}
                        </p>
                        <p className="text-xs sm:text-[13px] font-bold text-gray-800 mt-1">
                          {item.value}
                        </p>
                      </div>
                    </a>
                  );
                })}
              </div>

              {/* Working Hours Banner */}
              <div className="p-4 rounded-2xl bg-[#FFF8F3] border border-[#FFE2D1] flex items-start gap-3 text-xs text-gray-700">
                <Clock size={18} className="text-[#FF5E00] flex-shrink-0 mt-0.5" />
                <div>
                  <span className="font-bold text-gray-900 block">
                    Operating Schedule
                  </span>
                  <span>
                    Monday to Saturday: 9:00 AM – 8:00 PM IST. Emergency vehicle scanning alerts operate 24/7/365 automatically.
                  </span>
                </div>
              </div>
            </div>

            {/* Right 7 Columns: Interactive Contact Form */}
            <div className="lg:col-span-7 bg-[#F8FAFC] border border-slate-200/80 rounded-3xl p-6 sm:p-9 shadow-sm text-left">
              {submitted ? (
                /* Success Feedback Screen */
                <div className="py-10 text-center flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center mb-4">
                    <CheckCircle2 size={36} />
                  </div>
                  <h3 className="text-2xl font-bold text-gray-900 mb-2">
                    Message Sent Successfully!
                  </h3>
                  <p className="text-sm text-gray-600 max-w-md mx-auto leading-relaxed mb-6">
                    Thank you, <span className="font-semibold text-gray-800">{formData.name}</span>. Our support team has received your ticket regarding <span className="font-semibold text-gray-800">{formData.topic}</span> and will get back to you within 2 hours.
                  </p>
                  <button
                    onClick={handleReset}
                    className="px-6 py-2.5 rounded-full bg-[#FF5E00] hover:bg-[#FF6E00] text-white text-xs sm:text-sm font-semibold transition-all shadow-md shadow-orange-600/25 cursor-pointer"
                  >
                    Send Another Message
                  </button>
                </div>
              ) : (
                /* Main Form */
                <form onSubmit={handleSubmit} className="space-y-4 sm:space-y-5">
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">
                      Send Us a Message
                    </h3>
                    <p className="text-xs text-gray-500 mt-1">
                      Fill out the form below and we'll respond via email or phone.
                    </p>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Name */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5">
                        Your Name <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="e.g. Rahul Sharma"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#FF5E00] focus:ring-2 focus:ring-[#FF5E00]/15 transition-all"
                      />
                    </div>

                    {/* Mobile Number */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5">
                        Mobile Number <span className="text-red-500">*</span>
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="e.g. 98765 43210"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#FF5E00] focus:ring-2 focus:ring-[#FF5E00]/15 transition-all"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {/* Email */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5">
                        Email Address
                      </label>
                      <input
                        type="email"
                        name="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="rahul@example.com"
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#FF5E00] focus:ring-2 focus:ring-[#FF5E00]/15 transition-all"
                      />
                    </div>

                    {/* Topic Dropdown */}
                    <div>
                      <label className="block text-xs font-bold text-gray-700 mb-1.5">
                        Inquiry Topic
                      </label>
                      <select
                        name="topic"
                        value={formData.topic}
                        onChange={handleChange}
                        className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-xs sm:text-sm text-gray-800 focus:outline-none focus:border-[#FF5E00] focus:ring-2 focus:ring-[#FF5E00]/15 transition-all cursor-pointer"
                      >
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Order Status & Delivery">Order Status & Delivery</option>
                        <option value="QR Sticker Replacement">QR Sticker Replacement</option>
                        <option value="Society & Fleet Partnerships">Society & Fleet Partnerships</option>
                        <option value="Technical or Privacy Query">Technical or Privacy Query</option>
                      </select>
                    </div>
                  </div>

                  {/* Message Area */}
                  <div>
                    <label className="block text-xs font-bold text-gray-700 mb-1.5">
                      Your Message or Vehicle Number
                    </label>
                    <textarea
                      name="message"
                      rows={4}
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="Please share details about your query or vehicle registration number..."
                      className="w-full px-4 py-2.5 rounded-xl border border-gray-200 bg-white text-xs sm:text-sm text-gray-800 placeholder-gray-400 focus:outline-none focus:border-[#FF5E00] focus:ring-2 focus:ring-[#FF5E00]/15 transition-all resize-none"
                    />
                  </div>

                  {/* Submit Button */}
                  <button
                    type="submit"
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-3 rounded-full bg-[#FF5E00] hover:bg-[#FF6E00] text-white text-xs sm:text-sm font-semibold shadow-lg shadow-orange-600/30 transition-all hover:scale-[1.01] active:scale-95 cursor-pointer"
                  >
                    <span>Send Message</span>
                    <Send size={15} />
                  </button>

                  {/* Privacy Guarantee Note */}
                  <div className="flex items-center gap-2 pt-1 text-[11px] text-gray-500">
                    <ShieldCheck size={14} className="text-emerald-600 flex-shrink-0" />
                    <span>Your personal information is encrypted and strictly protected.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </section>



      {/* 4. Bottom CTA Banner */}
      <CtaBanner />
    </div>
  );
}

export default ContactUs;