// Part 1: JavaScript Basics
// Variables and Data Types
let name = "Jung Hosoek";
let age = 28;
let isStudent = true;
let hobbies = ["reading", "coding", "gaming"];
let person = { firstName: "Mingyu", lastName: "Kim", age: 26 };

// Logging values and types to the console
console.log(`Name: ${name} (Type: ${typeof name})`);
console.log(`Age: ${age} (Type: ${typeof age})`);
console.log(`Is student: ${isStudent} (Type: ${typeof isStudent})`);
console.log(`Hobbies: ${hobbies} (Type: ${typeof hobbies})`);
console.log(`Person: ${JSON.stringify(person)} (Type: ${typeof person})`);

// Operators: Simple Calculator
function simpleCalculator() {
  let num1 = parseFloat(prompt("Enter the first number:"));
  let num2 = parseFloat(prompt("Enter the second number:"));
  let operation = prompt("Choose an operation (+, -, *, /):");

  if (isNaN(num1) || isNaN(num2)) {
    alert("Please enter valid numbers!");
    return;
  }

  let result;
  switch (operation) {
    case "+":
      result = num1 + num2;
      break;
    case "-":
      result = num1 - num2;
      break;
    case "*":
      result = num1 * num2;
      break;
    case "/":
      result = num2 !== 0 ? num1 / num2 : "Error: Division by zero";
      break;
    default:
      result = "Invalid operation!";
  }

  alert(`Result: ${result}`);
}
simpleCalculator();

// Functions: Greet User
function greetUser(name) {
  return `Hello, ${name}! Welcome to JavaScript.`;
}
document.getElementById("dynamic-content").innerHTML = `<p>${greetUser("Ailee")}</p>`;

// Part 2: JavaScript Control Structures
// If Statements: Voting Eligibility
let userAge = parseInt(prompt("Enter your age:"));
if (userAge >= 18) {
  document.getElementById("dynamic-content").innerHTML += `<p>You are eligible to vote.</p>`;
} else {
  document.getElementById("dynamic-content").innerHTML += `<p>You are not eligible to vote yet.</p>`;
}

// Loops: Display Numbers
let numberList = document.getElementById("number-list");
for (let i = 1; i <= 10; i++) {
  numberList.innerHTML += `<li>${i}</li>`;
}

// Part 3: Introduction to the DOM
// Selecting and Modifying HTML Elements
document.querySelector("h1").innerText = "JavaScript in Action!";
document.getElementById("dynamic-content").innerHTML += `<p>This content was added dynamically using JavaScript.</p>`;
