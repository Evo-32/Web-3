const One = () => {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold text-blue-600">
        Welcome to React Assignment!
      </h2>
      <p className="text-gray-600">
        Current Date: {new Date().toLocaleDateString()}
      </p>
    </div>
  );
};

export default One;
