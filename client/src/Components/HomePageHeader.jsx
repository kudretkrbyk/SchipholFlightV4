{
  /* Home Sayfası Header */
}
import { ImPriceTag } from "react-icons/im";
import { FaEarthAmericas } from "react-icons/fa6";
import { IoAirplane } from "react-icons/io5";
import demimoore from "../assets/demi-moore.png";
import { Link } from "react-router-dom";

export default function HomePageHeader() {
  return (
    <div className="w-full flex items-center justify-between">
      <div>
        <div className="flex items-center justify-center gap-3">
          <div className="bg-purple-600 w-6 h-6 rounded-full relative flex items-center">
            <IoAirplane className="text-gray-200 absolute size-6 -left-[2px]" />
          </div>

          <span>Plane Escape </span>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5">
        <div className="flex items-center gap-1">
          <ImPriceTag className="-rotate-90 text-purple-700 size-4" />
          <span>Deals</span>
        </div>
        <div className="flex items-center gap-1">
          <FaEarthAmericas className="text-purple-700" />

          <span>Discover</span>
        </div>
        <Link to="/myFlights">
          {" "}
          <div className="flex items-center gap-2">
            <img
              className="w-6 h-6 object-cover object-center  rounded-full"
              src={demimoore}
            ></img>

            <span>Profile</span>
          </div>
        </Link>
      </div>
    </div>
  );
}
