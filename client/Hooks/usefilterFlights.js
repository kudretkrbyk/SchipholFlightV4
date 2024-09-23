import { useState, useEffect } from "react";
import useFlights from "./useFlights"; // Uçuş verilerini almak için mevcut hook'u kullanıyoruz.

const useFilterFlights = (
  airlineFilter,
  departureFilter,
  arrivalFilter,
  nonStopFilter
) => {
  const { flights, loading, error } = useFlights(); // flights, loading ve error'u destructure ediyoruz
  const [filteredFlights, setFilteredFlights] = useState([]);

  useEffect(() => {
    if (!loading && flights.length > 0) {
      // Yükleme bitmişse ve uçuş verileri varsa filtreleme işlemi yapılır
      let updatedFlights = [...flights];
      console.log("hook içi verileri", updatedFlights);

      // Havayolu filtresi
      if (airlineFilter) {
        updatedFlights = updatedFlights.filter(
          (flight) => flight.airlineName === airlineFilter
        );
      }

      // Schiphol kalkış noktası olarak filtreleme
      if (departureFilter === "Schiphol" && arrivalFilter) {
        updatedFlights = updatedFlights.filter((flight) => {
          console.log("Schiphol kalkış noktası olarak filtreleme");

          return (
            flight.flightDirection === "D" && // Schiphol'den çıkış yapacak
            flight.cityName === arrivalFilter // Varış şehir adı ile eşleşen
          );
        });
      }

      // Schiphol varış noktası olarak filtreleme
      if (arrivalFilter === "Schiphol" && departureFilter) {
        console.log("Schiphol iniş noktası olarak filtreleme");
        console.log(departureFilter);
        updatedFlights = updatedFlights.filter((flight) => {
          console.log(flight.cityName);
          return (
            flight.flightDirection === "A" && // Schiphol'e varış yapacak
            flight.cityName === departureFilter // Kalkış şehir adı ile eşleşen
          );
        });
      }

      // NonStop filtresi
      if (nonStopFilter) {
        updatedFlights = updatedFlights.filter((flight) => {
          // flight.route.destinations'in uzunluğunu kontrol et
          const destinationLength = flight.route?.destinations?.length || 0;
          return destinationLength === nonStopFilter + 1; // 0 gönderilirse 1, 1 gönderilirse 2...
        });
      }

      setFilteredFlights(updatedFlights); // Filtrelenmiş uçuşları güncelle
      console.log("filtrelenmiş uçuşlar:", filteredFlights);
    }
  }, [
    airlineFilter,
    departureFilter,
    arrivalFilter,
    nonStopFilter,
    loading,
    flights,
    filteredFlights,
  ]); //  bağımlılık listesi

  return { filteredFlights, loading, error }; // loading ve error'u da return ettik
};

export default useFilterFlights;
