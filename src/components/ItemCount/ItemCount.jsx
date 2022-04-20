import React, { useState } from "react";
import "./ItemCount.css";

const ItemCount = ({ stock, initial, onAdd }) => {
  const [counter, setCounter] = useState(initial);

  const sumar = () => {
    if (counter < stock) {
      setCounter(counter + 1);
    }
  };

  const restar = () => {
    if (counter > initial) {
      setCounter(counter - 1);
    }
  };

  return (
    <div className="counter">
      <div>
        <button className="botonMenos" onClick={() => restar()}>
          -
        </button>
        {counter}
        <button className="botonMas" onClick={() => sumar()}>
          +
        </button>
      </div>
      <button className="agregarCarrito" onClick={() => onAdd(counter)}>
        Sumar al carrito
      </button>
    </div>
  );
};

export default ItemCount;
