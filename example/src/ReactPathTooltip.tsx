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
        console.log("svg",svgRect)
        console.log("path",pathRect)
        console.log("text",tooltipWidth)
        console.log("left",isLeft,"top",isTop)
        console.log("x",x,"y",y)
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
      <rect x={tooltipLocation.x} y={tooltipLocation.y} width={tooltipLocation.w} height={tooltipLocation.h} fill={"black"} visibility={(hidden ? "hidden" : "visible")} />
      <text x={tooltipLocation.x + 10} y={tooltipLocation.y + 20} fontSize={fontSize} fill={"white"} visibility={(hidden ? "hidden" : "visible")}>
        {props.tip}
      </text>
    </g>
  )
}
