function getMousePos(e) {
    return { x: e.clientX, y: e.clientY };
}
document.onmousemove = function (e) {
    var mousecoords = getMousePos(e);
    // console.log(mousecoords.x); console.log(mousecoords.y);
    let h1 = document.getElementsByTagName("h1")[0]
    h1.innerHTML = `${mousecoords.x} and ${mousecoords.y}`
};