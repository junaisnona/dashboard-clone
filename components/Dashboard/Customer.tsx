import React from "react";
import Table from "./Section/Main/Table";
import { useRouter } from "next/router";

const Customer = () => {
  const {asPath} = useRouter()
  return (
    <>
      <div className="w-[97%] bg-white h-[700px]">
        <Table page={asPath === "/products" ? "products" : "order"} />
      </div>
    </>
  )
}

export default Customer;
