import { useEffect, useState } from 'react';
import firebase from './firebase';

function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    const unsub = firebase
      .firestore()
      .collection('products')
      .onSnapshot((snapshot) => {
        const newProducts = snapshot.docs.map((doc) => ({
          id: doc.id,
          ...doc.data(),
        }));

        setProducts(newProducts);
      });

    return () => unsub();
  }, []);

  return products;
}

export default useProducts;