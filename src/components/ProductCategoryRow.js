import React from 'react';

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <td colSpan="2" style={{ fontWeight: 700 }}>Category: {category}</td>
    </tr>
  );
}

export default ProductCategoryRow;