import { useState, useEffect, memo } from "react";

const StaticUI = memo(() => {
  console.log("Static UI rendered");
  return (
    <div className="p-4 bg-gray-100 rounded mb-2">
      This is static content
    </div>
  );
});

const Question25 = () => {
  const [time, setTime] = useState(new Date().toLocaleTimeString());

  useEffect(() => {
    const timer = setInterval(
      () => setTime(new Date().toLocaleTimeString()),
      1000
    );
    return () => clearInterval(timer);
  }, []);

  return (
    <div>
      <StaticUI />
      <div className="text-2xl font-bold text-blue-600">{time}</div>
    </div>
  );
};

export default Question25;
