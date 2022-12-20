import React from 'react'
import Navbar from './Navbar'
import TopBar from './TopBar'
import Footer from './Footer'
function Layout({children}) {

  return (
    <div className="flex ">
        <Navbar className="absolute"/>
        <div className=''>
          
          <TopBar/>
          <div className='w-full h-2/5 text-black'>
          {children}
        </div>
        <Footer/>
        </div>
        
    </div>
  )
}

export default Layout