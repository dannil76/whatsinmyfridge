import { useEffect, useState } from "react";
import Products from "../mocks/Products";

function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(Products);
  }, []);

  products.sort((a, b) => {
    const cA = a.category.toUpperCase();
    const cB = b.category.toUpperCase();

    if (cA < cB) return -1;
    if (cA > cB) return 1;

    const nA = a.name.toUpperCase();
    const nB = b.name.toUpperCase();

    if (nA < nB) return -1;
    if (nA > nB) return 1;

    return 0;
  });

  return products;
}

export default useProducts;
