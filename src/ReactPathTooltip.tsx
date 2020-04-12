import React, { useState } from 'react';

interface IProps {
  tip?: string,
  trigger?: string,
  children: React.ReactNode | ((xOffset: number, yOffset: number) => React.ReactNode)
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
  const childComponent = props.children instanceof Function ? props.children(0, 0) : props.children

  // render everything
  return (
    <g onClick={onClick} onMouseOver={onHover} onMouseLeave={onHover}>
      <rect x={60} y={60} width={320} height={80} fill={"black"} visibility={(hidden ? "hidden" : "visible")} />
      <text x={120} y={80} fontSize={24} fill={"white"} visibility={(hidden ? "hidden" : "visible")}>
        <tspan x={70} dy="1em">{props.tip ? props.tip : "Enter text here"}</tspan>
      </text>
      {childComponent}
    </g>
  )
}

// Set default value
PathTooltip.defaultProps = {
  trigger: "hover"
} as Pick<IProps, "trigger">;
