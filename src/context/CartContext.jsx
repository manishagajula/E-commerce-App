import { createContext, useContext, useReducer } from "react";
import { useState } from "react";

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState([]);
  const [wishListItems, setWishListItems] = useState([]);
  const [category, setCategory] = useState([]);

  return (
    <CartContext.Provider
      value={{
        cartItems,
        setCartItems,
        wishListItems,
        setWishListItems,
        category,
        setCategory,
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
