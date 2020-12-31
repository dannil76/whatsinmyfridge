import React from 'react';
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

import './ProductForm.css';

function ProductForm(props) {
  const {
    handleSubmit,
    setProductName,
    productName,
    setProductCategory,
    productCategory,
    setInStock,
    inStock,
    handleModal,
  } = props;

  const onProductNameChange = event => {
    setProductName(event.currentTarget.value);
  };

  const onProductCategoryChange = event => {
    setProductCategory(event.currentTarget.value);
  };

  const onStockChange = () => {
    setInStock(!inStock);
  };

  return (
    <Form onSubmit={handleSubmit} className="product-form">
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
        onClick={handleModal}
      >
        Stäng
      </Button>
    </Form>
  );
}

export default ProductForm;
