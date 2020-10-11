console.log("test");
const body = document.getElementById("body");
const nav = document.createElement("nav");

const ul = document.createElement("ul");

const linkOne = document.createElement("li");
const linkTwo = document.createElement("li");
const linkThree = document.createElement("li");

const aOne = document.createElement("a");
const aTwo = document.createElement("a");
const aThree = document.createElement("a");

body.appendChild(nav)

nav.appendChild(ul)

ul.appendChild(linkOne)
ul.appendChild(linkTwo)
ul.appendChild(linkThree)

linkOne.appendChild(aOne)
linkTwo.appendChild(aTwo)
linkThree.appendChild(aThree)

aOne.innerText = "About";
aTwo.innerText = "Contact";
aThree.innerText = "Home";


let heading = document.createElement("h1");

heading.innerText = "All About Plants";

body.appendChild(heading);

let p = document.createElement("p");

p.innerText = "These are my top three favorite plants:";

body.appendChild(p);

let li = document.createElement("li");
let li2 = document.createElement("li");
let li3 = document.createElement("li");

let ol = document.createElement("ol");

li.innerText = "String of Hearts";
li2.innerText = "Purple Passion";
li3.innerText = "Prince of Orange";

ol.appendChild(li);
ol.appendChild(li2);
ol.appendChild(li3);

body.appendChild(ol);

let footer= document.createElement("footer");

footer.innerText = "Victoria 2020";

body.appendChild(footer);
