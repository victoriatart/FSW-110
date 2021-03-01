// The "submit" event refreshes your browser by default
// use "e.preventDefault()" in the first line of your callback function to prevent this
// remember to pass "e" into the callback function
let form = document.getElementById('submit-me')
form.addEventListener("submit", (e) => {
    e.preventDefault()
    console.log(form)
});
let name = document.getElementById("name")
name.name = "user_name"
name.id = "first-name"