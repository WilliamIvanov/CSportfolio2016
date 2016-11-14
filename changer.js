// Creates variables and saves DOM elements to each
var colorValue = document.getElementById("colorValue");
var colorButton = document.getElementById("colorButton");

// Sets background color to value inputed by us when button is clicked
colorButton.addEventListener("click", function(){
    document.body.style.backgroundColor = colorValue.value;
});