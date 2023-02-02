// using "use strict" to restrict when declaring a variable
"use strict";

// function that counts all digits
function countAllDigits() {
    // stores the user input in the variable num
    let num = document.getElementById("numInput").value;
    // removes any whitespace contained in the variable
    num = removeWhitespace(num);
    // declaring a default value of 0
    let counter = 0;

    // iterates the digits
    for(let x of num) {
        // increments the counter
        counter++;
    }
    // it will display the counted digits
    document.getElementById("pOutput").innerHTML = "No. of Digits: " + counter;
}

// function that counts all even digits
function countAllEvenDigits() {
    // stores the user input in the variable num
    let num = document.getElementById("numInput").value;
    // removes any whitespace contained in the variable
    num = removeWhitespace(num);
    // declaring a default value of 0
    let evenCounter = 0;

    // iterates the digits
    for(let x of num) {
        // checks if the digit is divisible by 2
        if(x % 2 == 0) {
            // increments the counter
            evenCounter++;
        }
    }
    // it will display the counted even digits
    document.getElementById("pOutput").innerHTML = "No. of Even Digits: " + evenCounter;
}

// function that counts all odd digits
function countAllOddDigits() {
    // stores the user input in the variable num
    let num = document.getElementById("numInput").value;
    // removes any whitespace contained in the variable
    num = removeWhitespace(num);
    // declaring a default value of 0
    let oddCounter = 0;

    // iterates the digits
    for(let x of num) {
        // checks if the digit is not divisible by 2
        if(x % 2 != 0) {
            // increments the counter
            oddCounter++;
        }
    }
    // it will display the counted odd digits
    document.getElementById("pOutput").innerHTML = "No. of Odd Digits: " + oddCounter;
}

// function that displays the most occurring digits and their number of times it occurred
function mostOccurringDigit() {
    // stores the user input in the variable num
    let num = document.getElementById("numInput").value;
    // removes any whitespace contained in the variable
    num = removeWhitespace(num);
    // declaring default values of 0
    let digit = 0;
    let counter = 0;

    // iterates the digits
    for(let x of num) {
        // stores the digit to the tempDigit and sets the counter to 0
        let tempDigit = x;
        let tempCounter = 0;

        // iterates the digits
        for(let y of num) {
            // checks if the digit is equal to the temporary stored digit
            if(y == tempDigit) {
                // increments the counter
                tempCounter++;
            }
        }
        
        // checks if the temporary counter is greater than the counter
        if(tempCounter > counter) {
            // stores the temporary variables to the digit and counter variables
            digit = tempDigit;
            counter = tempCounter;
        }
    }

    // it will display the most occuring digit and the number of times it occurred
    document.getElementById("pOutput").innerHTML = "Most Occurring Digit: " + digit
     + "<br>" +"No. of Times: " + counter;
}

// function that finds a digit in the text field
function findDigit() {
    // stores the user input in the variable num
    let num = document.getElementById("numInput").value;
    // removes any whitespace contained in the variable
    num = removeWhitespace(num);
    // declaring a default value of false;
    let isFound = false;

    // forcing the user for input
    while(true) {
        // prompt dialog for user input
        let input = prompt('Enter a digit');
        // removes any whitespace contained in the variable
        input = removeWhitespace(input);
        
        //checks if the input is blank
        if(input == "") {
            alert('Enter a digit!');
        } else {
            // if the input is not null since when clicking cancel it returns null
            if(input != null) {
                // iterates the digits
                for(let x of num) {
                    // checks if the x is equal to the value given by the user
                    if(x == input) {
                        // sets the isFound to true and breaks the loop
                        isFound = true;
                        break;
                    }
                }  
                // if isFound is true, it will output that it exist
                // if it is false, it will output that it does not exist
                if(isFound) {
                    document.getElementById("pOutput").innerHTML = "The digit exist!";
                } else {
                    document.getElementById("pOutput").innerHTML = "The digit does not exist!";
                }
                // breaks the loop
                break;
            } else {
                // if the user clicks the cancel
                // breaks the loop
                break;
            }
        }
    }
}

// function that clears the text field and the p tag with the id of pOutput
function clearFields() {
    // clears the <p> with the id of "pOutput" and the text field
    document.getElementById("numInput").value = "";
    document.getElementById("pOutput").innerHTML = "";
}

// function that removes whitespace
function removeWhitespace(text) {
    return text.replace(/\s/g, '');
}
