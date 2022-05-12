import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="navbar-main">
      <div className="navbar-container">
        <h1>
          <NavLink to="/">ESHOP</NavLink>
        </h1>
        <ul>
          <li>
            <NavLink className="underline" activeClassName="active" to="/">
              Home
            </NavLink>
          </li>

          <li>
            <NavLink
              className="underline"
              activeClassName="active"
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
          <button>Cart</button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
