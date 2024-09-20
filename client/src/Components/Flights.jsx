import { useState } from "react";
import usefilterFlights from "../../Hooks/usefilterFlights";

import { BiSolidPlaneLand, BiSolidPlaneTakeOff } from "react-icons/bi";
import { IoAirplane } from "react-icons/io5";
import { MdKeyboardArrowDown } from "react-icons/md";

export default function Flights({
  setAirlineFilter,
  filteredFlights,
  loading,
  error,
}) {
  const [selectedIndexTime, setSelectedIndexTime] = useState(null); // Seçilen span'ın index'i
  const [selectedIndexAirline, setSelectedIndexAirline] = useState(null); // Seçilen span'ın index'i
  const [sortByDropDownIsOpen, setSortByDropDownIsOpen] = useState(false);
  const [selectedSortOption, setSelectedSortOption] = useState("Lowest Price");

  const uniqueAirlines = Array.from(
    new Set(filteredFlights.map((flight) => flight.airlineName))
  );

  if (loading) {
    return <div>Veriler yükleniyor...</div>;
  }

  if (error) {
    return <div>Bir hata oluştu: {error.message}</div>;
  }

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
    <div className="w-full h-[500px] flex items-start justify-center gap-5">
      <div className="w-9/12 h-full flex flex-col gap-2 overflow-y-scroll">
        {filteredFlights.map((e, index) => (
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
                  <span>
                    Airport:{""}
                    {e.flightDirection === "D"
                      ? `AMS`
                      : `${e.route.destinations[0]}`}{" "}
                  </span>
                </div>

                <div className="bg-gray-300 w-24 h-[2px]"></div>
                <div className="flex flex-col gap-2 items-center">
                  <span>{e.airlineName} </span>
                  <IoAirplane className="text-purple-700 size-6 animate-fly" />
                  <span>2h 25m (nonstop)</span>
                  {/* <span>Flight Number :{e.flightNumber} </span>*/}
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
                  <span>
                    Airport: {""}
                    {e.flightDirection === "D"
                      ? `${e.route.destinations[0]}`
                      : `AMS`}{" "}
                  </span>
                  {/* Varış havalimanı için IATA kodu */}
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div className="flex flex-col p-3">
                  <span className="font-bold text-purple-700">Price: $234</span>
                  <span>Flight Name : {e.flightName}</span>
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
              className={`w-3 h-3 border rounded-full cursor-pointer ${
                selectedIndexTime === index
                  ? "bg-purple-700"
                  : "border-purple-700"
              }`}
            ></span>
            <span>{span}</span>
          </div>
        ))}

        <span className="font-bold">Stops</span>
        <span className="font-bold">Airlines Included</span>
        {uniqueAirlines.map((airlineName, index) => (
          <div key={index} className="flex items-center gap-2">
            <span
              onClick={() => handleClickAirline(index, airlineName)}
              className={`w-3 h-3 border rounded-full cursor-pointer ${
                selectedIndexAirline === index
                  ? "bg-purple-700"
                  : "border-purple-700"
              }`}
            ></span>
            <span>{airlineName}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
