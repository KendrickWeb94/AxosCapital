"use client";

import React from "react";
import Bar from "./Bar";
import GsapLoadeer from "../fragments/Gsaploader";
import { IoWallet } from "react-icons/io5";
import ActiveNotifications from "../fragments/ActiveNotifications";

const DashBoard = () => {
  return (
    <div className=" p-5 items-center ds:flex-col lg:flex-row w-full justify-center gap-[20rem] flex">
      <div className=" grid md:grid-cols-1 grid-cols-1 gap-[2rem]  justify-center">
        <div className=" ">
          <div className=" lg:w-[600px] relative  ds:max-w-md rounded-xl p-3 shadow-2xl h-[250px]">
            <div className="space-y-5 p-5 inter">
              <p className=" text-base text-gray-900 font-normal">
                Current Balance
              </p>
              <h1 className="text-3xl inter flex items-center justify-between font-semibold text-gray-950">
                0.00
                <IoWallet className=" text-blue-400" />
              </h1>
              <h1 className="text-sm inter font-normal text-gray-500">
                Start investing to Move to the top ranks . go to the History tab
                to see the top list investors
              </h1>
            </div>
            <GsapLoadeer />
          </div>
        </div>
        <div className=" md:w-[600px] w-full rounded-xl shadow-2xl h-[450px]">
          <Bar />
        </div>
      </div>
      <div className="">
        <div className=" md:w-[300px] float-end p-2 bg-blue-400  w-full rounded-xl shadow-2xl h-auto">
          <ActiveNotifications />
        </div>
      </div>
    </div>
  );
};

export default DashBoard;
