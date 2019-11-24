import React from 'react';
import Table from 'react-bootstrap/Table';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

function ProductTable(props) {

  const { products, filterText, filterCategory, outOfStockOnly } = props;

  const rows = [];
  let lastCategory = null;

  products.forEach((product) => {
    const { id, name, stocked, category } = product;

    if(name.toLowerCase().indexOf(filterText.toLowerCase()) === -1 || (outOfStockOnly && stocked)) {
      return;
    }

    if(!filterCategory.includes(category) && filterCategory.length > 0) {
      return;
    }

    if(category !== lastCategory) {
      rows.push(<ProductCategoryRow category={category} key={id + category} />);
    }
    lastCategory = category;

    rows.push(<ProductRow product={product} key={id} />);
  });

  return (
    <div style={{ maxHeight: '55vh', overflowY: 'scroll' }}>
      <Table responsive striped hover borderless variant="dark">
        <tbody>{rows}</tbody>
      </Table>
    </div>
  );
}

export default ProductTable;