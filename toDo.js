var addElementBtn = document.getElementById("addElementBtn");
var toDoInput = document.getElementById("toDoInput");
var list = document.getElementById("list");

addElementBtn.addEventListener("click", function(){
    
    //create a div
    var listItemDiv = document.createElement("div");
    //give it a class and id of "listItemDiv"
    listItemDiv.setAttribute("class","listItemDiv");
    listItemDiv.setAttribute("id","listItemDiv");
    //put the div it in the to do list
    list.appendChild(listItemDiv);
    
    //create a p element
    var listItemText = document.createElement("p");
    //give it a class and id of "listItemText"
    listItemText.setAttribute("class","listItemText");
    listItemText.setAttribute("id","listItemText");
    //write the text from the input box into the p
    listItemText.innerHTML = toDoInput.value;
    //put the p within the listItemDiv
    listItemDiv.appendChild(listItemText);
    
    //create an image
    var listItemDeleteButton = document.createElement("img");
    //make the image be the right size and have the right image
    listItemDeleteButton.setAttribute("src","RedX.png");
    listItemDeleteButton.setAttribute("height","24px");
    listItemDeleteButton.setAttribute("width","24px");
    // this line didn't work:   listItemDeleteButton.setAttribute("float","right");
    //so I used the next line instead:
    listItemDeleteButton.setAttribute("style","float: right;");
    //put the image in the list item div, after the p
    listItemText.appendChild(listItemDeleteButton);
    
    listItemDeleteButton.addEventListener("click", function(){
        listItemDeleteButton.parentNode.parentNode.removeChild(listItemDeleteButton.parentNode);
    })
    
    var hasStrikethrough = false;
    listItemText.addEventListener("click", function(evt){
        if(hasStrikethrough==false)
            evt.target.style.textDecoration="line-through";
        else
            evt.target.style.textDecoration="none";
        hasStrikethrough = !hasStrikethrough;
    })
})