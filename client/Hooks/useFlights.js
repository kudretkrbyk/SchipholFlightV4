import { useState, useEffect } from "react";
import { fetchFlights } from "../API/flightsApi"; // flightsApi.js'deki fonksiyon

const useFlights = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getFlights = async () => {
      try {
        const flightsData = await fetchFlights();
        console.log("Uçuş Verileri:", flightsData);
        setFlights(flightsData);
      } catch (error) {
        console.error("Uçuş verileri alınamadı:", error);
        setError(error);
      } finally {
        setLoading(false);
      }
    };

    getFlights();
  }, []);

  return { flights, loading, error }; // Durumları döndürüyoruz
};

export default useFlights;
