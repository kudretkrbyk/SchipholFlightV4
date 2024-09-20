import { useState } from "react";
import { postFlight } from "../API/postFlight";

const usePostFlight = () => {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(false);

  const handlePostFlight = async (flightData) => {
    setLoading(true);
    setError(null);
    setSuccess(false);

    try {
      await postFlight(flightData);
      setSuccess(true); // Başarı mesajı
    } catch (err) {
      setError(err); // Hata durumu
    } finally {
      setLoading(false);
    }
  };

  return { loading, error, success, handlePostFlight };
};

export default usePostFlight;
