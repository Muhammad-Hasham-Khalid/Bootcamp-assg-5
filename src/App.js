import React, { useState } from "react";
import Parent from "./components/Parent";
import CounterContext from "./components/CounterContext";
import "./App.css";

/*
Context Api:
  provide central place where we can manage our state
  we can fetch data directly the 
  Central place for data
*/

function App() {
  let countState = useState(0); //[count, setCount]

  return (
    <CounterContext.Provider value={countState}>
      <div>
        <Parent name="Electron" />
      </div>
    </CounterContext.Provider>
  );
}

export default App;
// Grand father
