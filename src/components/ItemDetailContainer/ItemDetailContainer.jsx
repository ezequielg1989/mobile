import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import "./ItemDetailContainer.css";
import ItemDetail from "../ItemDetail/ItemDetail";
import { getFirestore } from "../../firebase/firebase";

const ItemDetailContainer = () => {
  const { itemId } = useParams();
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    setLoading(true);
    const db = getFirestore();
    const itemCollection = db.collection("celulares");
    const item = itemCollection.doc(itemId);
    item
      .get()
      .then((doc) => {
        setProduct({ id: doc.id, ...doc.data() });
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, [itemId]);

  return (
    <div className="itemDetailContainer animate__animated animate__fadeInUp">
      {loading ? <h1>Loading...</h1> : <ItemDetail product={product} />}
    </div>
    
            
  );
};

export default ItemDetailContainer;
