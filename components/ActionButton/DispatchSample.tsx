import React, { useState } from 'react'
import { useDispatchSampleToCustomer } from '../../hooks/useDispatchSampleToCustomer'
import { useDispatchSampleToSales } from '../../hooks/useDispatchSampleToSales'

export function DispatchSampleToSales({pid}: {pid?: number}) {
  const dispatchSampleToSales = useDispatchSampleToSales()
  return (
    <div>
      <button
      className='block bg-company-color px-2 py-1 text-sm rounded-sm text-white my-1 mx-auto'
      onClick={() => dispatchSampleToSales.mutate(pid)}
      >Dispatch Sample</button>
    </div>
  )
}

export function DispatchSampleToCustomer({pid}: {pid?: number}) {
  const dispatchSampleToCustomer = useDispatchSampleToCustomer()
  return (
    <div>
      <button
      className='block bg-company-color px-2 py-1 text-sm rounded-sm text-white my-1 mx-auto'
      onClick={() => dispatchSampleToCustomer.mutate(pid)}
      >Dispatch Sample</button>
    </div>
  )
  }

