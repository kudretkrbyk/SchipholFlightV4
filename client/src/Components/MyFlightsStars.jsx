import { IoIosStar } from "react-icons/io";

export default function MyFlightsStars() {
  return (
    <div className="w-full h-full flex items-center justify-around ">
      <div className="flex flex-col items-center">
        <div className="flex ">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar className="text-gray-400" />
        </div>
        <div className="flex">
          <IoIosStar className="text-gray-400" />
          <IoIosStar className="text-gray-400" />
          <IoIosStar className="text-gray-400" />
        </div>
      </div>
      <div className="w-[2px] h-6 bg-gray-400"></div>
      <div className="flex flex-col items-center">
        <div className="flex ">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
        </div>
        <div className="flex">
          <IoIosStar className="text-gray-400" />
          <IoIosStar className="text-gray-400" />
          <IoIosStar className="text-gray-400" />
        </div>
      </div>
      <div className="w-[2px] h-6 bg-gray-400"></div>
      <div className="flex flex-col items-center">
        <div className="flex ">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
        </div>
        <div className="flex">
          <IoIosStar />
          <IoIosStar className="text-gray-400" />
          <IoIosStar className="text-gray-400" />
        </div>
      </div>
      <div className="w-[2px] h-6 bg-gray-400"></div>
      <div className="flex flex-col items-center">
        <div className="flex ">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
        </div>
        <div className="flex">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar className="text-gray-400" />
        </div>
      </div>
      <div className="w-[2px] h-6 bg-gray-400"></div>
      <div className="flex flex-col items-center">
        <div className="flex ">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
        </div>
        <div className="flex">
          <IoIosStar />
          <IoIosStar />
          <IoIosStar />
        </div>
      </div>
    </div>
  );
}
