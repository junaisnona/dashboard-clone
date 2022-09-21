import { useRouter } from 'next/router';
import React from 'react'
import Table from './Section/Table/Table';

function Sales() {
    const { asPath } = useRouter();
    console.log('asPath', asPath);
    
    return (
      <>
        <div className="w-[97%] bg-white h-[700px]">
              <Table page={asPath === "/sales/products" ? "products" : "order"} />
        </div>
      </>
    );   
}

export default Sales