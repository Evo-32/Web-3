import React from 'react';


const Four = ({ name, age, email }) => (
  <div className="border p-4 rounded-lg shadow-sm bg-white">
    <h3 className="font-bold text-lg">My name is :{name}</h3>
    <p className="text-gray-600">Age: {age}</p>
    <p className="text-gray-600">Email: {email}</p>
  </div>
);

export default Four;