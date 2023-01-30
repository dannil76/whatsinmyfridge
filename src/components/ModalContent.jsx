import React, { useState, useEffect } from "react";

import ProductForm from "./ProductForm/ProductForm";
import firebase from "../services/firebase";

function ModalContent({ selectedProduct, products }) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [stocked, setStocked] = useState(false);

  useEffect(() => {
    const product = products.find((product) => product.id === selectedProduct);
    setName(product.name);
    setCategory(product.category);
    setStocked(product.stocked);
  }, [products, selectedProduct]);


  const handleSubmitForm = (event) => {
    event.preventDefault();

    // if (selectedProduct) {
    //   firebase
    //     .firestore()
    //     .collection("products")
    //     .doc(selectedProduct.id)
    //     .update({
    //       name,
    //       category,
    //       stocked,
    //     })
    //     .then(() => {
    //       setName("");
    //       setCategory("");
    //       setStocked(false);
    //     })
    //     .catch((error) => console.error(error));
    //   return;
    // }

    firebase
      .firestore()
      .collection("products")
      .add({
        name,
        category,
        stocked,
      })
      .then(() => {
        setName("");
        setCategory("");
        setStocked(false);
      })
      .catch((error) => console.error(error));
  };

  return (
    <ProductForm
      handleSubmitForm={handleSubmitForm}
      setName={setName}
      name={name}
      setCategory={setCategory}
      category={category}
      setStocked={setStocked}
      stocked={stocked}
    />
  );
}

export default ModalContent;
