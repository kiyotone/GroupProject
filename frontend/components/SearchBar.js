import { Autocomplete, Box, TextField } from '@mui/material'
import { Stack } from '@mui/system'
import React from 'react'
import {FiSearch} from "react-icons/fi"

function SearchBar({user_list}) {
  return (
  //      <div className='ml-11 flex relative'>
  //   <input type='text' className='rounded-full bg-[#f5f5f5] pl-12 items-center w-72 placeholder:text-sm placeholder:text-zinc-600 text-zinc-600' placeholder='| Search time, days...'></input>
  //   <FiSearch className="absolute text-[#858585] mt-[0.33rem] ml-[1.4rem]"/>
  // </div>

  <Stack sx={{
    width:"18rem",
    borderRadius:999,
    background:"#f5f5f5",
    paddingTop:'6px',
    marginLeft:'30px'

    }}>
      <Autocomplete id='users_' getOptionLabel={(user_list)=>`${user_list.username} ${user_list.gender}`} 
      options={user_list} 
      isOptionEqualToValue={(option,value)=>
        option.username === value.username
      }
      noOptionsText={"NO AVAILABLE USERS DAYAMN"}
      renderOption={(props,user_list)=>(
        <Box component={'li'} {...props} key={user_list.username}>
          {user_list.username} {user_list.gender}
        </Box>
      )}
      renderInput={(params)=><TextField variant="filled"  sx={{
        "& fieldset": { border: 'none' },
      }}
        
      {...params} label="Search For A User"/>}
      />
      
  </Stack>
  )
}

export default SearchBar