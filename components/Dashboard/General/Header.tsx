import React from 'react'

function Header() {
  return (
    <>
    <header className='flex justify-between items-center p-2 bg-primary-color text-white'>
        <div className='logo text-2xl'>
            NONA LIFESTYLE
        </div>
        <div className='logout'>
            <span>Logout</span>
        </div>
    </header>
    </>
  )
}

export default Header