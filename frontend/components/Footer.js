

import React from 'react'
import {CiLocationOn } from 'react-icons/ci';
import {AiOutlineMail } from 'react-icons/ai';
import {IoIosCall } from 'react-icons/io';
import {BsFacebook} from 'react-icons/bs';
import {FaInstagramSquare } from 'react-icons/fa';
import {BsTwitter} from 'react-icons/bs';
import {AiFillGoogleCircle } from 'react-icons/ai';
const Footer = () => {
  return (
    <>
    <div className='flex h-96 w-full'>
    <div className='h-96 w-full  bg-gray-100 '></div>

  
  </div>
  <div className='h-[40vh] w-3/5 z-10 relative  bg-white left-52 bottom-64 border-black-300  shadow-2xl rounded-[12px]' >
<div className='pt-[1.8rem] font-bold'>
<p  className=" text-blue-600 font-bold  text-3xl text-center  ">HTML CSS</p>
       <p  className=" text-gray-700 font-bold  text-3xl text-center">RESPONSIVE FOOTER </p>
       <p className=" text-gray-700 font-bold  text-3xl text-center">DESIGN</p>
      
</div>
<div className=' pt-[3rem] flex absolute h-[20vh] w-full top-[10rem] gap-5 bg-gray-200 text-black  pl-[3rem] font-semibold'>
<div className='sec1'>
          <p>Webdevtrick.com</p>
          <p>BLOG. TOOLS. CONTACT</p>
        </div>
        <div className='flex  flex-col gap-3 text-sm'>
          <p className="flex flex-row text-sm"><CiLocationOn/>Kathmandu,Nepal</p>
          <p className="flex flex-row  text-sm"><AiOutlineMail/>contact@gmail.com</p>
          <p className='flex flex-row text-sm'><IoIosCall/>+9876543210</p>
        </div>
        <div className='flex flex-col'>
        <p  className='text-sm'>ABOUT THE COMPANY<br></br>Webdevtrick is a blog for the web designer,<br></br>web developer,graphic designer &SEO</p>
        <div className=' flex flex-row gap-5'>
         <span> <BsFacebook/></span>
         <span> <FaInstagramSquare/></span>
         <span> <BsTwitter/></span>
         <span> <AiFillGoogleCircle/></span>
        </div>
        </div>
        
       
</div>
</div>
    </>
  )
}

export default Footer
