import React, { useState } from "react";
import randomColor from "randomcolor";

const Circle = ({ radius }) => {
  const [isHovered, setIsHovered] = useState(false);

  const calculatePerimeter = () => {
    return 2 * Math.PI * radius;
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
          height: `${2 * radius}px`,
          width: `${2 * radius}px`,
          borderRadius: "50%",
          backgroundColor: isHovered ? color : "grey",
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <p>Perimeter: {calculatePerimeter().toFixed(2)} px</p>
      <input onChange={(event) => setColor(event.target.value)} />
    </div>
  );
};

export default Circle;
