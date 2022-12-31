import React, { useState } from 'react'
import Image from 'next/image'
import { useSelector } from 'react-redux'



function ImageDropdown({image}) {
    const [pressed,changePressed] =  useState('')
    const user = useSelector((state)=>state.user);
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

        <ul className={`${pressed ? "" :"hidden"} mt-5 ml-3 w-96 right-4 text-black transition-all ease-out rounded-md justify-end absolute bg-[#e4e8f0]`}>
            
            <li className='cursor-pointer py-2 px-5'>
                <div className='bg-gray-200 hover:bg-gray-300 flex items-center px-3 h-14 rounded-xl'>
                    <Image src={image} className='w-[30px] h-[30px] rounded-full mr-3'/> {'user.first_name'} {"user.last_name"}  
                </div>
            </li>
            <hr
        style={{
            color: "#734BF9",
            backgroundColor: "#734BF9",
            height: 2
        }}
    />

            {
                   tabs.map((element)=>
             (<li className='hover:text-[#734BF9] cursor-pointer py-2 px-5' key={element.name}>
                {element.name}
            </li>)

)}
            
        </ul>

    </div>
  )
}

export default ImageDropdown