import React from "react";
import Wrapper from "./Wrapper";
import Link from "next/link";
import { RxSketchLogo, RxDashboard, RxPerson } from "react-icons/rx";
import { IoStatsChart } from "react-icons/io5";
import { BiTransferAlt } from "react-icons/bi";
import { UserButton } from "@clerk/nextjs";



const DashBoardSideBar = () => {
  return (
    <div className="flex inter gap-3 w-full">
      <div className=" top-0 relative  w-20 h-screen bg-white border-r-[1px] flex flex-col justify-between">
        <div className="flex flex-col relative h-full items-center">
          <Link href="/">
            <div className=" bg-blue-500 rounded-lg text-white p-3 inline-block flex-center">
              <RxSketchLogo size={20} />
            </div>
          </Link>
           <span className="border-b-[1px]  border-gra-200 w-full p-2"></span>
          <Link href="/onboarding">
            <div className=" bg-gray-100 my-4 hover:bg-gray-300 smooth rounded-lg  p-3 inline-block flex-center">
              <RxDashboard size={20} />
            </div>
          </Link>
          <Link href="/investments">
            <div className=" bg-gray-100 my-4 hover:bg-gray-300 smooth rounded-lg  p-3 inline-block flex-center">
              <RxPerson size={20} />
            </div>
          </Link>
          <Link href="/transferlog">
            <div className=" bg-gray-100 my-4 hover:bg-gray-300 smooth rounded-lg  p-3 inline-block flex-center">
              <BiTransferAlt  size={20} />
            </div>
          </Link>
        </div>
       <div className="absolute my-5 p-1 bottom-0">
        <UserButton />
       </div>
      </div>
      <main className="ml-30 w-full">
        <Wrapper />
      </main>
    </div>
  );
};

export default DashBoardSideBar;
