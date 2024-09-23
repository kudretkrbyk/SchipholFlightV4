//Reklam Kısmı

import { FaUmbrellaBeach } from "react-icons/fa";
import { FaHotel } from "react-icons/fa";
import { FaCar } from "react-icons/fa";

import carRental from "../assets/carRental.png";
import hotels from "../assets/hotels.png";
import travel from "../assets/travel.png";

export default function Advert() {
  return (
    <div className="w-2/12 flex flex-col items-center justify-center gap-2">
      <div className="relative rounded-xl overflow-hidden  ">
        <img className="rounded-xl h-52" src={carRental} alt="Car Rental" />
        <div className="flex flex-col items-start absolute bottom-3 left-3 text-white z-50 ">
          <FaCar className="size-6" />
          <p>CAR RENTALS</p>
        </div>
        <div className="w-full h-full bg-orange-300 z-40 absolute top-0 opacity-50"></div>
      </div>
      <div className="relative rounded-xl overflow-hidden  ">
        <img className="rounded-xl h-52" src={hotels}></img>
        <div className="flex flex-col items-start absolute bottom-3 left-3 text-white z-50 ">
          <FaHotel className="size-6" />
          <p>HOTELS</p>
        </div>
        <div className="w-full h-full bg-blue-300 z-40 absolute top-0 opacity-50"></div>
      </div>
      <div className="relative rounded-xl overflow-hidden  ">
        <img className="rounded-xl h-52 " src={travel}></img>
        <div className="flex flex-col items-start absolute bottom-3 left-3 text-white z-50 ">
          <FaUmbrellaBeach className="size-6" />
          <p> TRAVEL PACKAGES</p>
        </div>
        <div className="w-full h-full bg-green-600 z-40 absolute top-0 opacity-40"></div>
      </div>
    </div>
  );
}
