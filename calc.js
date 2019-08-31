
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
 * Delete / RESET
 * 
 * (1) check, which function-button was pressed
 * (2) switch-statement decides, which of 8 cases
 *     will be handled
 */
basicFunct.addEventListener("click", (event) => {
    console.log(`Pressed key: ${event.target.textContent}`);
    switch (event.target.textContent) {
        case ("DEL"):
            deleteLast();
            break;
        case ("AC"):
            deleteAll();
            break;
        case ("x"):
            if (true)
            typedNums.push("x");
            console.log(typedNums);
            break;
        case ('&divide'):
            typedNums.push('&divide');
            console.log(typedNums);
            break;
        case ("+"):
            typedNums.push("+");
            console.log(typedNums);
            break;
        case ("-"):
                typedNums.push("-");
                console.log(typedNums);
            break;
        case ("ANS"):
                alert("not implemented yet");
            break;
        case ("="):
                typedNums.push("=");
                console.log(typedNums);
    }
});

// Reset calculator
function deleteAll() {
    console.log(`Pressed key: ${event.target.textContent}`);
    typedNums.length = 0;
}
// Delete 
function deleteLast() {
    typedNums.pop();
    console.log(`Array: ${typedNums}`);
}
// no same operations twice




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