import { Navigate, Outlet } from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";

const ProtectedRoute = () => {
  const { user, loading } = useContext(AuthContext);

  // Session check hone tak wait karo
  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#0B1120] text-white">
        Loading...
      </div>
    );
  }

  // Login nahi hai to Home page par bhejo
  if (!user) {
    return <Navigate to="/" replace />;
  }

  // Login hai to dashboard access milega
  return <Outlet />;
};

export default ProtectedRoute;