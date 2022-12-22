
import  Link  from 'next/link'
import React from 'react'

function NavContents({name,icon,link,router}) {
  const isActive = router.asPath === (link === "/home" ? "/" : link)
  return (
    <Link key={name} href={link}>
    <div className={`${isActive && "bg-gradient-to-r from-[#734BF9] via-transparent to-transparent" } mt-2 ml-10 text-[#090a0a] rounded-l-3xl  flex flex-col  justify-center  h-14`}>
        <div className={`${isActive && "bg-white rounded-l-3xl"} flex  items-center ml-[2px] h-12`}>
    
          <div className="flex ml-2 items-center">
            <div className={`${isActive && "bg-[#734BF9] rounded-full text-white border-[10px] border-[#734BF9]"}`}>{icon}</div>
            <div className={`${isActive && "text-[#734BF9]" } ml-6`}>{name}</div>
            
          </div>  

        </div>
      </div>
      </Link>
    )
}

export default NavContents
