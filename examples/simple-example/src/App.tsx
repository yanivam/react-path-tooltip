import React from "react"
import "./App.css"
import { PathTooltip } from "react-path-tooltip" // import the package

function App() {

  const svgRef = React.createRef<SVGSVGElement>()
  const redRef = React.createRef<SVGCircleElement>()
  const greenRef = React.createRef<SVGCircleElement>()
  const blueRef = React.createRef<SVGCircleElement>()
  const purpleRef = React.createRef<SVGRectElement>()
  const greyRef = React.createRef<SVGCircleElement>()
  const pinkRef = React.createRef<SVGCircleElement>()

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
          <circle cx={190} cy={190} r={40} fill="pink" ref={pinkRef} />

          <PathTooltip svgRef={svgRef} pathRef={redRef} tip="This is the long Red! I want to make this text really really long for the purposes of showing that you can create multiple lines of text now using and it cuts off the text based on the size of the screen." />
          <PathTooltip svgRef={svgRef} pathRef={greenRef} tip="Green" />
          <PathTooltip svgRef={svgRef} pathRef={blueRef} tip="BL" fontFamily={"system-ui"}/>
          <PathTooltip svgRef={svgRef} pathRef={purpleRef} tip="Purple. Since this font is bigger I also wanted to show how having a bigger font affects the multiple lines aspect of the code." fontSize={24}/>
          <PathTooltip svgRef={svgRef} pathRef={greyRef} tip="Grey" bgColor="#909090" textColor="blue"/>
          <PathTooltip svgRef={svgRef} pathRef={pinkRef} tip="Pink" textColor="pink"/>

        </svg>
      </div>
    </div>
  )
}

export default App
// <svg width="400" height="400" ref={svgRef} viewBox={"0 0 960 960"}>
