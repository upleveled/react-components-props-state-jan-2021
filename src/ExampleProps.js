// function sum(a, b) {
//   return a + b;
// }

// sum(1,2)

function Profile(props) {
  console.log('props', props);
  // props { user: { id: 123, name: 'Karl' }, imageStyle: 'rounded' }

  return (
    <div>
      <h1>Example Props</h1>
      <h2>Profile Information</h2>
      id: {props.user.id}
      <br />
      name: {props.user.name}
      <br />
      profile image style: {props.imageStyle}
    </div>
  );
}

const user = { id: 123, name: 'Karl' };

export default function ExampleProps() {
  return <Profile user={user} imageStyle="rounded" />;
}
