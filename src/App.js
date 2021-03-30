import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import FilterableProductTable from './components/FilterableProductTable';
import AddProduct from './components/AddProduct';
import EditProduct from './components/EditProduct';

function App() {
  const [displayModalState, setDisplayModalState] = useState(false);
  const [productAddEditState, setProductAddEditState] = useState(null);

  const handleModal = event => {
    const productAddEditButtonValue = event.currentTarget.value;
    setProductAddEditState(productAddEditButtonValue);
    setDisplayModalState(!displayModalState);
  };

  const handleEditProduct = event => {
    const productAddEditButtonValue = event.currentTarget.value;
    setProductAddEditState(productAddEditButtonValue);
    setDisplayModalState(!displayModalState);
  };

  return (
    <>
      <Container className="mt-3">
        <Row className="justify-content-md-center">
          <Col>
            <FilterableProductTable handleModal={handleModal} handleEditProduct={handleEditProduct} />
          </Col>
        </Row>
        <Button variant="info" onClick={handleModal} value="add" block="true">
          Lägg till
        </Button>
      </Container>
      <Modal show={displayModalState} centered="true" onHide={handleModal}>
        {productAddEditState === 'add' ? (
          <AddProduct handleModal={handleModal} />
        ) : (
          <EditProduct handleModal={handleModal} />
        )}
      </Modal>
    </>
  );
}

export default App;
