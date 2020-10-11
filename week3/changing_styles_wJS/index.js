const body = document.getElementById("body");

let h2 = document.createElement("h2");
h2.style.fontSize = "20px"
    h2.style.fontWeight = "lighter"
    h2.style.fontFamily = "sans-serif"
    h2.style.color = "cornflowerblue"

h2.innerText = "Pizza";

body.appendChild(h2);

for(let i = 0; i < 4; i++) {
    const h2 = document.createElement("h2");
    h2.innerText = "Pizza";
    h2.style.fontSize = "20px"
    h2.style.fontWeight = "lighter"
    h2.style.fontFamily = "sans-serif"
    h2.style.color = "cornflowerblue"
    body.appendChild(h2);
  }