import { faArrowAltCircleRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { deleteShoppingCart, removeFromDb } from "../../utilities/fakedb";
import Cart from "../Cart/Cart";
import ProductInCart from "../ProductInCart/ProductInCart";
const Order = () => {
  const [products, setProducts] = useProducts();
  const [cart, setCart] = useCart(products);

  const handleRemove = (id) => {
    const restCart = cart.filter((item) => item.id !== id);
    setCart(restCart);
    removeFromDb(id);
  };

  const clearCart = () => {
    setCart([]);
    deleteShoppingCart();
  };

  return (
    <div className="container main-section">
      <div style={{ margin: "50px 0" }}>
        {cart.map((item) => (
          <ProductInCart
            key={item.id}
            data={item}
            handleRemove={handleRemove}
          />
        ))}
      </div>
      <div className="side-bar">
        <Cart data={cart} clearCart={clearCart}>
          <Link to="/inventory">
            <button className="review-button">
              <p>Proced to checkout</p>
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </button>
          </Link>
        </Cart>
      </div>
    </div>
  );
};

export default Order;
