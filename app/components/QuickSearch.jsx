"use client";


import { RiSearch2Line } from "react-icons/ri";
import React, { useState, useEffect } from "react";
import { FaRegStar } from "react-icons/fa";
import { AiOutlineHistory } from "react-icons/ai";


const QuickSearch = ({ data = [], onClose }) => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === "Escape") {
        setIsOpen(false);
        onClose();
      } else if (event.key === "s") {
        setIsOpen(true);
      }
    };

    document.addEventListener("keydown", handleKeyDown);

    return () => {
      document.removeEventListener("keydown", handleKeyDown);
    };
  }, [onClose]);

  const filteredData = data.filter((item) =>
    item.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleInputChange = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div
      className={`fixed ${
        isOpen ? "" : "hidden"
      } bg-black/25 w-full h-screen z-50  top-0 right-0 left-0 flex-center p-3`}
    >
      <div className="w-3/5 relative rounded-md overflow-auto bg-white h-[300px]">
        <div className="top-0 flex-wrap absolute w-full gap-3 bg-white border-b border-gray-500/20 px-4 h-auto p-2  flex items-center justify-between text-gray-400 inter">
          <span className="flex items-center gap-4">
            <RiSearch2Line />
            <input
              className="inter text-gray-400 outline-none text-sm font-medium"
              type="text"
              placeholder="Search for anything"
              value={searchQuery}
              onChange={handleInputChange}
            />
          </span>
          <span className="text-[10px] ds:w-full sm:w-auto flex-center  bg-gray-500 text-gray-300 rounded-xl p-2">
            ESC
          </span>
        </div>
        <div className=" flex-wrap w-full gap-3 bg-white border-b border-gray-500/20 px-4 h-auto p-2 flex items-center justify-between text-gray-400 inter">
          <span className="flex items-center gap-4">
            <RiSearch2Line />
            <input
              className="inter text-gray-400 outline-none text-sm font-medium"
              type="text"
              placeholder=""
            />
          </span>
          <span className="text-[14px] ds:w-full sm:w-auto flex-center   text-gray-400 rounded-xl p-2">
          <FaRegStar />
          </span>
        </div>
        <div className=" flex-wrap w-full gap-3 bg-white border-b border-gray-500/5 px-4 h-auto p-2 flex items-center justify-between text-gray-400 inter">
          <span className="flex items-center gap-4">
       <AiOutlineHistory />
            <input
              className="inter text-gray-400 outline-none text-sm font-medium"
              type="text"
              value="Getting Started"
             

            />
          </span>
          <span className="text-[14px] ds:w-full sm:w-auto flex-center   text-gray-400 rounded-xl p-2">
          <FaRegStar />
          </span>
        </div>
        <div className="px-4 py-2">
          {filteredData.map((item, index) => (
            <div key={index} className="py-1">
              {item}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default QuickSearch;
