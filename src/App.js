import React, { useState, useEffect } from "react";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";

import useProducts from "./hooks/productsHook";
import FilterableTable from "./components/Table/FilterableTable";
import ModalContent from "./components/ModalContent";

function App() {
  const [showModalState, setShowModalState] = useState(false);
  const [products, setProducts] = useState([]);
  const [selectedProduct, setSelectedProduct] = useState(null);

  const productsCollection = useProducts();

  useEffect(() => {
    setProducts(productsCollection);
  }, [productsCollection]);

  useEffect(() => {
    !!selectedProduct && setShowModalState(true);
  }, [selectedProduct]);

  const handleAdd = () => {
    setShowModalState(!showModalState);
  };

  return (
    <>
      <Container className="mt-3">
        <Row className="justify-content-md-center">
          <Col>
            <FilterableTable
              products={products}
              setProducts={setProducts}
              setSelectedProduct={setSelectedProduct}
            />
          </Col>
        </Row>
        <Button variant="info" onClick={handleAdd} block="true">
          Lägg till
        </Button>
      </Container>
      <Modal
        show={showModalState}
        centered="true"
        onEscapeKeyDown={() => setShowModalState(false)}
      >
        <ModalContent selectedProduct={selectedProduct} products={products} />
      </Modal>
    </>
  );
}

export default App;
