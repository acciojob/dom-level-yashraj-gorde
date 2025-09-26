//your JS code here. If required.
//your JS code here. If required.
// Find the element with id="level"
const target = document.getElementById("level");

let level = 0;
let current = target;

// Traverse upwards until no parent left
while (current) {
  level++;
  current = current.parentElement;
}

// Show the result
alert("The level of the element is: " + level);