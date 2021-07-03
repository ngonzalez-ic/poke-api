import React from 'react';
import './App.css';
import Navabar from './components/navbar/Navbar'
import SerchBar from './components/serchbar/SerchBar';

function App() {
  return (
    <div>
      <Navabar />
      <div className='App'>
        <SerchBar />
      </div>
    </div>
  );
}

export default App;
