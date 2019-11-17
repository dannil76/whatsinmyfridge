import React, { useState } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function FilterableProductTable({products}) {

  const [filterText, setFilterText] = useState('');
  const [outOfStockOnly, setOutOfStockOnly] = useState(false);

  const handleFilterTextChange = (event) => {
    const text = event.target.value;
    setFilterText(text);
  };

  const handleOutOfStockChange = (event) => {
    const checked = event.target.checked;
    setOutOfStockOnly(checked);
  };

  return (
    <div className="FilterableProductTable">
      <SearchBar
        filterText={filterText}
        outOfStockOnly={outOfStockOnly}
        onFilterTextChange={handleFilterTextChange}
        onOutOfStockOnly={handleOutOfStockChange}
      />
      <ProductTable
        products={products}
        filterText={filterText.length > 1 ? filterText : ''}
        outOfStockOnly={outOfStockOnly}
      />
    </div>
  );
}

export default FilterableProductTable;