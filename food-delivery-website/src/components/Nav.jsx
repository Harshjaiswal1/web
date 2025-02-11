import React, { useContext, useEffect } from 'react';
import { MdFastfood } from "react-icons/md";
import { FaSearch } from "react-icons/fa";
import { RiShoppingBag4Line } from "react-icons/ri";
import food_items from '../food';
import { dataContext } from '../Context/UserContext';


const Nav = () => {
    const { input, setInput, cate, setCate, showCart, setShowCart } = useContext(dataContext);

    useEffect(() => {
        if (!food_items) return; // Prevents errors if food_items is undefined
        let newlist = food_items.filter((item) => 
            item.food_name.toLowerCase().includes(input.toLowerCase())
        );
        setCate(newlist);
    }, [input,setCate]);

    return (
        <div className='w-full h-[100px] flex justify-between items-center px-10'> 
            <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl'>
                <MdFastfood className='w-[30px] h-[30px] text-green-500' />
            </div>
            <form className="w-[60%] h-[60px] bg-white flex items-center rounded-md shadow-md px-5 gap-2" onSubmit={(e) => e.preventDefault()}>
                <FaSearch className='text-green-500'/>
                <input 
                    type="text" 
                    placeholder='Search for dishes' 
                    className='w-full outline-none' 
                    onChange={(e) => setInput(e.target.value)} 
                    value={input} 
                />
            </form>
            <div className='w-[60px] h-[60px] bg-white flex justify-center items-center rounded-md shadow-xl relative' onClick={() => setShowCart(true)}>
                <span className='absolute top-0 right-2 text-green-500 font-bold'>0</span>
                <RiShoppingBag4Line className='w-[30px] h-[30px] text-green-500' />
            </div>    
        </div>
    );
}

export default Nav;
