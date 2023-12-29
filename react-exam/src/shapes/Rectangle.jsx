import React, { useState } from 'react';
import randomColor from "randomcolor";

const Rectangle = ({ width, height }) => {
  const [isHovered, setIsHovered] = useState(false);

  const calculatePerimeter = () => {
    return 2 * (width + height);
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
          height: `${height}px`, 
          width: `${width}px`, 
          backgroundColor: isHovered ? color : 'grey'
        }}
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      />
      <p>Perimeter: {calculatePerimeter()} px</p>
      <input onChange={(event) => setColor(event.target.value)} />
    </div>
  );
};

export default Rectangle;
