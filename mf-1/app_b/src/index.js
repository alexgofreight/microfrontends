import React from 'react';
import { createRoot } from 'react-dom/client'
// import { render } from 'react-dom';
const App = () => (
  <div>
    Hello, App B
  </div>
);

const domNode = document.getElementById('root')
const root = createRoot(domNode)
root.render(<App />)


// render(
//   <App />,
//   document.getElementById('root'),
// );