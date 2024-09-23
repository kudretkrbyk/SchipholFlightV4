import HomePageHeader from "../Components/HomePageHeader";
import Advert from "../Components/Advert";
import Flights from "../Components/Flights";
import MainFilter from "../Components/MainFilter";
import usefilterFlights from "../Hooks/usefilterFlights";
import useFlights from "../Hooks/useFlights";
import { useState } from "react";

export default function Home() {
  const [departureFilter, setDepartureFilter] = useState("");
  const [arrivalFilter, setArrivalFilter] = useState("");
  const [airlineFilter, setAirlineFilter] = useState("");
  const [nonStopFilter, setNonStopFilter] = useState("");
  const handleResetFilter = () => {
    setAirlineFilter("");
    setDepartureFilter("");
    setArrivalFilter("");
    setNonStopFilter("");
  };
  const { flights } = useFlights();
  const { filteredFlights, loading, error } = usefilterFlights(
    airlineFilter,
    departureFilter,
    arrivalFilter,
    nonStopFilter
  ); // Hook'tan verileri alıyoruz
  return (
    <div className="w-full h-screen  bg-purple-200 p-4 px-12 flex items-center justify-center overflow-hidden ">
      <div className="w-full h-full bg-gray-200 rounded-2xl p-5 flex flex-col gap-5 items-start justify-start">
        {/*   ANASAYFA HEADER**ÜST KISIM */}
        <HomePageHeader></HomePageHeader>
        <div className="w-full h-full flex items-start justify-center gap-5">
          <div className="w-10/12  flex flex-col gap-5 ">
            {/*ANASAYFA ÜST FİLTERELEME (GİDİŞ-GELİŞ HAVALİMANI VE TARİH FİLTELEME)  */}
            <MainFilter
              setDepartureFilter={setDepartureFilter}
              setArrivalFilter={setArrivalFilter}
              departureFilter={departureFilter}
              arrivalFilter={arrivalFilter}
              filteredFlights={filteredFlights}
              flights={flights}
              handleResetFilter={handleResetFilter}
            ></MainFilter>
            {/*ANASAYFA UÇUŞLAR VE FİLTRELEME */}
            <Flights
              setAirlineFilter={setAirlineFilter}
              filteredFlights={filteredFlights}
              loading={loading}
              error={error}
              setNonStopFilter={setNonStopFilter}
            ></Flights>
          </div>
          {/*ANASAYFA REKLAM KISMI */}
          <Advert></Advert>
        </div>
      </div>
    </div>
  );
}
