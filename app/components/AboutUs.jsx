

import React from 'react'
import Image from 'next/image'
import Coin2 from "../assets/coin2.png"

const AboutUs = () => {
  return (
    <div className=' w-full bg-blue-200 rounded-md min-h-[100vh] flex items-center justify-center'>
        <div className="max-w-[100%] gap-16 p-10 flex md:flex-row-reverse flex-col items-center  ">
            <div className="min-w-[220px] max-w-[500px] h-auto">
              <Image 
              src={Coin2}
              />
            </div>
           <div className=" space-y-6">
            <h1 className="inter text-xl font-bold sm:2xl md:text-4xl text-gray-900">About US?</h1>
            <p className=' text-sm sm:text-[14px] leading-[2rem] inter text-gray-500'>Axos Capital Investments is a leading online brokerage platform offering a comprehensive suite of investment services. With a user-friendly interface and cutting-edge technology, Axos Capital provides traders and investors with access to a wide range of financial instruments, including stocks, options, futures, and cryptocurrencies</p>
            <button className=' bg-blue-400 text-white font-semibold smooth hover:bg-blue-600 rounded-md p-3 inter text-sm'>
                Learn More
            </button>
           </div>
        </div>
    </div>
  )
}

export default AboutUs