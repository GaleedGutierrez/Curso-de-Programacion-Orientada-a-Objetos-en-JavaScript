function addingDimensionBoxes() {
    hiddenTextStart();
    const selectedFigure = grupFigures.find(seachFigureChecked);
    if (startAddHiddenBox) {
        grupFigures.find(addHiddenBox);
    }
    startAddHiddenBox = true;
    addVisibleBox(selectedFigure);
}

function hiddenTextStart() {
    const textStart = document.getElementById("select-figure-text");
    if (!textStart.classList.contains("hidden")) {
        textStart.classList.add("hidden");
    }
}

function seachFigureChecked(figure) {
    if (figure.id.checked === true) {
        return figure;
    }
}

function addHiddenBox(box) {
    if (box.boxesMeasurements.classList.contains("visible")) {
        box.boxesMeasurements.classList.remove("visible");
        box.boxesMeasurements.classList.add("hidden");
        return box;
    }
}

function addVisibleBox(selectedFigure) {
    const resultPerimeter = document.getElementById("result-perimeter");
    const resultArea = document.getElementById("result-area");

    if(resultPerimeter.classList.contains("insert-dimensions__results--black")){
        resultPerimeter.classList.remove("insert-dimensions__results--black");
    }

    if(resultArea.classList.contains("insert-dimensions__results--black")) {
        resultArea.classList.remove("insert-dimensions__results--black");
    }

    switch (selectedFigure) {
        case square:
            addVisibleBoxesFigures(square);
            break;
        case triangle:
            addVisibleBoxesFigures(triangle);
            break;
        case circle:
            addVisibleBoxesFigures(circle);
            break;
        case rectangle:
            addVisibleBoxesFigures(rectangle);
            break;
        case parallelogram:
            addVisibleBoxesFigures(parallelogram);
            break;
        case diamond:
            addVisibleBoxesFigures(diamond);
            break;
        case trapeze:
            addVisibleBoxesFigures(trapeze);
            break;
        case polygon:
            addVisibleBoxesFigures(polygon);
            break;
    }
}

function addVisibleBoxesFigures (figure) {
    figure.boxesMeasurements.classList.remove("hidden");
    figure.boxesMeasurements.classList.add("visible");
}
