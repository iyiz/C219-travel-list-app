//Item.js
import React from "react";

function Item({ packingItem, onTogglePacked, onDeleteItem }) {
  function handleChange() {
    onTogglePacked(packingItem.id);
  }

  function handleDelete() {
    onDeleteItem(packingItem.id);
  }

  return (
    <li>
      <input
        type="checkbox"
        checked={packingItem.packed}
        onChange={handleChange}
      />
      <span style={packingItem.packed ? { textDecoration: "line-through" } : {}} >
        {packingItem.description} ({packingItem.quantity})
      </span>
      <button onClick={handleDelete}>❌</button>
    </li>
  );
}

export default Item;
