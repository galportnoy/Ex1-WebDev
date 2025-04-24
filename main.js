/**
 * Students:
 * Jonas Elkayam 209951532
 * Gal Portnoy 208450841
 */
const numberToConvert = document.getElementById("numberToConvert");
const resultText = document.getElementById("Result-text");
const convertBtn = document.getElementById("covert-btn");

const fromButtons = document.querySelectorAll(".from-button");
const toButtons = document.querySelectorAll(".to-button");

let fromBase = 10; // defualt base
let toBase = 2; // defualt base

// base from top buttons
fromButtons.forEach(button => {
    button.addEventListener('click', () => {
        fromButtons.forEach(btn => btn.classList.remove("chosen"));
        button.classList.add("chosen");
        fromBase = Number(button.dataset.base);
    });
});

// base from bottom buttons
toButtons.forEach(button => {
    button.addEventListener('click', () => {
        toButtons.forEach(btn => btn.classList.remove("chosen"));
        button.classList.add("chosen");
        toBase = Number(button.dataset.base);
    });
});

// convert the number
convertBtn.addEventListener('click', function () {
    const inputVal = numberToConvert.value;
    if (!isValid(inputVal, fromBase)) {
        alert("Invalid input for selected base!");
        numberToConvert.value = "";
        resultText.innerHTML = "Result: ";
        return;
    }

    const result = convertNumber(inputVal, fromBase, toBase);

    resultText.innerHTML = "Result: "+ inputVal+"("+fromBase+") = " +result + "("+toBase+")";
    numberToConvert.value = ""; // clear the text
});


// check if the input is valid and not empty
function isValid(input, base) {
    if (input === '') {
        return false;   
    }

    // dictionary to regular expression of multiple bases
    const regex = {2: /^[0-1]+$/ , 8: /^[0-7]+$/, 10: /^[0-9]+$/ ,16: /^[0-9A-Fa-f]+$/};
    return regex[base].test(input);
}

function convertNumber(input, from, to) {
    return parseInt(input, from).toString(toBase).toUpperCase();
}