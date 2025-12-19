import React, { useState, memo } from "react";

const Question26 = () => {
  const [form, setForm] = useState({ name: '', email: '', subject: '', phone: '' });
  const [errors, setErrors] = useState({});
  
  const validate = () => {
    const errs = {};
    if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Invalid email';
    if (!/^\d+$/.test(form.phone)) errs.phone = 'Phone must be numeric';
    return errs;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length === 0) {
      alert('Lecturer registered: ' + JSON.stringify(form));
    } else {
      setErrors(errs);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} 
             placeholder="Name" className="w-full border px-3 py-2 rounded" />
      <div>
        <input value={form.email} onChange={(e) => setForm({...form, email: e.target.value})} 
               placeholder="Email" className="w-full border px-3 py-2 rounded" />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      <input value={form.subject} onChange={(e) => setForm({...form, subject: e.target.value})} 
             placeholder="Subject" className="w-full border px-3 py-2 rounded" />
      <div>
        <input value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} 
               placeholder="Phone Number" className="w-full border px-3 py-2 rounded" />
        {errors.phone && <p className="text-red-500 text-sm">{errors.phone}</p>}
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Register Lecturer</button>
    </form>
  );
};
export default Question26