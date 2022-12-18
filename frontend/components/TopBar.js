import React, {useState, useEffect} from 'react'
import axios from 'axios'
import hane from '../assets/hane.png'
import Image from 'next/image'
import {AiFillCaretDown} from 'react-icons/ai'
import { useRouter } from 'next/router'
import { useCurrentState } from './CurrentState'
import { useCurrentUser } from './CurrentUser'
import { MdNotifications } from 'react-icons/md'
import { RiMessage3Fill } from "react-icons/ri";
import {FiSearch} from "react-icons/fi"

function TopBar() {
  const router = useRouter();
  const {currentState} = useCurrentState();
  const {USERNAME,CHANGE_USER} = useCurrentUser();
  
  const getUsername = async () => {
    try {
      const response = await axios.get('/auth/getuser')
      
      CHANGE_USER(response.data.username)
    } catch (error) {
      CHANGE_USER("notLoggedIn")
      
      if(currentState == "notLoggedIn" & router.asPath != "/auth/Register" & router.asPath != "/auth/Login"){
        router.push("/auth/Login")
      }
    }
  }

  useEffect( () => {
    
    getUsername()
  },[])
  
  return (
    <div className='w-[80vw] flex items-center justify-between shadow-md'>
        
          <div className="text-left flex items-center rounded-sm m-2">
            <div className='ml-2 flex flex-col text-zinc-800 mb-1'>
            <div className='text-xl font-bold'>Good Morning</div>
            <div className=' text-[0.6rem] tracking-wide text-[#b8b8b8] font-bold'>Here's your overview this week</div>
            </div>

            <div className='ml-11 flex relative'>
              <input type='text' className='rounded-full bg-[#f5f5f5] pl-12 items-center w-72 placeholder:text-sm placeholder:text-zinc-600 text-zinc-600' placeholder='| Search time, days...'></input>
              <FiSearch className="absolute text-[#858585] mt-[0.33rem] ml-[1.4rem]"/>
            </div>

       
          </div>
          {/* RIGHT */}

          <div className='flex justify-between items-center h-full m-2 gap-5 mr-4 text-lg'>
 
            <div className="flex text-[#b2afba] gap-1 text-[1.4rem]">
              <MdNotifications className="cursor-pointer"/>
              <RiMessage3Fill className="cursor-pointer"/>
            </div>

           <div className='flex h-full text-[#7b7c8c] gap-2 items-center'>

            
              <div className='tracking-tighter text-[1.2rem]  flex items-center font-bold cursor-pointer'>{USERNAME}</div>
             <AiFillCaretDown className='text-[0.6rem] ' />
              </div>
           
             <Image alt='profile' src={hane} className="w-[40px] border- cursor-pointer rounded-full h-[40px]"/>           
           
           </div>
      
      </div>
  )
}

export default TopBar