import React from "react"
import "./App.css"
import { PathTooltip } from "./ReactPathTooltip" // import the package

function App() {

  const svgRef = React.createRef<SVGSVGElement>()
  const redRef = React.createRef<SVGCircleElement>()
  const greenRef = React.createRef<SVGCircleElement>()
  const blueRef = React.createRef<SVGCircleElement>()
  const purpleRef = React.createRef<SVGRectElement>()
  const greyRef = React.createRef<SVGCircleElement>()

  return (
    < div className="App" >
      <h1>The SVG</h1>
      < div className="Main">
        <svg width="400" height="400" ref={svgRef}>
          <rect width="400" height="400" stroke="black" fill="none"/>

          <circle cx={50} cy={50} r={50} fill="red" ref={redRef} />
          <circle cx={80} cy={80} r={50} fill="green" ref={greenRef} />
          <circle cx={350} cy={350} r={30} fill="blue" ref={blueRef} />
          <rect x={320} y={50} width="50" height="50" fill="purple" ref={purpleRef}/>
          <circle cx={50} cy={320} r={10} fill="grey" ref={greyRef} />

          <PathTooltip svgRef={svgRef} pathRef={redRef} tip="This is the long Red!" />
          <PathTooltip svgRef={svgRef} pathRef={greenRef} tip="Green" />
          <PathTooltip svgRef={svgRef} pathRef={blueRef} tip="BL" fontFamily={"system-ui"}/>
          <PathTooltip svgRef={svgRef} pathRef={purpleRef} tip="Purple" fontSize={24}/>
          <PathTooltip svgRef={svgRef} pathRef={greyRef} tip="Grey" bgColor="gray" textColor="blue"/>

        </svg>
      </div>
    </div>
  )
}

export default App
