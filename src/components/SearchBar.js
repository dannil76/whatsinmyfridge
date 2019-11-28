import React from 'react';
import Form from 'react-bootstrap/Form';
import ToggleButtonGroup from 'react-bootstrap/ToggleButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';

import Filter from './Filter';

function SearchBar(props) {
  const {
    products,
    filterText,
    onFilterTextChange,
    outOfStockOnly,
    onOutOfStockOnly,
    hasOutOfStock,
    filterCategory,
    onFilterCategoryChange,
  } = props;

  const filterableCategories = products.reduce((acc, { category, stocked }) => {
    if (!acc.includes(category)) {
      outOfStockOnly ? !stocked && acc.push(category) : acc.push(category);
    }
    return acc;
  }, []);

  return (
    <Form className="SearchBar" onSubmit={(event) => event.preventDefault()}>
      <Form.Group controlId="searchField">
        <Form.Control
          type="text"
          placeholder="Vilken ingrediens letar du efter?"
          size="lg"
          value={filterText}
          onChange={onFilterTextChange}
        />
      </Form.Group>
      {hasOutOfStock && (
        <Form.Group controlId="inStockCheckbox">
          <Form.Check
            type="switch"
            checked={outOfStockOnly}
            onChange={onOutOfStockOnly}
            label="Visa bara ingredienser som är slut"
          />
        </Form.Group>
      )}
      <Filter>
        <ToggleButtonGroup
          type="checkbox"
          value={filterCategory}
          onChange={onFilterCategoryChange}
        >
          {filterableCategories.map((category) => {
            return (
              <ToggleButton key={category} value={category}>
                {category}
              </ToggleButton>
            );
          })}
        </ToggleButtonGroup>
      </Filter>
    </Form>
  );
}

export default SearchBar;