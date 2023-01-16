import React, { useState } from "react";

import ProductForm from "./ProductForm/ProductForm";
// import firebase from '../firebase';

function EditProduct(props) {
  const [productName, setProductName] = useState(props.productName);
  const [productCategory, setProductCategory] = useState(props.productCategory);
  const [inStock, setInStock] = useState(props.inStock);

  const onEditProductSubmit = (event) => {
    event.preventDefault();
    // firebase
    //   .firestore()
    //   .collection('products')
    //   .add({
    //     name: productName,
    //     category: productCategory,
    //     stocked: inStock,
    //   })
    //   .then(() => {
    //     setProductName('');
    //     setProductCategory('');
    //     setInStock(false);
    //   });
  };

  return (
    <ProductForm
      handleSubmit={onEditProductSubmit}
      setProductName={setProductName}
      productName={productName}
      setProductCategory={setProductCategory}
      productCategory={productCategory}
      setInStock={setInStock}
      inStock={inStock}
      handleModal={props.handleModal}
    />
  );
}

export default EditProduct;
