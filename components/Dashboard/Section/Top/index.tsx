import React, { useState } from 'react'
import SendEnquiry from '../../../Modal/SendEnquiry';
import {useRouter} from 'next/router'

function TopSection() {

  const {asPath} = useRouter()
  const [click, setClick] = useState<boolean>(false);

  console.log('click ', click);
  

  const handleModal = () => {
    setClick(true)
  }


  return (
    <>
    <div className='h-20 flex flex-col justify-evenly p-4'>
        <div><span className='text-md'>Home / {asPath === "/products" ? "Products" : "Order" }</span></div>
        <div className='flex justify-between items-center pt-2'>
            <span className='text-xl font-medium'>{asPath === "/products" ? "Products" : "Order" }</span>
            <button className='bg-company-color px-4 py-1 rounded-sm text-white' onClick={handleModal}>{asPath === "/products" ? "Send Enquiry" : "New Order" }</button>
        </div>
    </div>

    {click && <SendEnquiry setClick={setClick} />}
    </>
  )
}

export default TopSection