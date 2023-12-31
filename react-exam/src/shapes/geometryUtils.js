const calculateCirclePerimeter = (radius) => {
    return 2 * Math.PI * radius;
};

const calculateRectanglePerimeter = (width, height) => {
    return 2 * (width + height);
};

const calculateTrianglePerimeter = (sideLength) => {
    return 3 * sideLength;
};

const getColorByPerimeter = (perimeter) => {
    if (perimeter <= 300) return "lightblue";
    if (perimeter <= 350) return "blue";
    if (perimeter <= 750) return "red";
    return "darkblue";
};

export {
    calculateCirclePerimeter,
    calculateRectanglePerimeter,
    calculateTrianglePerimeter,
    getColorByPerimeter,
};
