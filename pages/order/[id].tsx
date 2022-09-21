import axios from "axios";
import { useRouter } from "next/router";
import React from "react";
import { useQuery } from "react-query";
import OrderDetail from "../../components/Dashboard/Section/Table/OrderDetail";
import ProductDetail from "../../components/Dashboard/Section/Table/ProductDetail";
import TopSection from "../../components/Dashboard/Section/Top";

const fetchSingleOrder = async (id: string | string[] | undefined) => {
  const res = await axios.get(
    `http://localhost:8000/orderlist/${id?.toString()}`
  );

  return res?.data;
};

function ProductId() {
  const router = useRouter();
  const { id } = router.query;

  const { data } = useQuery(
    ["orderDetails", id],
    () => fetchSingleOrder(id),
    {
      enabled: !!id,
    }
  );
  return (
    <>
      <TopSection data={data} />

      <div className="h-[760px] flex justify-center items-center bg-slate-200 ">
        <div className="w-[97%] bg-white h-[700px]">
          <OrderDetail data={data} />
        </div>
      </div>
    </>
  );
}

export default ProductId;
