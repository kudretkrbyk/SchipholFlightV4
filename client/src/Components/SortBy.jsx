{
  /* Uçuş sıralama */
}
import { useState } from "react";
import FlightsStop from "./FlightsStop";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function SortBy({
  filteredFlights,
  setAirlineFilter,
  setNonStopFilter,
}) {
  const [selectedIndexTime, setSelectedIndexTime] = useState(null); // Seçilen span'ın index'i
  const [selectedIndexAirline, setSelectedIndexAirline] = useState(null); // Seçilen span'ın index'i
  const [sortByDropDownIsOpen, setSortByDropDownIsOpen] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState("Lowest Price");
  const uniqueAirlines = Array.from(
    new Set(filteredFlights.map((flight) => flight.airlineName))
  );
  const handleClickTime = (index) => {
    setSelectedIndexTime(index); // Seçilen span'ın index'ini güncelle
  };

  const handleClickAirline = (index, airlineName) => {
    setSelectedIndexAirline(index); // Seçilen span'ın index'ini güncelle
    setAirlineFilter(airlineName);
  };

  const handleSortByDropDownIsOpen = () =>
    setSortByDropDownIsOpen(!sortByDropDownIsOpen);

  const handleSortOptionSelect = (option) => {
    setSelectedSortOption(option);
    setSortByDropDownIsOpen(false);
  };

  const sortOptions = [
    "Lowest Price",
    "Highest Price",
    "Earliest Departure",
    "Latest Departure",
  ];

  const spans = ["5:00 AM - 11:59 AM", "12:00 PM - 5:59 PM"]; // Örnek span metinleri
  return (
    <div className="w-3/12 flex flex-col gap-2">
      <p className="font-bold">Sort by:</p>
      <div className="relative">
        <div
          className="bg-white w-full h-7 flex items-center justify-between cursor-pointer rounded-md p-2"
          onClick={handleSortByDropDownIsOpen}
        >
          <span className="">{selectedSortOption}</span>
          <MdKeyboardArrowDown className="size-6 text-purple-700" />
        </div>
        {sortByDropDownIsOpen && (
          <div className="absolute bg-white border border-gray-300 mt-1 w-full z-10">
            {sortOptions.map((option, index) => (
              <div
                key={index}
                className="p-2 hover:bg-gray-100 cursor-pointer"
                onClick={() => handleSortOptionSelect(option)}
              >
                {option}
              </div>
            ))}
          </div>
        )}
      </div>

      <p className="font-bold">Arrival Time</p>

      {spans.map((span, index) => (
        <div
          key={index}
          className="w-full flex items-center justify-start gap-2"
        >
          <span
            onClick={() => handleClickTime(index)}
            className={`w-3 h-3 border rounded-full cursor-pointer border-purple-700 ${
              selectedIndexTime === index
                ? "bg-purple-700"
                : "border-purple-700"
            }`}
          ></span>
          <span>{span}</span>
        </div>
      ))}

      <FlightsStop
        filteredFlights={filteredFlights}
        setNonStopFilter={setNonStopFilter}
      ></FlightsStop>
      <span className="font-bold">Airlines Included</span>
      {uniqueAirlines.map((airlineName, index) => (
        <div key={index} className="flex items-center gap-2">
          <span
            onClick={() => handleClickAirline(index, airlineName)}
            className={`w-3 h-3 border rounded-full cursor-pointer border-purple-700 ${
              selectedIndexAirline === index
                ? "bg-purple-700"
                : "border-purple-700"
            }`}
          ></span>
          <span>{airlineName}</span>
        </div>
      ))}
    </div>
  );
}
