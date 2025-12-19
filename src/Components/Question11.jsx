import React, { useState } from "react";


const Question11 = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Login: ${username}`);
  };
  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input value={username} onChange={(e) => setUsername(e.target.value)} placeholder="Username" 
             className="w-full border px-3 py-2 rounded" />
      <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" 
             className="w-full border px-3 py-2 rounded" />
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Login</button>
    </form>
  );
};

export default Question11
