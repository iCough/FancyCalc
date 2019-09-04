
const numPad = document.getElementById("numPad");
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
    console.log(`Array-Length: ${typedNums.length}`);
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
            console.log(typedNums);
            console.log(`Array-Length: ${typedNums.length}`);
            break;
        case ("AC"):                // delete everything
            typedNums.length = 0;
            console.log(typedNums);
            console.log(`Array-Length: ${typedNums.length}`);
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
 *  1) steps through array recursively, until no elements are left
 *      1.1) First Iteration:
 *          a. turns every read element into an Object
 *              a1. if Object is number
 *                      Object has attributes:
 *                      - state: open / closed;
 *                      - bool isNum: true;
 *              a2. if Object is String (operation or other symbol)
 *                      Object has attributes:
 *                      - state: open / closed;
 *                      - bool isNum: false; 
 *      1.2) Next Iteration
 *          a. Rules:
 *              a1. searches for parenthesis
 *              a2. searches for x and ÷ operations
 *              a3. searches for + and - operations
 *          b. if a1. applies 
 *              b1. consider all involved elements and save solution
 *              b2. give involved element-Objects keyValue "closed"
 *              b3. repeat 1.2)
 *          c. if a2. applies 
 *              c1. consider all involved elements and save solution
 *              c2. give involved element-Objects keyValue "closed"
 *              c3. repeat 1.2)
 *          d. if a3. applies
 *              d1. consider all involved elements and save solution
 *              d2. give involved element-Objects keyValue "closed"
 *              d3. repeat 1.2)
 * 
 **/
function equals() {

    var multiInterim = 0;

    console.log("entered 'equals'-function");
    for (let i = 0; i < typedNums.length; i++) {

        // console.log(typedNums);
        if (typedNums[i] === "x") {
            // console.log("* or / ==>  " + typedNums[i]);
            multiInterim = typedNums[i-1] * typedNums[i+1];
            console.log(multiInterim);
        }

        if (typedNums[i] === "÷") {

        }

        if (typedNums[i] === "+") {

        }
        
        if (typedNums[i] == "-") {
    
        }
    }

    /**
     * 
     */
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