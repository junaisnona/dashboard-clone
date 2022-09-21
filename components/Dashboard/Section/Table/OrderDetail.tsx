import React from "react";
import { IOrder } from "../../../../@types/IOrder";

function OrderDetail({data}: {data?: IOrder}) {
  return (
    <div className="p-7">
      <div>
      <h2 className="text-2xl pb-4">Order Details</h2>
      <table className="border-collapse w-full text-center">
        <tbody>
          <tr>
            <td className="border border-slate-300 p-3">Order ID</td>
            <td className="border border-slate-300 p-3">{data?.id}</td>
            <td className="border border-slate-300 p-3">Purchase Order</td>
            <td className="border border-slate-300 p-3">Download</td>
            <td className="border border-slate-300 p-3">Amount</td>
            <td className="border border-slate-300 p-3">{data?.price} INR</td>
          </tr>
        </tbody>
      </table>
      </div>

      <div className="mt-10">
      <h2 className="text-2xl pb-4">Product Details</h2>
      <table className="border-collapse w-full text-center">
        <tbody>
          <tr>
            <td className="border border-slate-300 p-5">Image</td>
            <td className="border border-slate-300 p-5">Shipping Details</td>
            <td className="border border-slate-300 p-5">Qty: {data?.qty} Address: {data?.address}</td>
          </tr>
          <tr>
          <td className="border border-slate-300 p-5">
            <span className="block">{data?.product}</span>
            <span className="block">{data?.pid}</span>
          </td>
            <td className="border border-slate-300 p-5">Total Qty</td>
            <td className="border border-slate-300 p-5">{data?.qty} Pieces</td>
          </tr>
        </tbody>
      </table>
      </div>
    </div>
  );
}

export default OrderDetail;
