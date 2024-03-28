import React from "react";
import Image from "next/image";

const People = (props) => {
  return (
    <div className=" h-auto space-y-5 rounded-md inter p-5  justify-center bg-blue-300">
      <div className="flex items-center gap-5">
        <div className=" w-12 h-12 overflow-hidden object-cover">
          <Image
            src={props.photo}
            className=" rounded-full object-cover"
            alt="review customer image"
          />
        </div>
        <div className="inter text-gray-900 text-[16px] space-y-1">
          <p className=" font-medium">{props.name}</p>
          <p className=" font-normal">{props.date}</p>
        </div>
      </div>
      <p className="text-[14px] leading-[24px] inter text-gray-600">
        {props.feedback}
      </p>
    </div>
  );
};

export default People;
