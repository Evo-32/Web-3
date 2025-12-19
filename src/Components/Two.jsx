import React from 'react';

const HobbyItem = ({ hobby }) => <li className="text-gray-700 ml-4"> {hobby}</li>;
const Two = () => {
  const hobbies = ['Reading', 'Coding', 'Gaming', 'Sports'];
  return (
    <div>
      <h3 className="font-semibold mb-2">My Hobbies:</h3>
      <ul>{hobbies.map((h) => <HobbyItem  hobby={h} />)}</ul>
    </div>
  );
};

export default Two;
