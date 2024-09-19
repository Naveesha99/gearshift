import React from 'react'
import { Link } from 'react-router-dom'
import { assets } from '../assets/assets.js'


const Navbar = () => {
    return (
        <nav className="bg-black p-4 flex items-center justify-between fixed top-0 w-full z-10">
            <div className="flex items-center">
                <img src={assets.logo} alt="Logo" className="h-12 w-30" />
            </div>
            <div className="flex space-x-6">
                <Link to="/" className="text-white hover:text-purple-800">
                    Home
                </Link>
                <Link to="/new-arrivals" className="text-white hover:text-purple-800">
                    New Arrivals
                </Link>
                <Link to="/contact-us" className="text-white hover:text-purple-800">
                Contact Us
                </Link>
                <Link to="/about-us" className="text-white hover:text-purple-800">
                About Us
                </Link>
            </div>
            <div className="flex space-x-6">
                <button className="text-black px-4 py-2 bg-white">
                    Login
                </button>
            </div>
        </nav>
    )
}

export default Navbar