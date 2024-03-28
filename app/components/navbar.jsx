import { auth, UserButton } from "@clerk/nextjs";
import Link from "next/link";
import Logo from "../assets/logo1.png";
import React from "react";
import Image from "next/image";
import { TiUser } from "react-icons/ti";
import { ArrowRightIcon } from "@radix-ui/react-icons";
import { IoBookOutline, IoNotifications } from "react-icons/io5";
import { BsBank2, BsLightbulb } from "react-icons/bs";
import MenuButton from "./MenuButton";
import { VscSignIn } from "react-icons/vsc";
import { GrLogin } from "react-icons/gr";
import { FaQuestion } from "react-icons/fa";
import { LuBadgeInfo } from "react-icons/lu";
import SearchBar from "./SearchBar";

const Navbar = () => {
  const { userId } = auth();
  return (
    <div className="w-full relative">
      <div className="absolute -z-10 top-0 left-0">
        <div className=" w-[150px] bg-blue-500 h-[120px] blur-[120px]"></div>
      </div>
      <div className=" w-full flex items-center justify-between py-1 pb-5 mb-7 smooth">
          <Link href="/">
        <div className=" max-w-[150px] max-h-[100px]">
            <Image src={Logo} className=" max-w-[150px]" />
        </div>
          </Link>

        <SearchBar />

     {/* 
        <div className="inter smooth  text-base font-normal ds:hidden sm:block">
          <div className=" flex items-center gap-5">
            <Link href="/" className="hover:text-gray-700 text-gray-500">
              Newsletter
            </Link>
            <Link className="hover:text-gray-700 text-gray-500" href="/">
              About Us
            </Link>
            <Link className="hover:text-gray-700 text-gray-500" href="/">
              How To Use
            </Link>
          </div>
        </div>
     */}
        <div className=" ds:block sm:hidden">
          <MenuButton />
        </div>
        <div className=" sm:relative ds:hidden ds:w-full ds:bg-black/25 ds:top-0 left-0 sm:bg-transparent sm:w-auto ds:h-screen sm:h-auto  sm:flex flex sm:flex-row ds:flex-col sm:space-y-0 sm:space-x-12 ds:space-y-14 ">
          <div className="ds:w-[300px] sm:w-auto ds:bg-white sm:bg-transparent ds:p-5 sm:p-0 sm:items-center ds:h-full sm:h-auto flex ds:flex-col gap-8 sm:flex-row">
            <div className="  ">
              {!userId && (
                <>
                  <button className="smooth ds:pb-5 sm:pb-0 flex items-center gap-3 box-main">
                    <div className=" h-9 w-9 border blue-green-300 text-xl gap-3 text-gray-500 rounded-full flex justify-center items-center">
                      <TiUser />
                    </div>
                    <p className="text-base ds:block sm:hidden inter text-gray-500">
                      Options
                    </p>
                    <div className=" box-child ds:hidden sm:flex smooth absolute flex flex-col w-[100px] -translate-x-6 rounded-md  translate-y-8  bg-blue-600 text-white">
                      <Link
                        href="/sign-up"
                        className=" flex items-center gap-2 inter text-sm font-medium border-b p-3 border-b-blue-600"
                      >
                        Sign Up
                        <ArrowRightIcon />
                      </Link>
                      <Link
                        href="/sign-in"
                        className=" flex items-center gap-2 inter text-sm font-medium p-3 border-b-blue-600"
                      >
                        Sign In
                        <ArrowRightIcon />
                      </Link>
                    </div>
                  </button>
                </>
              )}
            </div>
            <div className="flex ds:p-3 sm:p-0 sm:flex-row ds:flex-col sm:items-center sm:space-x-12 sm:space-y-0 ds:space-y-14">
              <Link
                href="/"
                className=" text-gray-500  inter ds:flex sm:block  items-center gap-4  font-medium hover:text-gray-600 smooth relative"
              >
                <span className="block absolute top-0 right-0 w-2 h-2 bg-red-500 rounded-full"></span>
                <IoNotifications />
                <p className=" ds:block inter sm:hidden text-base text-gray-500">
                  Notifications
                </p>
              </Link>
              <Link
                href="/onboarding"
                className="  text-gray-500
                hover:text-gray-600   ds:flex sm:block  items-center gap-4 inter font-medium  smooth"
              >
                <BsBank2 />
                <p className=" ds:block inter sm:hidden text-base text-gray-500">
                  Transactions
                </p>
              </Link>
              <Link
                href="/sign-up"
                className=" text-gray-500  ds:flex sm:hidden  ds:items-center gap-4 inter font-medium hover:text-gray-500 smooth"
              >
                <VscSignIn className=" ds:block sm:hidden" />
                <p className=" ds:block inter sm:hidden text-base text-gray-500">
                  Sign Up
                </p>
              </Link>
              <Link
                href="/sign-in"
                className=" text-gray-500   ds:flex sm:hidden  items-center gap-4 inter font-medium hover:text-gray-500 smooth"
              >
                <GrLogin className=" ds:block sm:hidden" />
                <p className=" ds:block inter sm:hidden text-base text-gray-500">
                  Log In
                </p>
              </Link>
              <Link
                href="/sign-in"
                className=" text-gray-500   ds:flex sm:hidden  items-center gap-4 inter font-medium hover:text-gray-500 smooth"
              >
                <IoBookOutline className=" ds:block sm:hidden" />
                <p className=" ds:block inter sm:hidden text-base text-gray-500">
                  NewsLetter
                </p>
              </Link>
              <Link
                href="/sign-in"
                className=" text-gray-500   ds:flex sm:hidden  items-center gap-4 inter font-medium hover:text-gray-500 smooth"
              >
                <BsLightbulb className=" ds:block sm:hidden" />
                <p className=" ds:block inter sm:hidden text-base text-gray-500">
                  How To Use
                </p>
              </Link>
              <Link
                href="/sign-in"
                className=" text-gray-text   ds:flex sm:hidden  items-center gap-4 inter font-medium hover:text-gray-text smooth"
              >
                <LuBadgeInfo className=" ds:block sm:hidden" />
                <p className=" ds:block inter sm:hidden text-base text-gray-500">
                  About Us
                </p>
              </Link>
              <Link
                href="/"
                className=" text-gray-500 dark:text-gray-400 ds:flex ds:flex-row sm:flex-row-reverse  items-center gap-3  inter font-normal hover:text-gray-600 smooth"
              >
                <FaQuestion className=" text-gray-500" /> <p>FAQs</p>
              </Link>
              <div className="ds:ml-auto sm:ml-0 ds:absolute ds:bottom-0 ds:my-5 ds:p-5 sm:p-0 sm:relative sm:m-0 ">
                <UserButton afterSignOutUrl="/" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
