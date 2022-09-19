import React from "react";
import Table from "./Section/Table/Table";
import { useRouter } from "next/router";
import ProductDetail from "./Section/Table/ProductDetail";

const Customer = () => {
  const { asPath } = useRouter();
  console.log('asPath', asPath);
  
  return (
    <>
      <div className="w-[97%] bg-white h-[700px]">
            <Table page={asPath === "/products" ? "products" : "order"} />
      </div>
    </>
  );
};

export default Customer;
