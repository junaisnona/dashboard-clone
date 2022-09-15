import React from 'react'
import Header from '../Dashboard/General/Header'
import Sidebar from '../Dashboard/General/Sidebar'

const ComponentWrapper = ({children}: any) => {
  return (
    <div className='h-screen'> 
        <Header />
        <Sidebar />
        {children}
    </div>
  )
}

export default ComponentWrapper