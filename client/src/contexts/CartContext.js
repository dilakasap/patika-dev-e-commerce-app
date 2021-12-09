import { createContext, useContext, useEffect, useState } from "react";
const CartContext = createContext();

const defaultCart= JSON.parse(localStorage.getItem("cart")) || [];

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState(defaultCart);

  useEffect(()=>{
    localStorage.setItem("cart", JSON.stringify(items));
  },[items])

  const addToCart = (data, findCartItem) => {
    if (!findCartItem) {
      return setItems((items) => [data, ...items]);
    }

    const filtered = items.filter((item) => item._id !== findCartItem._id);
    setItems(filtered);
  };
  const removeFromCart= (id) => {
    const filtered= items.filter((item)=> item._id !== id);
    setItems(filtered);
  }

  const clearCart = () =>{
    setItems([]);
  }

  const values = {
    items,
    setItems,
    addToCart,
    removeFromCart,
    clearCart,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
