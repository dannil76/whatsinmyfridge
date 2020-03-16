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
  const [showModal, setShowModal] = useState(false);
  const [addEdit, setAddEdit] = useState(null);

  const handleModal = (event) => {
    setAddEdit(event.currentTarget.value);
    setShowModal(!showModal);
  };

  return (
    <>
      <Container className="mt-3">
        <Row className="justify-content-md-center">
          <Col>
            <FilterableProductTable />
          </Col>
        </Row>
        <Button variant="info" onClick={handleModal} value="add" block="true">
          Lägg till ingrediens
        </Button>
      </Container>
      <Modal show={showModal} centered="true" onHide={handleModal}>
        {addEdit === 'add' ? (
          <AddProduct handleModal={handleModal} />
        ) : (
          <EditProduct handleModal={handleModal} />
        )}
      </Modal>
    </>
  );
}

export default App;