import React from "react";
import { useState } from "react";

const Eight = () => {
  const [bg, setBg] = useState('bg-gray-200');
  return (
    <div onMouseEnter={() => setBg('bg-blue-300')} onMouseLeave={() => setBg('bg-gray-200')} 
         className={`${bg} p-6 rounded text-center transition-colors`}>
      Hover over me!
    </div>
  );
};

export default Eight