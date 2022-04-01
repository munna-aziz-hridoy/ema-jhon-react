import React from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { addToDb, deleteShoppingCart } from "../../utilities/fakedb";
import "./Shop.css";
import useProducts from "../../hooks/useProducts";
import useCart from "../../hooks/useCart";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";

const Shop = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  const handleAddToCart = (selectedProduct) => {
    let newCart = [];
    const exists = cart.find((product) => product.id === selectedProduct.id);
    if (!exists) {
      selectedProduct.quantity = 1;
      newCart = [...cart, selectedProduct];
    } else {
      exists.quantity += 1;
      const rest = cart.filter((product) => product.id !== selectedProduct.id);
      newCart = [...rest, exists];
    }
    setCart(newCart);
    addToDb(selectedProduct.id);
  };

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="container main-section">
      <div className="shop-section">
        {products.map((product) => (
          <Product
            key={product.id}
            product={product}
            handleAddToCart={handleAddToCart}
          />
        ))}
      </div>
      <div className="side-bar">
        <Cart data={cart} clearCart={clearCart}>
          <Link to="/order">
            <button className="review-button">
              <p>Review Order</p>
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Shop;
