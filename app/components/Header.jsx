

import React from 'react'
import { FaRegSmileBeam } from "react-icons/fa";

const Header = () => {
  return (
    <div className=' inter w-full  '>
        <div className=" flex justify-between items-center ">
            <h2>Dashboard</h2>
            <h2 className=' flex items-center gap-3'>Welcome <FaRegSmileBeam className=' text-green-400'/> </h2>
        </div>
    </div>
  )
}

export default Header