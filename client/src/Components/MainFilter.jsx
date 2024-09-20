import React, { useState } from "react";
import { IoAirplane } from "react-icons/io5";
import { BiSolidPlaneLand, BiSolidPlaneTakeOff } from "react-icons/bi";
import { IoMdCalendar } from "react-icons/io";

export default function MainFilter({
  setArrivalFilter,
  setDepartureFilter,
  departureFilter,
  arrivalFilter,
  filteredFlights, // Şehir önerileri için prop
}) {
  const [showDepartureSuggestions, setShowDepartureSuggestions] =
    useState(false);
  const [showArrivalSuggestions, setShowArrivalSuggestions] = useState(false);
  const [departureSuggestions, setDepartureSuggestions] = useState([]);
  const [arrivalSuggestions, setArrivalSuggestions] = useState([]);

  const [selectedDeparture, setSelectedDeparture] = useState("");
  const [selectedArrival, setSelectedArrival] = useState("");

  // Schiphol dahil öneri listesi
  const airports = [
    ...new Set(filteredFlights.map((flight) => flight.cityName)),
  ];
  airports.push("Schiphol"); // Schiphol'ü ekliyoruz

  const handleDepartureChange = (e) => {
    const value = e.target.value;
    setSelectedDeparture(value);

    // Kalkış önerilerini güncelle
    if (value.length >= 2) {
      const suggestions = airports.filter((airport) =>
        airport.toLowerCase().includes(value.toLowerCase())
      );
      setDepartureSuggestions(suggestions);
      setShowDepartureSuggestions(true);
    } else {
      setShowDepartureSuggestions(false);
    }
  };

  const handleArrivalChange = (e) => {
    const value = e.target.value;
    setSelectedArrival(value);

    // Varış önerilerini güncelle
    if (value.length >= 2) {
      const suggestions = airports.filter((airport) =>
        airport.toLowerCase().includes(value.toLowerCase())
      );
      setArrivalSuggestions(suggestions);
      setShowArrivalSuggestions(true);
    } else {
      setShowArrivalSuggestions(false);
    }
  };

  const handleSuggestionClick = (cityName, isDeparture) => {
    if (isDeparture) {
      setSelectedDeparture(cityName);
      setShowDepartureSuggestions(false);
    } else {
      setSelectedArrival(cityName);
      setShowArrivalSuggestions(false);
    }
  };

  const handleShowFlights = () => {
    // Butona tıklandığında filtreler set ediliyor
    setDepartureFilter(selectedDeparture);
    setArrivalFilter(selectedArrival);
    console.log("Kalkış Limanı:", selectedDeparture);
    console.log("Varış Limanı:", selectedArrival);
  };

  return (
    <div className="w-full bg-white flex flex-col gap-10 p-3 rounded-xl">
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
      <div>
        <button
          onClick={handleShowFlights}
          className="bg-purple-700 text-white p-2 px-4 rounded-lg"
        >
          Show flights
        </button>
      </div>
    </div>
  );
}
