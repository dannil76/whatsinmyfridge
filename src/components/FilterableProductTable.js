import React, { useState } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';

function FilterableProductTable({products}) {

  const [filterText, setFilterText] = useState('');
  const [inStockOnly, setInStockOnly] = useState(false);

  const handleFilterTextChange = (event) => {
    const text = event.target.value;
    setFilterText(text);
  };

  const handleInStockChange = (event) => {
    const checked = event.target.checked;
    setInStockOnly(checked);
  };

  return (
    <div className="FilterableProductTable">
      <SearchBar
        filterText={filterText}
        inStockOnly={inStockOnly}
        onFilterTextChange={handleFilterTextChange}
        onInStockOnly={handleInStockChange}
      />
      <ProductTable
        products={products}
        filterText={filterText}
        inStockOnly={inStockOnly}
      />
    </div>
  );
}

export default FilterableProductTable;