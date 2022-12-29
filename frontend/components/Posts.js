import React from 'react'
import {BiHeart } from 'react-icons/bi';
import {FaRegComment} from 'react-icons/fa';
import { MdShare } from 'react-icons/md';
import {Swiper,SwiperSlide} from 'swiper/react';
import { Pagination } from "swiper";
import "swiper/css/pagination";
import 'swiper/css';
function Posts({id,title,content,created_at,author}) {
  

 


  return (
  
    <div className='pt-6 justify-center h-full'>
    <div className='mt-4 ml-4 rounded-xl flex-col items-start bg-gray-200 w-[40em]  drop-shadow-2xl  h-[80vh]  '>

            <div className='flex text-lg font-bold items-start ml-5 gap-[2rem]    '>
              
              <img  src  ="./images/Burger.png" className='h-[4rem] w-[4rem] rounded-full  before:rounded-full bg-gradient-to-tr from-purple-500 to bg-pink-500 z-10   '></img>
              <span className='pt-[1.2rem]'>{author}</span></div>
            
            <div className='ml-10 mt-5 mb-5'>
            <div className='text-bold text-sm flex items-start border-b-2  border-black'>{content}</div>
          </div>
          <Swiper    modules={[Pagination]}
    pagination={true} className='  h-[50vh]  } '>
  
            <SwiperSlide>
            <img  src  ="./images/Burger.png" className='object-fill w-full h-full'></img>
          
            </SwiperSlide>
            <SwiperSlide>
            <img  src  ="./images/momos.png" className='w-full h-full'></img>
          
            </SwiperSlide>
            <SwiperSlide>
            <img  src  ="./images/Burger.png" className='w-full h-full'></img>
          
            </SwiperSlide>
            <SwiperSlide>
            <img  src  ="./images/Burger.png" className='w-full h-full'></img>
          
            </SwiperSlide>
            </Swiper>
            
            <div className=' bg-white h-[4rem] mt-[2rem] flex flex-row gap-[2rem]  pt-[1.5rem] pl-[1rem]'>
         <BiHeart color='black' transform='scale(2)  '/>
    <FaRegComment  color='black' transform='scale(2) '/>
    <MdShare  color='black' transform='scale(2)' />
            </div>
      
    </div>
    </div>
  
    
  )
}

export default Posts



