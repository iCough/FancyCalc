

const numPad = document.getElementById('numpad');
numPad.addEventListener("click", numPadClickHandler());



function numPadClickHandler(event) {
    const clickedButton = event.target;
    const num = parseInt(clickedButton.textContent);
    console.log(num);
    return num;
}

// function pressedNumber() {

// for (let number of nums) {

//     const pressedNum = document.querySelector(".button" + number.innerHTML).innerHTML;

//     // if pressed button is the same number as the one iterated through
//     // then print that number
//     if (pressedNum === number) {
//         console.log(pressedNum);
//     }
// }
// }

/** 
 * Eine for-loop machen, in der der gedrückte button mit der 
 * jeweiligen Zahl abgeglichen wird.
*/
const one = document.querySelector(".button1");
const two = document.querySelector(".button2");
const three = document.querySelector(".button3");
const four = document.querySelector(".button4");
const five = document.querySelector(".button5");
const six = document.querySelector(".button6");
const seven = document.querySelector(".button7");
const eigth = document.querySelector(".button8");
const nine = document.querySelector(".button9");
const zero = document.querySelector(".button0");



function add(a, b) {
    return result = a + b;
}

function divide(a, b) {

}

function subtract(a, b) {

}

function multiply(a, b) {

}