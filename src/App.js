import React from 'react';
import './App.css';

import TestComponent from './components/TestComponent';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="node-environment">
          {process.env.NODE_ENV}
        </div>
        <div className="custom-environment">
          {process.env.REACT_APP_HELLO}
        </div>
        <div className="test-component">
          <TestComponent />
        </div>
      </header>
    </div>
  );
}

export default App;
