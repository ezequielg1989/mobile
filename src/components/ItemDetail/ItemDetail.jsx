import React, { useContext, useState } from "react";
import "./ItemDetail.css";
import ItemCount from "../ItemCount/ItemCount";
import { Link } from "react-router-dom";
import { contexto } from "../../Context/CartContext";


const ItemDetail = ({ product }) => {
  const [irAlCarrito, setIrAlCarrito] = useState(false);
  const { addItem } = useContext(contexto);

  const onAdd = (cantidad) => {
    addItem(product, cantidad);
    setIrAlCarrito(true);
  };
  return (
    <div className="productoCard">
      <div className="imgContainer">
        <img src={product.image} alt="productImg" className="img" width={100} />
      </div>
      <div className="descripcionContainer">
        <h2>{product.title}</h2>
        <p>{product.description}</p>
        <h1>USD${product.price}</h1>
        <div>
          {irAlCarrito ? (
            <Link to="/cart" className="verCarrito">
              Show cart
            </Link>
          ) : (
            <ItemCount stock={5} initial={1} onAdd={onAdd} />
          )}
        </div>
      </div>
    </div>
  );
};

export default ItemDetail;
