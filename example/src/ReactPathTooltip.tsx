import React, { useState, useEffect } from 'react'

interface IProps {
  tip?: string,
  pathRef: React.RefObject<SVGElement>
  svgRef: React.RefObject<SVGSVGElement>
}

export const PathTooltip: React.FC<IProps> = (props) => {
  // set initial state
  const [hidden, setHidden] = useState(true)
  const fontSize = 12
  const tooltipWidth = (props.tip) ? fontSize * props.tip.length : 0
  const pathComponent = props.pathRef
  const svgComponent = props.svgRef
  const [popupOffset, setPopupOffset] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const calcPosition = () => {
      if(svgComponent && pathComponent && svgComponent.current && pathComponent.current) {
        const svgWidth = svgComponent.current.width.baseVal.value || 0
        const pathXOffset = pathComponent.current.getBoundingClientRect().x || 0
        const svgXOffset = svgComponent.current.getBoundingClientRect().x || 0

        const isLeft = ((pathXOffset - svgXOffset) > (svgWidth / 2))
        setPopupOffset({ x: (isLeft) ? pathXOffset - svgXOffset - tooltipWidth : pathXOffset - svgXOffset + 10, y: (pathComponent.current.getBoundingClientRect().y || 0) + 10 })
      }
    }
    if (pathComponent && pathComponent.current) {
      pathComponent.current.addEventListener('mouseover', () => {setHidden(false); calcPosition()})
      pathComponent.current.addEventListener('mouseleave', () => { setHidden(true) })
    }
  }, [pathComponent, svgComponent, tooltipWidth])

  // render everything
  return (
    <g>
      <rect x={popupOffset.x + 10} y={popupOffset.y + 10} width={tooltipWidth} height={40} fill={"black"} visibility={(hidden ? "hidden" : "visible")} />
      <text x={popupOffset.x} y={popupOffset.y + 10} fontSize={fontSize} fill={"white"} visibility={(hidden ? "hidden" : "visible")}>
        <tspan x={popupOffset.x + tooltipWidth / 4} dy="1em">{props.tip ? props.tip : "Enter text here"}</tspan>
      </text>
    </g>
  )
}
