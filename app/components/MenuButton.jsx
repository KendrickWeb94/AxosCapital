"use client";

import React from 'react'
import { useState } from 'react'
import Link from "next/link";
import { UserButton } from '@clerk/nextjs';
import {  TiUser } from "react-icons/ti";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { IoBookOutline, IoNotifications } from "react-icons/io5";
import { BsBank2, BsLightbulb } from "react-icons/bs";
import { VscSignIn } from "react-icons/vsc";
import { GrLogin } from "react-icons/gr";
import { FaQuestion } from "react-icons/fa";
import { LuBadgeInfo } from "react-icons/lu";
import { MdOutlineCancel } from "react-icons/md";


const MenuButton = () => {
    const [Active, SetActive] = useState(false);
    const [NavActive, SetNavActive] = useState(false);

    function PushActive() {
        SetActive(!Active)
        SetNavActive(true)
    }
    function NavbActive() {
        SetNavActive(false)
    }
  return (
    <div className=' relative'>
      {
        NavActive && < div className=' w-full fixed h-screen  inset-0 smooth  z-xl'>
        <div className=" w-full " >
          <div className=" z-xl overflow-auto fixed rounded-md h-screen z-sm w-[280px] bg-white ds:top-0 left-0 sm:w-auto   sm:flex flex sm:flex-row ds:flex-col text-sm sm:space-y-0 sm:space-x-12 ds:space-y-3 ">
          <div className=" ds:p-5 sm:p-0 sm:items-center h-[95%] overflow-auto sm:h-auto flex ds:flex-col gap-3 sm:flex-row">
            <div className="  ">
          
                <>
                  <button className="smooth sm:pb-0 flex items-center gap-2 text-sm box-main">
                    <div className=" h-9 w-9 sm:border sm:border-green-300 text-xl gap-3 text-gray-500 rounded-full flex justify-center items-center">
                      <TiUser />
                    </div>
                    <p className="text-sm ds:block sm:hidden inter text-gray-500">
                      Options
                    </p>
                    <div className="absolute p-5 text-xl text-gray-500 top-0 right-0" onClick={NavbActive}>
                    <MdOutlineCancel />
                    </div>
                    <div className=" box-child ds:hidden sm:flex smooth absolute flex flex-col w-[100px] -translate-x-6 rounded-md  translate-y-8  bg-green-300 text-white">
                      <Link
                        href="/sign-up"
                        className=" flex items-center gap-2 inter text-sm font-medium border-b p-3 border-b-green-600"
                      >
                        Sign Up
                        <ArrowRightIcon />
                      </Link>
                      <Link
                        href="/sign-in"
                        className=" flex items-center gap-2 inter text-sm font-medium p-3 border-b-green-600"
                      >
                        Sign In
                        <ArrowRightIcon />
                      </Link>
                    </div>
                  </button>
                </>
              
            </div>
            <div className="flex ds:p-3  text-sm sm:p-0 sm:flex-row ds:flex-col sm:items-center sm:space-x-12 sm:space-y-0 ds:space-y-10">
              <Link
                href="/"
                className=" text-gray-500  inter ds:flex sm:block text-sm items-center gap-4  font-medium hover:text-gray-600 smooth relative"
              >
                <span className="block absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                <IoNotifications />
                <p className=" ds:block inter sm:hidden text-sm text-gray-500">
                  Notifications
                </p>
              </Link>
              <Link
                href="/onboarding"
                className="  text-gray-500
                hover:text-gray-600   ds:flex sm:block  items-center gap-4 inter font-medium  smooth"
              >
                <BsBank2 />
                <p className=" ds:block inter sm:hidden text-sm text-gray-500">
                  Transactions
                </p>
              </Link>
              <Link
                href="/sign-up"
                className=" text-gray-500  ds:flex sm:hidden  ds:items-center gap-4 inter font-medium hover:text-gray-500 smooth"
              >
                <VscSignIn className=" ds:block sm:hidden" />
                <p className=" ds:block inter sm:hidden text-sm text-gray-500">
                  Sign Up
                </p>
              </Link>
              <Link
                href="/sign-in"
                className=" text-gray-500   ds:flex sm:hidden  items-center gap-4 inter font-medium hover:text-gray-500 smooth"
              >
                <GrLogin className=" ds:block sm:hidden" />
                <p className=" ds:block inter sm:hidden text-sm text-gray-500">
                  Log In
                </p>
              </Link>
              <Link
                href="/sign-in"
                className=" text-gray-500   ds:flex sm:hidden  items-center gap-4 inter font-medium hover:text-gray-500 smooth"
              >
                <IoBookOutline className=" ds:block sm:hidden" />
                <p className=" ds:block inter sm:hidden text-sm text-gray-500">
                  NewsLetter
                </p>
              </Link>
             
              <Link
                href="/sign-in"
                className=" text-gray-text   ds:flex sm:hidden  items-center gap-4 inter font-medium hover:text-gray-text smooth"
              >
                <LuBadgeInfo className=" ds:block sm:hidden" />
                <p className=" ds:block inter sm:hidden text-sm text-gray-500">
                  About Us
                </p>
              </Link>
              <Link
                href="/jj"
                className=" text-sm text-gray-500 dark:text-gray-400 ds:flex ds:flex-row sm:flex-row-reverse  items-center gap-3  inter font-normal hover:text-gray-600 smooth"
              >
                <FaQuestion className=" text-gray-500" /> <p>FAQs</p>
              </Link>
              <div className="ds:ml-auto sm:ml-0 ds:absolute right-0 ds:bottom-0 ds:my-5 ds:p-5 -translate-x-5 sm:p-0 sm:relative sm:m-0 ">
                <UserButton afterSignOutUrl="/" />
              </div>
            </div>
          </div>
        </div>
      </div>
        </div>
      }
    


            <button  onClick={PushActive} className=' rounded-full p-2 bg-blue-400'>
                <div className={` flex menuButton smooth flex-col ${Active ? "active" : ""}`}>
                    <span className="block w-9 smooth h-[3px] rounded-sm bg-white"></span>
                    <span className="block w-9 smooth h-[3px] rounded-sm bg-white"></span>
                    <span className="block w-9 smooth h-[3px] rounded-sm bg-white"></span>
                </div>
            </button>
    </div>
  )
}

export default MenuButton