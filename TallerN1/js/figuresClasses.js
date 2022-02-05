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
    #radio;
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
            radio = 0
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
        this.#radio = radio;
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

    get sideb () {
        return this.#sideb;
    };

    get sideB () {
        return this.#sideB;
    };

    get sideC () {
        return this.#sideC;
    };

    get radio () {
        return this.#radio;
    };

    get base () {
        return this.#base;
    };

    get height () {
        return this.#height;
    };
    
    get mayorDiagonal () {
        return this.#mayorDiagonal;
    };
    
    get minorDiagonal () {
        return this.#minorDiagonal;
    };

    get perimeter () {
        return this.#perimeter;
    };

    get apothem () {
        return this.#apothem;
    };
    
    get numberSides () {
        return this.#numberSides;
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
};

class Square extends Figure {
    constructor (parameters) {
        super(parameters);
    };
    
    calculatePerimeter(sides) {
        const perimeter = CalculateSquareDiamondPerimeter(sides);
        return perimeter;
    };

    calculateArea(sides) {
        const area = sides ** 2;
        return area;
    };
};

class Triangle extends Figure {
    constructor (parameters) {
        super(parameters);
    };
    
    calculatePerimeter(sideA, sideB, sideC) {
        const perimeter = calculateTrianglePerimeter(sideA, sideB, sideC);
        return perimeter;
    };

    calculateArea(sideA, sideB, sideC) {
        const area = calculateTriangleArea(sideA, sideB, sideC);
        return area;
    };
};

class Circle extends Figure {
    constructor (parameters) {
        super(parameters);
    };
    
    calculatePerimeter(radio) {
        const perimeter = calculateCircumference(radio);
        return perimeter;
    };

    calculateArea(radio) {
        const area = calculateCircleArea(radio);
        return area;
    };
};


class Rectangle extends Figure {
    constructor (parameters) {
        super(parameters);
    };
    
    calculatePerimeter(sideA, sideB) {
        const perimeter = calculateRectangleParallelogramPerimeter(sideA, sideB);
        return perimeter;
    };

    calculateArea(sideA, sideB) {
        const area = calculateRectangleParallelogramArea(sideA, sideB) ;
        return area;
    };
};

class Parallelogram extends Figure {
    constructor (parameters) {
        super(parameters);
    };
    
    calculatePerimeter(sideA, height) {
        const perimeter = calculateRectangleParallelogramPerimeter(sideA, height);
        return perimeter;
    };

    calculateArea(base, height) {
        const area = calculateRectangleParallelogramArea(base, height);
        return area;
    };
};

class Diamond extends Figure {
    constructor (parameters) {
        super(parameters);
    };
    
    calculatePerimeter(sides) {
        const perimeter = CalculateSquareDiamondPerimeter(sides);
        return perimeter;
    };

    calculateArea(mayor, minor) {
        const area = calculateDiamondArea(mayor, minor);
        return area;
    };
};

class Trapeze extends Figure {
    constructor (parameters) {
        super(parameters);
    };
    
    calculatePerimeter(sideA, sideB, sideC, sideD) {
        const perimeter = calculateTrapezePerimeter(sideA, sideB, sideC, sideD);
        return perimeter;
    };

    calculateArea(mayorBase, minorBase, height) {
        const area = calculateTrapezeArea(mayorBase, minorBase, height);
        return area;
    };
};

class Polygon extends Figure {
    constructor (parameters) {
        super(parameters);
    };
    
    calculatePerimeter(sidesPolygon, numberSidesPolygon){
        const perimeter = calculatePolygonPerimeter(sidesPolygon, numberSidesPolygon)
        return perimeter;
    };

    calculateArea(apothem, sidesPolygon, numberSidesPolygon) {
        const perimeter = calculatePolygonPerimeter(sidesPolygon, numberSidesPolygon);
        const area = calculatePolygonArea(perimeter, apothem);
        return area;
    };
};