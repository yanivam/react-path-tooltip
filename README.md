# react-path-tooltop [![License: MIT](https://img.shields.io/badge/license-MIT-yellow.svg)](https://opensource.org/licenses/MIT) [![npm version](https://img.shields.io/npm/v/react-path-tooltip.svg?style=flat)](https://www.npmjs.com/package/react-path-tooltip) [![Demo: Simple Example](https://img.shields.io/badge/demo-live-red.svg)](https://react-path-tooltip-simple-example.imfast.io)

A simple yet beautiful react tooltip component for paths (i.e. SVGElements).
The component detects the SVG and Path locations/sizes. The component also detects the display text width of the tooltip. Based on that information a calculation is done so that the rendering of the tooltip will be optimized and correctly oriented.  

**Note:** In SVG, the rendering order is based on the document order. I.e. the first elements in the SVG document fragment getting "painted" first. Subsequent elements are painted on top of previously painted elements. To avoid issues with path elements rendered on top of tooltips, please place all tooltips below all content path elements. 

## Demo

Click [here](https://react-path-tooltip-simple-example.imfast.io) for live demo.

## Install 

In order to install, run the following command:
~~~
$ npm install react-path-tooltip --save
~~~


## Usage 
A very simple `App.tsx' example: 

```tsx
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
          <PathTooltip svgRef={svgRef} pathRef={pathRef} tip="Hello World!" />
        </svg>
      </div>
    </div>
  )
}

export default App
```

## Customization
The following parameters are passed to the tooltip component:

| Prop       | Type   | Description |
| ---------- | ------ | ----------- |
| tip        | string | Mandatory. The text to be displayed inside the tooltip |
| svgRef     | React.RefObject<SVGElement> | Mandatory. A React reference object to the SVG element |
| pathRef    | React.RefObject<SVGSVGElement> | Mandatory. A React reference object to the path element bounded to the tooltip |
| bgColor    | string | Optional. Background color. Default: "black" |
| textColor  | string | Optional. Text color. Default: "white" |
| fontFamily | string | Optional. The font family. Default: san-serif |
| fontSize   | number | Optional. The font size. Default 12| 

**Notes:**

* `tip` must include simple text. No new lines, or html decoration. 
* `pathRef` must be a valid reference to a path element. There are a number of such types such as SVGRectElement, SVGCircleElement, etc. 
* The SVG rendering should be such that all the tooltip elelments are at the bottom of the SVG definition, and specifically, after the path elements. Otherwise, there is a risk of paths overlaping tooltips. 

## License
MIT

