import Link from 'next/link'
import React from 'react'

function Sidebar() {
  return (
    <aside className='w-[200px] h-[840px] bg-primary-color float-left'>
        <nav className='text-left text-lg text-white'>
        <div className='pl-10 py-3 bg-company-color'>
            <Link href={"#"}><span>Home</span></Link>
        </div>
        <div className='pl-10 py-3'>
            <Link href={"#"}><span>Products</span></Link>
        </div>
        <div className='pl-10 py-3'>
            <Link href={"#"}><span>Orders</span></Link>
        </div>
     
        </nav>
    </aside>
  )
}

export default Sidebar