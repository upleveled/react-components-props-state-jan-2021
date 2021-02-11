import { useEffect, useState } from 'react';

export default function ExampleLocalStorage() {
  // 1. Initialize state variable with initial value of
  // the variable from the local stoage
  const [username, setUsername] = useState(localStorage.username);
  // Another way of getting local storage
  // localStorage.getItem('username')

  // 3. Any time that the state variable is updated,
  // we also synchronize this value to the local storage
  useEffect(() => {
    localStorage.username = username;
    // Another way of setting local storage
    // localStorage.setItem('username', username)
  }, [username]);

  return (
    <>
      <h1>Local Storage</h1>

      <p>String Value from Local Storage: {username}</p>

      <input
        onChange={(event) => {
          // 2. Update the state variable as we are used
          // to with controlled components
          setUsername(event.currentTarget.value);
        }}
        value={username}
      />

      <p>Complex Value from Local Storage: {}</p>
    </>
  );
}
