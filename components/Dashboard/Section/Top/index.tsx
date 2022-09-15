import React from 'react'

function TopSection() {
  return (
    <div className='h-20 flex flex-col justify-evenly p-4'>
        <div><span className='text-md'>Home / Products</span></div>
        <div className='flex justify-between items-center pt-2'>
            <span className='text-xl font-medium'>Products</span>
            <button className='bg-company-color px-4 py-1 rounded-sm text-white'>Send Enquiry</button>
        </div>
    </div>
  )
}

export default TopSection