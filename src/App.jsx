import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home'
import HowItWork from './pages/HowItWork'
import Features from './pages/Features'
import ContactUs from './pages/ContactUs'
import MainLayout from './layouts/MainLayout'
import DashboardLayout from './layouts/DashboardLayout'
import DashboardHome from './pages/dashboard/DashboardHome'
import AddVehicle from './components/dashboard/AddVehicle'
import MyVehicle from './components/dashboard/MyVehicle'
import ContactRequests from './components/dashboard/ContactRequests'
import Profile from './components/dashboard/Profile'
import ProtectedRoute from './components/ProtectedRoute'

function App() {
  return (
    <Routes>
      {/* Public Website */}
      <Route element={<MainLayout />}>
        <Route path="/" element={<Home />} />
        <Route path="/how-it-works" element={<HowItWork />} />
        <Route path="/features" element={<Features />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Route>

      {/* User Dashboard */}
      <Route element={<ProtectedRoute/>}>

         <Route path="/dashboard" element={<DashboardLayout />}>
        <Route index element={<DashboardHome />} />
        <Route path="my-vehicles" element={<MyVehicle />} />
        <Route path="vehicles" element={<MyVehicle />} />
        <Route path="add-vehicle" element={<AddVehicle />} />
        <Route path="add-vehicles" element={<AddVehicle />} />
        <Route path="contact-requests" element={<ContactRequests />} />
        <Route path="requests" element={<ContactRequests />} />
        <Route path="profile" element={<Profile />} />
      </Route>
         
      </Route>
     
    </Routes>
  );
}

export default App;

