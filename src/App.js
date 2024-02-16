// App.js
import React from 'react';
import MainSection from './components/MainSection';
import Player from './components/Player';
import Sidebar from './components/Sidebar';

function App() {
  return (
    <div className="App">
      <Sidebar />
      <MainSection />
      <Player />
    </div>
  );
}

export default App;
