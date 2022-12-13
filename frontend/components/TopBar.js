import React from 'react'

function TopBar() {
  return (
    <div className='w-[80vw]'>
        <div className="text-left shadow-md flex items-center rounded-sm p-2">
        <div className='ml-2 flex flex-col text-zinc-800 mb-1'>
          <div className='text-xl font-bold'>Good Morning</div>
          <div className=' text-[0.6rem] tracking-wide text-[#b8b8b8] font-bold'>Here's your overview this week</div>
          </div>

          <div className='ml-11'>
            <input type='text' className='rounded-full bg-[#f5f5f5] pl-12 items-center w-72 placeholder:text-sm placeholder:text-zinc-600 text-zinc-600' placeholder='| Search time, days...'></input>
          </div>

          <div className='flex space-x-reverse space-x-2'>
            {/* message box and icon */}
            <div></div>
            <div></div>
            <div className='flex'>
              <div className='text-[#707184] tracking-tighter font-bold text-[0.8rem] '>Kirtan Kunwar</div>
              <div></div>
            </div>
            <div></div>
          </div>

        </div>
    </div>
  )
}

export default TopBar