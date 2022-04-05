import React from "react";
import Item from "../Item/Item";

const ItemList = ({ products }) => {
  return (
    <>
      {products.map((product) => {
        return <Item data={product} key={product.id} />;
      })}
    </>
  );
};

export default ItemList;
