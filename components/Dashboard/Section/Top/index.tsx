import React, { useState } from 'react'
import SendEnquiry from '../../../Modal/SendEnquiry';
import {useRouter} from 'next/router'
import { useQuery } from 'react-query';
import { IProduct } from '../../../../@types/IProduct';

function TopSection({data}: {data?: IProduct}) {
  const {asPath} = useRouter()

  const pid = asPath.slice(10, 15).toString()
  
  const [click, setClick] = useState<boolean>(false);

  let path: string = '';
  if(asPath === '/products' || asPath === '/sales/products' || asPath === '/sampling/products') {
    path = 'Products'
  }
  else if(asPath === '/order' || asPath === '/sales/order' || asPath === '/sampling/order') {
    path = 'Order'
  }
  else if(asPath.includes('/products/')) {
    path = `Product / ${data?.product}`
  }
  else if(asPath.includes('/order/')) {
    path = `Order / ${data?.product}`
  }

  const handleModal = () => {
    setClick(true)
  }


  return (
    <>
    <div className='h-20 flex flex-col justify-evenly p-4'>
        <div><span className='text-md'>Home / {path}</span></div>
        <div className='flex justify-between items-center pt-2'>
            <span className='text-xl font-medium'>{path}</span>
            {!path.includes('Order /') && <button className='bg-company-color px-4 py-1 rounded-sm text-white' onClick={handleModal}>{path === "Products" ? "Send Enquiry" : path === "Order" ? "New Order" : path.includes("Product /") && "Create Order" }</button>}
        </div>
    </div>

    {click && <SendEnquiry setClick={setClick} />}
    </>
  )
}

export default TopSection