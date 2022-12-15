import React, { useState } from 'react'
import { useRouter } from 'next/router';
import axios from 'axios';



function Register() 
{
  
  const router = useRouter();

  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

  const handleRegister = async (e) =>{
        e.preventDefault();

        const data = {
          "username":username,
          "password":password
        }  
        console.log(data)

        try {
          const response = await axios.post('/auth/register', data)
          if (typeof window !== 'undefined') {
            localStorage.setItem('refresh-token', response.data.refresh)
            localStorage.setItem('access-token', response.data.access)
          }
          axios.defaults.headers.common['Authorization'] = 'Bearer ' + response.data.access
          console.log(response.data)
        } catch (error) {
          console.log(error)
        }
        router.push('/Dashboard')

  }
  
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className='w-96 p-6 shadow-lg rounded-md bg-white'>
        <h1 className='text-3xl block text-center font-semibold'>
          Register
        </h1>
        <hr className='mt-3'></hr>
        <div className='mt-3'>
          <label htmlFor='username' className='block text-base mb-2'>Username</label>
          <input type='text' id='username' onChange={(e)=>setUsername(e.target.value)} className='border w-full text-base px-2 py-1 focus:outline-none focus:rind-0 focus:border-gray-600 bg-white' placeholder='Enter Username'></input>
        </div>
        <div className='mt-3'>
          <label htmlFor='password' className='block text-base mb-2'>Password</label>
          <input type='password' id='password' onChange={(e)=>setPassword(e.target.value)} className='border w-full text-base px-2 py-1 focus:outline-none focus:rind-0 focus:border-gray-600 bg-white' placeholder='Enter Password'></input>
        </div>
        <div className='mt-3'>
          <label htmlFor='passwordConfirmation' className='block text-base mb-2'>Password Confirmation</label>
          <input type='password' id='passwordConfirmation' className='border w-full text-base px-2 py-1 focus:outline-none focus:rind-0 focus:border-gray-600 bg-white' placeholder='Enter Password Again'></input>
        </div>
        <div className='mt-3 h-10 flex justify-center w-full items-center'>
        <button className='mt-3 rounded-full w-40 h-10 bg-[#734bf9] mb-2' value="Register" onClick={handleRegister}>Register</button>
        </div>
      </form>
    </div>
  )
}

export default Register


Register.getLayout = function PageLayout(page){

  return (
      <>
          {page}
      </>
  )

}