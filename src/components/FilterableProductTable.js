import React, { useState, useEffect } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import useProducts from '../productsDb';

function FilterableProductTable() {

  const [filterText, setFilterText] = useState('');
  const [outOfStockOnly, setOutOfStockOnly] = useState(false);
  const [hasOutOfStock, setHasOutOfStock] = useState(false);

  const products = useProducts();

  useEffect(() => {
    const outOfStockCount = products.reduce((acc, { stocked }) => {
      !stocked && acc++;
      return acc;
    }, 0);

    setHasOutOfStock(outOfStockCount > 0);
  }, [products]);
  
  
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
        hasOutOfStock={hasOutOfStock}
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