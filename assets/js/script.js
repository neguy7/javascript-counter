const heading = document.querySelector("h1");

// counter element 
const counterEl = document.createElement("div");
counterEl.classList.add("counter");
heading.after(counterEl);

// subtract button
const subtract = document.createElement("button");
subtract.setAttribute("title", "subtract one");
counterEl.after(subtract);

const subtractIcon = document.createElement("i");
subtractIcon.classList.add("fa-solid", "fa-minus");
subtract.append(subtractIcon);

// reset button
const reset = document.createElement("button");
reset.classList.add("reset");
reset.setAttribute("title", "Reset");
reset.textContent = "Reset";
subtract.after(reset);

// add button
const add = document.createElement("button");
add.setAttribute("title", "add one");
reset.after(add);

const addIcon = document.createElement("i");
addIcon.classList.add("fa-solid", "fa-plus");
add.append(addIcon);

// counter to 0
let counter = 0;
counterEl.textContent = counter;

// event listeners 
add.addEventListener("click", addOne);
subtract.addEventListener("click", subtractOne);
reset.addEventListener("click", resetCounter);

// add function 
function addOne() {
  counter++;
  counterEl.textContent = counter;
}

// subtract function
function subtractOne() {
  if (counter === 0) {
    return;
  }
  counter--;
  counterEl.textContent = counter;
}

// Reset
function resetCounter() {
  counter = 0;
  counterEl.textContent = counter;
}
