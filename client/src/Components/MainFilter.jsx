import { IoAirplane } from "react-icons/io5";

import { BiSolidPlaneLand } from "react-icons/bi";
import { BiSolidPlaneTakeOff } from "react-icons/bi";
import { IoMdCalendar } from "react-icons/io";

export default function MainFilter() {
  return (
    <div className="w-full bg-white flex flex-col gap-10 p-3 rounded-xl">
      <div className="flex items-center justify-between  ">
        <div className="text-gray-500 flex items-center gap-2 ">
          {" "}
          <IoAirplane />
          <p className="font-bold">BOOK YOUR FLIGHT</p>
        </div>
        <div className="flex items-center">
          <div className="bg-purple-700 text-white rounded-l-full p-2">
            Round trip
          </div>
          <div className="bg-purple-200 text-purple-700 rounded-r-full p-2">
            {" "}
            One way
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center gap-5 w-full">
        <div className="flex items-center gap-1 w-full">
          <div className="border-2 border-gray-200 rounded-l-full w-full h-10 flex items-center p-4  ">
            <BiSolidPlaneTakeOff className="size-6 text-purple-700" />
          </div>
          <div className="border-2 border-gray-200 rounded-r-full w-full h-10 flex items-center p-4 ">
            <BiSolidPlaneLand className="size-6 text-purple-700" />
          </div>
        </div>
        <div className="flex items-center gap-1 w-full">
          <div className="border-2 border-gray-200 rounded-l-full w-full h-10 flex items-center p-4  ">
            <IoMdCalendar className="size-6 text-purple-700" />
          </div>
          <div className="border-2 border-gray-200 rounded-r-full w-full h-10  flex items-center p-4 ">
            <IoMdCalendar className="size-6 text-purple-700" />
          </div>
        </div>
      </div>
      <div>
        <button className="bg-purple-700 text-white p-2 px-4 rounded-lg">
          Show flights
        </button>
      </div>
    </div>
  );
}
