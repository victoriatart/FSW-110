const body = document.getElementById("body");

let h1 = document.createElement("h1");

h1.innerText = "Hello World";

body.appendChild(h1);

for(let i = 0; i < 10; i++) {
    const h1 = document.createElement("h1");
    h1.innerText = "Hello World";
    body.appendChild(h1);
  }