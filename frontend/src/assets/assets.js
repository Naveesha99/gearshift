import logo from './logo.png';
import header_img from './header.png';
import range from './range.jpeg';
import bmw from './bmw.jpeg';
import appstore from './app_store.png';
import playstore from './play_store.png';
import facebook from './facebook_icon.png'
import linkedin from './linkedin_icon.png'
import twitter from './twitter_icon.png'
import location from './location.png'
import register_bg from './register_bg.jpeg'
import arrow from './Arrow.png'


import bmw520d from'./bmw520d.jpeg'
import bmwX1 from './X1.jpeg'
import supra from './Supra.jpeg'
import civic from './civic.jpeg'

export const assets = {
    logo,
    header_img,
    range,
    bmw,
    appstore,
    playstore,
    facebook,
    linkedin,
    twitter,
    location,
    register_bg,
    arrow
}

export const car_list = [
    {
        _id: "1",
        brand: "BMW",
        model: "520d",
        price: "23675000",
        image: bmw520d,
        category: "Sedan",
        fuel: "Diesel",
        engine: "1995 cc",
        power: "190 bhp",
        seats: "5",
        transmission: "Automatic",
        mileage: "16.13 kmpl",
        boot: "430 L",
        location: "Colombo",
        description: "The BMW 5 Series is a 5-seater car that comes with a price tag of ₹ 55.4 Lakh. It is available in 1 variant and 3 colours. The BMW 5 Series is available in 1998 cc engine with 1 fuel type options: Petrol and 1 transmission option: Automatic. Other key specifications of the 5 Series include a Ground Clearance of 158 mm, Kerb Weight of 1660 kg and Bootspace of 530 litres."
    },

    {
        _id: "2",
        brand: "BMW",
        model: "X1",
        price: "3690000",
        image: bmwX1,
        category: "SUV",
        fuel: "Diesel",
        engine: "1995 cc",
        power: "190 bhp",
        seats: "5",
        transmission: "Automatic",
        mileage: "19.62 kmpl",
        boot: "505 L",
        location: "Matara",
        description: "The BMW X1 is a 5-seater car that comes with a price tag of ₹ 36.9 Lakh. It is available in 1 variant and 3 colours. The BMW X1 is available in 1995 cc engine with 1 fuel type options: Diesel and 1 transmission option: Automatic. Other key specifications of the X1 include a Ground Clearance of 183 mm, Kerb Weight of 1660 kg and Bootspace of 505 litres."
    },

    {
        _id: "3",
        brand: "Toyota",
        model: "Supra",
        price: "8400000",
        image: supra,
        category: "Sports",
        fuel: "Petrol",
        engine: "2998 cc",
        power: "335 bhp",
        seats: "2",
        transmission: "Automatic",
        mileage: "10.2 kmpl",
        boot: "290 L",
        location: "Kandy",
        description: "The Toyota Supra is a 2-seater car that comes with a price tag of ₹ 84.9 Lakh. It is available in 1 variant and 3 colours. The Supra is available in 2998 cc engine with 1 fuel type options: Petrol and 1 transmission option: Automatic. Other key specifications of the Supra include a Ground Clearance of 119 mm, Kerb Weight of 1495 kg and Bootspace of 290 litres."
    },

    {
        _id: "4",
        brand: "Honda",
        model: "Civic",
        price: "1790000",
        image: civic,
        category: "Sedan",
        fuel: "Petrol",
        engine: "1799 cc",
        power: "139 bhp",
        seats: "5",
        transmission: "Automatic",
        mileage: "16.5 kmpl",
        boot: "430 L",
        location: "Galle",
        description: "The Honda Civic is a 5-seater car that comes with a price tag of ₹ 17.93 Lakh. It is available in 1 variant and 5 colours. The Civic is available in 1799 cc engine with 1 fuel type options: Petrol and 1 transmission option: Automatic. Other key specifications of the Civic include a Ground Clearance of 171 mm, Kerb Weight of 1268 kg and Bootspace of 430 litres."
    }
]