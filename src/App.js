import React from 'react';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <div className="node-environment">
          {process.env.NODE_ENV}
        </div>
      </header>
    </div>
  );
}

export default App;
