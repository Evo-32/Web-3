import React,{useState} from 'react'


const Question13 = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [errors, setErrors] = useState({});
  
  const validate = () => {
    const errs = {};
    if (!/\S+@\S+\.\S+/.test(email)) errs.email = 'Invalid email';
    if (password.length < 6) errs.password = 'Password must be 6+ characters';
    return errs;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length === 0) {
      alert('Form valid!');
    } else {
      setErrors(errs);
    }
  };
  
  return (
    <form onSubmit={handleSubmit} className="space-y-3">
      <div>
        <input value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Email" 
               className="w-full border px-3 py-2 rounded" />
        {errors.email && <p className="text-red-500 text-sm">{errors.email}</p>}
      </div>
      <div>
        <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Password" 
               className="w-full border px-3 py-2 rounded" />
        {errors.password && <p className="text-red-500 text-sm">{errors.password}</p>}
      </div>
      <button type="submit" className="w-full bg-blue-500 text-white py-2 rounded">Validate</button>
    </form>
  );
};

export default Question13