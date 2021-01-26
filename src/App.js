import './App.css';
import ExampleClassComponent from './classComponents/ExampleClassComponent';
import ExampleHooksFunctionComponent from './classComponents/ExampleHooksFunctionComponent';
import ExampleConditionalRendering from './ExampleConditionalRendering';
import ExampleFormsControlledComponents from './ExampleFormsControlledComponents';
import ExampleMapping from './ExampleMapping';
import ExampleProps from './ExampleProps';
import ExampleStateCounter from './ExampleStateCounter';
import ExampleStyling from './ExampleStyling';
import ExampleLiftingStateUpAfter from './liftingStateUp/After';
import ExampleLiftingStateUp from './liftingStateUp/Before';

function App() {
  return (
    <div className="App">
      <ExampleProps />
      <ExampleStateCounter />
      <ExampleMapping />
      <ExampleConditionalRendering />
      <ExampleFormsControlledComponents />
      <ExampleHooksFunctionComponent title="Hooks Example" />
      <ExampleClassComponent title="Classes Example" />
      <ExampleStyling />
      <ExampleLiftingStateUp />
      <ExampleLiftingStateUpAfter />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
      <br />
    </div>
  );
}

export default App;
