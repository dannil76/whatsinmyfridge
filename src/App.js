import React, { useState } from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import Modal from 'react-bootstrap/Modal';

import FilterableProductTable from './components/FilterableProductTable';
import AddProductForm from './components/AddProductForm';

function App() {
  const [showModal, setShowModal] = useState(false);

  const handleModal = () => setShowModal(!showModal);

  return (
    <>
      <Container className="mt-4">
        <Row className="justify-content-md-center">
          <Col md="auto">
            <FilterableProductTable />
            <Button variant="info" onClick={handleModal}>
              Lägg till ingrediens
            </Button>
          </Col>
        </Row>
      </Container>
      <Modal show={showModal} onHide={handleModal}>
        <AddProductForm />
      </Modal>
    </>
  );
}

export default App;