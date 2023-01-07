<<<<<<< Updated upstream
import React, {useState, useEffect, use} from 'react'
import hane from '../assets/hane.png'
import {BsMoon,BsSun, BsToggle2On} from 'react-icons/bs';
import { useRouter } from 'next/router'
import { MdNotifications } from 'react-icons/md'
import { RiMessage3Fill } from "react-icons/ri";
import ImageDropdown from './ImageDropdown'
import {useSelector,useDispatch} from 'react-redux'
import { toggleMode,toggleLoggedIn } from './redux/features/siteStateSlice'
import { changeUser } from './redux/features/userSlicer';
import SearchBar from './SearchBar';
import withAuth from './withAuth';

import useAxiosPrivate from './useAxiosPrivate';
=======
import React, { useState, useEffect } from "react";
import axios from "axios";
import hane from "../assets/hane.png";
import Image from "next/image";
import { AiFillCaretDown } from "react-icons/ai";
import { BsMoon, BsSun, BsToggle2On } from "react-icons/bs";
import { useRouter } from "next/router";
import { useCurrentState } from "./CurrentState";
import { useCurrentUser } from "./CurrentUser";
import { MdNotifications } from "react-icons/md";
import { RiMessage3Fill } from "react-icons/ri";
import { FiSearch } from "react-icons/fi";
import ImageDropdown from "./ImageDropdown";
>>>>>>> Stashed changes

function TopBar() {
  const axios = useAxiosPrivate();
  const router = useRouter();
<<<<<<< Updated upstream
  
  const user = useSelector((state)=> state.user);

  
  const site = useSelector((state)=> state.siteState);
  const dispatch = useDispatch();
  const [user_list,update_user_list] = useState([])

  const getUserList = async ()=>{
    try {
      const response = await axios.get('/auth/listuser')
      console.log(response.data)
      update_user_list(response.data)
    }
    catch(error){
      confirm.log("sadaaaaaaaaaaaaaaaaaaaa")
      console.log(error)
    }
    
  }
=======
  const { currentState } = useCurrentState();
  const { USERNAME, CHANGE_USER } = useCurrentUser();
  const [isOpen, changeOpen] = useState(false);

  const toggleDark = () => {
    isOpen ? changeOpen(false) : changeOpen(true);
  };
>>>>>>> Stashed changes


  const getUsername = async () => {
<<<<<<< Updated upstream
    const response = await axios.get('auth/getuser')
    dispatch(changeUser(response.data.username, response.data.gender))
  }

  useEffect( () => {
    
    getUsername()
    //getUserList()
  },[])
  
  return (
    <div className='w-[80vw] bg-white flex items-center justify-between shadow-md'>
        
          <div className="text-left flex items-center rounded-sm m-2">
            <div className='ml-2 flex flex-col text-zinc-800 mb-1'>
            <div className='text-xl font-bold'>Good Morning</div>
            <div className=' text-[0.6rem] tracking-wide text-[#b8b8b8] font-bold'>Here's your {site.mode} this week</div>
            </div>

            <SearchBar user_list = {user_list}/>
       
=======
    try {
      const response = await axios.get("/auth/getuser");

      CHANGE_USER(response.data.username);
    } catch (error) {
      CHANGE_USER("notLoggedIn");

      // if(currentState == "notLoggedIn" & router.asPath != "/auth/Register" & router.asPath != "/auth/Login"){
      //   router.push("/auth/Login")
      // }
    }
  };

  useEffect(() => {
    getUsername();
  }, []);

  return (
    <div className="w-[80vw] bg-white flex items-center justify-between shadow-md">
      <div className="text-left flex items-center rounded-sm m-2">
        <div className="ml-2 flex flex-col text-zinc-800 mb-1">
          <div className="text-xl font-bold">Good Morning</div>
          <div className=" text-[0.6rem] tracking-wide text-[#b8b8b8] font-bold">
            Here's your overview this week
>>>>>>> Stashed changes
          </div>
        </div>

        <div className="ml-11 flex relative">
          <input
            type="text"
            className="rounded-full bg-[#f5f5f5] pl-12 items-center w-72 placeholder:text-sm placeholder:text-zinc-600 text-zinc-600"
            placeholder="| Search time, days..."
          ></input>
          <FiSearch className="absolute text-[#858585] mt-[0.33rem] ml-[1.4rem]" />
        </div>
      </div>
      {/* RIGHT */}

<<<<<<< Updated upstream
          {site.mode=="dark" ? <div className="text-purple-700 relative flex items-center cursor-pointer" onClick={()=>dispatch(toggleMode())}>
              
              <BsToggle2On className="h-12 w-12" />
              <BsMoon className="absolute text-white right-[.3rem]" />
          </div>
          :
          <div className="text-purple-700 relative flex items-center cursor-pointer" onClick={()=>dispatch(toggleMode())}>
                <BsToggle2On className="h-12 w-12 rotate-180" />
                <BsSun className="absolute text-white left-[.45rem]" />          
            </div>
          }
            <div className="flex text-[#b2afba] gap-1 text-[1.4rem]">
      
              <MdNotifications className="cursor-pointer"/>
              <RiMessage3Fill className="cursor-pointer"/>
            </div>

           <div className='flex h-full text-[#7b7c8c] gap-2 items-center'>

            
              <div className='tracking-tighter text-[1.2rem]  flex items-center font-bold cursor-pointer'>{user.username}</div>
            
            </div>
=======
      <div className="flex justify-between items-center h-full m-2 gap-5 mr-4 text-lg">
        {isOpen ? (
          <div
            className="text-purple-700 relative flex items-center cursor-pointer"
            onClick={toggleDark}
          >
            <BsToggle2On className="h-12 w-12" />
            <BsMoon className="absolute text-white right-[.3rem]" />
          </div>
        ) : (
          <div
            className="text-purple-700 relative flex items-center cursor-pointer"
            onClick={toggleDark}
          >
            <BsToggle2On className="h-12 w-12 rotate-180" />
            <BsSun className="absolute text-white left-[.45rem]" />
          </div>
        )}
        <div className="flex text-[#b2afba] gap-1 text-[1.4rem]">
          <MdNotifications className="cursor-pointer" />
          <RiMessage3Fill className="cursor-pointer" />
        </div>

        <div className="flex h-full text-[#7b7c8c] gap-2 items-center">
          <div className="tracking-tighter text-[1.2rem]  flex items-center font-bold cursor-pointer">
            {USERNAME}
          </div>
        </div>
>>>>>>> Stashed changes

        <ImageDropdown image={hane} />
      </div>
    </div>
  );
}

<<<<<<< Updated upstream
export default withAuth(TopBar);
=======
export default TopBar;
>>>>>>> Stashed changes
