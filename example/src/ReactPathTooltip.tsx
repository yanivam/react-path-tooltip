import React, { useState } from 'react'

interface IProps {
  tip?: string,
  pathRef: React.RefObject<SVGElement>
  svgRef: React.RefObject<SVGSVGElement>
  trigger?: string,
  children: React.ReactNode | ((xOffset: number, yOffset: number) => React.ReactNode)
}

export const PathTooltip: React.FC<IProps> = (props) => {
  // set initial state
  const [hidden, setHidden] = useState(true)
  const fontSize = 12
  const tooltipWidth = (props.tip) ? fontSize * props.tip.length : 0
  const [popupOffset, setPopupOffset] = useState({x: 0, y: 0})

  // define trigger
  const toggleTooltip = () => {
    const pathComponent = props.pathRef.current
    const svgComponent = props.svgRef.current
    const svgWidth = svgComponent?.width.baseVal.value || 0
    const pathXOffset = pathComponent?.getBoundingClientRect().x || 0
    const svgXOffset = svgComponent?.getBoundingClientRect().x || 0
    
    const isLeft = ((pathXOffset - svgXOffset) > (svgWidth / 2))
    setPopupOffset({x: (isLeft) ? pathXOffset-svgXOffset-tooltipWidth: pathXOffset - svgXOffset + 10, y: (pathComponent?.getBoundingClientRect().y || 0) + 10})

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
      <rect x={popupOffset.x + 10} y={popupOffset.y + 10} width={tooltipWidth} height={40} fill={"black"} visibility={(hidden ? "hidden" : "visible")} />
      <text x={popupOffset.x} y={popupOffset.y + 10} fontSize={fontSize} fill={"white"} visibility={(hidden ? "hidden" : "visible")}>
        <tspan x={popupOffset.x + tooltipWidth / 4} dy="1em">{props.tip ? props.tip : "Enter text here"}</tspan>
      </text>
      {childComponent}
    </g>
  )
}

// Set default value
PathTooltip.defaultProps = {
  trigger: "hover"
} as Pick<IProps, "trigger">
