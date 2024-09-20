import React, { useState } from "react";
import axios from "axios";

export default function Deneme() {
  const [flightData, setFlightData] = useState({
    flightNumber: "TK1234",
    airline: "Turkish Airlines",
    departure: "Istanbul",
    arrival: "New York",
    date: "2024-10-01",
  });

  const handleSubmit = async () => {
    try {
      const response = await axios.post(
        "http://localhost:5000/api/flights",
        flightData
      );
      console.log("Veri başarıyla eklendi:", response.data);
    } catch (error) {
      console.error("Veri eklenirken hata oluştu:", error);
    }
  };

  return (
    <div>
      <button onClick={handleSubmit}>Veri Ekle</button>
    </div>
  );
}
