import React from 'react';
import '../style/App.css';
import Topbar from "./Topbar"
import Searchbar from './Searchbar';
import ResultList from './ResultList';
import RightPanel from './RightPanel';


export default function App() {

  return (
    <div className="App">
      <Topbar />
      <Searchbar />
        
      <ResultList />
        
      <RightPanel />
      
    </div>
  );
}


