import React, { useState, useEffect } from 'react'

interface IProps {
  tip: string,
  pathRef: React.RefObject<SVGElement>,
  svgRef: React.RefObject<SVGSVGElement>,
  minWidth?: number,
  fontSize?: number,
  fontFamily?: string,
  bgColor?: string,
  textColor?: string
}

export const PathTooltip: React.FC<IProps> = (props) => {
  // set initial state
  const [hidden, setHidden] = useState(true)
  const [tooltipRect, setTooltipRect] = useState({ x: 0, y: 0, w:0, h:0, isLeft: false, isTop: false })
  const [fontSize, ] = useState (props["fontSize"] || 12)
  const [fontFamily, ] = useState (props["fontFamily"] || "sans-serif")
  const [bgColor, ] = useState (props["bgColor"] || "black")
  const [textColor, ] = useState (props["textColor"] || "white")
  const pathRef = props.pathRef
  const svgRef = props.svgRef
  const textRef = React.createRef<SVGTextElement>()

  // use effect to handle mouse over and mouse leave
  useEffect(() => {
    const calcTooltipRect = () => {
      if(svgRef && pathRef && textRef && svgRef.current && pathRef.current && textRef.current) {
        const svgRect = svgRef.current.getBoundingClientRect()
        const pathRect = pathRef.current.getBoundingClientRect()
        const textRect = textRef.current.getBoundingClientRect()

         const isLeft = ((pathRect.x - svgRect.x) > (svgRect.width / 2))
         const isTop = ((pathRect.y - svgRect.y) > (svgRect.height / 2))

        const w = textRect.width + 20
        const h = textRect.height + 20
        const x = (isLeft) ? pathRect.x - svgRect.x + pathRect.height/2 - 7 - w : pathRect.x - svgRect.x + pathRect.width/2 + 7
        const y = (isTop) ? pathRect.y - svgRect.y + pathRect.height/2 - 7 - h : pathRect.y - svgRect.y + pathRect.height/2 + 7

        setTooltipRect({ x: x, y: y, w: w, h: h, isLeft: isLeft, isTop: isTop })
      }
    }
    if (pathRef && pathRef.current) {
      pathRef.current.addEventListener('mouseover', () => {calcTooltipRect(); setHidden(false)})
      pathRef.current.addEventListener('mouseleave', () => { setHidden(true) })
    }
  }, [pathRef, svgRef, textRef])

  // build up tip of tooltip
  const bottomRight = (tooltipRect.x + 7).toString() + "," + (tooltipRect.y - 10).toString() + " " + (tooltipRect.x + 15).toString() + "," + tooltipRect.y.toString() + " " + (tooltipRect.x + 7).toString() + "," + tooltipRect.y.toString()
  const bottomLeft = (tooltipRect.x + tooltipRect.w - 7).toString() + "," + (tooltipRect.y - 10).toString() + " " + (tooltipRect.x + tooltipRect.w - 15).toString() + "," + tooltipRect.y.toString() + " " + (tooltipRect.x + tooltipRect.w - 7).toString() + "," + tooltipRect.y.toString()
  const topRight = (tooltipRect.x + 7).toString() + "," + (tooltipRect.y + tooltipRect.h + 10).toString() + " " + (tooltipRect.x + 15).toString() + "," + (tooltipRect.y + tooltipRect.h).toString() + " " + (tooltipRect.x + 7).toString() + "," + (tooltipRect.y +tooltipRect.h).toString()
  const topLeft = (tooltipRect.x + tooltipRect.w - 7).toString() + "," + (tooltipRect.y + tooltipRect.h + 10).toString() + " " + (tooltipRect.x + tooltipRect.w - 15).toString() + "," + (tooltipRect.y +tooltipRect.h).toString() + " " + (tooltipRect.x + tooltipRect.w - 7).toString() + "," + (tooltipRect.y + tooltipRect.h).toString()
  const points = (tooltipRect.isLeft && tooltipRect.isTop) ? topLeft : (tooltipRect.isTop) ? topRight : (tooltipRect.isLeft) ? bottomLeft : bottomRight 

  // render everything
  return (
    <g pointerEvents={"none"} >
      <rect x={tooltipRect.x} y={tooltipRect.y} width={tooltipRect.w} rx={5} ry={5} height={tooltipRect.h} fill={bgColor} visibility={(hidden ? "hidden" : "visible")} />
      <polygon fill={bgColor} visibility={(hidden ? "hidden" : "visible")} points={points} />
      <text ref={textRef} x={tooltipRect.x + 10} cursor={"default"} y={tooltipRect.y + tooltipRect.h/1.66} fontFamily={fontFamily} fontSize={fontSize} fill={textColor} visibility={(hidden ? "hidden" : "visible")}>
        {props.tip}
      </text>
    </g>
  )
}
