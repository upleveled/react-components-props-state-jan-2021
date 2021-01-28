import { useState } from 'react';

function Header() {
  return (
    <div
      style={{
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-evenly',
      }}
    >
      <b>Header</b>
      <div>
        <span role="img" aria-label="">
          💥
        </span>{' '}
        Cannot access `firstName`
      </div>
    </div>
  );
}

function ProfileEditor() {
  const [firstName, setFirstName] = useState('karl');

  return (
    <>
      {firstName}
      <br />
      <button onClick={() => setFirstName('gabriel')}>
        Change name to Gabriel
      </button>
      <br />
      <button onClick={() => setFirstName('karl')}>Change name to Karl</button>
      <br />
    </>
  );
}

export default function ExampleLiftingStateUp() {
  return (
    <>
      <h1>Lifting State Up - Before</h1>
      <Header />
      <br />
      <ProfileEditor />
    </>
  );
}
