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
      <Container className="mt-3">
        <Row className="justify-content-md-center">
          <Col>
            <FilterableProductTable />
          </Col>
        </Row>
        <Button variant="info" onClick={handleModal} block="true">
          Lägg till ingrediens
        </Button>
      </Container>
      <Modal show={showModal} centered="true" onHide={handleModal}>
        <AddProductForm handleModal={handleModal} />
      </Modal>
    </>
  );
}

export default App;