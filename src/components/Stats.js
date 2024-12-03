import React from "react";

function Stats({ items }) {
  const packed = items.filter((item) => item.packed).length;
  const total = items.length;
  const percentage = total > 0 ? Math.round((packed / total) * 100) : 0;

  return (
    <footer className="stats">
      <em>
        You have {total} items in the list. You already packed {packed} ({percentage}%).
      </em>
      {percentage === 100 && <p>You got everything!</p>}
    </footer>
  );
}

export default Stats;
