import React, { useEffect, useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";
import { useNavigate } from "react-router-dom";

const Cart = ({ data, children, clearCart }) => {
  // const totalPrice = data.reduce((prev, curr) => {
  //   return prev + curr.price;
  // }, 0);

  let totalPrice = 0;
  let shipping = 0;
  let quantity = 0;
  for (const product of data) {
    totalPrice += product.price * product.quantity;
    shipping += product.shipping * product.quantity;
    quantity += product.quantity;
  }

  let tax = (totalPrice * 0.1).toFixed(2);

  let grandTotal = totalPrice + shipping + parseFloat(tax);
  const navigate = useNavigate();
  const handleNavigate = () => {
    navigate("/inventory");
  };

  return (
    <div className="main-cart">
      <h3 className="cart-title">Order Summary</h3>
      <div className="items">
        <p>Selected Items: {quantity}</p>
        <p>Total Price: ${totalPrice}</p>
        <p>Total Shopping Charge: ${shipping}</p>
        <p>Tax: ${tax}</p>
        <h4>Grand Total: ${grandTotal}</h4>
      </div>
      <div className="buttons">
        <button className="clear-button" onClick={clearCart}>
          <p>Clear Cart</p>
          <FontAwesomeIcon icon={faTrashCan} />
        </button>

        {children}
        <button onClick={handleNavigate}>Navigate</button>
      </div>
    </div>
  );
};

export default Cart;
