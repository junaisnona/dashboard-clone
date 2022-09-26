import React from 'react'
import { IProduct } from '../../../../@types/IProduct'

function SampleDetail({data}: {data: IProduct}) {
  return (
    <div>
        <div className="p-7">
      <h2 className="text-2xl font-semibold">Sample</h2>
      <table className="border-collapse border-slate-500 w-full text-center">
        <tbody>
          <tr>
            <td className="border border-slate-600 p-5 bg-gray-100">Contact Name</td>
            <td className="border border-slate-600 p-5 border-r-0">{data?.customerDetails.name}</td>
            <td className="border border-slate-600 p-5 bg-gray-100">Contact Number</td>
            <td className="border border-slate-600 p-5 ">{data?.customerDetails.phoneNumber}</td>
          </tr>
          <tr>
          <td className="border border-slate-600 p-5 bg-gray-100">Sample Address</td>
          <td className="border border-slate-600 p-5  border-r-0">{data?.customerDetails?.shippingAddress}</td>
          <td className='border border-b border-slate-600 p-5 border-x-0'></td>
          <td className='border border-b border-slate-600 p-5 border-l-0'></td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default SampleDetail