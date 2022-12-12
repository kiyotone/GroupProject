
import React from 'react'

function NavContents({name,icon}) {
  return (
    
    <div className="ml-10 hover:text-[#734BF9] hover:bg-white hover:border-[#734BF9] hover:border-r-transparent text-[#090a0a] rounded-l-3xl border-[2.5px] flex flex-col  justify-center  h-14">
      
    
        <div className="flex pl-3 items-center">
          <div className="">{icon}</div>
          <div className="ml-2">{name}</div>
        </div>  
      
      </div>
      
    )
}

export default NavContents