import React from 'react';

function ProductCategoryRow({ category }) {
  return (
    <tr>
      <td style={{ backgroundColor: '#000', fontSize: '75%', padding: '5px 10px' }} colSpan="2">
        {category}
      </td>
    </tr>
  );
}

export default ProductCategoryRow;