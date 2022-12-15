import React, {useState, useEffect} from 'react'
import axios from 'axios'
import hane from '../assets/hane.png'
import Image from 'next/image'
import {AiFillCaretDown} from 'react-icons/ai'
import { useRouter } from 'next/router'
import { useCurrentState } from './CurrentState'

function TopBar() {
  const router = useRouter();
  const {currentState} = useCurrentState();
  const [username, setUsername] = useState("")
   
  useEffect(() => {
    const getUsername = async () => {
      try {
        const response = await axios.get('/auth/getuser')
        setUsername(response.data.username)
      } catch (error) {
        setUsername("Not logged in")
        
        if(currentState == "notLoggedIn" & router.asPath != "/auth/Register" & router.asPath != "/auth/Login"){
          router.push("/auth/Login")
        }
      }
    }

    getUsername()
  })
  
  return (
    <div className='w-[80vw] flex items-center justify-between shadow-md'>
        
          <div className="text-left flex items-center rounded-sm p-2">
            <div className='ml-2 flex flex-col text-zinc-800 mb-1'>
            <div className='text-xl font-bold'>Good Morning</div>
            <div className=' text-[0.6rem] tracking-wide text-[#b8b8b8] font-bold'>Here's your overview this week</div>
            </div>

            <div className='ml-11'>
              <input type='text' className='rounded-full bg-[#f5f5f5] pl-12 items-center w-72 placeholder:text-sm placeholder:text-zinc-600 text-zinc-600' placeholder='| Search time, days...'></input>
            </div>

       
          </div>
          {/* RIGHT */}

          <div className='flex items-center gap-3 mr-4'>
           
           <div className='flex text-[#cfcfcf] items-center'>

              <div className='text-lg tracking-tighter font-bold text-[0.8rem] cursor-pointer'>{username}</div>
              <AiFillCaretDown className='w-2 h-2' />
            
           </div>
           
             <Image alt='profile' src={hane} className="w-[40px] border- cursor-pointer rounded-full h-[40px]"/>           
           
           </div>
      
      </div>
  )
}

export default TopBar