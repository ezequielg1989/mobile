import React, { createContext, useState } from "react";

export const contexto = createContext();

const CartContext = ({ children }) => {
  const [cart, setCart] = useState([]);

  const addItem = (producto, cantidad) => {
    if (isInCart(producto.id)) {
      const indexItem = cart.findIndex((e) => e.id === producto.id);
      cart[indexItem].cantidad = cart[indexItem].cantidad + cantidad;
      setCart([...cart]);
    } else {
      setCart([...cart, { ...producto, cantidad }]);
    }
  };

  const isInCart = (id) => {
    return cart.some((i) => i.id === id);
  };

  const removeItem = (id) => {
    const carritoActualizado = cart.filter((e) => e.id !== id);
    setCart(carritoActualizado);
  };

  const clear = () => {
    setCart([]);
  };

  const totalCarrito = () => {
    return cart
      .map((item) => item.price * item.cantidad)
      .reduce((acum, valor) => acum + valor, 0);
  };

  const totalItemsCart = () => {
    return cart.reduce((acum, producto) => {
      return acum + producto.cantidad;
    }, 0);
  };

  return (
    <contexto.Provider
      value={{ cart, addItem, removeItem, clear, totalCarrito, totalItemsCart }}
    >
      {children}
    </contexto.Provider>
  );
};

export default CartContext;
