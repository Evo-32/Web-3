import React from "react";
import { useState } from "react";

const Seven = () => {
  const [count, setCount] = useState(1);
  return (
    <div className="flex items-center gap-4">
      <button onClick={() => setCount(count - 1)} className="px-4 py-2 bg-red-500 text-white rounded">-</button>
      <span className="text-2xl font-bold">{count}</span>
      <button onClick={() => setCount(count + 1)} className="px-4 py-2 bg-green-500 text-white rounded">+</button>
    </div>
  );
};

export default Seven;