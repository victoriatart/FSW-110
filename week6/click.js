// make the box disapear when the user clicks it
var box = document.getElementsByClassName("red-box");
box[0].addEventListener('click', (e) => {
    e.target.style.display = "none"
})