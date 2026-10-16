import api from "./api.js";

export const createVehicle = async (vehicleData) => {
  const { data } = await api.post("/vehicles", vehicleData);
  return data;
};

export const getMyVehicles = async () => {
  const { data } = await api.get("/vehicles");
  return data;
};

export const getVehicleById = async (id) => {
  const { data } = await api.get(`/vehicles/${id}`);
  return data;
};
