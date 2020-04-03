import * as React from 'react';

interface IProps  {
  tip?: string,
  state: Boolean
}

export const SVGTooltip: React.FC<IProps> = (props) => {
  
  return (
      <g>
        <rect x={60} y={60} width={320} height={80} fill={"black"} />
        <text x={120} y={80} fontSize={24} fill={"white"}>
          <tspan x={70} dy="1em">{props.tip ? props.tip : "Enter text here"}</tspan>
        </text>
      </g>
    );
}
