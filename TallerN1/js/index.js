function setSidesTriangle (triangle) {
    const sides = {
        A: parseFloat(triangle.sideA.value),
        B: parseFloat(triangle.sideB.value),
        C: parseFloat(triangle.sideC.value)
    }
    return sides;
};

function setSidesRectangle (rectangle) {
    const sides = {
        A: parseFloat(rectangle.sideA.value),
        B: parseFloat(rectangle.sideB.value)
    }
    return sides;
};

function setSidesParallelogram (parallelogram) {
    const sides = {
        A: parseFloat(parallelogram.sideA.value),
        base: parseFloat(parallelogram.base.value),
        height: parseFloat(parallelogram.height.value)
    }
    return sides;
};

function setdiagonalsDiamond (diamond) {
    const sides = {
        mayor: parseFloat(diamond.mayorDiagonal.value),
        minor: parseFloat(diamond.minorDiagonal.value)
    }
    return sides;
};

function setSidesTrapeze (trapeze) {
    const sides = {
        A: parseFloat(trapeze.sideA.value),
        b: parseFloat(trapeze.sideb.value),
        B: parseFloat(trapeze.sideB.value),
        C: parseFloat(trapeze.sideC.value),
        height: parseFloat(trapeze.height.value),
    }
    return sides;
};


function setSidesPolygon(polygon) {
    const sides = {
        sides: parseFloat(polygon.sides.value),
        apothem: parseFloat(polygon.apothem.value),
        numberSides: parseFloat(polygon.numberSides.value),
    }
    return sides;
};

const pi = Math.PI;

let startAddHiddenBox = false;