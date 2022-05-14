import React from "react";
import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";

const Navbar = () => {
  const state = useSelector((state) => state.handleCart);
  return (
    <div className="navbar-main">
      <div className="navbar-container">
        <h1>
          <NavLink to="/">ESHOP</NavLink>
        </h1>
        <ul>
          <li className="underline">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/"
            >
              Home
            </NavLink>
          </li>

          <li className="underline">
            <NavLink
              className={({ isActive }) => (isActive ? "active" : "")}
              to="/products"
            >
              Products
            </NavLink>
          </li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className="button-container">
          <button>Login</button>
          <button>Register</button>
          <button>
            <NavLink to="/cart">Cart ({state.length})</NavLink>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
