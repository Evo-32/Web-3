import React, { useState, memo } from "react";

const HeavyCalc = memo(({ num }) => {
  const calculate = (n) => {
    console.log('Heavy calculation running...');
    let result = 0;
    for (let i = 0; i < 1000000; i++) result += i;
    return result + n;
  };
  return <div className="p-2 bg-yellow-100 rounded">Result: {calculate(num)}</div>;
});

const Question23 = () => {
  const [num, setNum] = useState(0);
  const [other, setOther] = useState(0);
  return (
    <div className="space-y-2">
      <HeavyCalc num={num} />
      <button onClick={() => setNum(num + 1)} className="px-4 py-2 bg-blue-500 text-white rounded mr-2">
        Calc ({num})
      </button>
      <button onClick={() => setOther(other + 1)} className="px-4 py-2 bg-gray-500 text-white rounded">
        Other ({other})
      </button>
    </div>
  );
};

export default Question23