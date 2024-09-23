import { MdKeyboardArrowDown } from "react-icons/md";
import { MdInfoOutline } from "react-icons/md";
import useFlightsDb from "../Hooks/useFlightsDb";
import MyFlightsStars from "../Components/MyFlightsStars";

export default function MyFlights() {
  const { flights, loading, error } = useFlightsDb();
  console.log(flights);

  if (loading) return <div>Yükleniyor...</div>; // Veriler yüklenirken gösterilecek
  if (error) return <div>Hata: {error.message}</div>; // Hata varsa gösterilecek

  return (
    <div className="w-full h-screen bg-blue-600 p-20">
      <div className="w-full h-full bg-gray-200 flex flex-col items-center justify-start rounded-xl overflow-hidden">
        <div className="w-full flex items-center justify-between z-20 p-5 bg-white shadow">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center justify-start gap-2 w-full">
              <div>
                <button className="border-2 border-gray-200 p-2 px-4">
                  Times
                </button>
              </div>
              <div>
                <button className="border-2 border-gray-200 p-2 px-4">
                  Stops
                </button>
              </div>
              <div>
                <button className="border-2 border-gray-200 p-2 px-4">
                  Airlines
                </button>
              </div>
              <div>
                <button className="border-2 border-gray-200 p-2 px-4">
                  Airports
                </button>
              </div>
              <div>
                <button className="border-2 border-gray-200 p-2 px-4">
                  Amenities
                </button>
              </div>
              <div className="flex items-end gap-1">
                <button>Edit Search</button>
                <MdKeyboardArrowDown className="size-5" />
              </div>
            </div>
            <MyFlightsStars />
          </div>
        </div>

        <div className="w-full h-20 flex items-center justify-between p-10">
          <div className="flex items-end gap-1">
            <span>Sort by:</span>
            <span className="font-bold">Recommended</span>
            <MdKeyboardArrowDown className="size-5" />
          </div>
          <div className="flex items-center gap-1">
            <MdInfoOutline className="text-blue-600 size-6" />
            <span>Avg Fare:</span>
            <span className="font-bold">$225</span>
          </div>
        </div>

        <div className="w-full h-[600px] flex flex-col items-center justify-center gap-5 p-10 overflow-y-scroll">
          {flights.length === 0 ? ( // Eğer uçuş yoksa gösterilecek mesaj
            <div className="text-center text-xl font-semibold">
              Rezervasyon yaptığınız uçuş yoktur.
            </div>
          ) : (
            flights.map((e, index) => (
              <div
                key={index}
                className="w-full h-32 flex items-center justify-between bg-white rounded p-5 px-10 shadow-md"
              >
                <div className="flex items-start justify-center gap-5">
                  <div className="w-8 h-8 bg-purple-700 rounded-full flex items-center justify-center">
                    i
                  </div>
                  <div className="flex flex-col">
                    <div className="flex w-44">
                      <span className="font-bold">
                        {new Date(e.scheduleDateTime).toLocaleTimeString(
                          "en-US",
                          {
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: true, // AM/PM formatı için
                          }
                        )}
                      </span>
                      <span>-</span>
                      <span className="font-bold">
                        {new Date(e.actualLandingTime).toLocaleTimeString(
                          "en-US",
                          {
                            hour: "2-digit",
                            minute: "2-digit",
                            hour12: true, // AM/PM formatı için
                          }
                        )}
                      </span>
                    </div>
                    <div className="flex gap-10">
                      <div className="flex flex-col w-40">
                        <span>{e.airlineName}</span>
                        <span className="text-nowrap">Flight Details</span>
                      </div>
                      <div className="flex flex-col w-28">
                        <span>Nonstop</span>
                        <span>1h 32m</span>
                      </div>
                      <div className="w-60">
                        <p className="font-bold">
                          {e.flightDirection === "D"
                            ? `Schiphol - ${e.cityName}`
                            : `${e.cityName} - Schiphol`}
                        </p>
                        <span>{e.flightName}</span>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center justify-center gap-5">
                  <div className="w-20 h-24 border shadow rounded flex flex-col items-center justify-center">
                    <span>$156</span>
                    <span>Main</span>
                  </div>
                  <div className="w-20 h-24 border shadow rounded flex flex-col items-center justify-center">
                    <span>$200</span>
                    <span>Comfort</span>
                  </div>
                  <div className="w-20 h-24 border shadow rounded flex flex-col items-center justify-center">
                    <span>$225</span>
                    <span>Anytime</span>
                  </div>
                  <div className="w-20 h-24 border shadow rounded flex flex-col items-center justify-center">
                    <span>$253</span>
                    <span className="text-center">Business Select</span>
                  </div>
                  <div className="w-20 h-24 border shadow rounded flex flex-col items-center justify-center">
                    <span>$400</span>
                    <span>First</span>
                  </div>
                </div>
              </div>
            ))
          )}
        </div>
      </div>
    </div>
  );
}
