import React from "react";
import "./PorductInCart.css";

const ProductInCart = ({ data, handleRemove }) => {
  const { id, name, img, price, quantity, shipping } = data;
  return (
    <div className="cart-product">
      <div className="product-info">
        <div className="product-img">
          <img src={img} alt="" />
        </div>
        <div className="product-description">
          <h4>{name}</h4>
          <p>Price: ${price}</p>
          <p>Quantity: {quantity}</p>
          <p>Shipping: ${shipping}</p>
        </div>
      </div>
      <div className="delete-button">
        <button onClick={() => handleRemove(id)}>Delete</button>
      </div>
    </div>
  );
};

export default ProductInCart;
