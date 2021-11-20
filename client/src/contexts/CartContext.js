import { createContext, useContext, useState } from "react";
const CartContext = createContext();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const addToCart = (data, findCartItem) => {
    if (!findCartItem) {
      return setItems((items) => [data, ...items]);
    }

    const filtered = items.filter((item) => item._id !== findCartItem._id);
    setItems(filtered);
  };

  const values = {
    items,
    setItems,
    addToCart,
  };

  return <CartContext.Provider value={values}>{children}</CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);
