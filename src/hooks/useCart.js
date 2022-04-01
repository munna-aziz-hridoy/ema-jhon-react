import { useEffect, useState } from "react";
import { getItem } from "../utilities/fakedb";

const useCart = (products) => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const storedItemId = getItem();
    const storedProducts = [];
    for (const id in storedItemId) {
      const addedProduct = products.find((product) => product.id === id);
      if (addedProduct) {
        addedProduct.quantity = storedItemId[id];
        storedProducts.push(addedProduct);
      }
    }
    setCart(storedProducts);
  }, [products]);
  return [cart, setCart];
};

export default useCart;
