import { MdKeyboardArrowDown } from "react-icons/md";
import { MdInfoOutline } from "react-icons/md";

export default function MyFlights() {
  return (
    <div className="w-full h-screen bg-blue-600 p-20">
      <div className="w-full h-full bg-gray-200   flex flex-col items-center justify-start rounded-xl overflow-hidden ">
        <div className="w-full flex items-center justify-between  z-20 p-5 bg-white ">
          <div className="flex items-center justify-center gap-2 ">
            <div>
              {" "}
              <button className="border-2 border-gray-200 p-2 px-4">
                Times
              </button>
            </div>
            <div>
              {" "}
              <button className="border-2 border-gray-200 p-2 px-4">
                Stops
              </button>
            </div>
            <div>
              {" "}
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
              {" "}
              <button className="border-2 border-gray-200 p-2 px-4">
                Amenities
              </button>
            </div>

            <div className="flex items-end gap-1">
              {" "}
              <button>Edit Search</button>
              <MdKeyboardArrowDown className="size-5" />
            </div>
          </div>
          <div className="flex">
            {" "}
            <div>yıldız</div>
            <div>yıldız</div>
            <div>yıldız</div>
            <div>yıldız</div>
          </div>
        </div>
        <div className="w-full flex flex-col items-center justify-center gap-5 p-10  ">
          <div className="w-full flex items-center justify-between ">
            <div className="flex items-end gap-1">
              <span>Sort by:</span>
              <span className="font-bold">Recommended </span>
              <MdKeyboardArrowDown className="size-5" />
            </div>
            <div className="flex items-center gap-1">
              <MdInfoOutline className="text-blue-600 size-6" />
              <span>Avg Fare:</span>
              <span className="font-bold">$225</span>
            </div>
          </div>
          <div className="w-full flex bg-white rounded p-5">11</div>
        </div>
      </div>
    </div>
  );
}
