import React from "react";
import Badge from "react-bootstrap/Badge";
import Button from "react-bootstrap/Button";

import "./ProductRow.css";

function ProductRow({ product, setSelectedProduct }) {
  const { id, name, stocked } = product;

  const productDisplayName = stocked ? (
    name
  ) : (
    <>
      {name}
      <Badge className="out-of-stock">Slut</Badge>
    </>
  );

  function handleClick() {
    console.log('ID', id);
    setSelectedProduct(id);
  }

  return (
    <tr>
      <td className="name">{productDisplayName}</td>
      <td className="action">
        <Button
          size="sm"
          variant="secondary"
          onClick={handleClick}
        >
          Ändra
        </Button>
      </td>
    </tr>
  );
}

export default ProductRow;
