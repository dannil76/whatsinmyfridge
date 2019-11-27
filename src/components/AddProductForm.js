import React, { useState } from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import firebase from '../firebase';

import './AddProductForm.css';

function AddProductForm(props) {
  const [productName, setProductName] = useState('');
  const [productCategory, setProductCategory] = useState('');
  const [inStock, setInStock] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    firebase
      .firestore()
      .collection('products')
      .add({
        name: productName,
        category: productCategory,
        stocked: inStock
      })
      .then(() => {
        setProductName('');
        setProductCategory('');
        setInStock(false);
      });
  };

  const onProductNameChange = (event) => {
    setProductName(event.target.value);
  }

  const onProductCategoryChange = (event) => {
    setProductCategory(event.target.value);
  };

  const onStockChange = () => {
    setInStock(!inStock);
  };

  return (
    <Form onSubmit={handleSubmit} className="add-product-form">
      <Form.Row>
        <Form.Group as={Col} xs="6" controlId="productName">
          <Form.Control
            type="text"
            placeholder="Namn"
            value={productName}
            onChange={onProductNameChange}
          />
        </Form.Group>
        <Form.Group as={Col} xs="6" controlId="productCategory">
          <Form.Control
            type="text"
            placeholder="Kategori"
            value={productCategory}
            onChange={onProductCategoryChange}
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} xs="12" controlId="inStock">
          <Form.Check
            type="switch"
            checked={inStock}
            onChange={onStockChange}
            label="I lager"
          />
        </Form.Group>
      </Form.Row>
      <Button variant="success" type="submit" block="true" size="lg">
        Spara
      </Button>
      <Button
        variant="dark"
        type="button"
        block="true"
        onClick={() => props.handleModal()}
      >
        Stäng
      </Button>
    </Form>
  );
}

export default AddProductForm;