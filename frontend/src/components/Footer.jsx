import React from 'react'
import { assets } from '../assets/assets'

const Footer = () => {
    return (
        <>
            <div className=' bg-gray-600 bg-opacity-25 px-8 py-4'>
                <div className='flex justify-between gap-1'>
                    <div className='flex flex-col items-center'>
                        <img src={assets.logo} alt="" className='h-20' />
                        <p className='text-white mt-6'>Download App</p>
                        <img src={assets.playstore} alt="" className='w-[100px] h-[30px] mt-2' />
                        <img src={assets.appstore} alt="" className='w-[100px] h-[30px] mt-2' />
                    </div>
                    <div className="flex flex-col text-white">
                        <h1 className=' text-l font-semibold mb-1'>Company</h1>
                        <ul>
                            <li className='cursor-pointer mt-2'>Home</li>
                            <li className='cursor-pointer mt-2'>New Arrivals</li>
                            <li className='cursor-pointer mt-2'>Contact us</li>
                            <li className='cursor-pointer mt-2'>About us</li>
                        </ul>
                    </div>
                    <div className='flex flex-col text-white'>
                        <h1 className='text-l font-semibold mb-1'>Get in Touch</h1>
                        <ul className='mt-1'>
                            <li className='cursor-pointer mt-2'>+94 76 58 93 245</li>
                            <li className='cursor-pointer mt-2'>info.gearshift@gmail.com</li>
                        </ul>
                        <div className='flex justify-between mt-2 '>
                            <img src={assets.facebook} alt="" className='cursor-pointer' />
                            <img src={assets.linkedin} alt="" className='cursor-pointer' />
                            <img src={assets.twitter} alt="" className='cursor-pointer' />
                        </div>
                    </div>
                </div>
                <hr className='h-[1px] mt-2' />
                <div className=' p-4'>
                    <p className='text-white text-center'>© 2024 Gearshift. All Rights Reserved.</p>
                </div>
            </div>
        </>
    )
}

export default Footer