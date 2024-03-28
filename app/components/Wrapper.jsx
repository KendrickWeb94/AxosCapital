

import React from 'react'
import Header from './Header'
import TopCards from './TopCards'
import CoverBump from './CoverBump'

const Wrapper = () => {
  return (
    <div className=' w-full  min-h-screen'>
        <Header />
        <TopCards />
        <CoverBump />
    </div>
  )
}

export default Wrapper