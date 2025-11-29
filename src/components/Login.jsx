import React, { useState } from 'react'
import Header from './Header'

const Login = () => {
    const[isSignInForm,setSignInForm ]=useState(true);
    const toggleSignForm=()=>{
           setSignInForm(!isSignInForm)
    }
  return (
    <div className="relative w-screen h-screen">
      <Header />

      {/* Background Image */}
      <img
        className="absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/4ffe3d37-1fc1-4d93-b61a-1fa58c11ccff/web/IN-en-20251124-TRIFECTA-perspective_9f00d07d-f08e-494f-8907-92371138c534_large.jpg"
        alt="background"
      />

      {/* Login Form */}
      <form className="w-3/12 absolute p-12 bg-black/60 mt-36 mx-auto right-0 left-0 text-white rounded-lg z-1">
        <h1 className="font-bold text-3xl py-4">{isSignInForm ? "Sign In":"Sign Up"}</h1>
  
       {!isSignInForm && <input
          type="text"
          placeholder="Full Name"
          className="p-4 my-4 w-full bg-gray-700"
        />}
       
       
        <input
          type="text"
          placeholder="Email id"
          className="p-4 my-4 w-full bg-gray-700"
        />
        

        <input
          type="password"
          placeholder="Password"
          className="p-4 my-4 w-full bg-gray-700"
        />

        <button className="p-4 my-4 bg-red-700 w-full rounded-lg">
          {isSignInForm ? "Sign In":"Sign Up"}
        </button>
        <p className='py-4 cursor-pointer'onClick={toggleSignForm}>
         {isSignInForm ? "New to Netflix? signUp Now":"Already registered? sign In Now."}</p>
      </form>
    </div>
  )
}

export default Login
