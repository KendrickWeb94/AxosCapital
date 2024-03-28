import Link from "next/link";
import React from "react";
import { RiSearch2Line } from "react-icons/ri";
import { auth } from "@clerk/nextjs";

const Hero = () => {
  const { userId } = auth();
  return (
    <div className="">
      <div className="w-full  flex items-center flex-col  justify-center relative mx-auto">
        <div className="absolute translate-x-[6rem] text-center max-w-[300px] -z-10 inset-0  mx-auto">
          <div className=" max-w-[230px] translate-y-6 bg-blue-400 h-[120px] blur-[120px]"></div>
          <div className=" max-w-[130px] translate-y-6 bg-blue-500 h-[120px] blur-[120px]"></div>
        </div>
        <div className="absolute translate-x-[27rem] text-center  max-w-[300px] -z-10 inset-0  mx-auto">
          <div className=" max-w-[230px] translate-y-6 bg-yellow-400 h-[120px] blur-[160px]"></div>
          <div className=" max-w-[230px] translate-y-6 bg-yellow-500 h-[120px] blur-[120px]"></div>
        </div>
        <div className="absolute translate-x-[60rem] translate-y-11 max-w-[300px] text-center -z-10 inset-0  mx-auto">
          <div className=" max-w-[230px] translate-y-6 bg-blue-300 h-[120px] blur-[120px]"></div>
          <div className=" max-w-[230px] translate-y-6 bg-blue-300 h-[120px] blur-[120px]"></div>
        </div>
        <div className="pt-[2rem]  mx-auto space-y-10">
          <h1 className=" text-balance text-center  text-gray-800 lg:text-[64px] md:leading-[64px] ds:text-[32px] sm:text-[45px] sm:leading-[52px] ds:leading-[45px] inter font-bold">
            Expand your wealth through{" "}
            <span className=" p-1 bg-blue-400 animate-pulse text-white rounded-full smooth floating-text">
              investing
            </span>{" "}
            with the best platform{" "}
          </h1>
          <p className=" sm:text-[18px] ds:text-[13px] leading-[28px] text-center font-normal text-gray-500 text-blance inter ">
            In a world of opportunities, where financial freedom is more than
            just a dream, take the first step towards prosperity. Embrace the
            power of investment, and let your wealth flourish. With our trusted
            platform.
          </p>
          <div className="flex ds:flex-col mx-auto w-full justify-center sm:flex-row items-center gap-5">
            <button className=" p-3 text-white smooth hover:bg-blue-600 rounded-md font-medium bg-blue-400">
              {!userId ? (
                <>
                  <Link href="/sign-up"> Get Started</Link>
                </>
              ) : (
                <>
            
                  <Link href="/transactions">Go to Transactions </Link>
                </>
              )}
            </button>

            <button className=" max-w-[340px] p-3 rounded-md bg-blue-400/25 flex items-center gap-5">
              <span className=" text-gray-500">
                <RiSearch2Line />
              </span>
              <input
                type="text"
                placeholder="Press  S key for Quick Search.."
                className=" inter text-[13px] w-full placeholder:text-gray-500 outline-none bg-transparent font-normal text-gray-500 "
              />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
