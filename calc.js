// JavaScript File
//this is the button.//
var button = document.getElementById("submitButton");
//first number of the equation//
var input1 = document.getElementById('input1');
//the second number of the equation//
var input2 = document.getElementById('input2');
//this is the final output//
var answer;
var display = document.getElementById('display');
var dropdown = document.getElementById("dropdown");

button.addEventListener("click", doMath);
//this is what does the math 
function doMath() {
    if (dropdown.value == "+"){
        answer = parseInt(input1.value) + parseInt(input2.value);
        display.innerHTML = answer;
    }
    if (dropdown.value == "-"){
        answer = parseInt(input1.value) - parseInt(input2.value);
        display.innerHTML = answer;
    }
    if (dropdown.value == "x"){
         answer = parseInt(input1.value) * parseInt(input2.value);
        display.innerHTML = answer;
    }
    //this is the divide functioj
    if (dropdown.value == "/"){
        answer = parseInt(input1.value) / parseInt(input2.value);
        display.innerHTML = answer;
    }
    //this is the something
    if (dropdown.value == "%"){
        answer = parseInt(input1.value) % parseInt(input2.value);
        display.innerHTML = answer;
    } 
    //this the square root function 
    if (dropdown.value == "sqrt"){
        answer = Math.sqrt(parseInt(input2.value));
        display.innerHTML = answer;
    }
}