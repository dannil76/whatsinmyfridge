import React, { useState } from 'react';

import ProductForm from './ProductForm';
import firebase from '../firebase';

function AddProduct(props) {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [inStock, setInStock] = useState(false);

  const onAddProductSubmit = event => {
    event.preventDefault();
    firebase
      .firestore()
      .collection('products')
      .add({
        name: productName,
        category: productCategory,
        stocked: inStock,
      })
      .then(() => {
        setProductName('');
        setProductCategory('');
        setInStock(false);
      })
      .catch(error => console.error(error));
  };

  return (
    <ProductForm
      handleSubmit={onAddProductSubmit}
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

export default AddProduct;