import React,{useState} from "react";


const Question29 = () => {
  const [form, setForm] = useState({ title: '', author: '', isbn: '', year: '' });
  const [error, setError] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^\d{4}$/.test(form.year)) {
      setError('Year must be 4 digits');
    } else {
      setError('');
      alert('Book registered: ' + JSON.stringify(form));
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input value={form.title} onChange={(e) => setForm({...form, title: e.target.value})} 
             placeholder="Book Title" className="w-full border px-3 py-2 rounded" />
      <input value={form.author} onChange={(e) => setForm({...form, author: e.target.value})} 
             placeholder="Author" className="w-full border px-3 py-2 rounded" />
      <input value={form.isbn} onChange={(e) => setForm({...form, isbn: e.target.value})} 
             placeholder="ISBN" className="w-full border px-3 py-2 rounded" />
      <div>
        <input value={form.year} onChange={(e) => setForm({...form, year: e.target.value})} 
               placeholder="Published Year" className="w-full border px-3 py-2 rounded" />
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
      <button type="submit" className="w-full bg-orange-500 text-white py-2 rounded">Register Book</button>
    </form>
  );
};

export default Question29