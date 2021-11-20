import { createContex, useContext, useState } from "react";
const CartContext = createContex();

export const CartProvider = ({ children }) => {
  const [items, setItems] = useState([]);

  const values = {
    items,
    setItems,
  };

  return <CartContext.Provider value={values}></CartContext.Provider>;
};

export const useCart = () => useContext(CartContext);

