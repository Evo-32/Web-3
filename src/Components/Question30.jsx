import React,{useState} from "react";

const Question30 = () => {
  const [form, setForm] = useState({ name: '', code: '', description: '', credits: '' });
  const [error, setError] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^\d+$/.test(form.credits)) {
      setError('Credits must be numeric');
    } else {
      setError('');
      alert('Module registered: ' + JSON.stringify(form));
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} 
             placeholder="Module Name" className="w-full border px-3 py-2 rounded" />
      <input value={form.code} onChange={(e) => setForm({...form, code: e.target.value})} 
             placeholder="Module Code" className="w-full border px-3 py-2 rounded" />
      <textarea value={form.description} onChange={(e) => setForm({...form, description: e.target.value})} 
                placeholder="Description" className="w-full border px-3 py-2 rounded" rows="3" />
      <div>
        <input value={form.credits} onChange={(e) => setForm({...form, credits: e.target.value})} 
               placeholder="Credits" className="w-full border px-3 py-2 rounded" required />
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
      <button type="submit" className="w-full bg-indigo-500 text-white py-2 rounded">Register Module</button>
    </form>
  );
};
export default Question30