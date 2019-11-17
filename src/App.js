import React from 'react';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import FilterableProductTable from './components/FilterableProductTable';

function App({ data }) {
  return (
    <Container className="mt-4">
      <h1 className="text-center">Vad har vi hemma?</h1>
      <hr />
      <Row className="justify-content-md-center">
        <Col md="auto">
          <FilterableProductTable products={data} />
        </Col>
      </Row>
    </Container>
  );
}

export default App;