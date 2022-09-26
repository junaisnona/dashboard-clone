
import React from 'react'
import {useQuery} from 'react-query'
import { IProduct } from '../../../../@types/IProduct'

function ProposalDetail({data}: {data: IProduct}) {
  return (
    <div>
        <div className="p-7">
      <h2 className="text-2xl font-semibold">Proposal</h2>
      <table className="border-collapse border-slate-500 w-full text-center">
        <tbody>
          <tr>
            <td className="border border-slate-600 p-5 bg-gray-100">Proposed Price</td>
            <td className="border border-slate-600 p-5 ">{data?.proposalPrice}</td>
            <td className="border border-slate-600 p-5 border-l-0 bg-gray-100">Proposed Lead Time</td>
            <td className="border border-slate-600 p-5 ">{data?.proposalLeadTime}</td>
          </tr>
        </tbody>
      </table>
    </div>
    </div>
  )
}

export default ProposalDetail

