function showResultPerimeter(result) {
    result = haveDecimalNumbers(result);
    let paragraphResult = document.getElementById("result-perimeter");
    addLitterBlack(paragraphResult);
    paragraphResult.innerHTML=`${result}u`
}

function showResultArea(result) {
    result = haveDecimalNumbers(result);
    let paragraphResult = document.getElementById("result-area");
    addLitterBlack(paragraphResult);
    paragraphResult.innerHTML=`<span>${result}u</span><sup>2</sup>`;
}

function haveDecimalNumbers(result) {
    if (!(result % 1 === 0))
        result = result.toFixed(6);
    else
        result = result;
    return result;
}

function addLitterBlack(paragraphResult) {
    if (!paragraphResult.classList.contains("insert-dimensions__results--black"))
        paragraphResult.classList.add("insert-dimensions__results--black");
}
