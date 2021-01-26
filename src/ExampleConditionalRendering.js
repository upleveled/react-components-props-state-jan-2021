import { useState } from 'react';

function ConditionalContent(props) {
  console.log(props.mode);

  return (
    <div>
      {/* if (props.mode === 'a') {} else {} */}
      {props.mode === 'a' ? (
        <div>Some content for the "A" mode</div>
      ) : (
        <div>Some content for the "B" mode</div>
      )}
    </div>
  );
}

export default function ExampleConditionalRendering() {
  const [mode, setMode] = useState('a');

  return (
    <>
      <h1>Conditional Rendering</h1>
      Mode: {mode}
      <br />
      <button onClick={() => setMode('a')}>Mode A</button>
      <button onClick={() => setMode('b')}>Mode B</button>
      <br />
      <ConditionalContent mode={mode} />
    </>
  );
}
