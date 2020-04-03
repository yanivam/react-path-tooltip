import React, { useState } from 'react';

interface IProps  {
  tip?: string,
  hidden?: Boolean
  children: React.ReactNode | ((xOffset: number, yOffset: number) => React.ReactNode)
}

export const SVGTooltip: React.FC<IProps> = (props) => {
  const [hidden, setHidden] = useState<Boolean>(true)
  const [state, setState] = useState<IProps>()
  const childComponent = props.children instanceof Function ? props.children(0, 0) : props.children
  const onClick = (hidden : Boolean) => {
      showOrHide(hidden)
  }

  const showOrHide = (hidden : Boolean) => {
    setHidden(hidden)
    setState({tip: props.tip, hidden:hidden, children: props.children})
  }

  return (
      (hidden) ? 
        <g onClick={() => onClick(false)}> {childComponent} </g>
      :
        <g onClick={() => onClick(true)}>
          <rect x={60} y={60} width={320} height={80} fill={"black"} />
          <text x={120} y={80} fontSize={24} fill={"white"}>
            <tspan x={70} dy="1em">{(state && state.tip) ? state.tip : props.tip}</tspan>
          </text>
          {childComponent}
        </g>
    )
}
