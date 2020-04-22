import React, { useState, useEffect } from 'react'

interface IProps {
  tip: string,
  pathRef: React.RefObject<SVGElement>
  svgRef: React.RefObject<SVGSVGElement>
}

export const PathTooltip: React.FC<IProps> = (props) => {
  // set initial state
  const [hidden, setHidden] = useState(true)
  const [tooltipRect, setTooltipRect] = useState({ x: 0, y: 0, w:0, h:0, isLeft: false, isTop: false })
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

        const w = tooltipWidth + 10
        const h = fontSize + 20
        const x = (isLeft) ? pathRect.x - svgRect.x + pathRect.height/2 - 7 - w : pathRect.x - svgRect.x + pathRect.width/2 + 7
        const y = (isTop) ? pathRect.y - svgRect.y + pathRect.height/2 - 7 - h : pathRect.y - svgRect.y + pathRect.height/2 + 7

        setTooltipRect({ x: x, y: y, w: w, h: h, isLeft: isLeft, isTop: isTop })
      }
    }
    if (pathRef && pathRef.current) {
      pathRef.current.addEventListener('mouseover', () => {calcLocation(); setHidden(false)})
      pathRef.current.addEventListener('mouseleave', () => { setHidden(true) })
    }
  }, [pathRef, svgRef, tooltipWidth])

  const bottomRight = (tooltipRect.x + 7).toString() + "," + (tooltipRect.y - 10).toString() + " " + (tooltipRect.x + 15).toString() + "," + tooltipRect.y.toString() + " " + (tooltipRect.x + 7).toString() + "," + tooltipRect.y.toString()
  const bottomLeft = (tooltipRect.x + tooltipRect.w - 7).toString() + "," + (tooltipRect.y - 10).toString() + " " + (tooltipRect.x + tooltipRect.w - 15).toString() + "," + tooltipRect.y.toString() + " " + (tooltipRect.x + tooltipRect.w - 7).toString() + "," + tooltipRect.y.toString()
  const topRight = (tooltipRect.x + 7).toString() + "," + (tooltipRect.y + tooltipRect.h + 10).toString() + " " + (tooltipRect.x + 15).toString() + "," + (tooltipRect.y + tooltipRect.h).toString() + " " + (tooltipRect.x + 7).toString() + "," + (tooltipRect.y +tooltipRect.h).toString()
  const topLeft = (tooltipRect.x + tooltipRect.w - 7).toString() + "," + (tooltipRect.y + tooltipRect.h + 10).toString() + " " + (tooltipRect.x + tooltipRect.w - 15).toString() + "," + (tooltipRect.y +tooltipRect.h).toString() + " " + (tooltipRect.x + tooltipRect.w - 7).toString() + "," + (tooltipRect.y + tooltipRect.h).toString()
  const points = (tooltipRect.isLeft && tooltipRect.isTop) ? topLeft : (tooltipRect.isTop) ? topRight : (tooltipRect.isLeft) ? bottomLeft : bottomRight 

  // render everything
  return (
    <g pointerEvents={"none"} >
      <rect x={tooltipRect.x} y={tooltipRect.y} width={tooltipRect.w} rx={5} ry={5} height={tooltipRect.h} fill={"black"} stroke={"black"} visibility={(hidden ? "hidden" : "visible")} />
      <polygon fill={"black"} stroke={"black"} visibility={(hidden ? "hidden" : "visible")} points={points} />
      <text x={tooltipRect.x + 10} cursor={"default"} y={tooltipRect.y + 20} fontSize={fontSize} fill={"white"} visibility={(hidden ? "hidden" : "visible")}>
        {props.tip}
      </text>
    </g>
  )
}
