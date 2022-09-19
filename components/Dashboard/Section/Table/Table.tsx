import axios from "axios";
import React from "react";
import { OrderBody, OrderHead } from "./OrderTable";
import { ProductBody, ProductHead } from "./ProductTable";

type PageProps = {
  page: string;
}





function Table({page}: PageProps) {

  return (
    <div className="p-7">
      <table className=" border-collapse border-slate-500 w-full text-center">
        <thead className="bg-slate-100">
          {page === "products" ? 
          
        <ProductHead />  : <OrderHead />
        }
        </thead>
        <tbody>
          {page === "products" ? <ProductBody /> : <OrderBody />}
        </tbody>
      </table>
    </div>
  );
}

export default Table;
