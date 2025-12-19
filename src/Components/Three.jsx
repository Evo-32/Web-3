import React from "react";


const Three = ({ text, color, onClick }) => (
  <div>
    <button onClick={onClick} className={`px-4 py-2 mt-5 rounded  ${color} text-white`}>{text}</button>
  </div>
  
);

export default Three;
