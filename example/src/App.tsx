import React from "react"
import "./App.css"
import { SvgTooltip } from "react-tooltip-for-svg" // import the package

function App() {

  const mySvg = 

  return (
    < div className="App" >
      < div className="Main">
        <svg width="200px" height="200px">
          <circle cx={50} cy={50} r={10} fill="red">
            <SvgToolTip tip="tooltip assigned to cricle" />
          </circle>
        </svg>
      </div>
    </div>
  );
}

export default App;
