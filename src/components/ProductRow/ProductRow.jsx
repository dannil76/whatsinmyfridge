import React from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

import "./ProductRow.css";

function ProductRow({ product, handleEditProduct }) {
  const { name, stocked } = product;

  const productDisplayName = stocked ? (
    name
  ) : (
    <>
      {name}
      <Badge className="out-of-stock">Slut</Badge>
    </>
  );

  return (
    <tr>
      <td className="name">{productDisplayName}</td>
      <td className="action">
        <Button
          size="sm"
          variant="secondary"
          value="edit"
          onClick={handleEditProduct}
        >
          Ändra
        </Button>
      </td>
    </tr>
  );
}

export default ProductRow;
