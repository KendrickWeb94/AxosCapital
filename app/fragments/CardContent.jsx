import React from "react";
import Image from "next/image";

const CardContent = (props) => {
  return (
    <div className="hover:pb-5 smooth w-[200px] h-[400px]">
      <div className=" w-full h-full space-y-4">
        <div className=" w-full h-[300px] overflow-hidden object-cover rounded ">
          <Image src={props.photo} className=" object-cover" />
        </div>
        <div className=" space-y-3 inter">
          <p className="text-sm text-gray-500 font-medium">{props.name}</p>
          <p className="text-sm text-gray-400 font-normal">{props.job}</p>
        </div>
      </div>
    </div>
  );
};

export default CardContent;
