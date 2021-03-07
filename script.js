//string=text inside of ""
var input = document.querySelector("input");
var button = document.querySelector("button");
var ul = document.querySelector("ul");

button.addEventListener("click", function(event) {
    event.preventDefault();
    console.log(input.value);
    renderToDo(input.value);
});
function renderToDo(todo) { 
   var li = document.createElement("li");
   li.innerText = todo;
   ul.appendChild(li);
   input.value = "";
};








