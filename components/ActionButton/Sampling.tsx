import React, { useState } from 'react'
import { useAcceptSampling } from '../../hooks/useAcceptSamling';
import { useApproveSamplingCustomer } from '../../hooks/useApproveSamplingCustomer';
import { useApproveSamplingSales } from '../../hooks/useApproveSamplingSales';
import AssignSamplingModal from '../Modal/AssignSamplingModal';
import SamplingRequestModal from '../Modal/SamplingRequestModal'

export function RequestSample({pid}: {pid?: number}) {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <button className='block bg-company-color px-2 py-1 text-sm rounded-sm text-white mx-auto'
      onClick={() => setModal(true)}
      >Request Sample</button>

    {modal && <SamplingRequestModal setModal={setModal} pid={pid} />}
    </div>
  )
}

export function AssignSample({pid}: {pid?: number}) {
  const [modal, setModal] = useState(false);
  return (
    <div>
      <button className="block bg-company-color px-2 py-1 text-sm rounded-sm text-white my-1 mx-auto" 
      onClick={() => setModal(true)}
      >
      Assign Sampling
      </button>
      {modal && <AssignSamplingModal pid={pid} setModal={setModal} />}
    </div>
  )
}


function AcceptSampling({pid}: {pid?: number}) {
  const acceptSampling = useAcceptSampling();

  return (
    <div>
        <button className="block bg-company-color px-2 py-1 text-sm rounded-sm text-white my-1 mx-auto"
        onClick={() => {
          acceptSampling.mutate(pid)
        }}
        >Accept Request</button>
        <button className="block text-red-600 border border-red-600 px-2 py-1 text-sm rounded-sm my-1 mx-auto">Decline Request</button>
    </div>
  )
}

export default AcceptSampling


export function ApproveSampleSales({pid}: {pid?: number}) {
  const approveSamplingSales = useApproveSamplingSales();
  return (
    <div>
      <button className="block bg-company-color px-2 py-1 text-sm rounded-sm text-white my-1 mx-auto"
      onClick={() => approveSamplingSales.mutate(pid)}
      >Approve Sample</button>
      <button className="block text-red-600 border border-red-600 px-2 py-1 text-sm rounded-sm my-1 mx-auto">Reject Sample</button>
    </div>
  )
}

export function ApproveSampleCustomer({pid}: {pid?: number}) {
  const approveSamplingCustomer = useApproveSamplingCustomer();
  return (
    <div>
      <button className="block bg-company-color px-2 py-1 text-sm rounded-sm text-white my-1 mx-auto"
      onClick={() => approveSamplingCustomer.mutate(pid)}
      >Approve Sample</button>
      <button className="block text-red-600 border border-red-600 px-2 py-1 text-sm rounded-sm my-1 mx-auto">Reject Sample</button>
    </div>
  )
}







