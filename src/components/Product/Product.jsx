import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faShoppingCart } from "@fortawesome/free-solid-svg-icons";
import "./Product.css";

const Product = ({ handleAddToCart, product }) => {
  const { name, price, ratings, seller, img } = product;
  return (
    <div className="product-card">
      <div className="product-img">
        <img src={img} alt="" />
      </div>
      <h6 className="product-title">{name}</h6>
      <p className="product-price">Price: ${price}</p>
      <div className="product-footer">
        <p className="product-brand">Manufacturer: {seller}</p>
        <p className="product-rating">Rating: {ratings}</p>
        <button
          className="add-to-cart"
          onClick={() => handleAddToCart(product)}
        >
          <p>add to cart</p>
          <FontAwesomeIcon icon={faShoppingCart} />
        </button>
      </div>
    </div>
  );
};

export default Product;
