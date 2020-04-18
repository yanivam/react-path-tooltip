import React from "react"
import "./App.css"
import { PathTooltip } from "./ReactPathTooltip" // import the package

function App() {

  return (
    < div className="App" >
      < div className="Main">
        <svg width="200px" height="200px" id="svg">
          <circle cx={50} cy={50} r={10} fill="red" id="circle" />
          <PathTooltip svg-id="svg" path-id="circle" tip="Hello world" />
        </svg>
      </div>
    </div>
  );
}

export default App;
