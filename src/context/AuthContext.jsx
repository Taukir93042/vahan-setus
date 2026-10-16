import { createContext, useEffect, useState } from "react";
import { getCurrentUser } from "../services/authService";


export const AuthContext = createContext();

export const AuthProvider = ({children})=>{

   const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
   



  useEffect(() => {
    const checkAuth = async () => {
      try {
        const response = await getCurrentUser();
        if (response.success && response.data?.user) {
          setUser(response.data.user);
        }
      } catch (error) {
        setUser(null);
        // Only log unexpected errors (401 is expected for unauthenticated guest visitors)
        if (error.response?.status !== 401) {
          console.error("Auth check failed:", error);
        }
      } finally {
        setLoading(false);
      }
    };

    checkAuth();
  }, []);





 


  const value={
    user,setUser,
    loading,setLoading
  }

  return (

    <AuthContext.Provider value={value}>
          {children}
    </AuthContext.Provider>
  )
}