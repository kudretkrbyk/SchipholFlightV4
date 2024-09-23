import { useState } from "react";
import { IoAirplane } from "react-icons/io5";
import { BiSolidPlaneLand, BiSolidPlaneTakeOff } from "react-icons/bi";
import { IoMdCalendar } from "react-icons/io";

export default function MainFilter({
  setArrivalFilter,
  setDepartureFilter,

  flights,
  handleResetFilter,
}) {
  const [showDepartureSuggestions, setShowDepartureSuggestions] =
    useState(false);
  const [showArrivalSuggestions, setShowArrivalSuggestions] = useState(false);
  const [departureSuggestions, setDepartureSuggestions] = useState([]);
  const [arrivalSuggestions, setArrivalSuggestions] = useState([]);

  const [selectedDeparture, setSelectedDeparture] = useState("");
  const [selectedArrival, setSelectedArrival] = useState("");

  // Schiphol dahil öneri listesi
  const airports = [...new Set(flights.map((flight) => flight.cityName))];
  airports.push("Schiphol"); // Schiphol'ü ekliyoruz

  const handleDepartureChange = (e) => {
    const value = e.target.value;
    setSelectedDeparture(value);

    // Eğer Schiphol yazıldıysa, varış kısmını boş bırak
    if (value.toLowerCase() === "schiphol") {
      setSelectedArrival("");
    } else {
      // Kalkış önerilerini güncelle
      if (value.length >= 2) {
        const suggestions = airports.filter((airport) =>
          airport.toLowerCase().includes(value.toLowerCase())
        );
        setDepartureSuggestions(suggestions);
        setShowDepartureSuggestions(true);

        // Kalkış Schiphol değilse varış kısmını otomatik Schiphol yap
        setSelectedArrival("Schiphol");
      } else {
        setShowDepartureSuggestions(false);
      }
    }
  };

  const handleArrivalChange = (e) => {
    const value = e.target.value;
    setSelectedArrival(value);

    // Eğer Schiphol yazıldıysa, kalkış kısmını boş bırak
    if (value.toLowerCase() === "schiphol") {
      setSelectedDeparture("");
    } else {
      // Varış önerilerini güncelle
      if (value.length >= 2) {
        const suggestions = airports.filter((airport) =>
          airport.toLowerCase().includes(value.toLowerCase())
        );
        setArrivalSuggestions(suggestions);
        setShowArrivalSuggestions(true);

        // Varış Schiphol değilse kalkış kısmını otomatik Schiphol yap
        setSelectedDeparture("Schiphol");
      } else {
        setShowArrivalSuggestions(false);
      }
    }
  };

  const handleSuggestionClick = (cityName, isDeparture) => {
    if (isDeparture) {
      setSelectedDeparture(cityName);
      setShowDepartureSuggestions(false);

      // Kalkış Schiphol değilse varış Schiphol olsun
      if (cityName.toLowerCase() !== "schiphol") {
        setSelectedArrival("Schiphol");
      } else {
        setSelectedArrival("");
      }
    } else {
      setSelectedArrival(cityName);
      setShowArrivalSuggestions(false);

      // Varış Schiphol değilse kalkış Schiphol olsun
      if (cityName.toLowerCase() !== "schiphol") {
        setSelectedDeparture("Schiphol");
      } else {
        setSelectedDeparture("");
      }
    }
  };

  const handleShowFlights = () => {
    setDepartureFilter(selectedDeparture);
    setArrivalFilter(selectedArrival);
    console.log("Kalkış Limanı:", selectedDeparture);
    console.log("Varış Limanı:", selectedArrival);
  };

  return (
    <div className="w-full bg-white flex flex-col gap-3 p-3 rounded-xl">
      <div className="flex items-center justify-between">
        <div className="text-gray-500 flex items-center gap-2">
          <IoAirplane />
          <p className="font-bold">BOOK YOUR FLIGHT</p>
        </div>
        <div className="flex items-center">
          <div className="bg-purple-700 text-white rounded-l-full p-2">
            Round trip
          </div>
          <div className="bg-purple-200 text-purple-700 rounded-r-full p-2">
            One way
          </div>
        </div>
      </div>

      {/* Kalkış ve Varış Alanları */}
      <div className="flex items-center justify-center gap-5 w-full">
        {/* Kalkış */}
        <div className="relative w-full">
          <div className="border-2 border-gray-200 rounded-l-full h-10 flex items-center p-4">
            <BiSolidPlaneTakeOff className="size-6 text-purple-700" />
            <input
              type="text"
              value={selectedDeparture}
              onChange={handleDepartureChange}
              placeholder="From"
              className="ml-2 w-full outline-none"
            />
          </div>
          {/* Kalkış Önerileri */}
          {showDepartureSuggestions && departureSuggestions.length > 0 && (
            <div className="absolute top-12 left-0 bg-white shadow-lg border rounded w-full z-10">
              {departureSuggestions.map((airport, index) => (
                <div
                  key={index}
                  onClick={() => handleSuggestionClick(airport, true)} // true: kalkış
                  className="p-2 cursor-pointer hover:bg-gray-200"
                >
                  {airport}
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Varış */}
        <div className="relative w-full">
          <div className="border-2 border-gray-200 rounded-r-full h-10 flex items-center p-4">
            <BiSolidPlaneLand className="size-6 text-purple-700" />
            <input
              type="text"
              value={selectedArrival}
              onChange={handleArrivalChange}
              placeholder="To"
              className="ml-2 w-full outline-none"
            />
          </div>
          {/* Varış Önerileri */}
          {showArrivalSuggestions && arrivalSuggestions.length > 0 && (
            <div className="absolute top-12 left-0 bg-white shadow-lg border rounded w-full z-10">
              {arrivalSuggestions.map((airport, index) => (
                <div
                  key={index}
                  onClick={() => handleSuggestionClick(airport, false)} // false: varış
                  className="p-2 cursor-pointer hover:bg-gray-200"
                >
                  {airport}
                </div>
              ))}
            </div>
          )}
        </div>
        <div className="flex items-center gap-1 w-full">
          <div className="border-2 border-gray-200 rounded-l-full w-full h-10 flex items-center p-4">
            <IoMdCalendar className="size-6 text-purple-700" />
          </div>
          <div className="border-2 border-gray-200 rounded-r-full w-full h-10 flex items-center p-4">
            <IoMdCalendar className="size-6 text-purple-700" />
          </div>
        </div>
      </div>

      {/* Show Flights Butonu */}
      <div className="flex gap-5">
        <button
          onClick={handleShowFlights}
          className="bg-purple-700 text-white p-2 px-4 rounded-lg"
        >
          Show flights
        </button>
        <button
          className="bg-purple-700 text-white p-2 px-4 rounded-lg"
          onClick={handleResetFilter}
        >
          Reset Filters
        </button>
      </div>
    </div>
  );
}
