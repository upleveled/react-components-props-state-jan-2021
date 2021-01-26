const technologies = [
  { id: 1, name: 'HTML' },
  { id: 2, name: 'CSS' },
  { id: 3, name: 'JS' },
  { id: 4, name: 'TS' },
  { id: 5, name: 'SQL' },
  { id: 6, name: 'Python' },
];

export default function ExampleMapping() {
  return (
    <>
      <h1>Example Mapping</h1>
      <p>We have learned some of the following languages:</p>
      <ul>
        {technologies.map((element) => {
          return <li key={`technology-${element.id}`}>{element.name}</li>;
        })}
      </ul>
    </>
  );
}
