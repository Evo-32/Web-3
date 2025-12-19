import React,{useState} from "react";

const Question15 = () => {
  const [selected, setSelected] = useState([]);
  const options = ['React', 'Vue', 'Angular', 'Svelte'];
  
  const toggle = (opt) => {
    setSelected(selected.includes(opt) ? selected.filter(s => s !== opt) : [...selected, opt]);
  };
  
  return (
    <div>
      {options.map(opt => (
        <label key={opt} className="flex items-center gap-2 mb-2">
          <input type="checkbox" checked={selected.includes(opt)} onChange={() => toggle(opt)} />
          {opt}
        </label>
      ))}
      <p className="mt-3 text-gray-600">Selected: {selected.join(', ') || 'None'}</p>
    </div>
  );
};


export default Question15