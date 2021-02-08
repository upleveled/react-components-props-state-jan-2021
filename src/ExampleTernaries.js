import { useState } from 'react';

export default function ExampleTernaries() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>Example Ternaries</h1>
      <div>
        {count}
        <button
          onClick={() => {
            setCount(count + 1);
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
          }}
        >
          -
        </button>
      </div>
      <div>
        Positive values:
        {count >= 0 ? count : ''}
      </div>
    </div>
  );
}
