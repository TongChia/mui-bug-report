import { h } from 'preact';
import { useState, useEffect } from 'preact/hooks';
import logo from './logo.png';
import './App.css';

// not working ↓
// import { Button } from '@mui/material';

// works ↓
import Button from '@mui/material/Button';
// not working too ↓ ! the problem component !
// import Modal from '@mui/material/Modal';

function App() {
  // Create the count state.
  const [count, setCount] = useState(0);
  // Create the counter (+1 every second).
  useEffect(() => {
    const timer = setTimeout(() => setCount(count + 1), 1000);
    return () => clearTimeout(timer);
  }, [count, setCount]);
  // Return the App component.
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.jsx</code> and save to reload.
        </p>
        <p>
          Page has been open for <code>{count}</code> seconds.
        </p>
        <p>
          <Button
            className="App-link"
            href="https://preactjs.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn Preact
          </Button>
        </p>
      </header>
    </div>
  );
}

export default App;
