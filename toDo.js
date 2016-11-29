var addElementBtn = document.getElementById("addElementBtn");
var toDoInput = document.getElementById("toDoInput");
var list = document.getElementById("list");

addElementBtn.addEventListener("click", function(){
    //create a div
    var listItemDiv = document.createElement("div");
    //give it a class and id of "listItemDiv"
    listItemDiv.setAttribute("class","listItemDiv");
    listItemDiv.setAttribute("id","listItemDiv");
    //put it in the to do list
    list.appendChild(listItemDiv);
    //create a p element
    var listItemText = document.createElement("p");
    //give it a class and id of "listItemText"
    listItemText.setAttribute("class","listItemText");
    listItemText.setAttribute("id","listItemText");
    //write the text from the input box into the p
    listItemText.innerHTML = toDoInput.text;
    //put the p within the listItemDiv
    listItemDiv.appendChild(listItemText);
})