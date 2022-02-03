// Functions squeare
// function calculateSquarePerimeter(sides) {
//     debugger
//     const perimeter = squareDiamondPerimeter(sides);
//     showResultPerimeter(perimeter);
//     return perimeter;
// }

const squareDiamondPerimeter = (side) => side * 4;

// Functions triangle
function calculateTrianglePerimeter(sideA, sideB, sideC) {
    const perimeter = trianglePerimeter(sideA, sideB, sideC);
    return perimeter;
}

const trianglePerimeter = (side1, side2, base) => side1 + side2 + base;

// Functions circle
function calculateCircumference(radio) {
    const perimeter = circumference(radio);
    showResultPerimeter(perimeter);
}

const circleDiameter = (radio) => 2 * radio;
const circumference = (radio) => pi * circleDiameter(radio);

// Code rectangle
const rectangleParallelogramPerimeter = (sideA, sideB) => 2 * (sideA + sideB);

function calculateRectanglePerimeter(sideARectangle, sideBRectangle) {
    const perimeter = rectangleParallelogramPerimeter(
        sideARectangle,
        sideBRectangle
    );
    showResultPerimeter(perimeter);
}

// Code parallelogram
function calculateParallelogramPerimeter(
    sideAParallelogram,
    baseParallelogram
) {
    const perimeter = rectangleParallelogramPerimeter(
        sideAParallelogram,
        baseParallelogram
    );
    showResultPerimeter(perimeter);
}

// Code diamond
function calculateDiamondPerimeter(sides) {
    const perimeter = squareDiamondPerimeter(sides);
    showResultPerimeter(perimeter);
}

// Code Trapeze
function calculateTrapezePerimeter(sideA, sideB, sideC, sideD) {
    const perimeter = sideA + sideB + sideC + sideD;
    showResultPerimeter(perimeter);
}

// Code Polygon
function calculatePolygonPerimeter(sidesPolygon, numberSidesPolygon, type) {
    const perimeter = sidesPolygon * numberSidesPolygon;
    if (type === "perimeter")
        showResultPerimeter(perimeter);
    else
        return perimeter
}

function calculatePerimeter() {
    // let figures = figuresOptions();
    let selectedFigure = grupFigures.find(seachFigureChecked);
    // let valuesSides = valuesInputBoxes();
    selectedCalculatePerimeter(selectedFigure);
}

function selectedCalculatePerimeter(selectedFigure) {
    let perimeter = 0;
    switch (selectedFigure) {
        case square:
            let sidesSquare = parseFloat(square.sides.value);
            square.perimeter = square.calculatePerimeter(sidesSquare);
            perimeter = square.perimeter;
            break;
        case triangle:
            const sides = setSidesTriangle();
            triangle.perimeter = triangle.calculatePerimeter(sides.A, sides.B, sides.C);
            perimeter = triangle.perimeter;
            break;
        // case figures[2]:
        //     let radio = valuesSides[2].radio;
        //     calculateCircumference(radio);
        //     break;
        // case figures[3]:
        //     let sideARectangle = valuesSides[3].sideA;
        //     let sideBRectangle = valuesSides[3].sideB;
        //     calculateRectanglePerimeter(sideARectangle, sideBRectangle);
        //     break;
        // case figures[4]:
        //     let sideAParallelogram = valuesSides[4].sideA;
        //     let baseParallelogram = valuesSides[4].base;
        //     calculateParallelogramPerimeter(
        //         sideAParallelogram,
        //         baseParallelogram
        //     );
        //     break;
        // case figures[5]:
        //     let sidesDiamond = valuesSides[5].sides;
        //     calculateDiamondPerimeter(sidesDiamond);
        //     break;
        // case figures[6]:
        //     let sideATrapeze = valuesSides[6].sideA;
        //     let sidebTrapeze = valuesSides[6].sideb;
        //     let sideBTrapeze = valuesSides[6].sideB;
        //     let sideCTrapeze = valuesSides[6].sideC;
        //     calculateTrapezePerimeter(
        //         sideATrapeze,
        //         sidebTrapeze,
        //         sideBTrapeze,
        //         sideCTrapeze
        //     );
        //     break;
        // case figures[7]:
        //     let sidesPolygon = valuesSides[7].sides;
        //     let numberSidesPolygon = valuesSides[7].numberSides;
        //     calculatePolygonPerimeter(sidesPolygon, numberSidesPolygon, "perimeter");
        //     break;
    }
    showResultPerimeter(perimeter);
}

function valuesInputBoxes() {
    // const squareSide = document.getElementById("measurement-square-input");
    // let square = {
    //     sides: parseFloat(squareSide.value),
    // };

    // const triangleSideA = document.getElementById(
    //     "measurement-triangle-input-side-A"
    // );
    // const triangleSideB = document.getElementById(
    //     "measurement-triangle-input-side-B"
    // );
    // const triangleSideC = document.getElementById(
    //     "measurement-triangle-input-side-C"
    // );
    // let triangle = {
    //     sideA: parseFloat(triangleSideA.value),
    //     sideB: parseFloat(triangleSideB.value),
    //     sideC: parseFloat(triangleSideC.value),
    // };

    const radio = document.getElementById("measurement-circle-input");
    let circle = { radio: parseFloat(radio.value) };

    const rectangleSideA = document.getElementById(
        "measurement-rectangle-input-side-A"
    );
    const rectangleSideB = document.getElementById(
        "measurement-rectangle-input-side-B"
    );

    let rectangle = {
        sideA: parseFloat(rectangleSideA.value),
        sideB: parseFloat(rectangleSideB.value),
    };

    const parallelogramSideA = document.getElementById(
        "measurement-parallelogram-input-sideA"
    );
    const parallelogramBase = document.getElementById(
        "measurement-parallelogram-input-base"
    );
    const parallelogramHeight = document.getElementById(
        "measurement-parallelogram-input-height"
    );

    let parallelogram = {
        sideA: parseFloat(parallelogramSideA.value),
        base: parseFloat(parallelogramBase.value),
        height: parseFloat(parallelogramHeight.value),
    };

    const diamondSides = document.getElementById(
        "measurement-diamond-input-sides"
    );
    const diamondMayorDiagonal = document.getElementById(
        "measurement-diamond-input-mayor-diagonal"
    );
    const diamondMinorDiagonal = document.getElementById(
        "measurement-diamond-input-minor-diagonal"
    );
    let diamond = {
        sides: parseFloat(diamondSides.value),
        mayorDiagonal: parseFloat(diamondMayorDiagonal.value),
        minorDiagonal: parseFloat(diamondMinorDiagonal.value),
    };

    const trapezeSideA = document.getElementById(
        "measurement-trapeze-input-sideA"
    );
    const trapezeSideb = document.getElementById(
        "measurement-trapeze-input-sideb"
    );
    const trapezeSideB = document.getElementById(
        "measurement-trapeze-input-sideB"
    );
    const trapezeSideC = document.getElementById(
        "measurement-trapeze-input-sideC"
    );
    const trapezeHeight = document.getElementById(
        "measurement-trapeze-input-height"
    );
    let trapeze = {
        sideA: parseFloat(trapezeSideA.value),
        sideb: parseFloat(trapezeSideb.value),
        sideB: parseFloat(trapezeSideB.value),
        sideC: parseFloat(trapezeSideC.value),
        height: parseFloat(trapezeHeight.value),
    };

    const polygonSides = document.getElementById(
        "measurement-polygon-input-sides"
    );
    const polygonApothema = document.getElementById(
        "measurement-polygon-input-apothema"
    );
    const polygonNumberSides = document.getElementById(
        "measurement-polygon-input-number-sides"
    );

    let polygon = {
        sides: parseFloat(polygonSides.value),
        apothema: parseFloat(polygonApothema.value),
        numberSides: parseFloat(polygonNumberSides.value),
    };

    let figuresObjets = [
        square,
        triangle,
        circle,
        rectangle,
        parallelogram,
        diamond,
        trapeze,
        polygon,
    ];

    return figuresObjets;
}

// Código del circulo.
const pi = Math.PI;
