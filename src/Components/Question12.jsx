import React ,{useState} from "react";

const Question12 = () => {
  const [value, setValue] = useState('');
  return (
    <div>
      <input value={value} onChange={(e) => setValue(e.target.value)} placeholder="Type here..." 
             className="w-full border px-3 py-2 rounded mb-2" />
      <p className="text-gray-600">You typed: <strong>{value}</strong></p>
    </div>
  );
};
export default Question12