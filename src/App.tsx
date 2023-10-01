import './App.css';
import { useState } from 'react';

function App() {
  const [counter, setCounter] = useState(0);

  function addValue(): void {
    setCounter(counter + 1);
  }

  function removeValue(): void {
    setCounter(Math.max(0, counter - 1));
  }
  return (
    <>
      <h1>Basic counter App </h1>
      <h2>Counter value : {counter}</h2>
      <button onClick={addValue}> Increase Value</button>
      <br />
      <br />
      <br />
      <button onClick={removeValue}> Decrease Value</button>
    </>
  );
}

export default App;
