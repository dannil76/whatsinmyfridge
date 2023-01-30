import React from "react";

function CategoryRow({ category }) {
  return (
    <tr>
      <td
        colSpan="2"
        style={{
          backgroundColor: "#000",
          fontSize: "70%",
          padding: "5px 10px",
        }}
      >
        {category}
      </td>
    </tr>
  );
}

export default CategoryRow;