import { useEffect, useState } from 'react';

function setPageTitle(newTitle) {
  console.log(`page title updated to ${newTitle} at ${new Date().getTime()}`);
  document.title = newTitle;
}

export default function ExampleUseEffect() {
  const [count, setCount] = useState(0);
  const [name, setName] = useState('');

  // 💥 If we run the function within the React component without
  // wrapping it first in useEffect, it will run this function
  // many times (which may be bad, in the case of an API)
  //
  // setPageTitle(count);

  // useEffect Version 1:
  // Run every time this component is "re-rendered"
  // (eg. when props or state change)
  // useEffect(() => {
  //   setPageTitle(count);
  // });

  // useEffect Version 2:
  // Run only once when the component is first "mounted"
  //
  // This can be useful for running API calls only once.
  // useEffect(
  //   () => {
  //     setPageTitle(1);
  //   },
  //   // Empty dependency array
  //   [],
  // );

  // useEffect Version 3:
  // Run every time that a specific state variable changes
  //
  // This can be useful for running API calls when
  // some information changes.
  useEffect(
    () => {
      setPageTitle(count);
    },
    // This time, "count" is specified in the dependency array,
    // which means that this function will run any time that
    // "count" is updated
    [count],
  );

  return (
    <>
      <h1>useEffect</h1>
      <p>Look at the document title</p>

      <p>
        Clicking on this button should update the count and trigger the document
        title update function to run:
      </p>
      <button onClick={() => setCount(count + 1)}>+</button>
      {count}

      <p>
        Any changes inside this input should not trigger the function to be run:
      </p>
      <input
        onChange={(event) => setName(event.currentTarget.value)}
        value={name}
      />
    </>
  );
}
