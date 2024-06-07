// Exercise #1:
// when the user clicks the 'copy' button, copy the user input to the output area
let userInput = document.querySelector("#userInput1");
let copy = document.querySelector("#copy");
let output = document.querySelector(".output");
// fetch JavaScript objects representing specific elements in the DOM
// add an event listener on the target element
copy.addEventListener("click", handleClick);

// callback function to handle event
function handleClick(event) {
  output.textContent = userInput.value;
}
// Exercise #2:
// when the user enters input text, copy the user input to the output area
let userInput2 = document.querySelector("#userInput2");

// fetch JavaScript objects representing specific elements in the DOM
userInput2.addEventListener("input", handleInput);

let inputEventExample = document.querySelector("#inputEventExample");
let div = document.createElement("div");
div.setAttribute("class", "output");
inputEventExample.append(div);
// add an event listener on the target element

// callback function to handle event
function handleInput(event) {
  console.log(userInput2.value);
  div.textContent = userInput2.value;
}
