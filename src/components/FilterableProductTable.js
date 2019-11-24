import React, { useState, useEffect } from 'react';
import ProductTable from './ProductTable';
import SearchBar from './SearchBar';
import useProducts from '../productsDb';

function FilterableProductTable() {

  const [filterText, setFilterText] = useState('');
  const [filterCategory, setFilterCategory] = useState([]);
  const [outOfStockOnly, setOutOfStockOnly] = useState(false);
  const [hasOutOfStock, setHasOutOfStock] = useState(false);

  const products = useProducts();

  products.sort((a, b) => {
    const cA = a.category.toUpperCase();
    const cB = b.category.toUpperCase();

    if (cA < cB) return -1;
    if (cA > cB) return 1;

    const nA = a.name.toUpperCase();
    const nB = b.name.toUpperCase();

    if (nA < nB) return -1;
    if (nA > nB) return 1;

    return 0;
  });

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

  const handleFilterChange = (value) => {
    console.log(value);
    setFilterCategory(value);
  };

  return (
    <div className="FilterableProductTable">
      <SearchBar
        filterText={filterText}
        onFilterTextChange={handleFilterTextChange}
        filterCategory={filterCategory}
        onFilterCategoryChange={handleFilterChange}
        outOfStockOnly={outOfStockOnly}
        onOutOfStockOnly={handleOutOfStockChange}
        hasOutOfStock={hasOutOfStock}
      />
      <ProductTable
        products={products}
        filterText={filterText.length > 1 ? filterText : ''}
        filterCategory={filterCategory}
        outOfStockOnly={outOfStockOnly}
      />
    </div>
  );
}

export default FilterableProductTable;