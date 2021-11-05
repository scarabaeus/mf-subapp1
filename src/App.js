import React from 'react';
import './App.css';

const App = ({ standAlone = true }) => {
  return (
    <div>
      mf-subapp1
      <h2>Mode: {standAlone ? 'standalone' : 'embedded'}</h2>
      <p>React version: {React.version}</p>
    </div>
  );
};

export default App;
