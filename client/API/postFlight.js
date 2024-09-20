import axios from "axios";

export const postFlight = async (flightData) => {
  try {
    const response = await axios.post(
      "http://localhost:5000/api/flights",
      flightData
    );
    return response.data;
  } catch (error) {
    console.error("Veri eklenirken hata oluştu:", error);
    throw error;
  }
};
