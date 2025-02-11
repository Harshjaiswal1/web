import React, { useState, useContext } from "react";
import Nav from "../components/Nav";
import Categories from "../Category";
import Card from "../components/Card";
import { food_items } from "../food";
import { RxCross2 } from "react-icons/rx";
import { dataContext } from '../Context/UserContext';

const Home = () => {
  const { cate, setCate, showCart, setShowCart } = useContext(dataContext);

  function filterCategory(category) {
    if (category === "All") {
      setCate(food_items);
    } else {
      const filteredData = food_items.filter(
        (item) => item.food_category === category
      );
      setCate(filteredData);
    }
  }

  function toggleCart() {
    setShowCart(!showCart);
  }

  return (
    <div className="w-[100%] min-h-screen bg-slate-200">
      <Nav />
      <div className="flex flex-wrap justify-center gap-5 w-[100%] p-10 }">
        {Categories.map((item) => {
          return (
            <div
              key={item.name} // Add key prop
              className="w-[100px] h-[100px] bg-white flex justify-center items-center rounded-md shadow-xl font-semibold hover:-translate-y-2 cursor-pointer transition duration-200"
              onClick={() => filterCategory(item.name)}
            >
              {item.image}
              {item.name}
            </div>
          );
        })}
      </div>

      <div className="flex flex-wrap justify-center gap-5 w-[100%] px-5 pb-10">
        {cate.map((item) => (
          <Card
            key={item.id} // Add key prop
            name={item.food_name}
            image={item.food_image}
            id={item.id}
            price={item.price}
            type={item.food_type}
          />
        ))}
      </div>
      <div
        className={`w-[40vw] h-[100%] fixed top-0 right-0 bg-white shadow-xl p-6 ${
          showCart ? "translate-x-0" : "translate-x-full"
        } transition duration-200`}
      >
        <header className="w-[100%] flex justify-between items-center">
          <span className="text-green-400 text-[18px] font-bold p-2">
            Order items
          </span>
          <span
            className="text-green-400 text-[25px] font-bold p-2 hover:text-green-500"
            onClick={toggleCart} // Add onClick to toggle cart visibility
          >
            <RxCross2 />
          </span>
        </header>
      </div>
    </div>
  );
};

export default Home;
