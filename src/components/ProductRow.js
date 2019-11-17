import React from 'react';
import Badge from 'react-bootstrap/Badge';
import './ProductRow.css';

function ProductRow({product, index}) {
  const { name, stocked } = product;

  const stockName = stocked ? (
    name
  ) : (
    <>
      {name}{' '}
      <Badge className="out-of-stock">
        Slut
      </Badge>
    </>
  );

  return (
    <tr>
      <td>{index}</td>
      <td className="name">{stockName}</td>
    </tr>
  );
}

export default ProductRow;