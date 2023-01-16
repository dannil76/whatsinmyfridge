import { useEffect, useState } from "react";

import firebase from "../services/firebase";

function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const unsub = firebase
      .firestore()
      .collection("products")
      .onSnapshot((snapshot) => {
        const newProducts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(newProducts);
      });

    return () => unsub();
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
