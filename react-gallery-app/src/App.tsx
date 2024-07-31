// src/App.tsx

import React from 'react';
import Gallery from './components/Gallery';
import './styles.css';

const App: React.FC = () => {
  return (
    <div className="App">
      <Gallery />
    </div>
  );
};

export default App;