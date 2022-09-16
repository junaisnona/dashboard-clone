import Link from 'next/link'
import React from 'react'
import {useRouter} from 'next/router'

function Sidebar() {
  const {asPath} = useRouter();

  return (
    <aside className='w-[200px] h-[840px] bg-primary-color float-left'>
        <nav className='text-left text-lg text-white'>
        <div className={asPath === "/" ? `pl-10 py-3 bg-company-color` : 'pl-10 py-3 bg-transparent'}>
            <Link href={"/"}><span className='cursor-pointer'>Home</span></Link>
        </div>
        <div className={asPath === "/products" ? `pl-10 py-3 bg-company-color` : 'pl-10 py-3 bg-transparent'} >
            <Link href={"products"}><span className='cursor-pointer'>Products</span></Link>
        </div>
        <div className={asPath === "/order" ? `pl-10 py-3 bg-company-color` : 'pl-10 py-3 bg-transparent'}>
            <Link href={"order"}><span className='cursor-pointer'>Orders</span></Link>
        </div>
     
        </nav>
    </aside>
  )
}

export default Sidebar