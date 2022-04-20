import React, { useContext } from "react";
import "./NavBar.css";
import { NavLink } from "react-router-dom";
import { contexto } from "../../Context/CartContext";

const NavBar = () => {
  const { totalItemsCart } = useContext(contexto);

  return (
    <div className="navbar">
      <NavLink to="/">
        <h2>MobileStore</h2>
      </NavLink>
      <ul className="navLinks">
        <li>
          <NavLink
            to="/category/Samsung"
            className="navLink negrita"
            activeClassName="currentCategory"
          >
            Samsung
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/category/Motorola"
            className="navLink negrita"
            activeClassName="currentCategory"
          >
            Motorola
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/cart"
            className="navLink"
            activeClassName="currentCategory"
          >
            <i className="bi bi-cart3"></i>
            <span className="negrita">({totalItemsCart()})</span>
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavBar;
