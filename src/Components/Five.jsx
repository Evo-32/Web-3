import React from 'react';

const Five = () => {
  const items = ['Reading', 'Coding', 'Gaming', 'Sports'];

  return (
    <ul className="list-disc ml-6">
      {items.map((item, index) => (
        <li className="text-gray-700">
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Five;
