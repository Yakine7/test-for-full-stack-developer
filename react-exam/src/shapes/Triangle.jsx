import React, { useState } from "react";
import randomColor from "randomcolor";

const Triangle = ({ sideLength }) => {
  const [isHovered, setIsHovered] = useState(false);

  const calculatePerimeter = () => {
    return 3 * sideLength;
  };

  const getColorByPerimeter = (perimeter) => {
    if (perimeter <= 300) return "lightblue";
    if (perimeter <= 350) return "blue";
    if (perimeter <= 750) return "red";
    return "darkblue";
  };

  const perimeter = calculatePerimeter();
  const [color, setColor] = React.useState(getColorByPerimeter(perimeter));

  React.useEffect(() => {
    setColor(randomColor())
  }, [color])

  return (
    <div>
      <div
        style={{
          width: "0",
          height: "0",
          borderLeft: `${sideLength / 2}px solid transparent`,
          borderRight: `${sideLength / 2}px solid transparent`,
          borderBottom: `${sideLength}px solid ${isHovered ? color : "gray"}`,
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <p>Perimeter: {calculatePerimeter()} px</p>
      <input onChange={(event) => setColor(event.target.value)} />
    </div>
  );
};

export default Triangle;
