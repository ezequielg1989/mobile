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
        <h4>{product.title}</h4>
        <p>{product.description}</p>
        <h5>USD${product.price}</h5>
        <div>
          {irAlCarrito ? (
            <Link to="/cart" className="verCarrito">
              Mostrar carrito
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
