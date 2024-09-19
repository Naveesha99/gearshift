import React from 'react';
import { assets } from '../assets/assets';

// Define the type for CarCard props
interface CarCardProps {
    id: string;
    brand: string;
    model: string;
    price: string;
    image: string;
    fuel: string;
    location: string;
}

// Use destructuring with typed props
const CarCard: React.FC<CarCardProps> = ({ id, brand, model, price, image, fuel, location }) => {
    return (
        <div className='w-full mx-auto rounded-l bg-gray-600 bg-opacity-25 fade-in'>
            <div className='relative'>
                <img
                    src={image}
                    alt=""
                    className='w-full h-[400px] object-cover rounded-sm' // Set a fixed height and use object-cover
                />
            </div>
            <div className='flex justify-between p-4 text-white text-l '>
                <div className='flex flex-col gap-2'>
                    <p className='text-xl'>{price} LKR</p>
                    <p>{brand} {model}</p>
                </div>
                <div>
                    <div className='flex justify-between gap-2'>
                    <img src={assets.location} alt="" className='h-[20px]' />
                    <p>{location}</p>
                    </div>
                    {/* <p>{fuel}</p> */}
                </div>
            </div>
            <button className='border-none text-black font-medium px-[2.3vw] py-[1vw] bg-white text-[max(1vw,13px)] w-full mt-6'>More Details</button>
        </div>
    );
}

export default CarCard;
