import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/Logo.svg";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-bar container">
        <div className="logo">
          <img src={logo} alt="" />
        </div>
        <ul className="menu-container">
          <li className="menu-item">
            <Link to="/">Home</Link>
          </li>
          <li className="menu-item">
            <Link to="/shop">Shop</Link>
          </li>
          <li className="menu-item">
            <Link to="/order">Order</Link>
          </li>
          <li className="menu-item">
            <Link to="/inventory">Inventory</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
