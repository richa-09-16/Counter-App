import { useState } from 'react';
import './App.css'

const CounterApp = () => {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  const handleIncrement = () => {
    setCount(count + 1);
  };

  const handleDecrement = () => {
    setCount(count - 1);
  };
  

  const handleIncrement1 = () => {
    setCount2(count2 + 2);
  };

  const handleDecrement1 = () => {
    setCount2(count2 - 2);
  };

  return (
    <div>
      <h1>Counter App</h1>
      <p>Current count: {count}</p>
      <button onClick={handleIncrement}>Increment +1</button>
      <button onClick={handleDecrement}>Decrement -1</button><br />

<p>Current count2: {count2}</p>
      <button onClick={handleIncrement1}>Increment +2</button>
      <button onClick={handleDecrement1}>Decrement -2</button>
    </div>
  );
};

export default CounterApp;