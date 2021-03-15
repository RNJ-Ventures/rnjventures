import React from "react";

type Props = {
  width: number;
  height: number;
  space: number;
  radius: number;
  fill: string;
};

export default ({
  width = 17,
  height = 17,
  space = 26,
  radius = 6,
  fill = "#000",
}: Props) => {
  const viewWidth = width * radius * 2 + (width - 1) * (space - radius * 2);
  const viewHeight = height * radius * 2 + (height - 1) * (space - radius * 2);
  const dots = [];

  for (let indexWidth = 0; indexWidth < width; indexWidth += 1) {
    for (let indexHeight = 0; indexHeight < height; indexHeight += 1) {
      dots.push(
        <circle
          key={`${indexWidth}-${indexHeight}`}
          cx={radius + indexWidth * space}
          cy={radius + indexHeight * space}
          r={radius}
        />
      );
    }
  }

  return (
    <svg
      width={viewWidth}
      height={viewHeight}
      viewBox={`0 0 ${viewWidth} ${viewHeight}`}
      version="1.1"
    >
      <g fill={fill}>{dots}</g>
    </svg>
  );
};
