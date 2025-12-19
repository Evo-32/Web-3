import React, { useState, memo } from "react";

const MemoChild = memo(({ value }) => {
  console.log('MemoChild rendered');
  return (
    <div className="p-2 bg-gray-100 rounded">
      Child Value: {value}
    </div>
  );
});

const Question21 = () => {
  const [prop, setProp] = useState(0);
  const [other, setOther] = useState(0);

  return (
    <div className="space-y-2">
      <MemoChild value={prop} />

      <button
        onClick={() => setProp(prop + 1)}
        className="px-4 py-2 bg-blue-500 text-white rounded mr-2"
      >
        Change Prop ({prop})
      </button>

      {/* <button
        onClick={() => setOther(other + 1)}
        className="px-4 py-2 bg-gray-500 text-white rounded"
      >
        Other State ({other})
      </button> */}
    </div>
  );
};

export default Question21;
