/* Your task is to display to the user the key and key code they press.

Example of output: You've pressed the "a" key. It's key code is 65.

Wes Bos made this https://keycode.info/ for us to use as an example. */

const body = document.querySelector('body');

body.onkeydown = function (e) {
    if (!e.metaKey) {
        e.preventDefault();
    }
    let output = document.getElementById("output")
    output.innerText = `you pressed ${e.key} and its corresponding keyvalue is ${e.keyCode}`
}