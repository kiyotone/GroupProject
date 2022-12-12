import React from 'react'
import Navbar from './Navbar'

function Layout({children}) {
  return (
    <div className="flex">
        <Navbar />
        <div className='w-full h-full text-black'>
          {children}
        </div>
    </div>
  )
}

export default Layout