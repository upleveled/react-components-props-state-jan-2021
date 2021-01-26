import { useState } from 'react';

export default function ExampleHooksFunctionComponent(props) {
  const [count, setCount] = useState(0);

  return (
    <div>
      <h1>{props.title}</h1>

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
  );
}
