const calculateCircleArea = radio => pi * radio ** 2;

function calculateTriangleArea(sideA, sideB, sideC) {
    const semiPerimeter = calculateTrianglePerimeter(sideA, sideB, sideC) / 2;
    const area = Math.sqrt(semiPerimeter*(semiPerimeter-sideA)*(semiPerimeter-sideB)*(semiPerimeter-sideC))
    return area;
}

const calculateRectangleParallelogramArea = (base, height) => base * height;

const calculateDiamondArea = (mayor, minor) => mayor * minor / 2;

const calculateTrapezeArea = (mayorBase, minorBase, height) => (mayorBase + minorBase) * height / 2;

const calculatePolygonArea = (perimeter, apothema) => perimeter * apothema / 2;

function calculateArea() {
    let area = 0;
    const selectedFigure = grupFigures.find(seachFigureChecked);

    switch (selectedFigure) {
        case square:
            sidesSquare = parseFloat(square.sides.value)
            square.area = square.calculateArea(sidesSquare);
            area = square.area;
            break;
        case triangle:
            const sides = setSidesTriangle(triangle);
            triangle.area = triangle.calculateArea(sides.A, sides.B, sides.C);
            area = triangle.area;
            break;
        case circle:
            let radio = parseFloat(circle.radio.value);
            circle.area = circle.calculateArea(radio);
            area = circle.area;
            break;
        case rectangle:
            const sidesRectangle = setSidesRectangle(rectangle);
            rectangle.area = rectangle.calculateArea(sidesRectangle.A, sidesRectangle.B);
            area = rectangle.area;
            break;
        case parallelogram:
            const sidesParallelogram = setSidesParallelogram(parallelogram);
            parallelogram.area = parallelogram.calculateArea(sidesParallelogram.base, sidesParallelogram.height);
            area = parallelogram.area;
            break;
        case diamond:
            const diagonalsDiamond = setdiagonalsDiamond(diamond);
            diamond.area = diamond.calculateArea(diagonalsDiamond.mayor, diagonalsDiamond.minor);
            area = diamond.area;
            break;
        case trapeze:
            const sidesTrapeze = setSidesTrapeze(trapeze);
            trapeze.area = trapeze.calculateArea(sidesTrapeze.B, sidesTrapeze.b, sidesTrapeze.height);
            area = trapeze.area;
            break;
        case polygon:
            const sidesPolygon = setSidesPolygon(polygon);
            polygon.area = polygon.calculateArea( sidesPolygon.apothem, sidesPolygon.sides, sidesPolygon.numberSides);
            area = polygon.area;
            break;
    }
    
    showResultArea(area);
}