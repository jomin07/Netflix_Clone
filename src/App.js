import React from "react";
import NavBar from "./Components/Navbar/NavBar";
import {action,comedy,documentaries,horror,originals, romance, trending} from './urls';
import "./App.css";
import Bannner from "./Components/Banner/Bannner";
import RowPost from "./Components/RowPost/RowPost";
function App() {
  return (
    <div className="app">
      <NavBar/>
      <Bannner/>
      <RowPost url={originals} title='Netflix Originals'/> 
      <RowPost url={action} title='Action' isSmall/>
      <RowPost url={comedy} title='Comedy' isSmall/>
      <RowPost url={horror} title='Horror' isSmall/>
      <RowPost url={romance} title='Romance' isSmall/>
      <RowPost url={documentaries} title='Documentaries' isSmall/>
      <RowPost url={trending} title='Trending' isSmall/>
    </div>  

  );
}

export default App;
