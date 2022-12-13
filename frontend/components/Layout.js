import React from 'react'
import Navbar from './Navbar'
import TopBar from './TopBar'

function Layout({children}) {

  return (
    <div className="flex ">
        <Navbar />
        <div className=''>
          
          <TopBar/>
          <div className='w-full h-full text-black'>
          {children}
        </div>
        </div>
        
    </div>
  )
}

export default Layout