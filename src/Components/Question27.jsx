import React, { useState, memo } from "react";

const Question27 = () => {
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', studentId: '', dob: '' });
  const [error, setError] = useState('');
  
  const handleSubmit = (e) => {
    e.preventDefault();
    if (!/^[a-zA-Z0-9]+$/.test(form.studentId)) {
      setError('Student ID must be alphanumeric');
    } else {
      setError('');
      alert('Student registered: ' + JSON.stringify(form));
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input value={form.firstName} onChange={(e) => setForm({...form, firstName: e.target.value})} 
             placeholder="First Name" className="w-full border px-3 py-2 rounded" />
      <input value={form.lastName} onChange={(e) => setForm({...form, lastName: e.target.value})} 
             placeholder="Last Name" className="w-full border px-3 py-2 rounded" />
      <input value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} 
             placeholder="Email" className="w-full border px-3 py-2 rounded" />
      <div>
        <input value={form.studentId} onChange={(e) => setForm({...form, studentId: e.target.value})} 
               placeholder="Student ID" className="w-full border px-3 py-2 rounded" />
        {error && <p className="text-red-500 text-sm">{error}</p>}
      </div>
      <input type="date" value={form.dob} onChange={(e) => setForm({...form, dob: e.target.value})} 
             className="w-full border px-3 py-2 rounded" />
      <button type="submit" className="w-full bg-green-500 text-white py-2 rounded">Register Student</button>
    </form>
  );
};

export default Question27