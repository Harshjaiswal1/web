import { MdFreeBreakfast } from "react-icons/md";
import { TiThSmall } from "react-icons/ti";
import { TbSoupFilled } from "react-icons/tb";
import { MdRamenDining } from "react-icons/md";
import { GiFullPizza } from "react-icons/gi";
import { GiHamburger } from "react-icons/gi";
import { GiMeal } from "react-icons/gi";

export const Categories = [
    {
        id: 1,
        name: 'All',
        image: <TiThSmall   className="h-[50px] w-[50px] text-green-500" />
    },
    {
        id: 2,
        name: 'Breakfast',
        image:  <MdFreeBreakfast className="h-[50px] w-[50px] text-green-500"/>
    },
    {
        id: 3,
        name: 'Soup',
        image:  <TbSoupFilled className="h-[50px] w-[50px] text-green-500"/>
    },
    {
        id: 4,
        name: 'Pastas',
        image:  <MdRamenDining className="h-[50px] w-[50px] text-green-500"/>
    },
    {
        id: 5,
        name: 'Main Course',
        image:  <GiMeal className="h-[50px] w-[50px] text-green-500"/>
    },
    {
        id: 6,
        name: 'Pizzas',
        image: <GiFullPizza className="h-[50px] w-[50px] text-green-500"/>
    },
    {
        id: 7,
        name: 'Burgers',
        image:  <GiHamburger className="h-[50px] w-[50px] text-green-500"/>
    },
     
]

export default Categories;