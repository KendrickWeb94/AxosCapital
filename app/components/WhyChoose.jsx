import Image from "next/image";
import React from "react";
import profile from "../assets/profile.jpg";

const WhyChoose = () => {
  return (
    <div className=" min-h-screen flex sm:items-center justify-center w-full">
      <div className="w-full space-y-7">
        <h1 className="text-balance inter text-xl text-gray-800 text-center sm:text-2xl md:text-3xl lg:text-5xl font-bold">
          Are you asking why choose us?
        </h1>
        <p className=" sm:text-[18px] ds:text-[13px] leading-[34px] ds:text-left sm:text-center font-normal text-gray-500 text-blance inter ">
          People should choose Axos Capital Investments for several reasons.
          Firstly, the platform offers a wide range of investment options,
          including stocks, options, futures, and cryptocurrencies, providing
          users with diverse opportunities to grow their portfolios. Secondly,
          Axos Capital's user-friendly interface and intuitive design make it
          easy for both novice and experienced investors to navigate the
          platform and execute trades efficiently.
        </p>
        <div className="flex sm:items-center w-full sm:justify-center gap-6">
          <div className=" w-12 h-12 rounded-full object-cover overflow-hidden">
            <Image src={profile} alt="person" className=" object-cover" />
          </div>
          <div className=" flex flex-col justify-between gap-3 text-sm inter">
            <p className="text-gray-900 font-semibold text-base inter">
              Benard Miller
            </p>
            <p className="text-gray-500 font-normal text-sn inter">
              Owner & Founder
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhyChoose;
