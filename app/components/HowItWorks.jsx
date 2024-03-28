

import React from 'react'
import HwItWrks from '../fragments/HwItWrks'

const HowItWorks = () => {
  return (
    <div className='flex items-center justify-center flex-col space-y-6 pt-10 min-h-screen w-full'>
        <h1 className="text-balance inter text-xl text-gray-800 text-center sm:text-2xl md:text-3xl lg:text-5xl font-bold">
          How it works
</h1>
      <div className=" grid-container">
        <HwItWrks  number="1" noteHead="Create Your Account" noteBody="Register an account by clicking on the sign up button,input your valid identification and complete"/>
        <HwItWrks  number="2" noteHead="Choose Plan" noteBody="By making deposit into your account,take a screenshot and forward it to our support team for activation of investment plan."/>
        <HwItWrks  number="3" noteHead="Get Profit" noteBody="Once account is activated by the support,each day you get to see your account balance generate values right there on your dashboard."/>
      </div>
    </div> 
  )
}

export default HowItWorks