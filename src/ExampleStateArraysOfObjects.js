import { useState } from 'react';

export default function ExampleStateArraysOfObjects() {
  const [vegetables, setVegetables] = useState([
    { id: 1, name: 'Spinach', isAwesome: true },
    { id: 2, name: 'Potato', isAwesome: true },
    { id: 7, name: 'Onion', isAwesome: true },
  ]);

  return (
    <>
      <h1>useState with Arrays of Objects (modifying certain object)</h1>

      <ol style={{ maxWidth: 180, margin: '0 auto' }}>
        {vegetables.map((vegetable) => (
          <li key={`vegetable-${vegetable.id}`}>
            {vegetable.name} is{' '}
            {vegetable.isAwesome ? 'awesome' : 'not awesome'}
          </li>
        ))}
      </ol>

      <button
        onClick={() => {
          const newVegetables = [...vegetables];
          const onion = newVegetables.find(
            (vegetable) => vegetable.name === 'Onion',
          );
          onion.isAwesome = !onion.isAwesome;
          setVegetables(newVegetables);
        }}
      >
        Toggle Onion awesomeness
      </button>
    </>
  );
}
