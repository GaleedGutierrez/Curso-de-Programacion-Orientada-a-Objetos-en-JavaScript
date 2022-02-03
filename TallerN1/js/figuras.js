function addingDimensionBoxes() {
    let figures = figuresOptions();
    let boxesDimentions = boxesDimentionsFigures();
    hiddenTextStart();

    let selectedFigure = grupFigures.find(seachFigureChecked);
    addHiddenBox(grupFigures);

    addVisibleBox(selectedFigure);
}

function hiddenTextStart() {
    const textStart = document.getElementById("select-figure-text");
    if (!textStart.classList.contains("hidden"))
        textStart.classList.add("hidden");
}

// function seachFigureChecked(figures) {
//     let selectedFigure = {};
//     for (let figure of figures)
//         if (figure.checked === true) {
//             return (selectedFigure = figure);
//         }
// }

function addHiddenBox(boxesDimentions) {
    for (box of boxesDimentions) {
        if (box.boxesMeasurements.classList.contains("visible")) {
            box.boxesMeasurements.classList.remove("visible");
            box.boxesMeasurements.classList.add("hidden");
            break;
        }
    }
}

function addVisibleBox(selectedFigure) {
    debugger
    const resultPerimeter = document.getElementById("result-perimeter");
    const resultArea = document.getElementById("result-area");
    if(resultPerimeter.classList.contains("insert-dimensions__results--black"))
        resultPerimeter.classList.remove("insert-dimensions__results--black");
    if(resultArea.classList.contains("insert-dimensions__results--black"))
        resultArea.classList.remove("insert-dimensions__results--black");

    switch (selectedFigure) {
        case square:
            square.boxesMeasurements.classList.remove("hidden");
            square.boxesMeasurements.classList.add("visible");
            break;
        case triangle:
            triangle.boxesMeasurements.classList.remove("hidden");
            triangle.boxesMeasurements.classList.add("visible");
            break;
    //     case figures[2]:
    //         boxesDimentions[2].classList.remove("hidden");
    //         boxesDimentions[2].classList.add("visible");
    //         break;
    //     case figures[3]:
    //         boxesDimentions[3].classList.remove("hidden");
    //         boxesDimentions[3].classList.add("visible");
    //         break;
    //     case figures[4]:
    //         boxesDimentions[4].classList.remove("hidden");
    //         boxesDimentions[4].classList.add("visible");
    //         break;
    //     case figures[5]:
    //         boxesDimentions[5].classList.remove("hidden");
    //         boxesDimentions[5].classList.add("visible");
    //         break;
    //     case figures[6]:
    //         boxesDimentions[6].classList.remove("hidden");
    //         boxesDimentions[6].classList.add("visible");
    //         break;
    //     case figures[7]:
    //         boxesDimentions[7].classList.remove("hidden");
    //         boxesDimentions[7].classList.add("visible");
    //         break;
    }
}

function figuresOptions() {
    // const squareSelected = document.getElementById("squareFigure");
    // const triangleSelected = document.getElementById("triangleFigure");
    const circleSelected = document.getElementById("circleFigure");
    const rectangleSelected = document.getElementById("rectangleFigure");
    const parallelogramSelected = document.getElementById(
        "parallelogramFigure"
    );
    const diamondSelected = document.getElementById("diamondFigure");
    const trapezeSelected = document.getElementById("trapezeFigure");
    const polygonSelected = document.getElementById("polygonFigure");

    // const figures = [
    //     squareSelected,
    //     triangleSelected,
    //     circleSelected,
    //     rectangleSelected,
    //     parallelogramSelected,
    //     diamondSelected,
    //     trapezeSelected,
    //     polygonSelected,
    // ];

    // return figures;
}

function boxesDimentionsFigures() {
    // const boxSquare = document.getElementById("measurement-square");
    // const boxTriangle = document.getElementById("measurement-triangle");
    const boxCircle = document.getElementById("measurement-circle");
    const boxRectangle = document.getElementById("measurement-rectangle");
    const boxParallelogram = document.getElementById(
        "measurement-parallelogram"
    );
    const boxDiamond = document.getElementById("measurement-diamond");
    const boxTrapeze = document.getElementById("measurement-trapeze");
    const boxPolygon = document.getElementById("measurement-polygon");

    // const boxesDimentions = [
    //     boxSquare,
    //     boxTriangle,
    //     boxCircle,
    //     boxRectangle,
    //     boxParallelogram,
    //     boxDiamond,
    //     boxTrapeze,
    //     boxPolygon,
    // ];

    // return boxesDimentions;
}
