import React, { useState, useEffect } from 'react'

interface IProps {
  tip: string,
  pathRef: React.RefObject<SVGElement>
  svgRef: React.RefObject<SVGSVGElement>
}

export const PathTooltip: React.FC<IProps> = (props) => {
  // set initial state
  const [hidden, setHidden] = useState(true)
  const [tooltipLocation, settooltipLocation] = useState({ x: 0, y: 0, w:0, h:0 })
  const fontSize = 12
  const tooltipWidth = fontSize * props.tip.length
  const pathRef = props.pathRef
  const svgRef = props.svgRef

  useEffect(() => {
    const calcLocation = () => {
      if(svgRef && pathRef && svgRef.current && pathRef.current) {
        const svgRect = svgRef.current.getBoundingClientRect()
        const pathRect = pathRef.current.getBoundingClientRect()

        const isLeft = ((pathRect.x - svgRect.x) > (svgRect.width / 2))
        const isTop = ((pathRect.y - svgRect.y) > (svgRect.height / 2))

        const w = tooltipWidth + 20
        const h = fontSize + 20
        const x = (isLeft) ? pathRect.x - svgRect.x + pathRect.height/2 - 5 - w : pathRect.x - svgRect.x + pathRect.width/2 + 5
        const y = (isTop) ? pathRect.y - svgRect.y + pathRect.height/2 - 5 - h : pathRect.y - svgRect.y + pathRect.height/2 + 5

        settooltipLocation({ x: x, y: y, w: w, h: h })
      }
    }
    if (pathRef && pathRef.current) {
      pathRef.current.addEventListener('mouseover', () => {setHidden(false); calcLocation()})
      pathRef.current.addEventListener('mouseleave', () => { setHidden(true) })
    }
  }, [pathRef, svgRef, tooltipWidth])

  // render everything
  return (
    <g>
      <rect x={tooltipLocation.x} y={tooltipLocation.y} width={tooltipLocation.w} rx={10} ry={10} height={tooltipLocation.h} fill={"white"} stroke={"black"} visibility={(hidden ? "hidden" : "visible")} />
      <text x={tooltipLocation.x + 10} cursor={"default"} y={tooltipLocation.y + 20} fontSize={fontSize} fill={"black"} visibility={(hidden ? "hidden" : "visible")}>
        {props.tip}
      </text>
    </g>
  )
}
