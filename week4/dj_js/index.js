const body = document.getElementById("body");

document.getElementById('box').onDblClick = changeColor;   

function changeColor() {
    document.getElementById("box").style.backgroundColor = "green";
}
document.getElementById("box").addEventListener("mouseover", mouseOver);

function mouseOver() {
    document.getElementById("box").style.backgroundColor = "blue";
}
document.getElementById("box").addEventListener("mouseout", mouseOut);

function mouseOut() {
    document.getElementById("box").style.backgroundColor = "yellow";
}

document.getElementById("box").addEventListener("mousedown", mouseDown);

function mouseDown() {
    document.getElementById("box").style.backgroundColor = "red";
}

function myFunction() {
    document.getElementById("body").style.backgroundColor = "orange";
  }
  window.addEventListener("wheel", myFunction);

  window.addEventListener('wheel', function(event) {
	switch (event.keyCode) {
      case 82:
        body.backgroundColor = "orange"
        break;
    }
});