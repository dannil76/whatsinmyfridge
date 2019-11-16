import React from 'react';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

function ProductTable(props) {

  const { products, filterText, inStockOnly } = props;

  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    const { name, stocked, category } = product;

    if(name.indexOf(filterText) === -1 || (inStockOnly && !stocked)) {
      return;
    }

    if(category !== lastCategory) {
      rows.push(<ProductCategoryRow category={category} key={category} />);
    }

    rows.push(<ProductRow product={product} key={name} />)

    lastCategory = category;
  });

  return (
    <table className="ProductTable">
      <thead align="left">
        <tr>
          <th>Name</th>
          <th>Price</th>
        </tr>
      </thead>
      <tbody align="left">{rows}</tbody>
    </table>
  );
}

export default ProductTable;