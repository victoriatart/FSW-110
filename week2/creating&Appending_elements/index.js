const body = document.getElementById("body");

let heading = document.createElement("h1");

heading.innerText = "Welcome to my JS site";

body.appendChild(heading);

let p = document.createElement("p");

p.innerText = "All of this was created with Javascript";

body.appendChild(p);

let li = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");

let ol = document.createElement("ol");

li.innerText = "Chicken Wings";
li2.innerText = "Pizza";
li3.innerText = "Chopped Cheese";

ol.appendChild(li);
ol.appendChild(li2);
ol.appendChild(li3);

body.appendChild(ol);
