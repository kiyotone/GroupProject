import React from 'react'
import Navbar from './Navbar'
import TopBar from './TopBar'
import Footer from './Footer'
function Layout({children}) {

  return (
    <div className="flex ">
       <div className='fixed'>
        <Navbar/>
        </div>

        <div className='fixed z-10 ml-[300px]'>
        <TopBar/>
        </div>

        <div className='ml-[300px] w-full mt-20 flex flex-col'>          
          
        
            <div className=' text-black'>
            {children}
            </div>
            <div className=''>
            <Footer/>
            </div>
        </div>
    
    </div>
  )
}

export default Layout