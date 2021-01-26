import { Component } from 'react';

// Difference 1: Declare component using `class` keyword
// and `extends Component` or `extends React.Component`
export default class ExampleClassComponent extends Component {
  // Difference 4.1: Initializing state
  state = {
    count: 0,
  };

  // Difference 2: Writing the `render` method
  render() {
    return (
      <div>
        {/* Difference 3: Refer to props with `this` */}
        <h1>{this.props.title}</h1>

        {/* Difference 4.2: Referring to state variables */}
        {this.state.count}

        <button
          onClick={() => {
            // Difference 4.3: Updating state variables
            this.setState({ count: this.state.count + 1 });
          }}
        >
          +
        </button>

        <button
          onClick={() => {
            // Difference 4.3: Updating state variables
            this.setState({ count: this.state.count - 1 });
          }}
        >
          -
        </button>
      </div>
    );
  }
}
