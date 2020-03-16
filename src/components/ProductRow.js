import React from 'react';
import Badge from 'react-bootstrap/Badge';
import Button from 'react-bootstrap/Button';

import './ProductRow.css';

function ProductRow({product}) {
  const { id, name, stocked } = product;

  const handleChange = (event) => {
    console.log(id);
  };

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
      <td className="action">
        <Button size="sm" variant="secondary" onClick={handleChange}>
          Ändra
        </Button>
      </td>
    </tr>
  );
}

export default ProductRow;