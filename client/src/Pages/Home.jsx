import HomePageHeader from "../Components/HomePageHeader";
import Advert from "../Components/Advert";
import Flights from "../Components/Flights";
import MainFilter from "../Components/MainFilter";

export default function Home() {
  return (
    <div className="w-full h-screen  bg-purple-200 p-14 flex items-center justify-center">
      <div className="w-full h-full bg-gray-200 rounded-2xl p-5 flex flex-col gap-5 items-start justify-start">
        {/*   ANASAYFA HEADER**ÜST KISIM */}
        <HomePageHeader></HomePageHeader>
        <div className="w-full h-full flex items-start justify-center gap-5">
          <div className="w-10/12 h-full flex flex-col gap-5">
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
