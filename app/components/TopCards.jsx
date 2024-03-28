import React from "react";

const TopCards = () => {
  return (
    <div className="smooth inter grid lg:grid-cols-5 gap-4 p-4">
      <div className=" lg:col-span-2 bg-white  flex justify-between w-full shadow-lg p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="inter font-bold text-lg text-gray-700">$17,456</p>
          <p className="inter text-sm text-gray-500">Daily Revenue</p>
        </div>
        <div className="flex justify-center rounded-lg p-2 items-center bg-blue-200 text-sm  text-blue-600">
          <p className=" inter font-medium">56%</p>
        </div>
      </div>

      <div className=" lg:col-span-2 bg-white flex justify-between w-full shadow-lg p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="inter font-bold text-lg text-gray-700">5000</p>
          <p className="inter text-sm text-gray-500"> Daily Transactions </p>
        </div>
        <div className="flex justify-center rounded-lg p-2 items-center bg-blue-200 text-sm  text-blue-600">
          <p className=" inter font-medium">90%</p>
        </div>
      </div>

      <div className=" bg-white flex justify-between w-full shadow-lg p-4 rounded-lg">
        <div className="flex flex-col w-full pb-4">
          <p className="inter font-bold text-lg text-gray-700">$25,900</p>
          <p className="inter text-sm text-gray-500">Daily Profits</p>
        </div>
        <div className="flex justify-center rounded-lg p-2 items-center bg-blue-200 text-sm  text-blue-600">
          <p className=" inter font-medium">76%</p>
        </div>
      </div>
    </div>
  );
};

export default TopCards;
