import React from 'react';
import Badge from 'react-bootstrap/Badge';

import './ProductRow.css';

function ProductRow({product}) {
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
      <td className="name">{stockName}</td>
    </tr>
  );
}

export default ProductRow;