import React, { useState, memo } from "react";

const Question24 = () => {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState(['Learn React', 'Build Projects']);
  
  const MemoTodoItem = memo(({ todo }) => {
    console.log('Todo item rendered:', todo);
    return <li className="text-gray-700">{todo}</li>;
  });
  
  const addTodo = () => {
    if (input.trim()) {
      setTodos([...todos, input]);
      setInput('');
    }
  };
  
  return (
    <div className="space-y-2">
      <ul className="list-disc ml-6 mb-2">
        {todos.map((todo, i) => <MemoTodoItem key={i} todo={todo} />)}
      </ul>
      <div className="flex gap-2">
        <input value={input} onChange={(e) => setInput(e.target.value)} 
               placeholder="New todo" className="border px-3 py-2 rounded flex-1" />
        <button onClick={addTodo} className="px-4 py-2 bg-green-500 text-white rounded">Add</button>
      </div>
    </div>
  );
};

export default Question24;