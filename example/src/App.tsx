import React from "react"
import "./App.css"
import { PathTooltip } from "./ReactPathTooltip" // import the package

function App() {

  const svgRef=React.createRef<SVGSVGElement>()
  const circleRedRef=React.createRef<SVGCircleElement>()
  const circleGreenRef=React.createRef<SVGCircleElement>()
  const circleBlueRef=React.createRef<SVGCircleElement>()

  return (
    < div className="App" >
      < div className="Main">
        <svg width="200px" height="400px" ref={svgRef}>
          
          <circle cx={50} cy={50} r={10} fill="red" ref={circleRedRef} />
          <PathTooltip svgRef={svgRef} pathRef={circleRef} tip="Hello world" />
          
          <circle cx={150} cy={200} r={20} fill="green" ref={circleGreenRef} />
          <PathTooltip svgRef={svgRef} pathRef={circleGreenRef} tip="Hmmmmmmm" />
          
          <circle cx={101} cy={101} r={30} fill="blue" ref={circleBlueRef} />
          <PathTooltip svgRef={svgRef} pathRef={circleBlueRef} tip="HW" />

        </svg>
      </div>
    </div>
  )
}

export default App
