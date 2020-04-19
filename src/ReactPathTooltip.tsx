import React, { useState } from 'react'
import ReactDOM from 'react-dom'

interface IProps {
  tip?: string,
  "path-id": string,
  "svg-id": string,
  trigger?: string,
}

export const PathTooltip: React.FC<IProps> = (props) => {
  // set initial state
  const [hidden, setHidden] = useState(true)

  // define trigger
  const toggleTooltip = () => {
    console.log(hidden)
    setHidden(!hidden)
  }

  const isHoverTrigger = (props.trigger === "hover") ? true : false
  const onClick = (!isHoverTrigger) ? toggleTooltip : () => { }
  const onHover = (isHoverTrigger) ? toggleTooltip : () => { }

  // get ready to render child elements
  const svgid = props["svg-id"]
  const svgComponent = ReactDOM.findDOMNode({"id": svgid} as Element)
  const pathid = props["svg-id"]
  const childComponent = ReactDOM.findDOMNode({"id": pathid} as Element)
  console.log(svgComponent)

  // render everything
  return (
    <g onClick={onClick} onMouseOver={onHover} onMouseLeave={onHover}>
      <rect x={60} y={60} width={100} height={40} fill={"black"} visibility={(hidden ? "hidden" : "visible")} />
      <text x={120} y={80} fontSize={12} fill={"white"} visibility={(hidden ? "hidden" : "visible")}>
        <tspan x={70} dy="1em">{props.tip ? props.tip : "Enter text here"}</tspan>
      </text>
    </g>
  )
}

// Set default value
PathTooltip.defaultProps = {
  trigger: "hover"
} as Pick<IProps, "trigger">
