import React from "react";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";

import "./ProductForm.css";

function ProductForm(props) {
  const {
    handleSubmitForm,
    setName,
    name,
    setCategory,
    category,
    setStocked,
    stocked,
  } = props;

  const onProductNameChange = (event) => {
    setName(event.currentTarget.value);
  };

  const onProductCategoryChange = (event) => {
    setCategory(event.currentTarget.value);
  };

  const onStockChange = () => {
    setStocked(!stocked);
  };

  return (
    <Form onSubmit={handleSubmitForm} className="product-form">
      <Form.Row>
        <Form.Group as={Col} xs="6" controlId="productName">
          <Form.Control
            type="text"
            placeholder="Namn"
            value={name}
            onChange={onProductNameChange}
          />
        </Form.Group>
        <Form.Group as={Col} xs="6" controlId="productCategory">
          <Form.Control
            type="text"
            placeholder="Kategori"
            value={category}
            onChange={onProductCategoryChange}
          />
        </Form.Group>
      </Form.Row>
      <Form.Row>
        <Form.Group as={Col} xs="12" controlId="inStock">
          <Form.Check
            type="switch"
            checked={stocked}
            onChange={onStockChange}
            label="I lager"
          />
        </Form.Group>
      </Form.Row>
      <Button variant="success" type="submit" block="true" size="lg">
        Spara
      </Button>
      <Button variant="dark" type="button" block="true">
        Stäng
      </Button>
    </Form>
  );
}

export default ProductForm;
