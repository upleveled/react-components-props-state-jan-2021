import { useState } from 'react';

export default function ExampleStateCounter() {
  // Destructuring example is the same as:
  // const result = useState(0);
  // const count = result[0];
  // const setCount = result[1];
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Example State</h1>
      <h2>Counter</h2>

      {count}

      <button
        onClick={() => {
          setCount(count + 1); // ✅ Tell React about the update
          console.log('count', count);
        }}
      >
        +
      </button>

      <button onClick={() => setCount(count - 1)}>-</button>

      <br />

      <button onClick={() => setCount(18)}>set to 18</button>
    </div>
  );
}
