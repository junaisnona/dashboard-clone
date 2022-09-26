import React from 'react'
import Sampling from '../../components/Dashboard/Sampling'
import TopSection from '../../components/Dashboard/Section/Top'

function SamplingProductsDashboard () {
  return (
    <>
      <TopSection />
      <div className="h-[760px] flex justify-center items-center bg-slate-200 ">
        <Sampling />
      </div>
    </>
  )
}

export default SamplingProductsDashboard 