import { useState, useEffect } from "react";
import { postFlight } from "../API/postFlight";

const usePostFlight = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);
  const [warning, setWarning] = useState(null);

  const handlePostFlight = async (flightData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);
    setWarning(null);

    const currentTime = new Date();
    const flightArrivalTime = new Date(flightData.actualLandingTime);

    if (flightArrivalTime < currentTime) {
      setWarning("Bu uçuşun süresi geçmiştir, kayıt edilemez.");
      setLoading(false);
      return;
    }

    try {
      await postFlight(flightData);
      setSuccess(true);
    } catch (err) {
      setError(err);
    } finally {
      setLoading(false);
    }
  };

  // Uyarı mesajı ve başarı durumunun 6 saniye sonra temizlenmesi
  useEffect(() => {
    if (success || warning) {
      const timer = setTimeout(() => {
        setSuccess(false);
        setWarning(null);
      }, 6000);

      // Temizleme
      return () => clearTimeout(timer);
    }
  }, [success, warning]);

  return { loading, error, success, warning, handlePostFlight };
};

export default usePostFlight;
