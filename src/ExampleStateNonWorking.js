// ⛔️⛔️⛔️ Stop! ⛔️⛔️⛔️
// Don't do this!
// This is a non-working example in React, to demonstrate what NOT to do

let count = 0;

export default function ExampleStateCounter() {
  return (
    <div>
      <h2>Non-working example, don't use this:</h2>

      {count}

      <br />

      <button
        onClick={() => {
          count = count + 1; // 💥 Not telling React about the update
          console.log('count (non-working)', count);
        }}
      >
        + (non-working)
      </button>
    </div>
  );
}
