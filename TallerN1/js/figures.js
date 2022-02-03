class Figure {
    #type;
    #id;
    #boxesMeasurements;
    #sides;
    #sideA;
    #sideB;
    #sideb;
    #sideC;
    #base;
    #height;
    #mayorDiagonal;
    #minorDiagonal;
    #apothem;
    #numberSides;
    #area;
    #perimeter;
    constructor (
        {
            type,
            id,
            boxesMeasurements,
            sides = 0,
            sideA = 0,
            sideB = 0,
            sideb = 0,
            sideC = 0,
            base = 0,
            height = 0,
            mayorDiagonal = 0,
            minorDiagonal = 0,
            apothem = 0,
            numberSides = 0,
            area = 0,
            perimeter = 0, 
        }
    ) {
        this.#type = type;
        this.#id = id;
        this.#boxesMeasurements = boxesMeasurements;
        this.#sides = sides;
        this.#sideA = sideA;
        this.#sideB = sideB;
        this.#sideb = sideb;
        this.#sideC = sideC;
        this.#base = base;
        this.#height = height;
        this.#mayorDiagonal = mayorDiagonal;
        this.#minorDiagonal = minorDiagonal;
        this.#apothem = apothem;
        this.#numberSides = numberSides;
        this.#area = area;
        this.#perimeter = perimeter; 
    };

    get id () {
        return this.#id;
    };

    get boxesMeasurements () {
        return this.#boxesMeasurements;
    };

    get sides () {
        return this.#sides;
    };

    get sideA () {
        return this.#sideA;
    };

    get sideB () {
        return this.#sideB;
    };

    get sideC () {
        return this.#sideC;
    };

    set sideA (newSideA) {
        return this.#sideA = newSideA;
    };

    set sideB (newSideB) {
        return this.#sideB = newSideB;
    };

    set sideC (newSideC) {
        return this.#sideC = newSideC;
    };

    get perimeter () {
        return this.#perimeter;
    };

    set perimeter (newPerimeter) {
        return this.#perimeter = newPerimeter;
    };

    get area () {
        return this.#area;
    };

    set area (newArea) {
        return this.#area = newArea;
    };
}

class Square extends Figure {
    constructor (parameters) {
        super(parameters);
    }
    
    calculatePerimeter(sides) {
        let {perimeter} = this;
        perimeter = squareDiamondPerimeter(sides);
        return perimeter;
    }

    calculateArea(sides) {
        let {area} = this;
        area = sides ** 2;
        return area;
    }
}

class Triangle extends Figure {
    constructor (parameters) {
        super(parameters);
    }
    
    calculatePerimeter(sideA, sideB, sideC) {
        let {perimeter} = this;
        perimeter = calculateTrianglePerimeter(sideA, sideB, sideC);
        return perimeter;
    }

    calculateArea(sideA, sideB, sideC) {
        let {area} = this;
        area = calculateTriangleArea(sideA, sideB, sideC);
        return area;
    }
}

class Circle extends Figure {
    constructor (parameters) {
        super(parameters);
    }
    
    calculatePerimeter() {
        let {perimeter} = this;
        
    }

    calculateArea(sideA, sideB, sideC) {
        let {area} = this;
        
    }
}

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

const grupFigures = [
    square,
    triangle
];

function seachFigureChecked(figure) {
    if (figure.id.checked === true) {
        return figure;
    }
}
