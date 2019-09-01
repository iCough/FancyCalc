
var screen = document.getElementById("screen");
const numPad = document.getElementById('numpad');
const basicFunct = document.getElementById("basicFunctions")

var typedNums = [];

/**
 * Numpad-Clicks
 */
numPad.addEventListener("click", (event) => {
    const clickedButton = event.target;
    var num = parseInt(clickedButton.textContent);
    typedNums.push(num);
    console.log(typedNums);
});

/**
 * Protocol of pressed buttons
 * 
 * (1) check, which function-button was pressed
 * (2) switch-statement decides, which of 8 cases
 *     will be handled
 */
basicFunct.addEventListener("click", (event) => {
    console.log(`Pressed key: ${event.target.textContent}`);
    switch (event.target.textContent) {
        case ("DEL"):               // delete last entry
            typedNums.pop();
            break;
        case ("AC"):                // delete everything
            typedNums.length = 0;
            break;
        case ("x"):                 // multiply
            typedNums.push("x");
            console.log(typedNums);
            break;
        case ("÷"):                 // divide
            typedNums.push("÷");
            console.log(typedNums);
            break;
        case ("+"):                 // add
            typedNums.push("+");
            console.log(typedNums);
            break;
        case ("-"):                  // subtract
            typedNums.push("-");
            console.log(typedNums);
            break;
        case ("ANS"):               // use last entri(es)
            alert("not implemented yet");
            break;
        case ("="):                 // equals
            equals();
            break;
            default: 
            alert ("something went wrong!"); 
    }
});

/**
 * Compute the solution
 * 
 *  1) steps through array
 *      a. searches for x and ÷ operations
 *      b. searches for + and - operations
 *      c. if a. applies, compute the decimals around it
 **/
function equals() {
    console.log("entered 'equals'-function");
    for (let i = 0; i < typedNums; i++) {

        console.log(typedNums);
        if (typedNums[i] == "x" || typedNums[i] == "÷") {
            console.log(elem[index]);
        } else if (typedNums[i] == "+" || typedNums[i] == "-") {
            
        }
    }

    // let interim = 0;

    // typedNums.forEach(elem => {
    //     // console.log(typeof elem);
    //     // if input is a number
    //     if (elem !== NaN) {
    //         interim += elem;
    //     }
    //     // if input is not a number
    //     if (elem == NaN) {

    //     }
    // });
}

/**
 * No same operations twice
 * 
 *  - an operation will only be added once to the array
 *  - repetitions will be ignored
 */
function noOpTwice() {

}



/**
 * Display 
 * 
 * - keeps protocol of the buttons that were pressed
 */
function calculation() {

}