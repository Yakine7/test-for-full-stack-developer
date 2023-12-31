import { useState } from "react";
import { calculateCirclePerimeter, getColorByPerimeter } from "./geometryUtils";

const Circle = ({ radius }) => {
    const perimeter = calculateCirclePerimeter(radius);
    const colorByPerimeter = getColorByPerimeter(perimeter);
    const [color, setColor] = useState(colorByPerimeter);

    return (
        <div>
            <div
                style={{
                    height: `${2 * radius}px`,
                    width: `${2 * radius}px`,
                    borderRadius: "50%",
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
            <p>Perimeter: {perimeter.toFixed(2)} px</p>
            <input onChange={(event) => setColor(event.target.value)} />
        </div>
    );
};

export default Circle;
