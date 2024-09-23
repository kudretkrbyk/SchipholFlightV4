{
  /* Uçuş Listesi MongoDB */
}
import { useState, useEffect } from "react";
import { flightsApiDb } from "../API/flightsApiDb"; // flightsApi.js'deki fonksiyon

const useFlightsDb = () => {
  const [flights, setFlights] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const getFlights = async () => {
      try {
        const flightsDataDb = await flightsApiDb();
        console.log("Uçuş Verileri:", flightsDataDb);
        setFlights(flightsDataDb);
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

export default useFlightsDb;
