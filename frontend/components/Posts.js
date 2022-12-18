import React, { useEffect, useState } from 'react'

function Posts({id,title,content,created_at,author}) {
  


  return (
    <div className='mt-4 ml-4 rounded-xl flex-col items-start bg-gray-200 w-[40em]  drop-shadow-2xl'>

            <div className='flex text-lg font-bold items-start ml-5'>{author}</div>
            
            <div className='ml-10 mt-5 mb-5'>
            <div className='text-bold text-sm flex items-start'>{content}</div>
            </div>

            <div className='bg-white rounded-md '>REACTIONS BAR....</div>
    </div>
  )
}

export default Posts