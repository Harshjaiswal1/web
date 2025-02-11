import React from 'react';
import image1 from '../assets/image1.avif';
import { LuLeafyGreen } from "react-icons/lu";
import { GiChickenOven } from "react-icons/gi";

const Card = ({name, image,id, price,type}) => {
    return (
        <div className='w-[300px] h-[400px] bg-white rounded-md shadow-xl p-3 flex flex-col gap-2 hover:border-2 border-green-300 transition duration-200'>
            <div className='w-[100%] h-[60%px] overflow-hidden'>
                <img src={image} alt="food" />
            </div>
            <div className='text-2xl font-semibold'>
                {name}
            </div>
            <div className='w-full flex justify-between items-center'>
                <div className='text-lg font-bold text-green-500 '>₹{price}</div>
                <div className='flex justify-center items-center gap-2 text-green-500 font-semibold'>{type==="veg"?<LuLeafyGreen />:<GiChickenOven />}<span>{type}</span></div>

            </div> 
            <div>
                <button className='w-full h-[40px] bg-green-500 text-white font-semibold rounded-md hover:bg-green-600'>Add to cart</button>
            </div>
        </div>
    );
}

export default Card;
