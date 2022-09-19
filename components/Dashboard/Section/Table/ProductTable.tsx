import React, { useState } from "react";
import { useQuery } from "react-query";
import { IProduct } from "../../../../@types/IProduct";
import { useDeleteProduct } from "../../../../hooks/customer/useDeleteProduct";
import Link from "next/link";
import CreateOrder from "../../../Modal/CreateOrder";

export const fetchProducts = async (): Promise<IProduct[] | undefined> => {
  const res: Response = await fetch("http://localhost:8000/productsList");

  return res.json();
};

export const ProductHead = () => {
  console.log("product page");

  return (
    <tr>
      <th className="border border-slate-600 p-5">Product</th>
      <th className="border border-slate-600 p-5">Tech Pack</th>
      <th className="border border-slate-600 p-5">Quantity</th>
      <th className="border border-slate-600 p-5">Price</th>
      <th className="border border-slate-600 p-5">Lead Time</th>
      <th className="border border-slate-600 p-5">Status</th>
      <th className="border border-slate-600 p-5">Actions</th>
    </tr>
  );
};

export const ProductBody = () => {
  const [click, setClick] = useState(false);
  const { data } = useQuery("customerProducts", fetchProducts);

  const deleteProductMutation = useDeleteProduct();
  const handleDelete = (id: number) => {
    deleteProductMutation.mutate(id);
  };
  return (
    <>
      {data?.map((item) => {
        return (
          <tr key={item.id}>
            <td className="border border-slate-700 p-5">
              <Link href={`/products/${item.id}`}>{item.product}</Link>
            </td>
            <td className="border border-slate-700 p-5">{item.techPack}</td>
            <td className="border border-slate-700 p-5">
              {item.quantity} pieces
            </td>
            <td className="border border-slate-700 p-5">{item.price} INR</td>
            <td className="border border-slate-700 p-5">
              {item.leadTime} Days
            </td>
            <td className="border border-slate-700 p-5">{item.status}</td>
            <td className="border border-slate-700 p-5 flex items-center flex-col">
              <button
                className="cursor-pointer block bg-company-color px-2 py-1 rounded-sm text-white"
                onClick={() => setClick(true)}
              >
                Create Order
              </button>
              <span
                className="cursor-pointer"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </span>
            </td>
          </tr>
        );
      })}

      {click && <CreateOrder setClick={setClick} />}
    </>
  );
};
