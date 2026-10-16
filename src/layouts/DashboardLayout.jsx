import { Outlet } from "react-router-dom";
import Header from "../components/Header";
import Sidebar from "../components/dashboard/Sidebar";
import BottomNav from "../components/dashboard/BottomNav";
import Footer from "../components/Footer";

export default function DashboardLayout() {
  return (
    <div className="min-h-screen bg-[#070A10] text-white flex flex-col">
      <Header />

      <div className="flex flex-1">
        <Sidebar />

        <main className="min-w-0 flex-1 p-4 sm:p-6 lg:p-8 pb-24 lg:pb-8">
          <Outlet />
        </main>
      </div>

      <Footer />
      {/* Mobile Bottom Navigation Bar */}
      <BottomNav />
    </div>
  );
}
