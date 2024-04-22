import React from 'react';
import { createRoot } from 'react-dom/client'

const styles = {
  body: {
    display: 'flex',
    justifyContent: 'space-evenly'
  },
  bodyLeft: {
    backgroundColor: 'yellow',
    width: '100px',
    height: '100px'
  },
  bodyRight: {
    backgroundColor: 'blue',
    width: '100px',
    height: '100px'
  }
}

const Button = React.lazy(()=>import('app2/Button'))

const App = () => (
  <div>
    Hello, App A
    <div style={styles.body}>
      <div style={styles.bodyLeft}>
        It's App A's bg
      </div>
      <div style={styles.bodyRight}>
        <Button>The Button from app_b</Button>
      </div>
    </div>
  </div>
);

const domNode = document.getElementById('root')
const root = createRoot(domNode)
root.render(<App />)