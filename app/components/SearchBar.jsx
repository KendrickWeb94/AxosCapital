import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import { RxMixerHorizontal } from "react-icons/rx";

const SearchBar = () => {
  return (
    <div>
      <form action="#" className="md:block ds:hidden h-auto max-w-[440px] mx-5">
        <div className=" xl:flex ds:hidden xl:w-[440px] smooth h-8 rounded-2xl flex items-center gap-2 relative  bg-gray-400/35 p-3">
          <span className=" text-gray-500">
            <RiSearch2Line />
          </span>
          <input
            type="text" 
            name="search"
            id="search"
            placeholder="looking for something?"
            className=" bg-transparent w-full text-xs placeholder:text-gray-500 inter outline-none text-gray-500 "
          />
          <div className="absolute right-0 p-3 text-gray-500">
            <RxMixerHorizontal />
          </div>
        </div>
      </form>
    </div>
  );
};

export default SearchBar;
