//Creates variables for each element and gets user input for numbers and operation
var num1 = document.getElementById("firstNumber");
var dropdown = document.getElementById("operator");
var num2 = document.getElementById("secondNumber");
var calculate = document.getElementById("calculate");
var answer;
//Event listener executes the function when the user clicks on the "Calculate" button
calculate.addEventListener("click", function(){
//var operator determines which operation is selected
    var operator = dropdown.value;
//It is necessary to use parseInt(var.value) to use the numerical value, instead
//of the string value. Without it, we would be concatenating, not adding
//Depending on which operation was selected, this if else statment calculates the
//answer and prints it within a paragraph tag
    if(operator==="1"){
//This runs if addition was selected
//The next line gives var answer a value of the sum of the two inputs
        answer=parseInt(num1.value) + parseInt(num2.value);
//If the answer is too large or too small for my calculator, it will have a value of +- infinity
//This if statment prevents the calcultor from saying that the answer is infinity, which is wrong
        if(answer===-Infinity||answer===Infinity)
            document.getElementById("calcOutput").innerHTML = "The answer is too big or too small. This calculator can only calculate answers under 1.897693134862315E+308 and over -1.897693134862315E+308.";
//The next line prints the answer in the paragraph element with an id of calcOutput
        else
            document.getElementById("calcOutput").innerHTML = "&emsp;" + parseInt(num1.value)+" + "+parseInt(num2.value)+" = "+answer;
    }else if(operator==2){
//This runs if subtraction was selected
//The next line gives var answer a value of the diference of the two inputs
        answer=parseInt(num1.value) - parseInt(num2.value);
//Same if else statment as on lines 19-25
        if(answer===-Infinity||answer===Infinity)
            document.getElementById("calcOutput").innerHTML = "The answer is too big or too small. This calculator can only calculate answers under 1.897693134862315E+308 and over -1.897693134862315E+308.";//The next line prints the answer in the paragraph element with an id of calcOutput
//The next line prints the answer in the paragraph element with an id of calcOutput
        else
            document.getElementById("calcOutput").innerHTML = "&emsp;" + parseInt(num1.value)+" - "+parseInt(num2.value)+" = "+answer;
    }else if(operator==3){
//This runs if division was selected
//The next line gives var answer a value of the quotient of the two inputs
        answer=parseInt(num1.value) / parseInt(num2.value);
//Same if else statment as on lines 19-25
        if(answer===-Infinity||answer===Infinity)
            document.getElementById("calcOutput").innerHTML = "The answer is too big or too small. This calculator can only calculate answers under 1.897693134862315E+308 and over -1.897693134862315E+308.";//The next line prints the answer in the paragraph element with an id of calcOutput
//The next line prints the answer in the paragraph element with an id of calcOutput
        else
            document.getElementById("calcOutput").innerHTML = "&emsp;" + parseInt(num1.value)+" / "+parseInt(num2.value)+" = "+answer;
    }else if(operator==4){
//This runs if multiplication was selected
//The next line gives var answer a value of the product of the two inputs
        answer=parseInt(num1.value) * parseInt(num2.value);
//Same if else statment as on lines 19-25
        if(answer===-Infinity||answer===Infinity)
            document.getElementById("calcOutput").innerHTML = "The answer is too big or too small. This calculator can only calculate answers under 1.897693134862315E+308 and over -1.897693134862315E+308.";//The next line prints the answer in the paragraph element with an id of calcOutput
//The next line prints the answer in the paragraph element with an id of calcOutput
        else
            document.getElementById("calcOutput").innerHTML = "&emsp;" + parseInt(num1.value)+" * "+parseInt(num2.value)+" = "+answer;
    }else if(operator==5){
//This runs if exponents were selected
//The next 2 lines give var answer a value of first number to the power of the second number
//I could also solve this using a four loop, but I that froze my browser when I put in large exponents
        answer=Math.pow(parseInt(num1.value), parseInt(num2.value));
//Same if else statment as on lines 19-25
        if(answer===-Infinity||answer===Infinity)
            document.getElementById("calcOutput").innerHTML = "The answer is too big or too small. This calculator can only calculate answers under 1.897693134862315E+308 and over -1.897693134862315E+308.";//The next line prints the answer in the paragraph element with an id of calcOutput
//The next line prints the answer in the paragraph element with an id of calcOutput
        else
            document.getElementById("calcOutput").innerHTML = "&emsp;" + parseInt(num1.value)+"^"+parseInt(num2.value)+" = "+answer;
    }else{
//This runs if the remainder (modulo) was selected
//The net line gives var answer the value of the remainder of num1 divided by num2
        answer=parseInt(num1.value) % parseInt(num2.value);
//Same if else statment as on lines 19-25
        if(answer===-Infinity||answer===Infinity)
            document.getElementById("calcOutput").innerHTML = "The answer is too big or too small. This calculator can only calculate answers under 1.897693134862315E+308 and over -1.897693134862315E+308.";//The next line prints the answer in the paragraph element with an id of calcOutput
//The next line prints the answer in the paragraph element with an id of calcOutput
        else
            document.getElementById("calcOutput").innerHTML = "&emsp;" + parseInt(num1.value)+" % "+parseInt(num2.value)+" = "+answer;;
    }
})
