import React from 'react';

function ProductRow({product}) {
  const { name, price, stocked } = product;

  const stockName = stocked
    ? name
    : <span style={{ color: 'hotpink' }}>
        {name}
      </span>;

  return (
    <tr>
      <td className="name">{stockName}</td>
      <td className="price">{price}</td>
    </tr>
  );
}

export default ProductRow;