import React, { useState } from "react";
import {
    calculateTrianglePerimeter,
    getColorByPerimeter,
} from "./geometryUtils";

const Triangle = ({ sideLength }) => {
    const perimeter = calculateTrianglePerimeter(sideLength);
    const colorByPerimeter = getColorByPerimeter(perimeter);
    const [color, setColor] = useState(colorByPerimeter);

    return (
        <div>
            <div
                style={{
                    width: "0",
                    height: "0",
                    borderLeft: `${sideLength / 2}px solid transparent`,
                    borderRight: `${sideLength / 2}px solid transparent`,
                    borderBottom: `${sideLength}px solid ${"gray"}`,
                }}
                onMouseEnter={(e) =>
                    (e.target.style.borderBottom = `${sideLength}px solid ${
                        CSS.supports("color", color) ? color : colorByPerimeter
                    }`)
                }
                onMouseLeave={(e) =>
                    (e.target.style.borderBottom = `${sideLength}px solid ${"gray"}`)
                }
            />
            <p>Perimeter: {perimeter} px</p>
            <input onChange={(event) => setColor(event.target.value)} />
        </div>
    );
};

export default Triangle;
