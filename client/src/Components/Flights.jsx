import { useState } from "react";
import useFlights from "../../hooks/useFlights"; // useFlights hook'unu buradan çekiyoruz
import { BiSolidPlaneLand, BiSolidPlaneTakeOff } from "react-icons/bi";
import { IoAirplane } from "react-icons/io5";

export default function Flights() {
  const { flights, loading, error } = useFlights(); // Hook'tan verileri alıyoruz
  const [selectedIndex, setSelectedIndex] = useState(null); // Seçilen span'ın index'i
  const uniqueAirlines = Array.from(
    new Set(flights.map((flight) => flight.airlineName))
  );
  console.log(uniqueAirlines);
  if (loading) {
    return <div>Veriler yükleniyor...</div>;
  }

  if (error) {
    return <div>Bir hata oluştu: {error.message}</div>;
  }

  const handleClick = (index) => {
    setSelectedIndex(index); // Seçilen span'ın index'ini güncelle
  };

  const spans = ["5:00 AM - 11:59 AM", "12:00 PM - 5:59 PM"]; // Örnek span metinleri

  return (
    <div className="w-full h-[490px] flex items-start justify-center gap-5">
      <div className="w-9/12 h-full flex flex-col gap-2 overflow-y-scroll">
        {flights.map((e, index) => (
          <div key={index} className="w-full">
            <div className="bg-white w-full flex flex-col">
              <div className="p-3">
                {/* Şehir adları uçuş yönüne göre ayarlanıyor */}
                <p className="font-bold">
                  {e.flightDirection === "D"
                    ? `Schiphol - ${e.cityName}`
                    : `${e.cityName} - Schiphol`}
                </p>
              </div>
              <div className="flex items-center justify-between w-full gap-10 px-3">
                <div className="flex flex-col">
                  <BiSolidPlaneTakeOff />
                  <span className="font-bold">
                    {new Date(e.scheduleDateTime).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true, // AM/PM formatı için
                    })}
                  </span>
                  <span>Airport: {e.route.destinations[0]}</span>
                </div>

                <div className="bg-gray-300 w-24 h-[2px]"></div>
                <div className="flex flex-col gap-2 items-center">
                  <span>{e.airlineName} </span>
                  <IoAirplane className="text-purple-700 size-6" />
                  <span>2h 25m (nonstop)</span>
                </div>
                <div className="bg-gray-300 w-24 h-[2px]"></div>
                <div className="flex flex-col gap-2">
                  <BiSolidPlaneLand />
                  <span className="font-bold">
                    {new Date(e.actualLandingTime).toLocaleTimeString("en-US", {
                      hour: "2-digit",
                      minute: "2-digit",
                      hour12: true, // AM/PM formatı için
                    })}
                  </span>
                  <span>Airport: {e.route.destinations[0]}</span>{" "}
                  {/* Varış havalimanı için IATA kodu */}
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div className="flex flex-col p-3">
                  <span className="font-bold text-purple-700">Price: $234</span>
                  <span>Round Trip</span>
                </div>
                <div>
                  <button className="bg-purple-700 text-white p-3 px-4 rounded-tl-lg rounded-br-lg">
                    Book Flight
                  </button>
                </div>
              </div>
            </div>
            <div>
              <button className="bg-purple-400 underline p-2 rounded-b-lg">
                Check the details
              </button>
            </div>
          </div>
        ))}
      </div>

      <div className="w-3/12 flex flex-col gap-2">
        <p className="font-bold">Sort by:</p>
        <select className="w-full" id="sort">
          <option value="volvo">Lowest Price</option>
          <option value="saab">Saab</option>
          <option value="opel">Opel</option>
          <option value="audi">Audi</option>
        </select>
        <p className="font-bold">Arrival Time</p>

        {spans.map((span, index) => (
          <div
            key={index}
            className="w-full flex items-center justify-start gap-2"
          >
            <span
              onClick={() => handleClick(index)}
              className={`w-3 h-3 border rounded-full cursor-pointer ${
                selectedIndex === index ? "bg-purple-700" : "border-purple-700"
              }`}
            ></span>
            <span>{span}</span>
          </div>
        ))}
        <span className="font-bold">Stops</span>
        <span className="font-bold">Airlines Included</span>
        {uniqueAirlines.map((airlineName, index) => (
          <div key={index} className="flex items-center gap-2">
            {" "}
            <span className="border border-purple-700 w-3 h-3 rounded-full"></span>
            <span>{airlineName}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
