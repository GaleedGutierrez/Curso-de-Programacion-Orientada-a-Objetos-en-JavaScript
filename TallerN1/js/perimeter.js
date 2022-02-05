const CalculateSquareDiamondPerimeter = side => side * 4;

const calculateTrianglePerimeter = (side1, side2, base) => side1 + side2 + base;

const calculateCircumference = radio => circumference(radio);
const circleDiameter = radio => 2 * radio;
const circumference = radio => pi * circleDiameter(radio);

const calculateRectangleParallelogramPerimeter = (sideA, sideB) => 2 * (sideA + sideB);

const calculateTrapezePerimeter = (sideA, sideB, sideC, sideD) => sideA + sideB + sideC + sideD;

const calculatePolygonPerimeter = (sidesPolygon, numberSidesPolygon) => sidesPolygon * numberSidesPolygon;

function calculatePerimeter() {
    let perimeter = 0;
    const selectedFigure = grupFigures.find(seachFigureChecked);

    switch (selectedFigure) {
        case square:
            const sidesSquare = parseFloat(square.sides.value);
            square.perimeter = square.calculatePerimeter(sidesSquare);
            perimeter = square.perimeter;
            break;
        case triangle:
            const sidesTriangle = setSidesTriangle(triangle);
            triangle.perimeter = triangle.calculatePerimeter(sidesTriangle.A, sidesTriangle.B, sidesTriangle.C);
            perimeter = triangle.perimeter;
            break;
        case circle:
            const radio = parseFloat(circle.radio.value);
            circle.perimeter = circle.calculatePerimeter(radio);
            perimeter = circle.perimeter;
            break;
        case rectangle:
            const sidesRectangle = setSidesRectangle(rectangle);
            rectangle.perimeter = rectangle.calculatePerimeter(sidesRectangle.A, sidesRectangle.B);
            perimeter = rectangle.perimeter;
            break;
        case parallelogram:
            const sidesParallelogram = setSidesParallelogram(parallelogram);
            parallelogram.perimeter = parallelogram.calculatePerimeter(sidesParallelogram.A, sidesParallelogram.base);
            perimeter = parallelogram.perimeter;
            break;
        case diamond:
            const sidesDiamond = parseFloat(diamond.sides.value);
            diamond.perimeter = diamond.calculatePerimeter(sidesDiamond);
            perimeter = diamond.perimeter;
            break;
        case trapeze:
            const sidesTrapeze = setSidesTrapeze(trapeze);
            trapeze.perimeter = trapeze.calculatePerimeter(sidesTrapeze.A, sidesTrapeze.b, sidesTrapeze.B, sidesTrapeze.C);
            perimeter = trapeze.perimeter;
            break;
        case polygon:
            const sidesPolygon = setSidesPolygon(polygon);
            polygon.perimeter = polygon.calculatePerimeter(sidesPolygon.sides, sidesPolygon.numberSides);
            perimeter = polygon.perimeter;
            break;
    }

    showResultPerimeter(perimeter);
}