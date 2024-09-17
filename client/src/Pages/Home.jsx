import { useState, useEffect } from "react";
import carRental from "../assets/carRental.png";
import hotels from "../assets/hotels.png";
import travel from "../assets/travel.png";

export default function Home() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/flights"); // Sunucu adresi
        const data = await response.json();
        setFlights(data.flights);
        console.log(data);
      } catch (error) {
        console.error("Uçuş verileri alınamadı:", error);
      }
    };

    fetchFlights();
  }, []);
  console.log(flights.length);

  return (
    <div className="w-full h-screen bg-purple-200 p-24 flex items-center justify-center">
      <div className="w-full h-full bg-gray-200 rounded-2xl p-8 flex flex-col gap-5 items-start justify-start">
        <div className="w-full flex items-center justify-between">
          <div>plane scape</div>
          <div className="flex items-center justify-center gap-5">
            <div>
              <span>Deals</span>
            </div>
            <div>
              <span>Discover</span>
            </div>
            <div>
              <span>Profile</span>
            </div>
          </div>
        </div>
        <div>
          <div>Book Your Flight</div>
          <div>
            Car Rental
            <img className="w-24" src={carRental} alt="Car Rental" />
          </div>
        </div>

        {/* Uçuş verilerini görüntüle */}
        <div className="mt-5">
          {flights.length > 0 ? (
            flights.map((flight) => (
              <div key={flight.id} className="border-b py-2">
                <p>Uçuş Numarası: {flight.flightName}</p>
                <p>Havayolu: {flight.prefixIATA}</p>
                <p>
                  Kalkış Zamanı:{" "}
                  {new Date(flight.scheduleDateTime).toLocaleString()}
                </p>
                {/* Diğer uçuş bilgilerini buraya ekleyin */}
              </div>
            ))
          ) : (
            <p>Uçuş verileri yükleniyor...</p>
          )}
        </div>
      </div>
    </div>
  );
}
