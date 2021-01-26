// function sum(a, b) {
//   return a + b;
// }

// sum(1,2)

function ProfileDestructuring({ user: { id, name }, imageStyle }) {
  // props:
  // {
  //   user: {
  //     id: 123,
  //     name: 'Karl'
  //   },
  //   imageStyle: 'rounded'
  // }

  return (
    <div>
      <h1>Example Props</h1>
      <h2>Profile Information</h2>
      id: {id}
      <br />
      name: {name}
      <br />
      profile image style: {imageStyle}
    </div>
  );
}

const user = { id: 123, name: 'Karl' };

export default function ExampleProps() {
  return (
    <ProfileDestructuring
      // These "attribute"-like things become keys in the `props` object above
      user={user}
      imageStyle="rounded"
    />
  );
}
