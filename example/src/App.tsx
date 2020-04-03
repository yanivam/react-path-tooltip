import React from "react"
import "./App.css"
import { SVGTooltip } from "./ReactTooltipForSVG" // import the package

function App() {

  return (
    < div className="App" >
      < div className="Main">
        <svg width="200px" height="200px">
          <SVGTooltip tip="Hello world" state={true}>
            <circle cx={50} cy={50} r={10} fill="red" />
          </SVGTooltip>
        </svg>
      </div>
    </div>
  );
}

export default App;
