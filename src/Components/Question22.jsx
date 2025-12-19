import React, { useState, memo } from "react";

const ListItem = memo(({ item }) => <li className="text-gray-700">{item}</li>);

const Question22 = () => {
  const [count, setCount] = useState(0);
  const items = ['Apple', 'Banana', 'Cherry'];
  return (
    <div>
      <ul className="mb-2">{items.map((item, i) => <ListItem key={i} item={item} />)}</ul>
      <button onClick={() => setCount(count + 1)} className="px-4 py-2 bg-blue-500 text-white rounded">
        Counter: {count}
      </button>
    </div>
  );
};

export default Question22