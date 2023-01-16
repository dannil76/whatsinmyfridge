import React, { useState, useEffect } from "react";

import useProducts from "../../hooks/productsHook";
import SearchBar from "../Search/SearchBar";
import ProductTable from "./ProductTable";

import "./FilterableTable.css";

function FilterableTable(props) {
  const [filterText, setFilterText] = useState("");
  const [filterCategory, setFilterCategory] = useState([]);
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

  const handleFilterChange = (category) => {
    setFilterCategory(category);
  };

  return (
    <div className="filterable-table">
      <SearchBar
        products={products}
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
        filterText={filterText.length > 1 ? filterText : ""}
        filterCategory={filterCategory}
        outOfStockOnly={outOfStockOnly}
        handleEditProduct={props.handleEditProduct}
      />
    </div>
  );
}

export default FilterableTable;
