//Creates variables and gets user input for numbers and operation
var num1 = document.getElementById("firstNumber");
var dropdown = document.getElementById("operator");
var num2 = document.getElementById("secondNumber");
var calculate = document.getElementById("calculate");
var answer;
//var operation = operator.options[operation.selectedIndex].text;

calculate.addEventListener("click", function(){
    var operator = dropdown.value;
    if(operator==="1"){
        answer=parseInt(num1.value) + parseInt(num2.value);
        document.getElementById("calcOutput").innerHTML = answer;

    }else if(operator==2){
        answer=parseInt(num1.value) - parseInt(num2.value);
        document.getElementById("calcOutput").innerHTML = answer;
    }else if(operator==3){
        answer=parseInt(num1.value) / parseInt(num2.value);
        document.getElementById("calcOutput").innerHTML = answer;
    }else if(operator==4){
        answer=parseInt(num1.value) * parseInt(num2.value);
        document.getElementById("calcOutput").innerHTML = answer;
    }else if(operator==5){
        answer=1;
        for(var i=1;i<=parseInt(num2.value);i++)
            answer*=parseInt(num1.value);
        document.getElementById("calcOutput").innerHTML = answer;
    }else{
        answer=parseInt(num1.value) % parseInt(num2.value);
        document.getElementById("calcOutput").innerHTML = answer;
    }
})
