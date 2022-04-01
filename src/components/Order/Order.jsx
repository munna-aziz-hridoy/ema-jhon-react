import React from "react";
import useCart from "../../hooks/useCart";
import useProducts from "../../hooks/useProducts";
import { removeFromDb } from "../../utilities/fakedb";
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
        <Cart data={cart} />
      </div>
    </div>
  );
};

export default Order;
