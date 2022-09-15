import React from "react";

function Products() {
  return (
    <div className="p-7">
      <table className=" border-collapse border-slate-500 w-full text-center">
        <thead className="bg-slate-100">
          <tr>
            <th className="border border-slate-600 p-5">Product</th>
            <th className="border border-slate-600 p-5">Tech Pack</th>
            <th className="border border-slate-600 p-5">Quantity</th>
            <th className="border border-slate-600 p-5">Price</th>
            <th className="border border-slate-600 p-5">Lead Time</th>
            <th className="border border-slate-600 p-5">Status</th>
            <th className="border border-slate-600 p-5">Actions</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className="border border-slate-700 p-5">Men's Jeans</td>
            <td className="border border-slate-700 p-5">-</td>
            <td className="border border-slate-700 p-5">50 Pieces</td>
            <td className="border border-slate-700 p-5">8000 INR</td>
            <td className="border border-slate-700 p-5">10 Days</td>
            <td className="border border-slate-700 p-5">RFQ VERIFICATION PENDING</td>
            <td className="border border-slate-700 p-5">Delete</td>
          </tr>
          <tr>
            <td className="border border-slate-700 p-5">Men's Jeans</td>
            <td className="border border-slate-700 p-5">-</td>
            <td className="border border-slate-700 p-5">50 Pieces</td>
            <td className="border border-slate-700 p-5">8000 INR</td>
            <td className="border border-slate-700 p-5">10 Days</td>
            <td className="border border-slate-700 p-5">RFQ VERIFICATION PENDING</td>
            <td className="border border-slate-700 p-5">Delete</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Products;
