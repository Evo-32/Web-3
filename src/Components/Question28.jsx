import React,{useState} from "react";

const Question28 = () => {
  const [form, setForm] = useState({ name: '', license: '', phone: '', vehicle: 'car' });
  
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Driver registered: ' + JSON.stringify(form));
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <input value={form.name} onChange={(e) => setForm({...form, name: e.target.value})} 
             placeholder="Name" className="w-full border px-3 py-2 rounded" />
      <input value={form.license} onChange={(e) => setForm({...form, license: e.target.value})} 
             placeholder="License Number" className="w-full border px-3 py-2 rounded" />
      <input value={form.phone} onChange={(e) => setForm({...form, phone: e.target.value})} 
             placeholder="Phone Number" className="w-full border px-3 py-2 rounded" />
      <select value={form.vehicle} onChange={(e) => setForm({...form, vehicle: e.target.value})} 
              className="w-full border px-3 py-2 rounded">
        <option value="car">Car</option>
        <option value="truck">Truck</option>
        <option value="motorcycle">Motorcycle</option>
      </select>
      <button type="submit" className="w-full bg-purple-500 text-white py-2 rounded">Register Driver</button>
    </form>
  );
};

export default Question28