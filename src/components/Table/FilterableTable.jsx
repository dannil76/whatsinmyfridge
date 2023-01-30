import React, { useState, useEffect } from "react";

import SearchBar from "../Search/SearchBar";
import ProductTable from "./ProductTable";

import "./FilterableTable.css";

function FilterableTable(props) {
  const [filterText, setFilterText] = useState("");
  const [filterCategory, setFilterCategory] = useState([]);
  const [outOfStockOnly, setOutOfStockOnly] = useState(false);
  const [hasOutOfStock, setHasOutOfStock] = useState(false);

  useEffect(() => {
    const outOfStockCount = props.products.reduce((acc, { stocked }) => {
      !stocked && acc++;
      return acc;
    }, 0);

    setHasOutOfStock(outOfStockCount > 0);
  }, [props.products]);

  const handleFilterTextChange = (event) => {
    const text = event.target.value;
    setFilterText(text);
  };

  const handleOutOfStockChange = (event) => {
    const isChecked = event.target.checked;
    setOutOfStockOnly(isChecked);
  };

  const handleFilterChange = (category) => {
    setFilterCategory(category);
  };

  return (
    <div className="filterable-table">
      <SearchBar
        products={props.products}
        filterText={filterText}
        onFilterTextChange={handleFilterTextChange}
        filterCategory={filterCategory}
        onFilterCategoryChange={handleFilterChange}
        outOfStockOnly={outOfStockOnly}
        onOutOfStockOnly={handleOutOfStockChange}
        hasOutOfStock={hasOutOfStock}
      />
      <ProductTable
        products={props.products}
        filterText={filterText.length > 1 ? filterText : ""}
        filterCategory={filterCategory}
        outOfStockOnly={outOfStockOnly}
        setSelectedProduct={props.setSelectedProduct}
      />
    </div>
  );
}

export default FilterableTable;
