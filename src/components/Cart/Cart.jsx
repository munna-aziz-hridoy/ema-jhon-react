import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashCan,
  faArrowAltCircleRight,
} from "@fortawesome/free-solid-svg-icons";
import "./Cart.css";

const Cart = ({ data }) => {
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
        <button className="clear-button">
          <p>Clear Cart</p>
          <FontAwesomeIcon icon={faTrashCan} />
        </button>
        <button className="review-button">
          <p>Review Order</p>
          <FontAwesomeIcon icon={faArrowAltCircleRight} />
        </button>
      </div>
    </div>
  );
};

export default Cart;
