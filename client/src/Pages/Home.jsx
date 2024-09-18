import { useState, useEffect } from "react";

import HomePageHeader from "../Components/HomePageHeader";
import Advert from "../Components/Advert";
import Flights from "../Components/Flights";
import MainFilter from "../Components/MainFilter";

export default function Home() {
  const [flights, setFlights] = useState([]);

  useEffect(() => {
    const fetchFlights = async () => {
      try {
        const response = await fetch("http://localhost:5000/api/flights"); // Sunucu adresi
        const data = await response.json();
        setFlights(data.flights);
        console.log(data);
      } catch (error) {
        console.error("Uçuş verileri alınamadı:", error);
      }
    };

    fetchFlights();
  }, []);
  console.log(flights.length);

  return (
    <div className="w-full  bg-purple-200 p-20 flex items-center justify-center">
      <div className="w-full h-full bg-gray-200 rounded-2xl p-5 flex flex-col gap-5 items-start justify-start">
        {/*   ANASAYFA HEADER**ÜST KISIM */}
        <HomePageHeader></HomePageHeader>
        <div className="w-full h-full flex items-start justify-center gap-5">
          <div className="w-10/12 flex flex-col gap-5">
            {/*ANASAYFA ÜST FİLTERELEME (GİDİŞ-GELİŞ HAVALİMANI VE TARİH FİLTELEME)  */}
            <MainFilter></MainFilter>
            {/*ANASAYFA UÇUŞLAR VE FİLTRELEME */}
            <Flights></Flights>
          </div>
          {/*ANASAYFA REKLAM KISMI */}
          <Advert></Advert>
        </div>
      </div>
    </div>
  );
}
