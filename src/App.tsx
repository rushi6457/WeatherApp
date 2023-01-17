import React from 'react';
import logo from './logo.svg';
import './App.css';
import Weather from './Components/Weather';
import Search from './Components/Search';

function App() {
  return (
    <div className="App">
        <Weather/>
        <Search/>
    </div>
  );
}

export default App;
