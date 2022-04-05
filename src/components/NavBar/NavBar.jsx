import React, { useContext } from "react";
import "./NavBar.css";
import CartWidget from "../CartWidget/CartWidget";
import { NavLink } from "react-router-dom";
import { contexto } from "../../Context/CartContext";

const NavBar = () => {
  const { totalItemsCart } = useContext(contexto);

  return (
    <div className="navbar">
      <NavLink to="/">
        <h2>MobileApple</h2>
      </NavLink>
      <ul className="navLinks">
        <li>
          <NavLink
            to="/category/iphone13"
            className="navLink negrita"
            activeClassName="currentCategory"
          >
            Iphone 13
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category/iphone12"
            className="navLink negrita"
            activeClassName="currentCategory"
          >
            Iphone 12
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className="navLink"
            activeClassName="currentCategory"
          >
            <CartWidget />
            <span className="negrita">({totalItemsCart()})</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
