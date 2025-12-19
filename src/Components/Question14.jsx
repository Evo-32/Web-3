import React ,{useState} from 'react'

const   Question14 = () => {
  const [step, setStep] = useState(1);
  const [data, setData] = useState({ name: '', address: '', payment: '' });
  
  const handleNext = () => setStep(step + 1);
  const handleBack = () => setStep(step - 1);
  
  return (
    <div className="space-y-4">
      <div className="flex gap-2 mb-4">
        {[1, 2, 3].map(s => (
          <div key={s} className={`flex-1 h-2 rounded ${s <= step ? 'bg-blue-500' : 'bg-gray-300'}`} />
        ))}
      </div>
      {step === 1 && (
        <div>
          <input value={data.name} onChange={(e) => setData({...data, name: e.target.value})} 
                 placeholder="Name" className="w-full border px-3 py-2 rounded mb-2" />
          <button onClick={handleNext} className="w-full bg-blue-500 text-white py-2 rounded">Next</button>
        </div>
      )}
      {step === 2 && (
        <div>
          <input value={data.address} onChange={(e) => setData({...data, address: e.target.value})} 
                 placeholder="Address" className="w-full border px-3 py-2 rounded mb-2" />
          <div className="flex gap-2">
            <button onClick={handleBack} className="flex-1 bg-gray-500 text-white py-2 rounded">Back</button>
            <button onClick={handleNext} className="flex-1 bg-blue-500 text-white py-2 rounded">Next</button>
          </div>
        </div>
      )}
      {step === 3 && (
        <div>
          <input value={data.payment} onChange={(e) => setData({...data, payment: e.target.value})} 
                 placeholder="Payment Info" className="w-full border px-3 py-2 rounded mb-2" />
          <button onClick={() => alert(JSON.stringify(data))} className="w-full bg-green-500 text-white py-2 rounded">Submit</button>
        </div>
      )}
    </div>
  );
};

export default Question14