import React from "react";
import { Link } from "react-router-dom";
import "./Item.css";


const Item = ({ data }) => {
  return (
    <div className="itemCard ">
      <div className="contenedorImg">
        <img src={data.image} alt="#" className="imagen" />
      </div>
      <div className="contain-desc">
        <div className="descItem ">
            <h5>{data.title}</h5>
            <h5>USD${data.price}</h5>
            <Link to={`/detalle/${data.id}`} className="linkDetalle">
              Ver detalle
            </Link>
        </div>
      </div>
    </div>
  );
};

export default Item;
