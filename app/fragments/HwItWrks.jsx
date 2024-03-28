import React from "react";

const HwItWrks = (props) => {
  return (
    <div className="relative rounded-b-3xl flex items-center justify-center rounded-md bg-blue-200 shadow-2xl p-3">
      <div className="flex items-center gap-5">
        <span className=" bg-blue-500 inter -translate-x-7  text-white absolute left-0 font-bold text-xl rounded-full h-14 w-14 flex items-center justify-center">
          {props.number}
        </span>
        <div className=" p-8 space-y-5">
          <h1 className="inter text-xl font-semibold text-white">
            {props.noteHead}
          </h1>
          <p className=" text-[14px] inter text-gray-700 leading-[28px]">
            {props.noteBody}
          </p>
        </div>
      </div>
    </div>
  );
};

export default HwItWrks;
