import { useState } from 'react';

export default function ExampleStateArrays() {
  const [names, setNames] = useState([
    { id: 1, name: 'Johanna' },
    { id: 2, name: 'Sasa' },
    { id: 7, name: 'Robert' },
  ]);

  return (
    <>
      <h1>useState with Arrays</h1>

      <ol style={{ maxWidth: 120, margin: '0 auto' }}>
        {names.map((name) => (
          <li key={`name-${name.id}`}>{name.name}</li>
        ))}
      </ol>

      <button
        onClick={() => {
          const lastId =
            // .slice(-1) Create a new array with the last element in the array
            // [0] Get the first element from that array
            // .id Get the id property
            names.slice(-1)[0].id;

          const nextId = lastId + 1;

          const newName = { id: nextId, name: 'Emilia' };

          // names.push(newName);
          // console.log('new names', names);
          // setNames(names); // 💥 Does not work!

          const newNames =
            // Opening square bracket means "create a new array"
            [
              // Use all of the previous names at the start of this new array
              ...names,
              // Add Emilia as the last entry
              newName,
            ];

          setNames(newNames);
        }}
      >
        Add Emilia
      </button>
    </>
  );
}
