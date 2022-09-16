import axios from "axios";
import React from "react";
import { useQuery } from "react-query";
import { IProduct } from "../../../../@types/IProduct";
import {useMutation, useQueryClient} from 'react-query'

type PageProps = {
  page: string;
}

export const fetchProducts = async (): Promise<IProduct[] | undefined> => {
  const res: Response = await fetch("/api/products");

  return res.json();
};

const deleteProduct = async (id: number) => {
  const res: Response = await axios.post('/api/products', {data:id, type: "DELETE_PRODUCT"});

  return res;
}

function Table({page}: PageProps) {
  const { data } = useQuery("customerProducts", fetchProducts);

  const queryClient = useQueryClient();

  const { mutate, isLoading } = useMutation(deleteProduct, {
    onSuccess: data => {
      console.log(data);
      queryClient.invalidateQueries('customerProducts')

      // const message = "success"
      // alert(message)
    }
  });

  const handleDelete = (id: number) => {
    mutate(id);
  }

  return (
    <div className="p-7">
      <table className=" border-collapse border-slate-500 w-full text-center">
        <thead className="bg-slate-100">
          {page === "products" ? 
        <tr>
        <th className="border border-slate-600 p-5">Product</th>
        <th className="border border-slate-600 p-5">Tech Pack</th>
        <th className="border border-slate-600 p-5">Quantity</th>
        <th className="border border-slate-600 p-5">Price</th>
        <th className="border border-slate-600 p-5">Lead Time</th>
        <th className="border border-slate-600 p-5">Status</th>
        <th className="border border-slate-600 p-5">Actions</th>
      </tr>  : 
      <tr>
        <th className="border border-slate-600 p-5">Order ID</th>
        <th className="border border-slate-600 p-5">Purchase Order</th>
        <th className="border border-slate-600 p-5">Products</th>
        <th className="border border-slate-600 p-5">Price</th>
        <th className="border border-slate-600 p-5">Est. Delivery</th>
        <th className="border border-slate-600 p-5">Status</th>
      </tr>
        }
        </thead>
        <tbody>
          {page === "products" ? data?.map((item) => {
            
            return (
                <tr key={item.id}>
                  <td className="border border-slate-700 p-5">{item.product}</td>
                  <td className="border border-slate-700 p-5">{item.techPack}</td>
                  <td className="border border-slate-700 p-5">{item.quantity} pieces</td>
                  <td className="border border-slate-700 p-5">{item.price} INR</td>
                  <td className="border border-slate-700 p-5">{item.leadTime} Days</td>
                  <td className="border border-slate-700 p-5">
                    {item.status}
                  </td>
                  <td className="border border-slate-700 p-5" onClick={() => handleDelete(item.id)}>Delete</td>
                </tr>
            );
          }) : null}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
