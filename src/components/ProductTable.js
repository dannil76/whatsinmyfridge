import React from 'react';
import Table from 'react-bootstrap/Table';
import ProductCategoryRow from './ProductCategoryRow';
import ProductRow from './ProductRow';

function ProductTable(props) {

  const { products, filterText, outOfStockOnly } = props;

  const rows = [];
  let lastCategory = null;

  products.forEach((product, i) => {
    const { id, name, stocked, category } = product;

    if(name.toLowerCase().indexOf(filterText.toLowerCase()) === -1 || (outOfStockOnly && stocked)) {
      return;
    }

    if(category !== lastCategory) {
      rows.push(<ProductCategoryRow category={category} key={id + category} />);
    }

    rows.push(<ProductRow product={product} key={id} index={i + 1} />);

    lastCategory = category;
  });

  return (
    <Table responsive striped hover borderless variant="dark">
      <thead>
        <tr>
          <th width="1%">#</th>
          <th>Ingredienser</th>
        </tr>
      </thead>
      <tbody>{rows}</tbody>
    </Table>
  );
}

export default ProductTable;