import React from 'react';
import Form from 'react-bootstrap/Form';

function SearchBar(props) {
  const {
    filterText,
    outOfStockOnly,
    onFilterTextChange,
    onOutOfStockOnly,
  } = props;

  return (
    <Form className="SearchBar" onSubmit={(event) => event.preventDefault()}>
      <Form.Group controlId="searchField">
        <Form.Control
          type="text"
          placeholder="Vad letar du efter?"
          size="lg"
          value={filterText}
          onChange={onFilterTextChange}
        />
      </Form.Group>
      <Form.Group controlId="inStockCheckbox">
        <Form.Check
          type="switch"
          checked={outOfStockOnly}
          onChange={onOutOfStockOnly}
          label="Visa bara produkter som är slut"
        />
      </Form.Group>
    </Form>
  );
}

export default SearchBar;