import { useState } from 'react';

function Header(props) {
  return (
    <>
      <div
        style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'space-evenly',
        }}
      >
        <b>Header</b>
        <div>✅ firstname is: {props.firstName} </div>
      </div>
    </>
  );
}

function ProfileEditor(props) {
  return (
    <>
      {props.firstName}
      <br />
      <button onClick={() => props.setFirstName('gabriel')}>
        Change name to Gabriel
      </button>
      <br />
      <button onClick={() => props.setFirstName('karl')}>
        Change name to Karl
      </button>
      <br />
    </>
  );
}

export default function ExampleLiftingStateUp() {
  const [firstName, setFirstName] = useState('karl');

  return (
    <>
      <h1>Lifting State Up - After</h1>
      <Header firstName={firstName} />
      <br />
      <ProfileEditor firstName={firstName} setFirstName={setFirstName} />
    </>
  );
}
