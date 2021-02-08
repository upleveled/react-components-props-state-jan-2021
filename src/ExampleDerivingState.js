import { useState } from 'react';

function getPositiveValues(count, count2) {
  let positiveValues = '';
  if (count >= 0) positiveValues += count;
  if (count >= 0 && count2 >= 0) positiveValues += ',';
  if (count2 >= 0) positiveValues += count2;
  return positiveValues;
}

export default function ExampleDerivingState() {
  const [count, setCount] = useState(0);
  const [count2, setCount2] = useState(0);

  // Solution 1: Call the function and set a normal variable
  // (not a state variable)
  const positiveValues = getPositiveValues(count, count2);

  // Solution 2: extra state variable and useEffect
  // const [positiveValues, setPositiveValues] = useState('');
  // useEffect(() => {
  //   setPositiveValues(getPositiveValues(count, count2));
  // }, [count, count2]);

  return (
    <div>
      <h1>Example Deriving State</h1>
      <div>
        {count}
        <button
          onClick={() => {
            setCount(count + 1);
            // setPositiveValues(getPositiveValues(count, count2));
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setCount(count - 1);
            // setPositiveValues(getPositiveValues(count, count2));
          }}
        >
          -
        </button>
      </div>
      <div>
        {count2}
        <button
          onClick={() => {
            setCount2(count2 + 1);
            // setPositiveValues(getPositiveValues(count, count2));
          }}
        >
          +
        </button>
        <button
          onClick={() => {
            setCount2(count2 - 1);
            // setPositiveValues(getPositiveValues(count, count2));
          }}
        >
          -
        </button>

        <button onClick={() => setCount2(17)}>17</button>
      </div>
      <div>
        Positive values:
        {/* 1, 2 */}
        {/*
          💥 This doesn't work:
          {if (count > 0) { count } else { '' }}
        */}
        {/* {count >= 0 ? count : ''}
        {count >= 0 && count2 >= 0 ? ',' : ''}
        {count2 >= 0 ? count2 : ''} */}
        {positiveValues}
      </div>
    </div>
  );
}
