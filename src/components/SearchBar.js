import React from 'react';

function SearchBar(props) {
  const { filterText, inStockOnly, onFilterTextChange, onInStockOnly } = props;

  return (
    <div className="SearchBar">
      <form>
        <div>
          <input
            type="text"
            placeholder="Search..."
            value={filterText}
            onChange={onFilterTextChange}
          />
        </div>
        <div>
          <input
            id="inStock"
            type="checkbox"
            checked={inStockOnly}
            onChange={onInStockOnly}
          />
          {' '}
          Only show products in stock
        </div>
      </form>
    </div>
  );
}

export default SearchBar;
