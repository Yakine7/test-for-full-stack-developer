import React, { useState } from "react";
import {
    calculateRectanglePerimeter,
    getColorByPerimeter,
} from "./geometryUtils";

const Rectangle = ({ width, height }) => {
    const perimeter = calculateRectanglePerimeter(width, height);
    const colorByPerimeter = getColorByPerimeter(perimeter);
    const [color, setColor] = useState(colorByPerimeter);

    return (
        <div>
            <div
                style={{
                    height: `${height}px`,
                    width: `${width}px`,
                    backgroundColor: "grey",
                }}
                onMouseEnter={(e) =>
                    (e.target.style.backgroundColor = CSS.supports(
                        "color",
                        color,
                    )
                        ? color
                        : colorByPerimeter)
                }
                onMouseLeave={(e) => (e.target.style.backgroundColor = "grey")}
            />
            <p>Perimeter: {perimeter} px</p>
            <input onChange={(event) => setColor(event.target.value)} />
        </div>
    );
};

export default Rectangle;
