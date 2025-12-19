import React from "react";
import { useState } from "react";

const Nine = () => {
  const [input, setInput] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('User input:', input);
  };
  return (
    <form onSubmit={handleSubmit} className="flex gap-2">
      <input value={input} onChange={(e) => setInput(e.target.value)} placeholder="Type something..." 
             className="border px-3 py-2 rounded flex-1" />
      <button type="submit" className="px-4 py-2 bg-blue-500 text-white rounded">Submit</button>
    </form>
  );
};

export default Nine