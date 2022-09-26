import React from "react";
import { useRouter } from "next/router";
import axios from "axios";
import { useQuery } from "react-query";
import { IProduct } from "../../../../@types/IProduct";


function ProductDetail({data}: {data: IProduct}) {

  return (
    <div className="p-7">
      <h2 className="text-2xl font-semibold">Product Details</h2>
      <table className="border-collapse border-slate-500 w-full text-center">
        <thead>
          <tr>
            <td className="border border-slate-600 p-5 bg-gray-100">SKU</td>
            <td className="border border-slate-600 p-5">{data?.id}</td>
            <td className="border border-slate-600 p-5 bg-gray-100">Category</td>
            <td className="border border-slate-600 p-5">Soft Furnishing</td>
            <td className="border border-slate-600 p-5 bg-gray-100">Sub-category</td>
            <td className="border border-slate-600 p-5">Solids Curtain</td>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-600 p-5 bg-gray-100">Tech Pack</td>
            <td className="border border-slate-600 p-5 border-r-0">Download</td>
            <td className="border border-slate-600 p-5 border-l-0"></td>
            <td className="border border-slate-600 p-5 bg-gray-100">Quantity</td>
            <td className="border border-slate-600 p-5 border-r-0 ">{data?.quantity}</td>
            <td className="border border-slate-600 p-5 border-l-0"></td>
          </tr>
          <tr>
            <td className="border border-slate-600 p-5 bg-gray-100">Target Price</td>
            <td className="border border-slate-600 p-5 border-r-0">{data?.price} INR</td>
            <td className="border border-slate-600 p-5 border-l-0"></td>
            <td className="border border-slate-600 p-5 bg-gray-100">Target Lead Time</td>
            <td className="border border-slate-600 p-5 border-r-0">{data?.leadTime} Days</td>
            <td className="border border-slate-600 p-5 border-l-0"></td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default ProductDetail;
