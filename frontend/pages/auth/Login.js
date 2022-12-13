import React, { useState } from 'react'

function Login() 
{
  const [username,setUsername] = useState("");
  const [password,setPassword] = useState("");

const handleLogin = async (e)=>{
    e.preventDefault();
    const data = {
      "username":username,
      "password":password
    }  
    console.log(username,password);
    const response = await fetch('http://127.0.0.1:8000/auth/token',{
        method:'POST',
        headers:{
          'Content-Type': 'application/json',
        },
        body:JSON.stringify(data)
      })
      
      const details = await response.json();
      console.log(details)
}

  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className='w-96 p-6 shadow-lg rounded-md bg-white'>
        <h1 className='text-3xl block text-center font-semibold'>
          Login
        </h1>
        <hr className='mt-3'></hr>
        <div className='mt-3'>
          <label for='username' className='block text-base mb-2'>Username</label>
          <input type='text' onChange={(e)=>setUsername(e.target.value)} id='username' className='border w-full text-base px-2 py-1 focus:outline-none focus:rind-0 focus:border-gray-600 bg-white' placeholder='Enter Username'></input>
        </div>
        <div className='mt-3'>
          <label for='password'  className='block text-base mb-2'>Password</label>
          <input type='password' onChange={(e)=>setPassword(e.target.value)} id='password' className='border w-full text-base px-2 py-1 focus:outline-none focus:rind-0 focus:border-gray-600 bg-white' placeholder='Enter Password'></input>
        </div>

        <button className='mt-3 rounded-full w-40 h-10 bg-[#734bf9] mb-2' value="Register" onClick={handleLogin}>Register</button>
      </form>
    </div>
  )
}

export default Login

Login.getLayout = function PageLayout(page){
  return (
    <>
      {page}
    </>
  )
}