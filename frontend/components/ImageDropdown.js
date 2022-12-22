import React, { useState } from 'react'
import Image from 'next/image'

function ImageDropdown({image}) {
    const [pressed,changePressed] =  useState('')
    const tabs = [{
        "name":"Account",

    },
        {
            "name":"Logout"
        }
]


    return (
    <div>
        <div className='flex'>

        <Image alt='profile' onClick={()=>changePressed(!pressed)} src={image} className="w-[40px] overflow-hidden border-2 focus:outline-none focus:border-white hover: object-cover cursor-pointer rounded-full h-[40px]"/>
        
        </div>

        <ul className={`${pressed ? "" :"hidden"} mt-4 w-40 right-4 text-black transition-all ease-out rounded-md justify-end absolute bg-[#e4e8f0]`}>
            
            {
                   tabs.map((element)=>
             (<li className='hover:text-[#734BF9] cursor-pointer py-2 px-2' key={element.name}>
                {element.name}
            </li>)

)}
            
        </ul>

    </div>
  )
}

export default ImageDropdown