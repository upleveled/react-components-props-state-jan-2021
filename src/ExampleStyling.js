/** @jsxImportSource @emotion/react */

import { css } from '@emotion/react';
import './ExampleStyling.css';

const color = 'green';

const divStyles = css`
  background-color: #ddd;
  margin-top: 20px;
  padding: 10px;
  color: ${color};
`;

export default function ExampleStyling() {
  return (
    <div>
      <h1>Example Styling</h1>

      {/* For very simple styling, can be difficult to use (different names, etc.) */}
      <div style={{ color: color, paddingBottom: '10px' }}>Styled content</div>

      {/* Use CSS as you are used to, but no availability of things like variables */}
      <div className="class-name-div">Class name div</div>

      {/* CSS-in-JS (Emotion): best of both worlds */}
      <div css={divStyles}>Div styled with CSS-in-JS (Emotion)</div>
    </div>
  );
}
