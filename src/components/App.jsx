import React from 'react';
import '../style/App.css';
import Topbar from "./Topbar"
import Searchbar from './Searchbar';
import ResultList from './ResultList';
import RightPanel from './RightPanel';
import LoginScreen from './LoginScreen';
import { useSelector } from "react-redux";


export default function App() {

  const mainPage = useSelector(state => state.mainPage)
  return (
    <div className="App">
      <Topbar />
      {mainPage ? <>
      <Searchbar />
      <ResultList />
      <RightPanel />
      </>
      :
      <LoginScreen />
      }
    </div>
  );
}


