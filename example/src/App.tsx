import React from "react"
import "./App.css"
import { PathTooltip } from "react-path-tooltip" // import the package

function App() {

  return (
    < div className="App" >
      < div className="Main">
        <svg width="200px" height="200px">
          <PathTooltip tip="Hello world" >
            <circle cx={50} cy={50} r={10} fill="red" />
          </PathTooltip>
        </svg>
      </div>
    </div>
  );
}

export default App;
