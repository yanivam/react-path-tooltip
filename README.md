# React Path Tooltop

A simple yet beautiful react component to assign tooltips for SVG Paths.
The components detects the SVG and Path sizes as well as calculated the display text width of the tooltip and render the tool tip oriented accordingly. 

**Note:** When generating SVG with multiple paths, make sure to add the tooltips at the bottom of the SVG element, after all the paths are already displays. 

## Install 

In order to install, run the following command:
~~~
$ npm install react-path-tooltip --save
~~~


## Usage 
A very simple `App.tsx' example: 

~~~
import React from "react"
import "./App.css"
import { PathTooltip } from "ReactPathTooltip" // import the package

function App() {

  const svgRef = React.createRef<SVGSVGElement>()
  const pathRef = React.createRef<SVGCircleElement>()

  return (
    < div className="App" >
      < div className="Main">
        <svg width="400" height="400" ref={svgRef}>
          <circle cx={50} cy={50} r={50} fill="red" ref={pathRef} />
          <PathTooltip svgRef={svgRef} pathRef={redRef} tip="Hello Workd!" />
        </svg>
      </div>
    </div>
  )
}

export default App
~~~

## Customization
The following mandatory and optional parameters are passed to the tooltip component:

| Prop             | Type   | Description |
| ---------------- | ------ | ----------- |
| tip              | string                      | Mandatory. The text to be displayed inside the tooltip |
| svgRef           | React.RefObject<SVGElement> | Mandatory. A React reference object for the SVG element containing the path |
| pathRef          | React.RefObject<SVGSVGElement> | Mandatory. A React reference object for the path that will bounded for this tooltip |

Note: 
* `tip` must include simple text. No new lines, or html decoration. 
* `pathRef` must be a valid reference to a path element. There are a number of such types such as SVGRectElement, SVGCircleElement, etc. 
* The SVG rendering should be such that all the tooltip elelments are at the bottom of the SVG definition, and specifically, after the path elements. Otherwise, there is a risk of paths overlaping tooltips. 


## License
MIT

