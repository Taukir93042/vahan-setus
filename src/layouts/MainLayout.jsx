import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Footer from "../components/Footer";
import BottomNav from "../components/dashboard/BottomNav";

export default function MainLayout() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-[#070A10] text-white">
        <Outlet />
      </main>
      <Footer />
      {/* Mobile Bottom Navigation Bar on Home / Public pages */}
      <BottomNav />
    </>
  );
}
