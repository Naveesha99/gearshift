import React from 'react';
import { car_list } from '../assets/assets';
import CarCard from './CarCard';

// Define the structure of car_list (same as CarCardProps)
interface CarItem {
  _id: string;
  brand: string;
  model: string;
  price: string;
  image: string;
  fuel: string;
  location: string;
}

const CarDisplay: React.FC = () => {
  return (
    <>
      <div className="flex flex-col pt-4 mt-16">
        <p className="text-white text-4xl font-semibold text-center">OUR COLLECTION CARS</p>
      </div>
      <div className="overflow-x-auto mt-10">
        <div className="grid grid-cols-3 mt-8 gap-x-10 gap-y-12 mx-10 my-6">
          {car_list.map((item: CarItem, index) => (
            <CarCard
              key={index}
              id={item._id}
              brand={item.brand}
              model={item.model}
              price={item.price}
              image={item.image}
              fuel={item.fuel}
              location={item.location}
            />
          ))}
        </div>
      </div>
    </>
  );
}

export default CarDisplay;
