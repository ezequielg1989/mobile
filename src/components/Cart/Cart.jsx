import React, { useContext, useEffect, useState, useRef } from "react";
import { Link } from "react-router-dom/cjs/react-router-dom.min";
import { contexto } from "../../Context/CartContext";
import "./Cart.css";
import { getFirestore } from "../../firebase/firebase";
import firebase from "firebase/app";

const Cart = () => {
  const { cart, removeItem, clear, totalCarrito } = useContext(contexto);
  const [total, setTotal] = useState(0);
  const [orderId, setOrderId] = useState("");

  const nameRef = useRef();
  const emailRef = useRef();
  const mobileRef = useRef();

  useEffect(() => {
    setTotal(totalCarrito());
  }, [totalCarrito]);

  const terminarCompra = (e) => {
    e.preventDefault();
    const db = getFirestore();
    const orders = db.collection("orders");

    const miOrden = {
      buyer: {
        name: nameRef.current.value,
        mobile: mobileRef.current.value,
        email: emailRef.current.value,
      },
      items: cart,
      total: total,
      date: firebase.firestore.Timestamp.fromDate(new Date()),
    };

    orders
      .add(miOrden)
      .then(({ id }) => {
        console.log("orden ingresada: " + id);
        setOrderId(id);
      })
      .catch((err) => {
        console.log(err);
      })
      .finally(() => {
        clear();
      });
  };

  return (
    <div className="divCart">
      {orderId && (
        <div className="cartCard">
          <h1>Tu orden ya fue ingresada : {orderId}</h1>
        </div>
      )}
      {cart.length === 0 ? (
        <>
          <h2>Tu carrito esta vacio...</h2>
          <h1 className="goShop">
            <Link to="/"></Link>
          </h1>
        </>
      ) : (
        <>
          <div className="cartCard">
            <h2>Total a pagar : ${total}</h2>
            {cart.map((i) => (
              <div class="card mb-3 border-radius-25" key={i.id} >
                <div class="row g-0">
                  <div class="col-md-4">
                    <img src={i.image} class="img-fluid rounded-start" alt="..."/>
                  </div>
                  <div class="col-md-8">
                    <div class="card-body">
                      <h5 class="card-title">{i.title}</h5>
                      <p class="card-text">{i.price}</p>
                      <p>cantidad del producto: {i.cantidad}</p>
                      <p>Total: ${i.price * i.cantidad}</p>
                    </div>
                    <div className="">
                      <button
                      className="botonEliminar "
                      onClick={() => removeItem(i.id)}
                      >
                        Eliminar
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            ))}
            <button className="vaciarCarrito" onClick={() => clear()}>
              Vaciar Carrito
            </button>
          </div>
          <div className="cartCard">
            <form onSubmit={terminarCompra} className="formCompra m-5">
              <h3 className="mb-4">Ingresar datos personales para la compra:</h3>

              <input
                type="text"
                name="name"
                ref={nameRef}
                placeholder="Full name"
                className="inputsForm"
                required
              />

              <input
                type="text"
                name="mobile"
                ref={mobileRef}
                placeholder="Phone number"
                className="inputsForm"
                required
              />

              <input
                type="text"
                name="email"
                ref={emailRef}
                placeholder="Email"
                className="inputsForm"
                required
              />

              <button type="submit" className="botonComprar">
                Comprar
              </button>
            </form>
          </div>
        </>
      )}
    </div>
  );
};

export default Cart;
