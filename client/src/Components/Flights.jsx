import { BiSolidPlaneLand, BiSolidPlaneTakeOff } from "react-icons/bi";
import { IoAirplane } from "react-icons/io5";

import usePostFlight from "../../Hooks/usePostFlight";

import SortBy from "./SortBy";

export default function Flights({
  setAirlineFilter,
  filteredFlights,
  loading,
  error,
}) {
  const { handlePostFlight, success, error: postError } = usePostFlight();

  // Uçuş süresini hesaplayan fonksiyon
  const calculateFlightDuration = (departureTime, arrivalTime) => {
    const departure = new Date(departureTime);
    const arrival = new Date(arrivalTime);
    const durationInMs = arrival - departure;
    const hours = Math.floor(durationInMs / (1000 * 60 * 60));
    const minutes = Math.floor((durationInMs % (1000 * 60 * 60)) / (1000 * 60));

    return `${hours}h ${minutes}m`;
  };

  // Durak sayısını hesaplayan fonksiyon
  const calculateStops = (destinations) => {
    const stopCount = destinations.length - 1; // 1 yer varsa nonstop, 2 yer varsa 1 stop...
    if (stopCount === 0) return "nonstop";
    if (stopCount === 1) return "1 stop";
    return `${stopCount} stops`;
  };

  const handleBookFlight = (flight) => {
    handlePostFlight(flight); // Uçuşu veritabanına ekle
  };

  if (loading) {
    return <div>Veriler yükleniyor...</div>;
  }

  if (error) {
    return <div>Bir hata oluştu: {error.message}</div>;
  }
  if (postError) {
    return <div>Uçuş eklenirken bir hata oluştu: {postError.message}</div>;
  }

  return (
    <div className="w-full h-[500px] flex items-start justify-center gap-5 ">
      <div className="w-9/12 h-full flex flex-col gap-2 overflow-y-scroll">
        {filteredFlights.map((e, index) => (
          <div key={index} className="w-full">
            <span>Destinations: {e.route.destinations.length}</span>
            <div className="bg-white w-full flex flex-col group">
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
                    Airport:{" "}
                    {e.flightDirection === "D"
                      ? `AMS`
                      : `${e.route.destinations[0]}`}{" "}
                  </span>
                </div>

                <div className="bg-gray-300 w-24 h-[2px]"></div>

                <div className="flex flex-col gap-2 items-center  ">
                  <span>{e.airlineName} </span>
                  <IoAirplane className="text-purple-700 size-6 group-hover:animate-fly" />
                  {/* Uçuş süresi ve durak sayısı */}
                  <span>
                    {calculateFlightDuration(
                      e.scheduleDateTime,
                      e.actualLandingTime
                    )}{" "}
                    ({calculateStops(e.route.destinations)})
                  </span>
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
                </div>
              </div>
              <div className="flex items-end justify-between">
                <div className="flex flex-col p-3">
                  <span className="font-bold text-purple-700">Price: $234</span>
                  <span>Flight Name : {e.flightName}</span>
                </div>
                <div className="relative ">
                  <button
                    className="bg-purple-700 text-white p-3 px-4 rounded-tl-lg rounded-br-lg"
                    onClick={() => handleBookFlight(e)}
                  >
                    Book Flight
                  </button>
                  {success && (
                    <div
                      className="absolute top-0 right-0  bg-green-100 border border-green-400 text-green-700 px-4 py-3 rounded "
                      role="alert"
                    >
                      <strong className="font-bold">Başarılı!</strong>
                      <span className="block sm:inline">
                        Uçuş başarıyla eklendi!
                      </span>
                    </div>
                  )}
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
      <SortBy
        filteredFlights={filteredFlights}
        setAirlineFilter={setAirlineFilter}
      ></SortBy>
    </div>
  );
}
