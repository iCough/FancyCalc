
var screen = document.getElementById("screen");
const numPad = document.getElementById('numpad');

var typedNums = [];

/**
 * Numpad-Clicks
 */
numPad.addEventListener("click", function(event){
    const clickedButton = event.target;
    var num = parseInt(clickedButton.textContent);
    typedNums.push(num);
    console.log(typedNums);
});

/**
 * Delete
 */



/**
 * Display 
 * 
 * - keeps protocol of the buttons that were pressed
 */
 function calculation() {

 }



/**
 * numPadClickHandler
 * 
 * - processes information, passed from numPad-Eventlistener 
 * @param event
 */
// function numPadClickHandler(event) {
//     // console.log(event.target);
//     const clickedButton = event.target;
//     var num = parseInt(clickedButton.textContent);
//     console.log(num);
//     typedNums.push(num);
// }



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