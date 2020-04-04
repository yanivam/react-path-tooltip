import React, { useState } from 'react';

interface IProps  {
  tip?: string,
  isClick?: Boolean,
  children: React.ReactNode | ((xOffset: number, yOffset: number) => React.ReactNode)
}

export const SVGTooltip: React.FC<IProps> = (props) => {
  const [hidden, setHidden] = useState<Boolean>(true)
  const isClick = props.isClick ? props.isClick : false
  const childComponent = props.children instanceof Function ? props.children(0, 0) : props.children
  const toggleTooltip = () => {
    console.log(hidden)
    setHidden(!hidden)
  }

  const onClick = (isClick) ? toggleTooltip : () => {}
  const onHover = (!isClick) ? toggleTooltip : () => {}

  return (
          <g onClick={onClick} onMouseOver={onHover} onMouseLeave={onHover}>
            <rect x={60} y={60} width={320} height={80} fill={"black"} visibility={(hidden ? "hidden" : "visible")}/>
            <text x={120} y={80} fontSize={24} fill={"white"} visibility={(hidden ? "hidden" : "visible")}>
              <tspan x={70} dy="1em">{props.tip  ? props.tip : "Enter text here"}</tspan>
            </text>
            {childComponent}
          </g>
        )
}
