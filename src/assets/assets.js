import logo from "./logo.png";
import heroImg from "./hero/vahan_scan_hero.jpg";
import hero_bg_1 from "./hero/hero_bg_1.jpg";
import hero_bg_2 from "./hero/hero_bg_2.jpg";
import hero_bg_3 from "./hero/hero_bg_3.jpg";

import slide_auto from "./vehicles/slide_auto.jpg";
import slide_bike from "./vehicles/slide_bike.jpg";
import slide_car from "./vehicles/slide_car.jpg";
import slide_scooter from "./vehicles/slide_scooter.jpg";
import slide_van from "./vehicles/slide_van.jpg";
import safer_roads from "./safer_roads.jpg";
import cta_bg from "./cta_bg.jpg";
import hiw_hero_bg from "./hiw_hero_bg.jpg";
import features_hero_bg from "./features_hero_bg.jpg";
import contact_hero_bg from "./contact_hero_bg.jpg";
import {
  Lock,
  ParkingSquare,
  Camera,
  AlertTriangle,
  Lightbulb,
  Users,
  Car,
  QrCode,
  ShieldCheck,
} from "lucide-react";

export const vehicles = [
  { id: 1, name: "Electric Scooter", img: slide_scooter },
  { id: 2, name: "Auto Rickshaw", img: slide_auto },
  { id: 3, name: "Commercial Van", img: slide_van },
  { id: 4, name: "Sedan Car", img: slide_car },
  { id: 5, name: "Sports Bike", img: slide_bike },
];

export const steps = [
  {
    number: 1,
    title: "Register",
    description: "Create your VahanSetu account in seconds.",
    iconName: "user",
  },
  {
    number: 2,
    title: "Add Vehicle",
    description: "Add your car, bike, auto or any vehicle.",
    iconName: "vehicle",
  },
  {
    number: 3,
    title: "Get Your QR",
    description: "Generate a unique QR code for your vehicle.",
    iconName: "qr",
  },
  {
    number: 4,
    title: "Stick & Go",
    description: "Place it on your vehicle and stay worry-free.",
    iconName: "pointer",
  },
];

export const testimonialsData = [
  {
    id: 1,
    quote:
      "Simple, smart and necessary for every vehicle owner. A passenger forgot their bag in my auto and scanned the VahanSetu QR to reach me within 15 minutes. Highly recommended!",
    name: "Arjun Verma",
    role: "Auto Driver, Mumbai",
    vehicle: "Bajaj RE Auto",
    initials: "AV",
    avatarBg: "bg-[#10B981]",
    rating: 5,
  },
  {
    id: 2,
    quote:
      "Someone accidentally bumped my car while reversing in our apartment complex. They scanned the QR and informed me politely instead of fleeing. Amazing privacy features!",
    name: "Ananya Iyer",
    role: "EV Owner, Bengaluru",
    vehicle: "Tata Nexon EV",
    initials: "AI",
    avatarBg: "bg-[#8B5CF6]",
    rating: 5,
  },
  {
    id: 3,
    quote:
      "My car was blocking a residential gate during an emergency. The security guard scanned my QR and called me immediately without knowing my personal number. Great peace of mind!",
    name: "Rohit Sharma",
    role: "Car Owner, Delhi",
    vehicle: "Hyundai Creta",
    initials: "RS",
    avatarBg: "bg-[#3B82F6]",
    rating: 5,
  },
  {
    id: 4,
    quote:
      "Left my bike's headlight on in a dark parking lot. A kind stranger scanned the QR and alerted me in time. Every daily commuter definitely needs this on their vehicle.",
    name: "Pooja Nair",
    role: "Bike Rider, Pune",
    vehicle: "Royal Enfield Hunter",
    initials: "PN",
    avatarBg: "bg-[#F59E0B]",
    rating: 5,
  },
];

export const ALL_FEATURES = [
  {
    id: 1,
    category: "privacy",
    icon: Lock,
    tag: "Privacy First",
    title: "100% Masked Calling & SMS",
    desc: "Your actual phone number is completely hidden. Both voice calls and SMS alerts are routed through our encrypted telecom bridge.",
    highlights: [
      "Zero phone number exposure to strangers",
      "Two-way virtual encrypted calling",
      "Protects women, solo drivers & families",
    ],
  },
  {
    id: 2,
    category: "alerts",
    icon: ParkingSquare,
    tag: "Smart Alert",
    title: "Wrong Parking Notifications",
    desc: "If your vehicle is blocking an apartment gate, office driveway, or parked in a reserved slot, passersby can alert you politely in seconds.",
    highlights: [
      "Pre-composed polite parking messages",
      "Avoids towing and angry confrontations",
      "Fast resolution without vehicle damage",
    ],
  },
  {
    id: 3,
    category: "hardware",
    icon: Camera,
    tag: "Zero Friction",
    title: "Zero App Needed to Scan",
    desc: "Anyone can point their default smartphone camera (iPhone or Android) at your QR decal. No downloading or registration required for the caller.",
    highlights: [
      "Works on any standard mobile browser",
      "Loads in under 1 second",
      "One-tap quick alert presets",
    ],
  },
  {
    id: 4,
    category: "alerts",
    icon: AlertTriangle,
    tag: "Emergency",
    title: "Emergency & Towing Broadcast",
    desc: "Get notified immediately if traffic police are towing your vehicle or in case of an accident or hit-and-run in parking areas.",
    highlights: [
      "Priority urgent notification chime",
      "Live location & incident context",
      "Automated fallback escalation",
    ],
  },
  {
    id: 5,
    category: "alerts",
    icon: Lightbulb,
    tag: "Preventive",
    title: "Headlight & Window Alerts",
    desc: "Passersby can notify you instantly if you accidentally left headlights on or windows rolled down, saving you from a drained battery or theft.",
    highlights: [
      "Saves car battery from complete drain",
      "Rain & theft prevention for open windows",
      "Friendly community alert channel",
    ],
  },
  {
    id: 6,
    category: "privacy",
    icon: Users,
    tag: "Family Safety",
    title: "Secondary Family Fallback",
    desc: "Add emergency contacts (family or fleet managers). If you do not answer an emergency alert within 60 seconds, our system calls your backup contact.",
    highlights: [
      "Up to 2 secondary emergency numbers",
      "Automated 60-second rollover",
      "Crucial peace of mind on highways",
    ],
  },
  {
    id: 7,
    category: "management",
    icon: Car,
    tag: "Multi-Vehicle",
    title: "Manage Multiple Vehicles",
    desc: "Add and monitor your cars, bikes, scooters, or commercial vans under a single unified dashboard without managing separate logins.",
    highlights: [
      "Individual QR codes for each vehicle",
      "Manage all vehicles in one dashboard",
      "Perfect for households & small fleets",
    ],
  },
  {
    id: 8,
    category: "hardware",
    icon: QrCode,
    tag: "Industrial Grade",
    title: "All-Weather UV Vinyl Decal",
    desc: "Manufactured with automotive-grade vinyl and coated with scratch-resistant, waterproof laminate that withstands Indian sun, rains, and car washes.",
    highlights: [
      "100% waterproof & UV-fade resistant",
      "High-contrast optical scannability",
      "Doorstep delivery across India",
    ],
  },
  {
    id: 9,
    category: "privacy",
    icon: ShieldCheck,
    tag: "Security",
    title: "Anti-Spam & Abuse Protection",
    desc: "Smart rate-limiting algorithms prevent harassment and repeated nuisance alerts. Block malicious callers with a single tap.",
    highlights: [
      "Smart call & SMS rate limiting",
      "One-click spam caller blocking",
      "Audit trail of every interaction",
    ],
  },
];

export const COMPARISON_ROWS = [
  {
    feature: "Phone Number Privacy",
    vahanSetu: "100% Masked & Hidden",
    paperSlip: "Exposed to Everyone",
    gpsTracker: "N/A (No Calling Channel)",
  },
  {
    feature: "App Requirement for Scanners",
    vahanSetu: "Zero App (Default Camera)",
    paperSlip: "None (Manual Dialing)",
    gpsTracker: "Proprietary App Required",
  },
  {
    feature: "Wrong Parking & Block Resolution",
    vahanSetu: "Instant 1-Tap Alert",
    paperSlip: "Uncertain / Calls Ignored",
    gpsTracker: "No Parking Communication",
  },
  {
    feature: "Secondary Emergency Fallback",
    vahanSetu: "Automated 60s Rollover",
    paperSlip: "None",
    gpsTracker: "SOS Button Only (In-Car)",
  },
  {
    feature: "Headlights & Open Window Alerts",
    vahanSetu: "Instant Passerby Alert",
    paperSlip: "Only if someone stops to call",
    gpsTracker: "Sensor Dependent (Extra Cost)",
  },
  {
    feature: "Spam & Harassment Protection",
    vahanSetu: "Built-in Anti-Flood & Block",
    paperSlip: "Zero (Number Public Forever)",
    gpsTracker: "N/A",
  },
  {
    feature: "Installation & Maintenance",
    vahanSetu: "Peel & Stick in 10s (Zero Wiring)",
    paperSlip: "Paper slip gets lost/faded",
    gpsTracker: "Wiring / Battery Drain / Subscription",
  },
];

export const assets = {
  logo,
  heroImg,
  hero_bg_1,
  hero_bg_2,
  hero_bg_3,
  slide_auto,
  slide_bike,
  slide_car,
  slide_scooter,
  slide_van,
  vehicles,
  steps,
  safer_roads,
  cta_bg,
  hiw_hero_bg,
  features_hero_bg,
  contact_hero_bg,
  testimonialsData,
  ALL_FEATURES,
  COMPARISON_ROWS,
};

export default assets;
