

import React from 'react'
import MIniSideBar from '../fragments/MIniSideBar'
import Customers from '../components/Customers'

const page = () => {
  return (
    <div className=' w-full flex text-xs flex-row'>
      <MIniSideBar />
      <Customers />

    </div>
  )
}

export default page