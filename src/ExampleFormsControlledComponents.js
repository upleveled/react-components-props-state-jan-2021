import { useState } from 'react';

export default function ExampleFormsControlledComponents() {
  // Controlled Components #1: State variables
  const [darkMode, setDarkMode] = useState(false);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');

  return (
    <div>
      <h1>Forms, Controlled Components</h1>
      <p>
        Controlled Components allow you to keep track of information that the
        user is entering on the page (eg. in a form)
      </p>
      <p>Please enter your details below:</p>
      <label>
        First name{' '}
        <input
          // Controlled Components #2: onChange of form element
          // (including using the `setFirstName` setter function)
          onChange={(event) => {
            setFirstName(event.currentTarget.value);
          }}
          // Controlled Components #3: Set the value to the state variable
          value={firstName}
        />
      </label>
      <label>
        Last name{' '}
        <input
          // Controlled Components #2: onChange of form element
          // (including using the `setLastName` setter function)
          onChange={(event) => {
            setLastName(event.currentTarget.value);
          }}
          // Controlled Components #3: Set the value to the state variable
          value={lastName}
        />
      </label>
      <label>
        Dark Mode{' '}
        <input
          type="checkbox"
          // Controlled Components #2: onChange of form element
          // (including using the `setDarkMode` setter function)
          onChange={(event) => {
            // For the checkboxes, we use .checked instead of .value
            setDarkMode(event.currentTarget.checked);
          }}
          // Controlled Components #3: Set the value to the state variable
          checked={darkMode}
        />
      </label>
      <h2>User Profile Preview</h2>
      <b>First name:</b> {firstName}
      <br />
      <b>Last name:</b> {lastName}
      <br />
      <b>Dark mode:</b> {darkMode === false ? 'off' : 'on'}
    </div>
  );
}
