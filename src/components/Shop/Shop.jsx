import React, { useEffect, useState } from "react";
import Cart from "../Cart/Cart";
import Product from "../Product/Product";
import { addToDb, getItem } from "../../utilities/fakedb";
import "./Shop.css";

const Shop = () => {
  const [products, setProducts] = useState([]);
  const [cart, setCart] = useState([]);
  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => setProducts(data));
  }, []);

  useEffect(() => {
    const storedCart = getItem();
    const storedProducts = [];
    for (let id in storedCart) {
      const storedItem = products.find((product) => product.id === id);
      if (storedItem) {
        storedItem.quantity = storedCart[id];
        storedProducts.push(storedItem);
      }
    }
    setCart(storedProducts);
  }, [products]);

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
        <Cart data={cart} />
      </div>
    </div>
  );
};

export default Shop;
