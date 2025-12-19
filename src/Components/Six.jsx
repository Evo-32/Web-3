import React from "react"; 
import { useState } from "react";

const Six = () => {
  const [state, setState] = useState('OFF');
  return (
    <button onClick={() => setState(state === 'OFF' ? 'ON' : 'OFF')} 
            className={`px-6 py-2 rounded font-bold ${state === 'ON' ? 'bg-green-500' : 'bg-red-500'} text-white`}>
      {state}
    </button>
  );
};

export default Six