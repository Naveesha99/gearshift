import React from 'react'
import { assets } from '../assets/assets'

const Header = () => {
    return (
        <div className="relative h-screen w-[95%] mx-auto">
            <div className="flex items-center justify-between gap-8 fade-in mt-[130px]">
                <img src={assets.bmw} alt="" className='w-1/4 h-[550px] mt-[-100px]' />
                <img src={assets.range} alt="" className='w-1/4 h-[550px] mt-[60px]' />
                <div className='text-right flex flex-col items-end'>
                    <h2 className="font-medium text-white text-[max(4.5vw,22px)] mt-6">
                        Drive Your Dreams Today
                    </h2>
                    <p className="text-white text-[1.5vw] mb-8">
                        Discover unbeatable deals on the car of your dreams with <br /> our extensive selection, exceptional customer service, <br /> and hassle-free financing options
                    </p>
                    <div className="flex gap-4">
                        <button className="border border-purple-800 text-purple-800 bg-transparent font-medium px-[2.3vw] py-[1vw]text-[max(1vw,13px)] w-40">
                            Register
                        </button>
                        <button className="border-none text-black font-medium px-[2.3vw] py-[1vw] bg-purple-800 text-[max(1vw,13px)] w-40">
                            Shop Now
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Header