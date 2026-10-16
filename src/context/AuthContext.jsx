import { createContext, useEffect, useState } from "react";
import { getCurrentUser, logoutUser } from "../services/authService";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(() => {
    try {
      const savedUser = localStorage.getItem("user");
      return savedUser ? JSON.parse(savedUser) : null;
    } catch {
      return null;
    }
  });

  const [loading, setLoading] = useState(true);
   const [vehicles, setVehicles] = useState([]);

  const updateUser = (userData) => {
    if (userData) {
      localStorage.setItem("user", JSON.stringify(userData));
      setUser(userData);
    } else {
      localStorage.removeItem("user");
      localStorage.removeItem("token");
      setUser(null);
    }
  };

  const logout = async () => {
    try {
      await logoutUser();
    } catch (error) {
      // ignore
    } finally {
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      setUser(null);
    }
  };

  useEffect(() => {
    const checkAuth = async () => {
      const token = localStorage.getItem("token");

      if (!token) {
        setUser(null);
        setLoading(false);
        return;
      }

      try {
        const response = await getCurrentUser();
        if (response.success && response.data?.user) {
          localStorage.setItem("user", JSON.stringify(response.data.user));
          setUser(response.data.user);
        } else {
          localStorage.removeItem("token");
          localStorage.removeItem("user");
          setUser(null);
        }
      } catch (error) {
        localStorage.removeItem("token");
        localStorage.removeItem("user");
        setUser(null);
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);

  const value = {
    user,
    setUser: updateUser,
    logout,
    loading,
    setLoading,
    vehicles, setVehicles
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};