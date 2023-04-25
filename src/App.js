import React, { useState } from "react";
import "./App.css";
import Search from "./SearchBar/Search";
import Suggestion from "./Suggestion/Suggestion";
import Data from "./Data/Data";

function App () {
  const [currentData, setCurrentData] = useState([]);

  const setChanges = (regex) => {
    const newData = Data.filter((element) => {
      return element.includes(regex.trim());
    })
    setCurrentData(newData);
  }

  return (
    <div className="App">
      <div className="container">
        <Search setChanges={setChanges} />
        <Suggestion data={currentData} />
      </div>
    </div>
  );
}

export default App;
