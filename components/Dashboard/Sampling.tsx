
import { useRouter } from 'next/router';
import React from 'react'
import Table from './Section/Table/Table';

function Sampling() {
    const { asPath } = useRouter();
    
    return (
      <>
        <div className="w-[97%] bg-white h-[700px]">
              <Table page={asPath === "/sampling/products" ? "products" : "order"} />
        </div>
      </>
    );   
}

export default Sampling