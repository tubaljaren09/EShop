import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { NavLink } from "react-router-dom";
import { addCart, delCart } from "../redux/actions";

const Cart = () => {
  const state = useSelector((state) => state.handleCart);
  const dispatch = useDispatch();

  const handleAdd = (item) => {
    dispatch(addCart(item));
  };
  const handleDel = (item) => {
    dispatch(delCart(item));
  };

  const emptyCart = () => {
    return (
      <div className="empty-main">
        <div className="empty-container">
          <div className="row">
            <h3>Your Cart is Empty</h3>
          </div>
        </div>
      </div>
    );
  };

  const cartItems = (product) => {
    return (
      <div key={product.id} className="item-main">
        <div className="item-cart">
          <div className="left">
            <img
              src={product.image}
              alt={product.title}
              height="200px"
              width="180px"
            />
          </div>
          <div className="right">
            <h3>{product.title}</h3>
            <p>
              {product.qty} X ${product.price} = $
              {product.qty * product.price.toFixed(2)}
            </p>
            <br />
            <button onClick={() => handleAdd(product)}>+</button>
            <button onClick={() => handleDel(product)}>-</button>
          </div>
        </div>
      </div>
    );
  };
  const buttons = () => {
    return (
      <div className="container">
        <div className="row">
          <button>
            <NavLink to="/checkout">Proceed to Checkout</NavLink>
          </button>
        </div>
      </div>
    );
  };

  return (
    <div className="cart-main">
      {state.length === 0 && emptyCart()}
      {state.length !== 0 && state.map(cartItems)}
      {state.length !== 0 && buttons()}
    </div>
  );
};

export default Cart;
