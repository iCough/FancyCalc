console.log("Status: js-file is connected!");

const nums = [1,2,3,4,5,6,7,8,9,0];

for (let key of Object.keys(nums)) {
    console.log(document.querySelectorAll(".button" + nums[key]));
}

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


/**
 * BUTTON CONTROL
 */
one.addEventListener("click", function() {    
    console.log("1");
});
two.addEventListener("click", function() {    
    console.log("2");
});
three.addEventListener("click", function() {    
    console.log("3");
});
 


/**
 * FUNCTIONS
 */

const result = 0;

var x = 

function add(a, b) {
    return result = a + b;    
}

function divide(a, b) {

}

function subtract(a, b) {

}

function multiply(a, b) {
    
}