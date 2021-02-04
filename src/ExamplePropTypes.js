import PropTypes from 'prop-types';

export default function ExamplePropTypes(props) {
  return (
    <>
      <h1>{props.title}</h1>
      First name: {props.user.firstName}
      <br />
      Last name: {props.user.lastName}
      <br />
    </>
  );
}

ExamplePropTypes.propTypes = {
  title: PropTypes.string.isRequired,
  user: PropTypes.shape({
    firstName: PropTypes.string.isRequired,
    lastName: PropTypes.string,
  }).isRequired,
};
