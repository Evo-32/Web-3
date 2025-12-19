import React from "react";
import { useState } from "react";
import {ChevronDown, ChevronRight } from 'lucide-react';

const Ten = () => {
  const [open, setOpen] = useState(false);
  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)} className="px-4 py-2 bg-gray-700 text-white rounded flex items-center gap-2">
        Menu {open ? <ChevronDown size={16} /> : <ChevronRight size={16} />} 
      </button>
      {open && (
        <div className="absolute mt-1 bg-white border rounded shadow-lg w-48">
          <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 1</div>
          <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 2</div>
          <div className="px-4 py-2 hover:bg-gray-100 cursor-pointer">Option 3</div>
        </div>
      )}
    </div>
  );
};

export default Ten