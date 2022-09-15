import React from 'react'
import Customer from '../Dashboard/Customer'
import TopSection from '../Dashboard/Section/Top'

function MainWrapper() {
  return (
    <>
        <TopSection />
        <div className='h-[760px] flex justify-center items-center bg-slate-200 '>
        <Customer />
        </div>
        </>
  )
}

export default MainWrapper