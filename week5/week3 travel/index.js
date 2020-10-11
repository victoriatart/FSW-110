const actionBtn = document.getElementById("action");
const textSection = document.querySelector(".text-output");
const firstName = document.getElementById("first-name");
const lastName = document.getElementById("last-name");
const age = document.getElementById("age");
const gender = document.getElementById("gender");
const locations = document.getElementById("locations");
const checkbox = document.getElementById("checkbox");

//Form
const form = document.getElementById("form");

//Console functionality
form.addEventListener("submit", function (event) {
  
  let message = `First Name: ${firstName.value} \n Last Name: ${lastName.value}`;
  let message = `Age: ${age.value} \n 
  alert(message);

  event.preventDefault();
});