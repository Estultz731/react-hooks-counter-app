import React, { useState } from 'react';
import './App.css';

function App() {
  const [counter, updateCounter] = useState(0);
  return (
    <div id='App'>
      <button
        onClick={() => updateCounter(currentCounter => currentCounter - 1)}
      >
        -
      </button>
      <div id='Counter'>{counter}</div>
      <button
        onClick={() => updateCounter(currentCounter => currentCounter + 1)}
      >
        +
      </button>
    </div>
  );
}

export default App;
