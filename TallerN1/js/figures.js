const square = new Square(
    {
        type: 'Square',
        id: document.getElementById("squareFigure"),
        boxesMeasurements: document.getElementById("measurement-square"),
        sides: document.getElementById("measurement-square-input")
    }
);

const triangle = new Triangle(
    {
        type: 'Triangle',
        id: document.getElementById("triangleFigure"),
        boxesMeasurements: document.getElementById("measurement-triangle"),
        sideA: document.getElementById("measurement-triangle-input-side-A"),
        sideB: document.getElementById("measurement-triangle-input-side-B"),
        sideC: document.getElementById("measurement-triangle-input-side-C"),
    }
);

const circle = new Circle(
    {
        type: 'Circle',
        id: document.getElementById("circleFigure"),
        boxesMeasurements: document.getElementById("measurement-circle"),
        radio: document.getElementById("measurement-circle-input")
    }
);

const rectangle = new Rectangle(
    {
        type: 'Rectangle',
        id: document.getElementById("rectangleFigure"),
        boxesMeasurements: document.getElementById("measurement-rectangle"),
        sideA: document.getElementById("measurement-rectangle-input-side-A"),
        sideB: document.getElementById("measurement-rectangle-input-side-B")
    }
);

const parallelogram = new Rectangle(
    {
        type: 'Parallelogram',
        id: document.getElementById("parallelogramFigure"),
        boxesMeasurements: document.getElementById("measurement-parallelogram"),
        sideA: document.getElementById("measurement-parallelogram-input-sideA"),
        base: document.getElementById("measurement-parallelogram-input-base"),
        height: document.getElementById("measurement-parallelogram-input-height"),
    }
);

const diamond = new Diamond(
    {
        type: 'Diamond',
        id: document.getElementById("diamondFigure"),
        boxesMeasurements: document.getElementById("measurement-diamond"),
        sides: document.getElementById("measurement-diamond-input-sides"),
        mayorDiagonal: document.getElementById("measurement-diamond-input-mayor-diagonal"),
        minorDiagonal: document.getElementById("measurement-diamond-input-minor-diagonal")
    }
);

const trapeze = new Trapeze(
    {
        type: 'Trapeze',
        id: document.getElementById("trapezeFigure"),
        boxesMeasurements: document.getElementById("measurement-trapeze"),
        sideA: document.getElementById("measurement-trapeze-input-sideA"),
        sideb: document.getElementById("measurement-trapeze-input-sideb"),
        sideB: document.getElementById("measurement-trapeze-input-sideB"),
        sideC: document.getElementById("measurement-trapeze-input-sideC"),
        height: document.getElementById("measurement-trapeze-input-height"),
    }
);

const polygon = new Polygon(
    {
        type: 'Polygon',
        id: document.getElementById("polygonFigure"),
        boxesMeasurements: document.getElementById("measurement-polygon"),
        sides: document.getElementById("measurement-polygon-input-sides"),
        apothem: document.getElementById("measurement-polygon-input-apothem"),
        numberSides: document.getElementById("measurement-polygon-input-number-sides")
    }
);

const grupFigures = [
    square,
    triangle,
    circle,
    rectangle,
    parallelogram,
    diamond,
    trapeze,
    polygon
];