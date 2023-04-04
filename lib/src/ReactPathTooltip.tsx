import React, { useState, useEffect, createRef } from 'react'

interface IProps {
  tip: string,
  pathRef: React.RefObject<SVGElement>,
  svgRef: React.RefObject<SVGSVGElement>,
  minWidth?: number,
  fontSize?: number,
  fontFamily?: string,
  bgColor?: string,
  textColor?: string,
  rtl?: boolean
}

export const PathTooltip: React.FC<IProps> = (props : IProps) => {

  // set initial state
  const [hidden, setHidden] = useState(true)
  const [tooltipRect, setTooltipRect] = useState({ x: 0, y: 0, w: 0, h: 0, isLeft: false, isTop: false })
  const [fontSize,] = useState(props["fontSize"] || 12)
  const [fontFamily,] = useState(props["fontFamily"] || "sans-serif")
  const [bgColor,] = useState(props["bgColor"] || "black")
  const [textColor,] = useState(props["textColor"] || "white")
  const [rtl,] = useState(props["rtl"] || false)
  const pathRef = props.pathRef
  const svgRef = props.svgRef
  const textRef = createRef<SVGTextElement>()

  // use effect to handle mouse over and mouse leave
  useEffect(() => {

    const updateTooltip = (e: MouseEvent) => {
      if (svgRef && pathRef && textRef && svgRef.current && pathRef.current && textRef.current) {
        const svgRect = svgRef.current.getBoundingClientRect()
        const textRect = textRef.current.getBoundingClientRect()

        const isLeft = ((e.x - svgRect.x) > (svgRect.width / 2))
        const isTop = ((e.y - svgRect.y) > (svgRect.height / 2))

        const w = textRect.width + 20
        const h = textRect.height + 20
        const x = (isLeft) ? e.x - svgRect.x + 8 - w : e.x - svgRect.x - 8
        const y = (isTop) ? e.y - svgRect.y - 12 - h : e.y - svgRect.y + 8

        setTooltipRect({ x: x, y: y, w: w, h: h, isLeft: isLeft, isTop: isTop })
      }
    }

    if (pathRef && pathRef.current) {
      pathRef.current.addEventListener('mouseover', () => { setHidden(false) })
      pathRef.current.addEventListener('mouseleave', () => { setHidden(true) })
      pathRef.current.addEventListener('mousemove', (e) => { if (!hidden) updateTooltip(e) })
    }
  }, [pathRef, svgRef, textRef, hidden])

  // build up tip of tooltip
  const bottomRight = (tooltipRect.x + 7).toString() + "," + (tooltipRect.y - 10).toString() + " " + (tooltipRect.x + 30).toString() + "," + tooltipRect.y.toString() + " " + (tooltipRect.x + 22).toString() + "," + tooltipRect.y.toString()
  const bottomLeft = (tooltipRect.x + tooltipRect.w - 8).toString() + "," + (tooltipRect.y - 10).toString() + " " + (tooltipRect.x + tooltipRect.w - 25).toString() + "," + tooltipRect.y.toString() + " " + (tooltipRect.x + tooltipRect.w - 15).toString() + "," + tooltipRect.y.toString()
  const topRight = (tooltipRect.x + 7).toString() + "," + (tooltipRect.y + tooltipRect.h + 10).toString() + " " + (tooltipRect.x + 15).toString() + "," + (tooltipRect.y + tooltipRect.h).toString() + " " + (tooltipRect.x + 7).toString() + "," + (tooltipRect.y + tooltipRect.h).toString()
  const topLeft = (tooltipRect.x + tooltipRect.w - 7).toString() + "," + (tooltipRect.y + tooltipRect.h + 10).toString() + " " + (tooltipRect.x + tooltipRect.w - 15).toString() + "," + (tooltipRect.y + tooltipRect.h).toString() + " " + (tooltipRect.x + tooltipRect.w - 7).toString() + "," + (tooltipRect.y + tooltipRect.h).toString()
  const points = (tooltipRect.isLeft && tooltipRect.isTop) ? topLeft : (tooltipRect.isTop) ? topRight : (tooltipRect.isLeft) ? bottomLeft : bottomRight

  // if tip text is too long then wrap the text in multi-lines 
  const findSpaceBeforeThreshold = (inputString: string, threshold: number) => {
    let i = 0
    let temp = -1
    if (inputString.length <= threshold) { return ["", inputString] }
    while (i <= inputString.length && i <= threshold) {
      if (inputString[i] === " ") {
        temp = i
      }
      i++
    }
    return temp !== -1 ? [inputString.slice(0, temp), inputString.slice(temp + 1)] : [inputString.slice(0, threshold), inputString.slice(threshold + 1)]
  }
  const tips: string[] = []
  const startTip = findSpaceBeforeThreshold(props.tip, 35 - (1 * fontSize - 11))
  tips.push(startTip[0])
  let interimTip = startTip[1]
  let leftover = startTip[1]
  while (interimTip !== "") {
    const currTip = findSpaceBeforeThreshold(interimTip === leftover ? interimTip : leftover, 35 - (1 * fontSize - 11))
    interimTip = currTip[0]
    leftover = currTip[1]
    tips.push(interimTip === "" ? currTip[1] : currTip[0])
  }

  // render everything
  return (
    <g pointerEvents={"none"}>
      <rect x={tooltipRect.x} y={tooltipRect.y} width={tooltipRect.w} rx={5} ry={5} height={tooltipRect.h} fill={bgColor} visibility={(hidden ? "hidden" : "visible")} />
      <polygon fill={bgColor} visibility={(hidden ? "hidden" : "visible")} points={points} />
      <text
        ref={textRef}
        x={rtl ? tooltipRect.x + tooltipRect.w - 10 : tooltipRect.x + 10}
        y={tooltipRect.y}
        cursor={"default"}
        fontFamily={fontFamily}
        fontSize={fontSize}
        fill={textColor}
        visibility={(hidden ? "hidden" : "visible")}>
        {props.tip.length > 35 - (1 * (fontSize - 11))
          ?
          tips.map((tip, index) => {
            return (
              <tspan
                key={tip}
                x={rtl ? tooltipRect.x + tooltipRect.w - 10 : tooltipRect.x + 10}
                y={tooltipRect.y + (20 + (1 * fontSize - 11)) + (20 * (index))}>
                {tip}
              </tspan>
            )
          })
          :
          <tspan
            x={rtl ? tooltipRect.x + tooltipRect.w - 10 : tooltipRect.x + 10}
            y={tooltipRect.y + (20 + (1 * fontSize - 11))}>{
              props.tip}
          </tspan>}
      </text>
    </g>
  )
}
