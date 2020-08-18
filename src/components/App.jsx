import React from 'react';
import logo from '../logo.svg';
import '../style/App.css';
import Topbar from "./Topbar"
import Searchbar from './Searchbar';

export default function App() {
  return (
    <div className="App">
      <Topbar />
      <Searchbar />
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        
      
    </div>
  );
}


