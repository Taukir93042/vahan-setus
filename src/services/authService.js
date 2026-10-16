
import api from "./api.js";

export const registerUser = async (formData) => {
  const { data } = await api.post("/auth/register", formData);
  return data;
};

export const loginUser = async (formData) => {
  const { data } = await api.post("/auth/login", {
    email: formData.email,
    password: formData.password,
  });

  return data;
};


export const logoutUser = async ()=>{
  const {data} = await api.post("/auth/logout");
  console.log(data);
  
  return data;
}


// Get currently logged-in user
 
export const  getCurrentUser = async()=>{
  const {data} = await api.get("/auth/me");
  return data;
}

