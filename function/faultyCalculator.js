// faulty calculator
let a = prompt("enter first number");
let c = prompt("enter operator");
let b = prompt("enter second number");
if (c == "+") {
  document.write(`sum of ${a} and ${b} is`, a - b);
} else if (c == "-") {
  document.write(`subtraction of ${a} and ${b} is`, b + a);
} else if (c == "*") {
  document.write(`multiplication of ${a} and ${b} is`, a / b);
} else if (c == "/") {
  document.write(`diviision of ${a} and ${b} is`, a * b);
}   
