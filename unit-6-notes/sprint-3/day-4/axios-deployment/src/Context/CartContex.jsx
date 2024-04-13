import React, { useState } from 'react'
import {createContext} from 'react'

export const CartContex=createContext();

const CartContexProvider = ({children}) => {
  const [cartValue,setCartValue]=useState(0);

    const updateCart=(value)=>{
        setCartValue(value+cartValue);
    }
    return (
    <CartContex.Provider value={{updateCart,cartValue}}>
        {children}
    </CartContex.Provider>
  )
}

export default CartContexProvider