import './App.css';
import { useState } from 'react';
import useNonInitialRenderHook from './hooks/useNonInitialRenderHook';

function App() {
  const [count, setCount] = useState(0)
  const [label, setLabel] = useState('')

  useNonInitialRenderHook(() => {
    setLabel(`You clicked ${count} times`)
  }, [count]);

  return (
    <div className='App' >
      <h1>Custom Hook Example</h1>
      <span data-testid='count'>Count : {count}</span>
      <p data-testid='label'>{label}</p>

      <button onClick={() => setCount(count + 1)} data-testid='check-btn'>{label ? 'Click to add' : 'Click to Display'}</button>

      <p>Note : Label will be displayed after Click (First Render)</p>
    </div>
  );
}

export default App;
