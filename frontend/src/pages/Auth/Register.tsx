import React, { useState } from 'react'
import { assets } from '../../assets/assets'
import { useNavigate } from 'react-router-dom'

const Register = () => {

    const [currentStatus, setCurrentStatus] = useState('signup')
    const navigate = useNavigate();
  return (
    <div className="min-h-screen flex items-center justify-center bg-clack">
      <div className="bg-black rounded-lg shadow-lg w-full max-w-4xl flex overflow-hidden">
        {/* Left Side - Form */}

        <div className="w-1/2 p-8 bg-gray-500 bg-opacity-15">

        {currentStatus === 'signup' 
        ? (
          <>
            <h2 className="text-3xl font-semibold text-white mb-6">Create an account</h2>
            <p className="text-gray-400 mb-4">
              Already have an account?{' '}
              <span onClick={()=>setCurrentStatus('login')} className="text-white hover:underline cursor-pointer">
                Log in
              </span>
            </p>
          </>
        ) :<>
        <h2 className="text-3xl font-semibold text-white mb-6">Login your account</h2>
        <p className="text-gray-400 mb-4">
          Don't have an account?{' '}
          <span onClick={()=>setCurrentStatus('signup')} className="text-white hover:underline cursor-pointer">
            Sign up
          </span>
        </p>
      </> }
          
          <form>

            {currentStatus === 'signup'
            ? <div className="flex space-x-4 mb-4">
            <input
              type="text"
              placeholder="First name"
              className="w-1/2 p-3 rounded-lg bg-gray-800 bg-opacity-15 text-white border border-gray-600"
            />
            <input
              type="text"
              placeholder="Last name"
              className="w-1/2 p-3 rounded-lg bg-gray-800 bg-opacity-15 text-white border border-gray-600"
            />
          </div> : <></> }
            
            <div className="mb-4">
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-15 text-white border border-gray-600"
              />
            </div>
            <div className="mb-4 relative">
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full p-3 rounded-lg bg-gray-800 bg-opacity-15 text-white border border-gray-600"
              />
              <div className="absolute right-3 top-3">
                <i className="far fa-eye text-gray-400"></i>
              </div>
            </div>
            <div className="mb-6 flex items-center">
              <input type="checkbox" id="terms" className="mr-2" />
              <label htmlFor="terms" className="text-gray-400">
                I agree to the{' '}
                <span  className="text-white hover:underline cursor-pointer">
                  Terms & Conditions
                </span>
              </label>
            </div>
            {currentStatus === 'signup' ? <button
              type="submit"
              className="w-full p-3 bg-white text-black"
            >
              Create account
            </button> : <button
              type="submit"
              className="w-full p-3 bg-white text-black"
            >
              Log in
            </button> }
            
          </form>

          <div className="mt-6 text-center">
            <p className="text-gray-400 mb-2">Or register with</p>
            <div className="flex space-x-4 justify-center">
              <button className="flex items-center px-4 py-2 bg-gray-800 rounded-lg text-white hover:bg-gray-600">
                <i className="fab fa-google mr-2"></i> Google
              </button>
              <button className="flex items-center px-4 py-2 bg-gray-800 rounded-lg text-white hover:bg-gray-600">
                <i className="fab fa-apple mr-2"></i> Apple
              </button>
            </div>
          </div>
        </div>

        
        {/* Right Side - Image and Text */}
        <div className="w-1/2 relative">
          <img
            src={assets.register_bg}
            alt="Placeholder"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-60"></div>
          <div className="absolute inset-0 flex flex-col items-center justify-center text-white p-6">
            <h1 className="text-3xl font-semibold">Capturing Moments, Creating Memories</h1>
            <button onClick={()=>navigate("/")} className="absolute flex justify-between gap-2 right-2 top-2 bg-gray-500 bg-opacity-30 p-2 rounded-full text-white text-sm">
              Back to website <span><img src={assets.arrow} alt=""  className='h-[18px] mt-[1px]'/></span>
            </button>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Register