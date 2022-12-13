import React from 'react'

function Regster() {
  return (
    <div className="flex justify-center items-center h-screen bg-gray-100">
      <form className='w-96 p-6 shadow-lg rounded-md bg-white'>
        <h1 className='text-3xl block text-center font-semibold'>
          Register
        </h1>
        <hr className='mt-3'></hr>
        <div className='mt-3'>
          <label for='username' className='block text-base mb-2'>Username</label>
          <input type='text' id='username' className='border w-full text-base px-2 py-1 focus:outline-none focus:rind-0 focus:border-gray-600 bg-white' placeholder='Enter Username'></input>
        </div>
        <div className='mt-3'>
          <label for='password' className='block text-base mb-2'>Password</label>
          <input type='password' id='password' className='border w-full text-base px-2 py-1 focus:outline-none focus:rind-0 focus:border-gray-600 bg-white' placeholder='Enter Password'></input>
        </div>
        <div className='mt-3'>
          <label for='passwordConfirmation' className='block text-base mb-2'>Password Confirmation</label>
          <input type='password' id='passwordConfirmation' className='border w-full text-base px-2 py-1 focus:outline-none focus:rind-0 focus:border-gray-600 bg-white' placeholder='Enter Password Again'></input>
        </div>
      </form>
    </div>
  )
}

export default Regster


Register.getLayout = function PageLayout(page){

  return (
      <>
          {page}
      </>
  )

}