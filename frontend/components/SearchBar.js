import React, { useState } from 'react'
import {FiSearch} from "react-icons/fi"

function SearchBar({user_list}) {
  
  const [search,setSearch] = useState("")
  const [searchClicked,setClicked] = useState(false)

  return (
       <div className='ml-11 flex relative'>
    <input type='text' onChange={(e)=>setSearch(e.target.value)} onFocus={()=>setClicked(true)} onBlur={()=>setClicked(false)} className='rounded-full bg-[#f5f5f5] pl-12 items-center w-72 placeholder:text-sm placeholder:text-zinc-600 text-zinc-600' placeholder='| Search time, days...'></input>
    <FiSearch className="absolute text-[#858585] mt-[0.33rem] ml-[1.4rem]"/>

      {searchClicked &&<div className='w-72 rounded-md mt-8 absolute bg-[#E4E8F0] text-purple-400'>
        {
        user_list.filter(user =>{

          const searchItem = search.toLowerCase();
          const username = user.username.toLowerCase();

          return username.startsWith(searchItem);

        })
        .map((user)=>(
          <div className='px-2 mx-2 rounded-md hover:bg-gray-600 mt-1 h-10' >{user.username} </div>
        ))
        }
      </div>}

      </div>


  )
}

export default SearchBar