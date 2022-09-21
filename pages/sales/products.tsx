import React from "react";
import Sales from "../../components/Dashboard/Sales";
import TopSection from "../../components/Dashboard/Section/Top";

function SalesProductsDashboard() {
  return (
    <>
      <TopSection />
      <div className="h-[760px] flex justify-center items-center bg-slate-200 ">
        <Sales />
      </div>
    </>
  );
}

export default SalesProductsDashboard;
