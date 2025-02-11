import React, { createContext, useState } from 'react';

export const dataContext = createContext();

const UserContext = ({ children }) => {
    let [input, setInput] = useState("");
    let [cate, setCate] = useState([]);
    let [showCart, setShowCart] = useState(false);


    let data = {
        input,
        setInput,
        cate,
        setCate,
        showCart,
        setShowCart
    };

    return (
        <dataContext.Provider value={data}>
            {children}
        </dataContext.Provider>
    );
}

export default UserContext;
