
var screen = document.getElementById("screen");
const numPad = document.getElementById('numpad');

numPad.addEventListener("click", numPadClickHandler);

/**
 * Display keeps protocol of the buttons that were pressed
 */
console.log(screen);
screen.textContent = "afasd";


/**
 * processes the information, that was passed through 
 * numPadClickHandler
 * @ event
 */
function numPadClickHandler(event) {
    console.log(event);
    // console.log(event.target);
    const clickedButton = event.target;

    const num = parseInt(clickedButton.textContent);
    return num;
}



/** 
 * Eine for-loop machen, in der der gedrückte button mit der 
 * jeweiligen Zahl abgeglichen wird.
*/


function add(a, b) {
    return result = a + b;
}

function divide(a, b) {

}

function subtract(a, b) {

}

function multiply(a, b) {

}