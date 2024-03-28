{/* 
"use client";

import React from "react";
import DashBoard from "../components/DashBoard";
import SideBar from "../fragments/SideBar";
import { IoMenu } from "react-icons/io5";
import { useState } from "react";
import RefferallCode from "../components/RefferallCode";


const Onboarding = () => {
  const [SidelBar , SetSideBar] = useState(false);
  const [Referal , SetReferal] = useState(true);

  function Settie() {
    SetReferal(false)
  }

  function openSide() {
    SetSideBar(true)
  }

  function closeSide() {
    SetSideBar(false)
  }

  return (
    <div className="flex ds:flex-col relative sm:flex-row gap-5 w-full">
   {
      Referal && <RefferallCode onfuck={Settie}/>
   }
        {SidelBar && <>
          <SideBar onSide={closeSide} />
        </>}
      <button className=" p-1 text-xl rounded-full bg-blue-400 text-white h-7 w-7" onClick={openSide}>
        <IoMenu />
      </button>
      <DashBoard />
    </div>
  );
};

export default Onboarding;

*/}


import React from 'react'
import DashBoardSideBar from '../components/DashBoardSideBar'
import RefferallCode from '../components/RefferallCode'

 
 const OnBoarding = () => {
   return (
     <div className='flex flex-col  w-full min-h-screen '>
      <RefferallCode />
        <DashBoardSideBar />
     </div>
   )
 }
 
 export default OnBoarding