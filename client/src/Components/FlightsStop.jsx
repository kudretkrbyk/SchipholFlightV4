import { useEffect, useState } from "react";

export default function FlightsStop({ filteredFlights }) {
  const [counter, setCounter] = useState(0);
  const [selectedIndexStop, setSelectedIndexStop] = useState(null);
  const handleClickStops = (index) => {
    setSelectedIndexStop(index);
  };

  // Destinations sayısına göre sayaç değerini hesaplayan fonksiyon
  const calculateCounterBasedOnDestinations = (flights) => {
    let maxDestinationsLength = 0;

    flights.forEach((flight) => {
      const destinationsLength = flight.route?.destinations?.length || 0;

      if (destinationsLength > maxDestinationsLength) {
        maxDestinationsLength = destinationsLength - 1; // 2 veya daha fazla ise 1 artır
      }
    });

    return maxDestinationsLength;
  };

  // filteredFlights güncellendiğinde counter'ı hesapla
  useEffect(() => {
    if (filteredFlights && filteredFlights.length > 0) {
      const newCounter = calculateCounterBasedOnDestinations(filteredFlights);
      setCounter(newCounter);
    }
  }, [filteredFlights]);

  // Sayaç değerine göre stop isimleri listesi oluştur
  const stopLabels = ["NonStop", "1 Stop", "2 Stops", "3 Stops"]; // Gerekirse daha fazla eklenebilir

  return (
    <div>
      <span className="font-bold">Stops</span>

      {/* Sayaç değerine göre stop isimlerini listele */}
      <div>
        {Array.from({ length: counter + 1 }).map((_, index) => (
          <div key={index} className="flex items-center gap-2">
            <span
              onClick={() => handleClickStops(index)}
              className={`w-3 h-3 border rounded-full cursor-pointer border-purple-700 ${
                selectedIndexStop === index
                  ? "bg-purple-700"
                  : "border-purple-700"
              }`}
            ></span>
            <p>{stopLabels[index]}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
