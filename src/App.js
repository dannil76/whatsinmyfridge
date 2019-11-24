import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FilterableProductTable from './components/FilterableProductTable';

function App() {
  return (
    <Container className="mt-4">
      <Row className="justify-content-md-center">
        <Col md="auto">
          <FilterableProductTable />
        </Col>
      </Row>
    </Container>
  );
}

export default App;