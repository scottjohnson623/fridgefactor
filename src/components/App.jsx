import React from 'react';
import logo from '../logo.svg';
import '../style/App.css';
import Topbar from "./Topbar"
import Searchbar from './Searchbar';
import PopularFood from './PopularFood';
import ResultList from './ResultList';

export default function App() {
  return (
    <div className="App">
      <Topbar />
      <Searchbar />
        
      <ResultList />
        
      
    </div>
  );
}


