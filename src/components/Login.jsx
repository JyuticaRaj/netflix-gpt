import React, { useState } from "react";
import Header from "./Header";

const Login = () => {
  const [isSignInForm, setSignInForm] = useState(true);

  const toggleSignForm = () => {
    setSignInForm(!isSignInForm);
  };

  return (
    <div className="relative w-screen h-screen">
      <Header />

      {/* Background Image */}
      <img
        className="absolute w-full h-full object-cover"
        src="https://assets.nflxext.com/ffe/siteui/vlv3/4ffe3d37-1fc1-4d93-b61a-1fa58c11ccff/web/IN-en-20251124-TRIFECTA-perspective_9f00d07d-f08e-494f-8907-92371138c534_large.jpg"
        alt="background"
      />

      {/* Overlay to darken background */}
      <div className="absolute w-full h-full bg-black/60"></div>

      {/* Login / Sign Up Form */}
      <form
        className="w-96 absolute top-1/2 left-1/2 
        -translate-x-1/2 -translate-y-1/2
        p-12 bg-black/70 text-white rounded-lg shadow-xl"
      >
        <h1 className="font-bold text-3xl py-4">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </h1>

        {/* Full Name only for SignUp */}
        {!isSignInForm && (
          <input
            type="text"
            placeholder="Full Name"
            className="p-4 my-3 w-full bg-gray-700 rounded"
          />
        )}

        <input
          type="text"
          placeholder="Email Address"
          className="p-4 my-3 w-full bg-gray-700 rounded"
        />

        <input
          type="password"
          placeholder="Password"
          className="p-4 my-3 w-full bg-gray-700 rounded"
        />

        <button className="p-4 my-4 bg-red-700 w-full rounded-lg hover:bg-red-800">
          {isSignInForm ? "Sign In" : "Sign Up"}
        </button>

        <p className="py-2 cursor-pointer text-gray-300" onClick={toggleSignForm}>
          {isSignInForm
            ? "New to Netflix? Sign Up Now"
            : "Already registered? Sign In Now."}
        </p>
      </form>
    </div>
  );
};

export default Login;
