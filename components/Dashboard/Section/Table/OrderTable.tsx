import { useQuery } from "react-query";
import Link from "next/link";
import { IOrder } from "../../../../@types/IOrder";

export const fetchProducts = async (): Promise<IOrder[] | undefined> => {
  const res: Response = await fetch("http://localhost:8000/orderlist");
  return res.json();
};

export const OrderHead = () => {
  
  return (
    <tr>
      <th className="border border-slate-200 p-5">Order ID</th>
      <th className="border border-slate-200 p-5">Purchase Order</th>
      <th className="border border-slate-200 p-5">Products</th>
      <th className="border border-slate-200 p-5">Price</th>
      <th className="border border-slate-200 p-5">Est. Delivery</th>
      <th className="border border-slate-200 p-5">Status</th>
    </tr>
  );
};

export const OrderBody = () => {
  const {data} = useQuery('customerOrder', fetchProducts)
  return (
    <>
      {data?.map((product) => {
      return(
        <tr key={product.id}>
      <td className="border border-slate-200 p-5 text-blue-700"><Link href={`/order/${product.id}`} >{product.id}</Link></td>
      <td className="border border-slate-200 p-5">{product.techPack}</td>
      <td className="border border-slate-200 p-5">{product.product}</td>
      <td className="border border-slate-200 p-5">{product.price} INR</td>
      <td className="border border-slate-200 p-5">{product.qty}</td>
      <td className="border border-slate-200 p-5">{product.status}</td>
    </tr>
      )
    })}
    </>
  );
};
