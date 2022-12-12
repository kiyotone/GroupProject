import React from 'react'
import Navbar from './Navbar'

function Layout({children}) {
  return (
    <div className="flex">
        <Navbar />
        {children}
    
    </div>
  )
}

export default Layout